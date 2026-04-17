const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Device API key middleware
const requireDeviceApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const expectedKey = process.env.DEVICE_API_KEY;

  if (!expectedKey || apiKey !== expectedKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// Register device (ESP32 calls this)
router.post('/register-device', requireDeviceApiKey, async (req, res) => {
  const { hardware_id } = req.body;
  
  if (!hardware_id) {
    return res.status(400).json({ error: 'hardware_id is required' });
  }
  
  try {
    const { data: existingDevice } = await supabaseAdmin
      .from('devices')
      .select('device_uuid')
      .eq('hardware_id', hardware_id)
      .single();
    
    if (existingDevice) {
      return res.json({
        device_uuid: existingDevice.device_uuid,
        claim_url: `${process.env.APP_URL}/claim/${existingDevice.device_uuid}`,
        already_registered: true
      });
    }
    
    const crypto = require('crypto');
    const device_uuid = crypto.randomUUID();
    
    const { error: insertError } = await supabaseAdmin
      .from('devices')
      .insert({
        hardware_id,
        device_uuid,
        firmware_version: '1.0.0'
      });
    
    if (insertError) throw insertError;
    
    res.json({
      device_uuid,
      claim_url: `${process.env.APP_URL}/claim/${device_uuid}`,
      already_registered: false
    });
  } catch (err) {
    console.error('Register device error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get command (ESP32 polls this)
router.get('/get-command', requireDeviceApiKey, async (req, res) => {
  const deviceUuid = req.headers['x-device-uuid'];
  
  if (!deviceUuid) {
    return res.status(400).json({ error: 'x-device-uuid header is required' });
  }
  
  try {
    const { data: device, error } = await supabaseAdmin
      .from('devices')
      .select('relay_state, locked')
      .eq('device_uuid', deviceUuid)
      .single();
    
    if (error || !device) {
      return res.status(404).json({ error: 'Device not found' });
    }
    
    const command = device.locked ? 'OFF' : (device.relay_state ? 'ON' : 'OFF');
    
    res.json({ command, locked: device.locked });
  } catch (err) {
    console.error('Get command error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update state (ESP32 calls this)
router.post('/update-state', requireDeviceApiKey, async (req, res) => {
  const deviceUuid = req.headers['x-device-uuid'];
  const { state, firmware_version } = req.body;
  
  if (!deviceUuid) {
    return res.status(400).json({ error: 'x-device-uuid header is required' });
  }
  
  if (typeof state !== 'boolean') {
    return res.status(400).json({ error: 'state (boolean) is required' });
  }
  
  try {
    const updateData = {
      relay_state: state,
      last_seen: new Date().toISOString()
    };
    
    if (firmware_version) {
      const semverRegex = /^\d+\.\d+\.\d+$/;
      if (typeof firmware_version === 'string' && semverRegex.test(firmware_version)) {
        updateData.firmware_version = firmware_version;
      } else {
        return res.status(400).json({ error: 'Invalid firmware_version format (expected x.y.z)' });
      }
    }
    
    const { error } = await supabaseAdmin
      .from('devices')
      .update(updateData)
      .eq('device_uuid', deviceUuid);
    
    if (error) throw error;
    
    res.json({ ok: true });
  } catch (err) {
    console.error('Update state error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get firmware
router.get('/get-firmware', requireDeviceApiKey, async (req, res) => {
  try {
    const { data: firmware, error } = await supabaseAdmin
      .from('firmware')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    if (error || !firmware) {
      return res.json({
        version: '1.0.0',
        url: null,
        changelog: 'Initial version',
        message: 'No firmware updates available'
      });
    }
    
    res.json({
      version: firmware.version,
      url: firmware.url,
      changelog: firmware.changelog,
      created_at: firmware.created_at
    });
  } catch (err) {
    console.error('Get firmware error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update profile (authenticated users)
router.post('/update-profile', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const { full_name } = req.body;
  
  try {
    const { error } = await supabaseAdmin
      .from('profiles')
      .update({ full_name, updated_at: new Date().toISOString() })
      .eq('user_id', req.user.id);
    
    if (error) throw error;
    
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

module.exports = router;
