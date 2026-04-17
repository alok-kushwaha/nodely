import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key',
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

    const { hardware_id } = await req.json()

    if (!hardware_id) {
      return new Response(
        JSON.stringify({ error: 'hardware_id is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const appBaseUrl = Deno.env.get('APP_BASE_URL') ?? 'https://nodely.app'

    const { data: existingDevice } = await supabase
      .from('devices')
      .select('device_uuid')
      .eq('hardware_id', hardware_id)
      .single()

    if (existingDevice) {
      console.log(`Device already registered: ${hardware_id} -> ${existingDevice.device_uuid}`)
      return new Response(
        JSON.stringify({
          device_uuid: existingDevice.device_uuid,
          claim_url: `${appBaseUrl}/claim/${existingDevice.device_uuid}`,
          already_registered: true
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const device_uuid = crypto.randomUUID()

    const { error: insertError } = await supabase
      .from('devices')
      .insert({
        hardware_id,
        device_uuid,
        firmware_version: '1.0.0'
      })

    if (insertError) {
      console.error('Failed to register device:', insertError)
      return new Response(
        JSON.stringify({ error: 'Failed to register device' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`New device registered: ${hardware_id} -> ${device_uuid}`)

    return new Response(
      JSON.stringify({
        device_uuid,
        claim_url: `${appBaseUrl}/claim/${device_uuid}`,
        already_registered: false
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Register device error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
