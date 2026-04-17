DROP POLICY "Anyone can view firmware" ON public.firmware;
CREATE POLICY "Authenticated users can view firmware" ON public.firmware
FOR SELECT TO authenticated USING (true);