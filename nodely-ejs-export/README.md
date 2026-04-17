# Nodely - Node.js + Express + EJS Version

This is the self-hostable HTML/CSS/JS + EJS version of Nodely, an IoT device management platform for ESP32-based relay controllers.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd nodely-ejs-export
npm install
```

### 2. Set Up Supabase

1. Create a new Supabase project
2. Run the SQL in `supabase-schema.sql` in the Supabase SQL Editor
3. Copy your project credentials

### 3. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DEVICE_API_KEY=your-32-char-random-key
MQTT_HOST=your-cluster.hivemq.cloud
MQTT_USER=mqtt-username
MQTT_PASS=mqtt-password
SESSION_SECRET=your-session-secret
APP_URL=http://localhost:3000
```

### 4. Run the Server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
nodely-ejs-export/
├── server.js              # Main Express server
├── routes/
│   ├── auth.js            # Authentication routes
│   ├── dashboard.js       # User dashboard + MQTT relay/WiFi control
│   ├── admin.js           # Admin panel + MQTT lock/relay/WiFi + user CRUD
│   └── api.js             # Device API endpoints (API key protected)
├── views/
│   ├── partials/
│   │   ├── header.ejs     # Common header/navbar
│   │   └── footer.ejs     # Common footer
│   ├── index.ejs          # Landing page
│   ├── auth.ejs           # Login/Signup page
│   ├── dashboard.ejs      # User dashboard
│   ├── claim.ejs          # Claim device page
│   ├── settings.ejs       # User settings
│   ├── 404.ejs            # 404 error page
│   └── admin/
│       ├── index.ejs      # Admin dashboard (devices + users CRUD)
│       └── firmware.ejs   # Firmware management
├── firmware/
│   └── nodely_esp32.ino   # ESP32 Arduino firmware (v2.1.0)
├── public/
│   └── css/
│       └── style.css      # All styles
├── supabase-schema.sql    # Full database schema
├── package.json
├── .env.example
└── README.md
```

## 🔌 API Endpoints

### Device APIs (ESP32 — require `x-api-key` header)

| Method | Endpoint | Headers | Description |
|--------|----------|---------|-------------|
| POST | `/api/register-device` | `x-api-key` | Register new device |
| GET | `/api/get-command` | `x-api-key`, `x-device-uuid` | Get relay command |
| POST | `/api/update-state` | `x-api-key`, `x-device-uuid` | Update device state |
| GET | `/api/get-firmware` | `x-api-key` | Get latest firmware |

### Dashboard Routes (authenticated users)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard` | User dashboard |
| POST | `/dashboard/toggle-relay/:id` | Toggle relay state |
| POST | `/dashboard/wifi-update/:id` | Send WiFi credentials to device |
| POST | `/dashboard/wifi-reset/:id` | Factory reset WiFi on device |
| POST | `/dashboard/rename/:id` | Rename device |
| POST | `/dashboard/delete/:id` | Unclaim device |
| POST | `/dashboard/claim` | Claim a device |

### Admin Routes (admin users only)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin` | Admin dashboard |
| POST | `/admin/toggle-relay/:id` | Toggle any device relay |
| POST | `/admin/toggle-lock/:id` | Lock/unlock device |
| POST | `/admin/wifi-update/:id` | Send WiFi to any device |
| POST | `/admin/wifi-reset/:id` | Reset WiFi on any device |
| POST | `/admin/transfer/:id` | Transfer device ownership |
| POST | `/admin/update-user/:userId` | Update user profile & role |
| POST | `/admin/delete-user/:userId` | Delete user & unclaim devices |
| GET | `/admin/firmware` | Firmware management page |
| POST | `/admin/firmware/add` | Add firmware version |
| POST | `/admin/firmware/delete/:id` | Delete firmware version |

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/auth` | Auth page |
| POST | `/auth/login` | Email login |
| POST | `/auth/signup` | Email signup |
| POST | `/auth/phone-login` | Send OTP |
| POST | `/auth/verify-otp` | Verify OTP |
| POST | `/auth/forgot-password` | Send password reset email |
| GET | `/auth/logout` | Logout |

## 📡 WiFi Provisioning

Devices use a **captive portal** for initial WiFi setup:

1. On first boot, the ESP32 creates a `Nodely-Setup` access point
2. Connect to it and enter your WiFi credentials via the captive portal
3. Credentials are stored in NVS (non-volatile storage)

**Remote WiFi Updates:**
- From the dashboard, click the WiFi icon on any device card
- Enter new SSID and password → sent via MQTT `WIFI_UPDATE` command
- The device attempts to connect and rolls back if the new network fails

**WiFi Reset:**
- Admins can issue a `RESET_WIFI` command to force the device back into setup mode

## 🔐 Security

- **Device API key**: All ESP32 endpoints require `x-api-key` header validation
- **MQTT**: Relay toggle, lock, and WiFi commands are published instantly via MQTT (TLS on port 8883)
- **HTTP fallback**: ESP32 polls `get-command` every 30s as a safety net
- **RLS**: All database tables have Row-Level Security policies
- **RBAC**: Admin vs Customer roles stored in `user_roles` table with security definer function
- **Firmware validation**: `firmware_version` is validated as semver (x.y.z)

## 🔧 ESP32 Configuration

Set these in your ESP32 firmware:

```cpp
#define API_KEY       "your-32-char-device-api-key"  // Same as DEVICE_API_KEY
#define SUPABASE_URL  "https://your-project.supabase.co"
#define MQTT_HOST     "your-cluster.hivemq.cloud"
#define MQTT_PORT     8883
#define MQTT_USER     "mqtt-username"
#define MQTT_PASS     "mqtt-password"
```

All HTTP requests to device endpoints must include:
```
x-api-key: your-32-char-device-api-key
```

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `DEVICE_API_KEY` | Shared secret for ESP32 authentication |
| `MQTT_HOST` | HiveMQ Cloud cluster hostname |
| `MQTT_USER` | MQTT username |
| `MQTT_PASS` | MQTT password |
| `SESSION_SECRET` | Secret for Express sessions |
| `PORT` | Server port (default: 3000) |
| `APP_URL` | Full URL of your app |

## 🎨 Customization

All styles are in `public/css/style.css`. The design uses CSS variables for easy theming:

```css
:root {
  --primary: 142 76% 36%;      /* Green accent */
  --background: 240 10% 3.9%;  /* Dark background */
  /* ... */
}
```

## 📱 Features

- ✅ User authentication (Email + Phone OTP)
- ✅ Device dashboard with real-time status
- ✅ Instant relay control via MQTT
- ✅ Remote WiFi credential updates via MQTT
- ✅ WiFi factory reset via MQTT
- ✅ HTTP fallback polling (30s)
- ✅ Device lock/unlock (admin only)
- ✅ Admin panel with device & user management
- ✅ User CRUD (edit profile/role, delete user)
- ✅ Firmware management (OTA)
- ✅ API key authentication for ESP32
- ✅ Responsive design with dark/light theme
- ✅ Captive portal WiFi provisioning on ESP32

## 🚢 Deployment

### Render / Railway / Heroku

1. Push to GitHub
2. Connect your repo
3. Set environment variables
4. Deploy!

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

## 📄 License

MIT
