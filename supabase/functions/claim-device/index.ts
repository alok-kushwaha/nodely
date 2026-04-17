import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const authHeader = req.headers.get('Authorization')
    
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: 'Authorization required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate JWT using getClaims
    const anonSupabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    )

    const token = authHeader.replace('Bearer ', '')
    const { data: claimsData, error: authError } = await anonSupabase.auth.getClaims(token)
    
    if (authError || !claimsData?.claims) {
      console.error('Auth error:', authError)
      return new Response(
        JSON.stringify({ error: 'Invalid authorization' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const userId = claimsData.claims.sub

    const body = await req.json()
    const { device_uuid, device_name, action } = body

    if (!device_uuid) {
      return new Response(
        JSON.stringify({ error: 'device_uuid is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Look up the device using service role (bypasses RLS)
    const { data: device, error: fetchError } = await supabase
      .from('devices')
      .select('*')
      .eq('device_uuid', device_uuid)
      .single()

    if (fetchError || !device) {
      console.error('Device not found:', fetchError)
      return new Response(
        JSON.stringify({ error: 'Device not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // ── CHECK action: return device status without claiming ──
    if (action === 'check') {
      if (device.claimed) {
        const ownedByUser = device.owner_id === userId
        return new Response(
          JSON.stringify({
            status: 'claimed',
            owned_by_you: ownedByUser,
            hardware_id: ownedByUser ? device.hardware_id : undefined,
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      return new Response(
        JSON.stringify({
          status: 'unclaimed',
          hardware_id: device.hardware_id,
          device_uuid: device.device_uuid,
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // ── CLAIM action (default) ──
    if (device.claimed) {
      return new Response(
        JSON.stringify({ error: 'Device already claimed' }),
        { status: 409, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { error: updateError } = await supabase
      .from('devices')
      .update({
        owner_id: userId,
        claimed: true,
        device_name: device_name || `Device ${device_uuid.slice(0, 8)}`
      })
      .eq('device_uuid', device_uuid)
      .eq('claimed', false)

    if (updateError) {
      console.error('Failed to claim device:', updateError)
      return new Response(
        JSON.stringify({ error: 'Failed to claim device' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Device claimed: ${device_uuid} by user ${userId}`)

    return new Response(
      JSON.stringify({ 
        success: true,
        device_uuid,
        message: 'Device claimed successfully'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Claim device error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
