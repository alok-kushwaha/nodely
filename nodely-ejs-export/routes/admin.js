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
    const message = payload ? JSON.stringify({ command, ...payload }) : command;

    const timeoutId = setTimeout(() => reject(new Error('MQTT timeout')), 10000);

    const client = mqtt.connect(mqttUrl, {
      username: mqttUser,
      password: mqttPass,
      connectTimeout: 8000,
      clientId: `nodely-admin-${Date.now()}`,
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

// Admin dashboard
router.get('/', async (req, res) => {
  try {
    const [devicesRes, profilesRes, rolesRes] = await Promise.all([
      supabaseAdmin.from('devices').select('*').order('created_at', { ascending: false }),
      supabaseAdmin.from('profiles').select('*'),
      supabaseAdmin.from('user_roles').select('*'),
    ]);
    
    res.render('admin/index', { 
      title: 'Admin Panel',
      devices: devicesRes.data || [],
      profiles: profilesRes.data || [],
      userRoles: rolesRes.data || [],
    });
  } catch (err) {
    res.render('admin/index', { 
      title: 'Admin Panel',
      devices: [],
      profiles: [],
      userRoles: [],
      error: 'Failed to load data'
    });
  }
});

// Firmware management
router.get('/firmware', async (req, res) => {
  try {
    const { data: firmwares } = await supabaseAdmin
      .from('firmware')
      .select('*')
      .order('created_at', { ascending: false });
    
    res.render('admin/firmware', { 
      title: 'Firmware Management',
      firmwares: firmwares || []
    });
  } catch (err) {
    res.render('admin/firmware', { 
      title: 'Firmware Management',
      firmwares: [],
      error: 'Failed to load firmware'
    });
  }
});

// Add firmware
router.post('/firmware/add', async (req, res) => {
  const { version, url, changelog } = req.body;
  
  try {
    const { error } = await supabaseAdmin
      .from('firmware')
      .insert({ version, url, changelog });
    
    if (error) throw error;
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Delete firmware
router.post('/firmware/delete/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const { error } = await supabaseAdmin
      .from('firmware')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Toggle device lock
router.post('/toggle-lock/:id', async (req, res) => {
  const { id } = req.params;
  const { locked } = req.body;
  
  try {
    // Get device_uuid for MQTT
    const { data: device, error: fetchError } = await supabaseAdmin
      .from('devices')
      .select('device_uuid')
      .eq('id', id)
      .single();

    if (fetchError || !device) {
      return res.json({ success: false, error: 'Device not found' });
    }

    const updateData = { locked };
    if (locked) {
      updateData.relay_state = false;
    }

    const { error } = await supabaseAdmin
      .from('devices')
      .update(updateData)
      .eq('id', id);
    
    if (error) throw error;

    // Send MQTT command
    try {
      await publishMqttCommand(device.device_uuid, locked ? 'LOCK' : 'UNLOCK');
    } catch (mqttErr) {
      console.warn('MQTT publish failed:', mqttErr.message);
    }
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Toggle device relay (admin)
router.post('/toggle-relay/:id', async (req, res) => {
  const { id } = req.params;
  const { state } = req.body;
  
  try {
    const { data: device, error: fetchError } = await supabaseAdmin
      .from('devices')
      .select('device_uuid, locked')
      .eq('id', id)
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
      .eq('id', id);
    
    if (error) throw error;

    try {
      await publishMqttCommand(device.device_uuid, state ? 'ON' : 'OFF');
    } catch (mqttErr) {
      console.warn('MQTT publish failed:', mqttErr.message);
    }
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// WiFi update (admin - any device)
router.post('/wifi-update/:id', async (req, res) => {
  const { id } = req.params;
  const { ssid, password } = req.body;

  if (!ssid || typeof ssid !== 'string' || ssid.trim().length === 0) {
    return res.json({ success: false, error: 'SSID is required' });
  }

  try {
    const { data: device, error: fetchError } = await supabaseAdmin
      .from('devices')
      .select('device_uuid')
      .eq('id', id)
      .single();

    if (fetchError || !device) {
      return res.json({ success: false, error: 'Device not found' });
    }

    await publishMqttCommand(device.device_uuid, 'WIFI_UPDATE', {
      wifi_ssid: ssid.trim(),
      wifi_password: password || '',
    });

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// WiFi reset (admin - any device)
router.post('/wifi-reset/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { data: device, error: fetchError } = await supabaseAdmin
      .from('devices')
      .select('device_uuid')
      .eq('id', id)
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

// Transfer device ownership
router.post('/transfer/:id', async (req, res) => {
  const { id } = req.params;
  const { new_owner_id } = req.body;
  
  try {
    const updateData = new_owner_id 
      ? { owner_id: new_owner_id, claimed: true }
      : { owner_id: null, claimed: false, device_name: null };
    
    const { error } = await supabaseAdmin
      .from('devices')
      .update(updateData)
      .eq('id', id);
    
    if (error) throw error;
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Update user profile & role
router.post('/update-user/:userId', async (req, res) => {
  const { userId } = req.params;
  const { full_name, role } = req.body;

  try {
    // Update profile
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .update({ full_name: full_name || null, updated_at: new Date().toISOString() })
      .eq('user_id', userId);

    if (profileError) throw profileError;

    // Update role if provided
    if (role) {
      const { error: roleError } = await supabaseAdmin
        .from('user_roles')
        .update({ role })
        .eq('user_id', userId);

      if (roleError) throw roleError;
    }

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// Delete user (unclaim devices, remove role & profile)
router.post('/delete-user/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Unclaim all devices
    await supabaseAdmin
      .from('devices')
      .update({ owner_id: null, claimed: false, device_name: null })
      .eq('owner_id', userId);

    // Delete role
    await supabaseAdmin
      .from('user_roles')
      .delete()
      .eq('user_id', userId);

    // Delete profile
    const { error } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('user_id', userId);

    if (error) throw error;

    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

module.exports = router;
