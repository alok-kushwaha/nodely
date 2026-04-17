import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-device-uuid, x-api-key',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Verify device API key
    const apiKey = req.headers.get('x-api-key')
    const expectedKey = Deno.env.get('DEVICE_API_KEY')

    if (!expectedKey || apiKey !== expectedKey) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const deviceUuid = req.headers.get('x-device-uuid')

    if (!deviceUuid) {
      return new Response(
        JSON.stringify({ error: 'x-device-uuid header is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { state, firmware_version } = await req.json()

    if (typeof state !== 'boolean') {
      return new Response(
        JSON.stringify({ error: 'state (boolean) is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const updateData: Record<string, unknown> = {
      relay_state: state,
      last_seen: new Date().toISOString()
    }

    // Validate firmware_version format if provided
    if (firmware_version) {
      const semverRegex = /^\d+\.\d+\.\d+$/
      if (typeof firmware_version === 'string' && semverRegex.test(firmware_version)) {
        updateData.firmware_version = firmware_version
      } else {
        return new Response(
          JSON.stringify({ error: 'Invalid firmware_version format (expected x.y.z)' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
    }

    const { error } = await supabase
      .from('devices')
      .update(updateData)
      .eq('device_uuid', deviceUuid)

    if (error) {
      console.error('Failed to update state:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to update state' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`State updated for ${deviceUuid}: relay=${state}, last_seen=now`)

    return new Response(
      JSON.stringify({ ok: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Update state error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
