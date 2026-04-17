# Nodely - IoT Device Management Dashboard

A modern, responsive IoT device management platform built with React, TypeScript, and real-time capabilities. Nodely provides seamless control, monitoring, and configuration of IoT devices with secure authentication and live data synchronization.

## 🚀 Features

### Core Capabilities
- **Device Management**: Add, configure, claim, and manage IoT devices
- **Real-time Synchronization**: Live device status and data updates via Supabase
- **WiFi Configuration**: Easy WiFi setup and network configuration for devices
- **Firmware Management**: Update and manage device firmware
- **User Authentication**: Secure JWT-based authentication system
- **Dashboard Analytics**: Monitor device status, connections, and metrics
- **Responsive Design**: Mobile-first interface optimized for all devices
- **Dark/Light Mode**: Theme toggle with persistent preferences
- **PWA Support**: Progressive Web App capabilities for offline access
- **Notifications**: Real-time system and push notifications

### Advanced Features
- **MQTT Integration**: Direct messaging with IoT devices
- **Multi-Device Support**: Manage multiple devices from a single dashboard
- **Admin Panel**: Complete administrative control and monitoring
- **Settings Management**: User preferences and device configurations
- **Device History**: Track device activity and status changes

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Ultra-fast build tool with HMR
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI component library
- **Framer Motion** - Smooth animations and transitions
- **TanStack React Query** - Server state management
- **React Router** - Client-side routing

### Backend & Database
- **Supabase** - Backend-as-a-Service with:
  - PostgreSQL Database
  - Real-time subscriptions
  - Authentication (JWT)
  - File storage
  - Serverless functions
- **MQTT** - Device communication protocol

### Additional Libraries
- **Sonner** - Toast notifications
- **date-fns** - Date utilities
- **next-themes** - Theme management
- **Lucide React** - Icon library
- **Recharts** - Data visualization

## 📋 Prerequisites

- Node.js v16 or higher
- npm or bun package manager
- Git
- Supabase account (for backend services)
- MQTT broker (for device communication)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/alok-kushwaha/nodely.git
cd nodely
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Or using bun
bun install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: MQTT Configuration
VITE_MQTT_BROKER=your_mqtt_broker_url
VITE_MQTT_PORT=8883
```

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run build:dev`** - Development build
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint code quality checks

## 📁 Project Structure

```
src/
├── components/
│   ├── devices/          # Device management components
│   ├── landing/          # Landing page sections
│   ├── layout/           # Navigation and layout
│   ├── notifications/    # Notification system
│   ├── pwa/             # PWA components
│   └── ui/              # Reusable UI components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── integrations/        # External service integrations
├── lib/                 # Utilities and helpers
├── App.tsx              # Root component
└── main.tsx             # Application entry point

supabase/
├── migrations/          # Database schema migrations
└── functions/           # Serverless functions
```

## 🔐 Database Schema

Key tables:
- **users** - User accounts and authentication
- **devices** - IoT device inventory
- **device_status** - Real-time device status
- **device_config** - Device configurations
- **device_commands** - Command history

## 🔒 Security Features

- JWT-based authentication
- Role-based access control
- Encrypted connections (MQTT over TLS)
- Input validation and sanitization
- Secure environment variables
- Row-level security (RLS) on databases

## 🌐 Deployment

### Frontend Deployment
Deploy to Vercel, Netlify, or Firebase Hosting:

```bash
npm run build
# Push to your hosting provider
```

### Backend Deployment
Supabase handles backend automatically with:
- Automatic database migrations
- Serverless function deployment
- API management and scaling

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Make your changes
3. Commit with meaningful messages (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Use TypeScript for all new code
- Follow ESLint rules
- Use functional components with hooks
- Write meaningful commit messages
- Update documentation as needed

## 📚 API Documentation

Full API documentation and Supabase schema available in:
- [Supabase Schema](./supabase-schema.sql)
- [Database Migrations](./supabase/migrations/)

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Supabase Connection Issues
- Verify environment variables
- Check internet connectivity
- Ensure Supabase project is active

### Device Connection Problems
- Verify MQTT broker connectivity
- Check device firmware version
- Ensure WiFi credentials are correct

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase Docs](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

## 📞 Support & Contact

For issues, questions, or suggestions:
- Open an issue on [GitHub](https://github.com/alok-kushwaha/nodely/issues)
- Contact: [Alok Kushwaha](https://github.com/alok-kushwaha)

---

**Built with modern web technologies for IoT device management**
