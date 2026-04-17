
CREATE OR REPLACE FUNCTION public.prevent_lock_bypass()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF NEW.locked IS DISTINCT FROM OLD.locked
     AND NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Only admins can change device lock status';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER enforce_lock_admin_only
  BEFORE UPDATE ON public.devices
  FOR EACH ROW EXECUTE FUNCTION public.prevent_lock_bypass();
