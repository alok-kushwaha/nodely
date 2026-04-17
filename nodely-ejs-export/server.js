require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Supabase clients
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  }
}));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Auth middleware
const authMiddleware = async (req, res, next) => {
  req.user = null;
  req.isAdmin = false;

  if (req.session.access_token) {
    const { data: { user }, error } = await supabase.auth.getUser(req.session.access_token);
    if (user && !error) {
      req.user = user;
      
      // Check admin role
      const { data: roles } = await supabaseAdmin
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();
      
      req.isAdmin = roles?.role === 'admin';
    } else {
      req.session.access_token = null;
      req.session.refresh_token = null;
    }
  }
  
  res.locals.user = req.user;
  res.locals.isAdmin = req.isAdmin;
  next();
};

app.use(authMiddleware);

// Require auth middleware
const requireAuth = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/auth?mode=login');
  }
  next();
};

const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/auth?mode=login');
  }
  if (!req.isAdmin) {
    return res.redirect('/dashboard');
  }
  next();
};

// Import routes
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const adminRoutes = require('./routes/admin');
const apiRoutes = require('./routes/api');

// Use routes
app.use('/auth', authRoutes);
app.use('/dashboard', requireAuth, dashboardRoutes);
app.use('/admin', requireAdmin, adminRoutes);
app.use('/api', apiRoutes);

// Public pages
app.get('/', (req, res) => {
  res.render('index', { title: 'Nodely - IoT Device Management' });
});

app.get('/claim/:uuid', requireAuth, async (req, res) => {
  const { uuid } = req.params;
  
  const { data: device, error } = await supabaseAdmin
    .from('devices')
    .select('*')
    .eq('device_uuid', uuid)
    .single();
  
  res.render('claim', { 
    title: 'Claim Device',
    deviceUuid: uuid,
    device,
    error: error ? 'Device not found' : null
  });
});

app.get('/settings', requireAuth, async (req, res) => {
  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('*')
    .eq('user_id', req.user.id)
    .single();
  
  res.render('settings', { 
    title: 'Settings',
    profile
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Nodely server running on http://localhost:${PORT}`);
});

// Export for use in routes
module.exports = { supabase, supabaseAdmin };
