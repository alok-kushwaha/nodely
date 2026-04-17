import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import mqtt from 'npm:mqtt@5.10.4'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Authenticate user
    const authHeader = req.headers.get('Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    )

    // Validate the JWT and get the authenticated user.
    // In Edge Functions there is no client session, so the raw token MUST be
    // passed explicitly — getUser() without an argument always returns null.
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid authorization' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const userId = user.id

    const { device_uuid, command, wifi_ssid, wifi_password } = await req.json()

    if (!device_uuid || !command) {
      return new Response(
        JSON.stringify({ error: 'device_uuid and command are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Valid commands
    const validCommands = ['ON', 'OFF', 'LOCK', 'UNLOCK', 'WIFI_UPDATE', 'RESET_WIFI']
    if (!validCommands.includes(command)) {
      return new Response(
        JSON.stringify({ error: `Invalid command. Must be one of: ${validCommands.join(', ')}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // WIFI_UPDATE requires ssid
    if (command === 'WIFI_UPDATE') {
      if (!wifi_ssid || typeof wifi_ssid !== 'string' || wifi_ssid.trim().length === 0) {
        return new Response(
          JSON.stringify({ error: 'wifi_ssid is required for WIFI_UPDATE command' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      if (wifi_ssid.length > 32) {
        return new Response(
          JSON.stringify({ error: 'wifi_ssid must be 32 characters or less' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      if (wifi_password && wifi_password.length > 64) {
        return new Response(
          JSON.stringify({ error: 'wifi_password must be 64 characters or less' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
    }

    // Verify user owns the device (or is admin)
    const adminSupabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Check if user is admin
    const { data: isAdmin } = await adminSupabase.rpc('has_role', {
      _user_id: userId,
      _role: 'admin'
    })

    if (!isAdmin) {
      // Verify ownership
      const { data: device } = await adminSupabase
        .from('devices')
        .select('owner_id')
        .eq('device_uuid', device_uuid)
        .single()

      if (!device || device.owner_id !== userId) {
        return new Response(
          JSON.stringify({ error: 'Device not found or access denied' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      // Non-admins can't LOCK/UNLOCK
      if (command === 'LOCK' || command === 'UNLOCK') {
        return new Response(
          JSON.stringify({ error: 'Only admins can lock/unlock devices' }),
          { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
    }

    // Build MQTT payload
    let mqttPayload: string
    if (command === 'WIFI_UPDATE') {
      mqttPayload = JSON.stringify({
        type: 'WIFI_UPDATE',
        ssid: wifi_ssid.trim(),
        password: wifi_password || ''
      })
    } else {
      mqttPayload = command
    }

    // Publish via MQTT
    const mqttHost = Deno.env.get('MQTT_HOST')
    const mqttUser = Deno.env.get('MQTT_USER')
    const mqttPass = Deno.env.get('MQTT_PASS')

    if (!mqttHost || !mqttUser || !mqttPass) {
      console.error('MQTT credentials not configured')
      return new Response(
        JSON.stringify({ error: 'MQTT not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const topic = `nodely/${device_uuid}/command`

    // Connect via WebSocket (wss:// on port 8884 — supported by HiveMQ Cloud)
    const mqttUrl = `wss://${mqttHost}:8884/mqtt`

    await new Promise<void>((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error('MQTT connection timeout'))
      }, 10000)

      const client = mqtt.connect(mqttUrl, {
        username: mqttUser,
        password: mqttPass,
        connectTimeout: 8000,
        clientId: `nodely-api-${Date.now()}`,
        protocolVersion: 4,
      })

      client.on('connect', () => {
        client.publish(topic, mqttPayload, { qos: 1 }, (err: Error | undefined) => {
          clearTimeout(timeoutId)
          client.end(true)
          if (err) {
            reject(err)
          } else {
            console.log(`[MQTT] Published ${command} to ${topic}`)
            resolve()
          }
        })
      })

      client.on('error', (err: Error) => {
        clearTimeout(timeoutId)
        client.end(true)
        reject(err)
      })
    })

    return new Response(
      JSON.stringify({ success: true, topic, command }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('MQTT publish error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to publish command' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
