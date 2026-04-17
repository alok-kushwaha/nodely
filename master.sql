-- Nodely Master SQL Schema
-- This file combines all migrations into a single comprehensive schema
-- Generated from all SQL migration files in the supabase/migrations/ folder

-- ============================================================================
-- 1. ENUMS AND TYPES
-- ============================================================================

DO $$ BEGIN
    CREATE TYPE public.app_role AS ENUM ('admin', 'customer');
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- ============================================================================
-- 2. TABLES
-- ============================================================================

-- Create devices table
CREATE TABLE IF NOT EXISTS public.devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  device_uuid TEXT UNIQUE NOT NULL,
  hardware_id TEXT UNIQUE NOT NULL,
  owner_id UUID REFERENCES auth.users ON DELETE SET NULL,
  claimed BOOLEAN DEFAULT false,
  relay_state BOOLEAN DEFAULT false,
  locked BOOLEAN DEFAULT false,
  firmware_version TEXT DEFAULT '1.0.0',
  device_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  last_seen TIMESTAMPTZ
);

-- Create firmware table for OTA updates
CREATE TABLE IF NOT EXISTS public.firmware (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  version TEXT NOT NULL,
  url TEXT NOT NULL,
  changelog TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create user_roles table for RBAC (separate from profiles for security)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'customer',
  UNIQUE (user_id, role)
);

-- Create profiles table for user info
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================================
-- 3. ROW LEVEL SECURITY
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.firmware ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 4. SECURITY FUNCTIONS
-- ============================================================================

-- Security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Function to prevent non-admins from changing device lock status
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

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name');
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'customer');
  
  RETURN NEW;
END;
$$;

-- ============================================================================
-- 5. TRIGGERS
-- ============================================================================

-- Trigger for new user signup
DO $$ BEGIN
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- Trigger to enforce lock status changes by admins only
DO $$ BEGIN
    CREATE TRIGGER enforce_lock_admin_only
      BEFORE UPDATE ON public.devices
      FOR EACH ROW EXECUTE FUNCTION public.prevent_lock_bypass();
EXCEPTION WHEN duplicate_object THEN null;
END $$;

-- ============================================================================
-- 6. RLS POLICIES FOR DEVICES
-- ============================================================================

CREATE POLICY "Users can view their own devices"
ON public.devices FOR SELECT
USING (owner_id = auth.uid());

CREATE POLICY "Admins can view all devices"
ON public.devices FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update all devices"
ON public.devices FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert devices"
ON public.devices FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can update their own devices"
ON public.devices FOR UPDATE
USING (owner_id = auth.uid());

-- ============================================================================
-- 7. RLS POLICIES FOR FIRMWARE
-- ============================================================================

CREATE POLICY "Authenticated users can view firmware"
ON public.firmware FOR SELECT TO authenticated USING (true);

CREATE POLICY "Admins can manage firmware"
ON public.firmware FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- ============================================================================
-- 8. RLS POLICIES FOR USER_ROLES
-- ============================================================================

CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert roles"
ON public.user_roles FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- ============================================================================
-- 9. RLS POLICIES FOR PROFILES
-- ============================================================================

CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can view all profiles"
ON public.profiles FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete profiles"
ON public.profiles FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- ============================================================================
-- 10. REALTIME SUBSCRIPTIONS
-- ============================================================================

-- Enable realtime for devices table
ALTER PUBLICATION supabase_realtime ADD TABLE public.devices;
