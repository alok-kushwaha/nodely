const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');
const mqtt = require('mqtt');

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Helper: publish MQTT command (supports payload object for WiFi updates)
function publishMqttCommand(deviceUuid, command, payload = null) {
  return new Promise((resolve, reject) => {
    const mqttHost = process.env.MQTT_HOST;
    const mqttUser = process.env.MQTT_USER;
    const mqttPass = process.env.MQTT_PASS;

    if (!mqttHost || !mqttUser || !mqttPass) {
      return reject(new Error('MQTT not configured'));
    }

    const mqttUrl = `mqtts://${mqttHost}:8883`;
    const topic = `nodely/${deviceUuid}/command`;
    // Use "type" key for JSON payloads so the firmware can recognise it via doc["type"]
    const message = payload ? JSON.stringify({ type: command, ...payload }) : command;

    const timeoutId = setTimeout(() => reject(new Error('MQTT timeout')), 10000);

    const client = mqtt.connect(mqttUrl, {
      username: mqttUser,
      password: mqttPass,
      connectTimeout: 8000,
      clientId: `nodely-ejs-${Date.now()}`,
      protocolVersion: 4,
    });

    client.on('connect', () => {
      client.publish(topic, message, { qos: 1 }, (err) => {
        clearTimeout(timeoutId);
        client.end(true);
        if (err) reject(err);
        else {
          console.log(`[MQTT] Published ${command} to ${topic}`);
          resolve();
        }
      });
    });

    client.on('error', (err) => {
      clearTimeout(timeoutId);
      client.end(true);
      reject(err);
    });
  });
}

// Dashboard home
router.get('/', async (req, res) => {
  try {
    const { data: devices, error } = await supabaseAdmin
      .from('devices')
      .select('*')
      .eq('owner_id', req.user.id)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    const now = new Date();
    const onlineCount = devices?.filter(d => {
      if (!d.last_seen) return false;
      const lastSeen = new Date(d.last_seen);
      return (now - lastSeen) < 60000;
    }).length || 0;
    
    res.render('dashboard', { 
      title: 'Dashboard',
      devices: devices || [],
      onlineCount,
      totalCount: devices?.length || 0
    });
  } catch (err) {
    console.error('Dashboard error:', err);
    res.render('dashboard', { 
      title: 'Dashboard',
      devices: [],
      onlineCount: 0,
      totalCount: 0,
      error: 'Failed to load devices'
    });
  }
});

// Toggle relay
router.post('/toggle-relay/:id', async (req, res) => {
  const { id } = req.params;
  const { state } = req.body;
  
  try {
    // Verify ownership and get device_uuid
    const { data: device, error: fetchError } = await supabaseAdmin
      .from('devices')
      .select('device_uuid, locked')
      .eq('id', id)
      .eq('owner_id', req.user.id)
      .single();

    if (fetchError || !device) {
      return res.json({ success: false, error: 'Device not found' });
    }

    if (device.locked) {
      return res.json({ success: false, error: 'Device is locked' });
    }

    const { error } = await supabaseAdmin
      .from('devices')
      .update({ relay_state: state })
      .eq('id', id)
      .eq('owner_id', req.user.id);
    
    if (error) throw error;

    // Send instant MQTT command
    try {
      await publishMqttCommand(device.device_uuid, state ? 'ON' : 'OFF');
    } catch (mqttErr) {
      console.warn('MQTT publish failed (device will pick up via HTTP poll):', mqttErr.message);
    }
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// WiFi update - send new WiFi credentials to device via MQTT
router.post('/wifi-update/:id', async (req, res) => {
  const { id } = req.params;
  const { ssid, password } = req.body;

  if (!ssid || typeof ssid !== 'string' || ssid.trim().length === 0) {
    return res.json({ success: false, error: 'SSID is required' });
  }

  if (ssid.length > 32) {
    return res.json({ success: false, error: 'SSID must be 32 characters or less' });
  }

  if (password && password.length > 64) {
    return res.json({ success: false, error: 'Password must be 64 characters or less' });
  }

  try {
    // Verify ownership and get device_uuid
    const { data: device, error: fetchError } = await supabaseAdmin
      .from('devices')
      .select('device_uuid')
      .eq('id', id)
      .eq('owner_id', req.user.id)
      .single();

    if (fetchError || !device) {
      return res.json({ success: false, error: 'Device not found' });
    }

    await publishMqttCommand(device.device_uuid, 'WIFI_UPDATE', {
      ssid: ssid.trim(),
      password: password || '',
    });

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// WiFi reset - factory reset WiFi credentials on device
router.post('/wifi-reset/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { data: device, error: fetchError } = await supabaseAdmin
      .from('devices')
      .select('device_uuid')
      .eq('id', id)
      .eq('owner_id', req.user.id)
      .single();

    if (fetchError || !device) {
      return res.json({ success: false, error: 'Device not found' });
    }

    await publishMqttCommand(device.device_uuid, 'RESET_WIFI');

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Rename device
router.post('/rename/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  try {
    const { error } = await supabaseAdmin
      .from('devices')
      .update({ device_name: name })
      .eq('id', id)
      .eq('owner_id', req.user.id);
    
    if (error) throw error;
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Delete (unclaim) device
router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const { error } = await supabaseAdmin
      .from('devices')
      .update({ 
        owner_id: null, 
        claimed: false,
        device_name: null
      })
      .eq('id', id)
      .eq('owner_id', req.user.id);
    
    if (error) throw error;
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Claim device
router.post('/claim', async (req, res) => {
  const { device_uuid, device_name } = req.body;
  
  try {
    const { data: device, error: fetchError } = await supabaseAdmin
      .from('devices')
      .select('*')
      .eq('device_uuid', device_uuid)
      .single();
    
    if (fetchError || !device) {
      return res.json({ success: false, error: 'Device not found' });
    }
    
    if (device.claimed) {
      return res.json({ success: false, error: 'Device already claimed' });
    }
    
    const { error: updateError } = await supabaseAdmin
      .from('devices')
      .update({
        owner_id: req.user.id,
        claimed: true,
        device_name: device_name || `Device ${device_uuid.slice(0, 8)}`
      })
      .eq('device_uuid', device_uuid)
      .eq('claimed', false);
    
    if (updateError) throw updateError;
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

module.exports = router;
