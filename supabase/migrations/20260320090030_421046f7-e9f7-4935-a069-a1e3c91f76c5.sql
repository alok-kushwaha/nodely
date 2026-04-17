CREATE POLICY "Authenticated users can view unclaimed devices"
ON public.devices FOR SELECT
TO authenticated
USING (claimed = false);