# 1. TITLE PAGE

<div align="center">

# "Nodely: Cloud-Based IoT Device Management Platform"

A Project Report

Submitted in partial fulfillment of the requirement for the award of Degree of

**Bachelor of Computer Applications**

Submitted to

**PATLIPUTRA UNIVERSITY, PATNA**

**444 – Swatantrata-Senani Shankarlal Agrawal Prabandhan Sah Takniki Mahavidyalay, Patna**

---

| Submitted By | Under Joint Guidance of |
|:---|:---|
| **Alok Kumar Kushawaha** | **Prof. Niraj Kumar Singh &** |
| Registration No. 202344400059 | **Prof. Anjesh Kumar** |
| BCA – 3rd Year | [Asst. Professor] |
| Session – 2023-2026 | Computer Science & Applications |

</div>

---

# 2. CERTIFICATE

<div align="center">

**Swatantrata-Senani Shankarlal Agrawal Prabandhan Sah Takniki Mahavidyalay, Patna**

**Department of Computer Science & Applications**
**Session 2023-2026**

</div>

**DATE:** …………………

#### CERTIFICATE

This is to certify that the work embodies in this project entitled, **"Nodely: Cloud-Based IoT Device Management Platform"**, being submitted by **Alok Kumar Kushawaha** (**202344400059**) in partial fulfillment of the requirement for the award of "Bachelor of Computer Applications" to **PATLIPUTRA UNIVERSITY, PATNA** during the academic year 2023-2026 is a record of bonafide piece of work, carried out by him/her under our/my supervision and guidance in the "Department of Computer Science & Applications", SSSAPTM, Patna.

<br><br><br>

| | | |
|:---:|:---:|:---:|
| ___________________________ | ___________________________ | ___________________________ |
| **Dr. Neeraj Agrawal** | **Dr. Neeraj Kumar** | **Dr. Amit Kumar Shukla** |
| Director | Dean – Academics | Principal |

---

# 3. APPROVAL CERTIFICATE

<div align="center">

**Swatantrata-Senani Shankarlal Agrawal Prabandhan Sah Takniki Mahavidyalay, Patna**

**Department of Computer Science & Applications**
**Session 2023-2026**

</div>

**Date:**

#### APPROVAL CERTIFICATE

The project report entitled **"Nodely: Cloud-Based IoT Device Management Platform"**, being submitted by **[Your Name]** (**[Your Registration Number]**) has been examined by us and is hereby approved for the award of degree "Bachelor of Computer Applications", for which it has been submitted. It is understood that by this approval the undersigned do not necessarily endorse or approve any statement made, the opinion expressed or conclusion drawn therein, but approve the project only for the purpose for which it has been submitted.

<br><br><br>

| | |
|:---:|:---:|
| ___________________________ | ___________________________ |
| **(Internal Examiner)** | **(External Examiner)** |

| | |
|:---:|:---:|
| Date: | Date: |

---

# 4. DECLARATION

<div align="center">

**Swatantrata-Senani Shankarlal Agrawal Prabandhan Sah Takniki Mahavidyalay, Patna**

**Department of Computer Science & Applications**
**Session 2023-2026**

</div>

**Date:**

#### DECLARATION

I, **Alok Kumar Kushawaha** hereby declare that the work, which is being presented in the project report entitled **"Nodely: Cloud-Based IoT Device Management Platform"**, partial fulfillment of the requirements for the award of degree of "Bachelor of Computer Applications" submitted in the department of Computer Science & Applications (SSSAPTM) is an authentic record of my own work carried under the joint guidance of **Prof. Niraj Kumar Singh Sir** and **Prof. Anjesh Kumar Sir**. I have not submitted the matter embodied in this report for the award of any other degree.

<br><br>

**Alok Kumar Kushawaha**
Registration No: 202344400059
BCA 3rd Year
Session – 2023-2026

---

# 5. ACKNOWLEDGEMENT

"A journey is easier when you travel together. Interdependence is certainly more valuable than independence."

I would like to thanks, **Prof. Niraj Kumar Singh Sir** and **Prof. Anjesh Kumar Sir**, for providing regular guidance and insight into my project work. I also thank them for all advice they have given me in the past year, and for always having time for me, whenever I needed.

I give special thanks to **Dr. Amit Kumar Shukla Sir**, **Prof. Raju Upadhyay Sir**, and **Prof. Ravi Kumar Soni Sir** for always being willing to help find solutions to any problems I had with my work.

"The completion of any project depends upon the cooperation, coordination, and combined efforts of several resources of knowledge, inspiration, and energy."

I also extend my deepest gratitude to Director, CIMAGE GROUP OF INSTITUTIONS, PATNA, **Dr. Neeraj Agrawal Sir**, Dean CIMAGE GROUP OF INSTITUTIONS, PATNA, **Dr. Neeraj Kumar Sir** and Centre Head **Mrs. Megha Agrawal Ma'am** for providing all the necessary facilities and true encouraging environment to bring out the best in my endeavors.

I express my gratitude and thanks to all the staff members of Computer Science departments for their sincere cooperation in furnishing relevant information to complete this Project well in time successfully.

I extend a special word to my friends, who have been a constant source of inspiration throughout my project work.

Lastly but not least I must express my cordial thank to my parent and family members who gave me the moral support without that it is impossible to complete my project work. With this note, I thank everyone for the support.

<br><br>

**Alok Kumar Kushawaha**

Registration No: 202344400059

BCA 3rd Year
Session – 2023-2026

---

# 6. TABLE OF CONTENTS

1.  Title Page ..................................................................... 1
2.  Certificate .................................................................... 2
3.  Approval Certificate ........................................................... 3
4.  Declaration .................................................................... 4
5.  Acknowledgement .............................................................. 5
6.  Table of Contents .............................................................. 6
7.  Introduction ................................................................... 7
8.  Objectives ..................................................................... 10
9.  Project Category ............................................................... 12
10. Advantages of the System ...................................................... 13
11. Tools / Platform Used ......................................................... 15
12. Hardware & Software Requirements .............................................. 18
13. Problem Definition ............................................................ 20
14. Requirement Specifications (SRS) .............................................. 22
15. Project Planning & Scheduling ................................................. 27
16. Gantt Chart ................................................................... 29
17. PERT Chart .................................................................... 30
18. System Analysis ............................................................... 32
19. System Design ................................................................. 36
20. Module Description ............................................................ 40
21. Database Design / Data Structure .............................................. 45
22. List of Reports ............................................................... 50
23. Scope & Future Enhancements ................................................... 52
24. Implementation Methodology .................................................... 54
25. Testing ....................................................................... 58
26. Limitations & Future Improvements ............................................. 62
27. Security Mechanism ............................................................ 64
28. Literature Review & Background Study .......................................... 67
29. Data Dictionary ............................................................... 71
30. Edge Function API Reference ................................................... 74
31. Component Hierarchy & Reusability Analysis .................................... 79
32. Deployment Guide .............................................................. 83
33. User Manual / Operating Instructions .......................................... 87
34. Snapshots (Screenshots) ....................................................... 91
35. Code Snippets ................................................................. 94
36. References .................................................................... 99

# 7. INTRODUCTION

## 7.1 Overview of IoT Cloud Architecture
The Internet of Things (IoT) has rapidly evolved from a conceptual framework into a ubiquitous reality, integrating billions of physical devices worldwide to the internet. These devices range from simple household sensors and smart light bulbs to complex industrial actuators and relay controllers. However, as the deployment of these edge computing nodes increases, the challenge shifts from the hardware itself to the software infrastructure required to manage, monitor, and maintain them efficiently.

**Nodely** is a centralized, cloud-based web application tailored exclusively for modern IoT device management. Built using cutting-edge web technologies and serverless architecture, Nodely provides an intuitive yet highly secure interface for end-users to oversee their physical hardware assets.

## 7.2 The Nodely Solution Paradigm
When an end-user purchases a smart hardware device (such as a relay controller or sensory node), they are traditionally forced to navigate tedious localized connection processes. Nodely bridges the physical-digital divide by providing a unified web gateway. It allows hardware owners to claim devices using a unique, hardcoded string known as the Hardware UUID. Once claimed, the device is perpetually linked to the user's authenticated account.

The platform enables users to interact with their devices in real-time. Whether it is toggling an electrical relay, monitoring if the device is currently online or offline, or pushing new Wi-Fi credentials Over-The-Air (OTA) without needing to connect a physical cable, Nodely handles the complex middleware routing using MQTT (Message Queuing Telemetry Transport) wrapped behind Supabase Edge Functions.

## 7.3 Advanced Administrative Capabilities
Beyond standard user interactions, Nodely implements a sophisticated Role-Based Access Control (RBAC) architecture. Standard customers interact exclusively with their authenticated hardware nodes. In contrast, an administrative tier oversees the entire ecosystem. Administrators possess the authority to maintain global user roles, deploy mass firmware updates (OTA) via binary URLs logging specific changelogs, forcefully unlink rogue devices, and resolve hardware lockouts.

This multi-tenant security is enforced at the database level using PostgreSQL Row Level Security (RLS). This means that a user trying to manipulate another user's device will be blocked at the core database level, long before the software even parses the data.

## 7.4 Dual-Frontend Architecture
A distinctive engineering decision in the Nodely project is the provision of **two complete frontend implementations** targeting different deployment scenarios:

1. **React SPA (Single Page Application):** The primary production frontend built with Vite, React 18, TypeScript, and Tailwind CSS. This delivers instant page transitions, client-side routing via `react-router-dom`, and real-time WebSocket binding for live device state updates. It is deployed as a static bundle on CDN infrastructure.

2. **EJS Server-Side Rendered (SSR) Export:** A secondary Node.js/Express implementation (`nodely-ejs-export/`) with EJS templates. This version utilizes server-side sessions (`express-session`), cookie-based authentication, and traditional request/response rendering. It serves as a lightweight deployment option for constrained hosting environments where a full SPA build pipeline is unavailable.

Both frontends share the same Supabase backend, database schema, and security policies.

## 7.5 Progressive Web App (PWA) Support
Nodely is configured as an installable Progressive Web App using `vite-plugin-pwa`. The PWA manifest defines the application with a dark theme colour (`#0f172a`), standalone display mode, portrait orientation, and custom SVG icons at 192×192 and 512×512 resolutions. Service Worker caching (via Workbox) pre-caches all static assets and implements a `NetworkFirst` strategy for Supabase API calls with a 24-hour cache TTL and a maximum of 50 cached entries.

In summary, Nodely replaces fragmented, local-only scripts with an aesthetically pleasing, scalable, and highly available web-based Command and Control (C2) center for IoT nodes.

---

# 8. OBJECTIVES

The primary objective of developing the Nodely platform is to streamline operations for IoT networks by bringing hardware controls into a unified, secure web ecosystem. The specific objectives are categorized as follows:

## 8.1 Operational Objectives
1. **Centralized Device Monitoring:** To provide a singular, comprehensive dashboard where users can aggregate the real-time online/offline status, activity logs, and configurations of all their registered IoT nodes.
2. **Instantaneous Hardware Control:** To enable instantaneous remote control of physical parameters, such as altering relay states (ON/OFF toggles), from a web interface securely, circumventing geographical constraints.
3. **Over-The-Air (OTA) Modernization:** To seamlessly integrate a firmware management portal that allows system administrators to track active software versions and securely deploy OTA payload endpoints so edge devices can upgrade their local logic without physical intervention.

## 8.2 User Experience Objectives
4. **Frictionless Provisioning:** To facilitate the secure linkage (claiming) of unassigned physical hardware to authenticated users through a simple user interface wizard involving just a UUID/Hardware ID string.
5. **Remote Network Configuration:** To allow users to push specific Wi-Fi SSID and Password credentials to active devices remotely via standard MQTT payloads triggered by web inputs.
6. **Responsive Interface:** To ensure the software is accessible across all modern devices, including mobile phones, tablets, and desktop computers, maintaining a unified UX/UI through Tailwind CSS and Shadcn.

## 8.3 Security Objectives
7. **Strict Role-Based Access (RBAC):** To delineate permissions robustly between standard users (customers) and administrators, guaranteeing that no user can access cross-tenant data.
8. **Real-time Synchronization:** To ensure that if a device's status changes locally (e.g., loss of power), the web dashboard reflects this state shift almost immediately via integrated WebSocket integrations.

## 8.4 Multi-Channel Authentication Objectives
9. **Email & Phone Authentication:** To support multiple authentication vectors — Email/Password with email confirmation, Phone Number/OTP via SMS, and passwordless magic link sign-in — giving users flexible access methods.
10. **Account Recovery:** To implement a password reset flow that sends secure recovery links via email, ensuring users are never permanently locked out of their accounts.

---

# 9. PROJECT CATEGORY

**Primary Category:** Software as a Service (SaaS) / Web Application
**Secondary Category:** Internet of Things (IoT) Cloud Management Portal

The project is architecturally built as a Single Page Application (SPA). Because it dynamically queries backend datastores rather than generating rigid HTML on the server, it acts similarly to a local application. It heavily leverages backend cloud services (Supabase PostgreSQL, Auth, and Edge Functions), allowing the overarching architecture to remain serverless. An alternative EJS-based Server-Side Rendered (SSR) version is also provided for traditional hosting environments.

---

# 10. ADVANTAGES OF THE SYSTEM

The development of the Nodely platform introduces significantly enhanced operational efficiencies when compared to traditional ad-hoc IoT management systems. The advantages are multi-faceted:

## 10.1 Real-Time Data Synchronization
One of the most noticeable advantages of Nodely is its reliance on WebSockets for interface rendering. Utilizing Supabase Realtime subscriptions, any changes to a device's relay state, firmware version, or connection status reflect on the user's dashboard instantly. The `useRealtimeDevices` hook subscribes to the `postgres_changes` channel, listening specifically for `UPDATE` events on the `devices` table. When a change is detected, the React state array is updated in-place using an immutable map operation, guaranteeing zero full-page reloads.

## 10.2 Hardened Database-Level Security
While most applications verify permissions within their application code (backend Node.js servers), Nodely delegates this capability natively to the database. Postgres Row Level Security (RLS) ensures that unauthenticated read/write actions are rejected at the database level. Even if an attacker were to bypass the frontend APIs, the database engine simply would not return records belonging to a different `owner_id`. A dedicated `prevent_lock_bypass()` trigger function further ensures that only administrators with the `admin` role can modify the `locked` column on any device record.

## 10.3 Geographically Independent Remote Operations
Physical proximity to the device is no longer necessary for routine network configuration or mechanical switching. As long as the physical node can maintain an internet connection, it can listen to MQTT payloads published globally, significantly enhancing the usability spectrum for both home consumers and industrial installations.

## 10.4 Modern, Ergonomic User Interface
Nodely incorporates a modern front-end stack including `shadcn-ui`, Tailwind CSS, and Framer Motion. This delivers a responsive, visually striking layout accommodating a "Dark Mode by Default" philosophy. Users transitioning from desktop to mobile environments will experience zero degradation in usability because the utility classes fluidly scale the dashboard widgets based on viewport width. Each `DeviceCard` component enters the viewport with a scale-and-fade animation (`initial={{ opacity: 0, scale: 0.95 }}`), providing visual polish that increases perceived quality.

## 10.5 Cost-Effective Serverless Scalability
Rather than maintaining specialized Linux VPS servers operating 24/7, Nodely's serverless architecture allows the infrastructure to scale dynamically. Edge functions execute within milliseconds upon being invoked and spin down immediately after, ensuring that server resources are consumed solely upon active demand.

## 10.6 Optimistic UI for Perceived Speed
When a user toggles a relay switch, the interface does not wait for the server to confirm the change. Instead, the local React state is updated immediately (optimistic update), and the change is reverted only if the server returns an error. Combined with a 300-millisecond debounce delay on toggle actions, this pattern prevents MQTT flooding while delivering a snappy, native-application-like feel.

---

# 11. TOOLS / PLATFORM USED

Developing a complex real-time application required leveraging highly specific, enterprise-grade tooling. The selection process prioritized speed, typing safety, and real-time support.

## 11.1 Frontend Technologies Layer

### React.js (v18)
React is an open-source JavaScript library developed by Meta (formerly Facebook). It operates fundamentally on a "Virtual DOM", which significantly speeds up page rendering compared to traditional JavaScript that directly writes to the HTML Document Object Model. React allowed the creation of modular, reusable components (like the `DeviceCard`, `ConnectionStatus`, `WiFiConfigDialog`, etc.) which made the codebase highly maintainable. The SWC-based compiler plugin (`@vitejs/plugin-react-swc`) is used instead of Babel for faster transpilation.

### Vite
Vite is a next-generation frontend execution and build tool that significantly improves the frontend development experience. Unlike Webpack, which bundles the entire application before it can be served locally, Vite serves source code over native ESM, resulting in almost instantaneous Hot Module Replacement (HMR) during coding. The project configures Vite to serve on port `8080` with a path alias mapping `@` to the `src/` directory for clean imports.

### TypeScript
A strict syntactical superset of JavaScript that adds optional static typing. By defining rigid interfaces for devices and user profiles (see `src/integrations/supabase/types.ts`), TypeScript prevents major classes of bugs (such as passing null data to an array method). It forces the developer to verify structures at compile-time rather than crashing at runtime. The auto-generated `Database` type ensures every Supabase query is type-checked against the actual PostgreSQL schema.

### Tailwind CSS & Shadcn UI
Tailwind is a utility-first CSS framework that enables rapid styling directly within markup components. Rather than maintaining massive, tangled `style.css` files, classes like `flex w-full bg-blue-500` handle layout immediately. Shadcn-ui builds upon this by providing accessible, un-styled base components (radix-ui) that deploy into the project directly, giving complete control over the layout of dropdowns, dialogs, and notifications. Key Shadcn components used include `Dialog`, `AlertDialog`, `DropdownMenu`, `Switch`, `Input`, `Tabs`, `Table`, `InputOTP`, `RadioGroup`, and `Toast`.

### Framer Motion
A production-ready motion library for React that simplifies animations. This was used to create smooth transitions, entry fades for the dashboard elements, and physical visual cues to increase UX satisfaction. The landing page `HeroSection` uses animated orbs (`scale: [1, 1.2, 1]` with infinite repeat) for visual depth.

### Zod (Schema Validation)
Zod is a TypeScript-first schema declaration and validation library. The application uses Zod schemas to validate user inputs on the authentication page (email format validation, phone number length checks, and minimum password length of 6 characters) and on the settings page (profile name maximum 100 characters). This provides robust client-side validation with clear error messages before any data touches the backend.

### React Router DOM (v7)
Manages client-side routing within the Single Page Application. The application defines routes for `/` (Landing Page), `/auth` (Authentication), `/dashboard` (User Dashboard), `/admin` (Admin Panel), `/claim/:uuid` (Device Claiming), `/firmware` (OTA Management), and `/settings` (User Preferences). Query parameters (e.g., `?mode=signup`, `?redirect=/claim/...`) are used for contextual navigation.

### Lucide React (Icon Library)
A comprehensive icon library providing consistent, pixel-perfect SVG icons throughout the interface. Icons such as `Cpu`, `Power`, `Lock`, `Unlock`, `Wifi`, `WifiOff`, `Shield`, `Pencil`, `Trash2`, `RefreshCw`, and `QrCode` are used extensively across all modules.

## 11.2 Backend & Infrastructure Layer

### Supabase
Supabase is an open-source alternative to Firebase. It acts as the backbone of the Nodely project. Instead of abstract NoSQL databases, it provides a full, dedicated PostgreSQL database out of the box.
Features of Supabase utilized heavily in Nodely include:
- **Authentication (GoTrue):** Handling JWT tokens seamlessly, natively linking Auth users to Database entities. Supports Email/Password, Phone/OTP via SMS, passwordless magic links, and password reset flows.
- **Realtime / WebSockets:** Establishing listen streams dynamically updating React state arrays upon Postgres table mutation via the `postgres_changes` channel.
- **PostgreSQL Data Management:** Enabling Triggers and SQL functions to automate processes server-side, such as generating customer meta-profiles automatically upon auth-creation via the `on_auth_user_created()` trigger.
- **Storage:** Managing firmware binary file hosting for OTA update distribution.

### Supabase Edge Functions (Deno) / MQTT Integration
Distributed serverless functions written in TypeScript using the Deno runtime. The project implements six Edge Functions:
1. **`claim-device`** — Handles device ownership verification and binding.
2. **`get-command`** — Retrieves pending commands for a specific hardware node.
3. **`get-firmware`** — Returns the latest firmware metadata for OTA polling.
4. **`mqtt-publish`** — Publishes relay state changes and Wi-Fi credential payloads to the MQTT broker.
5. **`register-device`** — Allows new hardware nodes to self-register in the database.
6. **`update-state`** — Receives heartbeat and state updates from active devices.

When a user toggles a switch on the dashboard, the `mqtt-publish` edge function fires, taking the UI intent and transforming it into a specific payload (e.g., `command: ON`) aimed via the MQTT network stack directly towards the microcontroller (ESP32/ESP8266 or similar edge device).

### Express.js (EJS Backend)
The alternative server-side implementation uses Express.js v4 with EJS templating. It implements session-based authentication (`express-session` with 7-day cookie TTL), middleware-based route protection (`requireAuth`, `requireAdmin`), and server-side Supabase client instantiation using both the anonymous key (for user-context queries) and the service role key (for administrative operations).

### next-themes (Theme Management)
Provides Light/Dark/System theme switching. The Settings page exposes a `RadioGroup` allowing users to select their preferred appearance, which persists across sessions via `localStorage`.

---

# 12. HARDWARE & SOFTWARE REQUIREMENTS

To develop, audit, and deploy the Nodely ecosystem effectively, the following computing specifications and software environments are strictly recommended.

## 12.1 Software Requirements

### Development Environment Setup
- **Operating System:** Windows 10/11, macOS (10.15+), or modern Linux Distributions (Ubuntu 20.04+).
- **Core Runtime:** **Node.js** Environment (Version 18.0 LTS or higher is mandatory due to Vite dependencies natively utilizing newer Fetch APIs).
- **Package Management:** `npm` (Node Package Manager), `yarn`, or `bun`. (The project utilizes `bun.lock` for ultra-fast dependency resolution).
- **Code Editor / IDE:** **Visual Studio Code (VS Code)** is the premier choice. Extensions such as ESLint, Prettier, and Tailwind CSS IntelliSense are heavily recommended for a smooth coding experience.
- **Version Control:** **Git** CLI installed locally integrated via GitHub / GitLab for pushing source code and tracking project histories.
- **Supabase CLI:** Required for managing database migrations locally and deploying Edge Functions to the Supabase cloud.

### End-User Requirements
- **Browser:** Any modern HTML5-compliant web browser. Google Chrome (v100+), Mozilla Firefox, Apple Safari, or Microsoft Edge.
- **Resolution:** Responsive down to 320px width, but standard 1080p Desktop environments provide the maximal dashboard utility workspace.
- **PWA Installation:** Users on mobile devices can install the application directly to their home screen via the browser's "Add to Home Screen" prompt, enabled by the configured service worker.

## 12.2 Hardware Requirements

### Developer Machine Minimum Specifications
- **Processor (CPU):** Intel Core i3 / AMD Ryzen 3 (or equivalent minimum). Intel Core i5 / AMD Ryzen 5 Recommended.
- **Memory (RAM):** 8 GB RAM Minimum. Running React bundle-servers simultaneously with IDE environments consumes heavy memory resources.
- **Storage:** 256 GB SSD (Solid State Drive is preferential owing to heavy NPM module file I/O).
- **Network:** Stable broadband internet connection (minimum 5 Mbps) for accessing Supabase cloud services and deploying Edge Functions.

### IoT Node Minimum Edge Specifications (Theoretical End-Points)
For the physical components receiving commands from the Nodely cloud:
- Minimum Wi-Fi-enabled Microcontroller (ESP8266 or ESP32).
- Native MQTT support libraries handling TCP/IP packets.
- Non-Volatile Flash memory (to store the specific UUID pairing the hardware to the database).
- Operating voltage: 3.3V DC with sufficient GPIO pins for relay control.

---

# 13. PROBLEM DEFINITION

## 13.1 The Legacy IoT Ecosystem
Traditional standalone IoT deployments encountered by consumers and small manufacturers typically face a massive "fragmentation" problem. When an end-user purchases a smart relay/sensor today, setting it up typically requires a cumbersome Bluetooth/Wifi-AP-mode handshake where the device acts as a temporary router. Once the device is successfully networked into a local router, executing control externally relies heavily on port forwarding algorithms or exposing local networks to massive security flaws.

Furthermore, once online, tracking firmware depreciation or providing technical support for bug fixes is a logistical nightmare for manufacturers. Updating hardware code entails asking a consumer to manually download binary sequences or dealing with hardcoded obsolete endpoints, rendering hardware as e-waste rapidly.

## 13.2 The Multi-Channel Access Problem
Modern Indian users expect flexibility in authentication methods. Many rural and semi-urban users may not have active email accounts but do have mobile phones. Conversely, tech-savvy users prefer email-based sign-in. Existing IoT platforms typically support only one authentication method, creating unnecessary friction during onboarding.

## 13.3 Defining the Scope of Nodely
Nodely explicitly addresses these pain points by providing a unified, secure web gateway utilizing standard HTTPS/WSS protocols.
- **The Setup Problem:** Rather than standalone local execution, Nodely allows claiming via simple UUID binding. Users can claim devices either by visiting a direct URL (`/claim/<uuid>`) or by manually entering the UUID from the device's serial output.
- **The Tracking Problem:** Administrators possess dedicated panels indicating exact versions of firmware running per node, granting them the ability to surgically distribute OTA payloads to update older tech natively over the network.
- **The Security Problem:** It prevents rogue local takeovers. Control requires JWT session tokens assigned specifically to matching User Profiles mapped via Postgres Row Level Security. Hardcoded hardware identifiers strictly bind to singular user accounts, eradicating the threat of local bad-actors gaining physical IP access.
- **The Access Problem:** Nodely supports Email/Password login, Phone/OTP login, and passwordless magic link sign-in — three distinct authentication vectors — ensuring maximum reach across user demographics.

---

# 14. REQUIREMENT SPECIFICATIONS (SRS)

A Software Requirements Specification (SRS) is a formal document that dictates software behavior, technical prerequisites, functionality mappings, and constraints. Adhering to structured lifecycle development, Nodely follows specific defined bounds.

## 14.1 User Characteristics
The platform caters strictly to two distinct class archetypes:
1. **The 'Customer' User:** Regular hardware owners. They must possess minimal technical acumen. Their interactions involve reading dashboard metrics, toggling simple UI switches, and typing in simple text codes (UUIDs) to map hardware initially.
2. **The 'Admin' User:** Platform orchestrators. High technical competency. Capable of understanding payload URLs, monitoring fleet diagnostics, debugging relay latency, and enforcing security bans or hardware unlinks on abusive users.

## 14.2 Functional Requirements (System Actions)

**Module 1: Authentication & Identity Management**
- **FR 1.1:** The system MUST allow users to register an account using Email/Password combinations.
- **FR 1.2:** The system MUST support user registration via Phone Number with OTP verification (India +91 format with automatic E.164 formatting).
- **FR 1.3:** The system MUST automatically generate a relational `profiles` record associating metadata (Full Name, Email, Avatar URL) upon successful registration via a database-side trigger (`on_auth_user_created()`).
- **FR 1.4:** The platform MUST handle session refreshes elegantly, expiring JWTs internally to restrict token-theft. The Supabase client is configured with `persistSession: true` and `autoRefreshToken: true`.
- **FR 1.5:** The system MUST provide a "Forgot Password" flow that sends a secure password reset link to the user's registered email address.
- **FR 1.6:** The system MUST validate all user inputs using Zod schemas before submission (email format, phone digit count, password minimum length of 6 characters).

**Module 2: Device Provisioning and Mapping**
- **FR 2.1:** The system MUST provide an interface for a standard user to input a unique `Hardware_ID` / `device_uuid`.
- **FR 2.2:** The system MUST support two provisioning paths: (a) Direct URL claiming via `/claim/<uuid>` — typically from a QR code on the device, and (b) Manual entry via `/claim/manual` where the user types the UUID.
- **FR 2.3:** The database MUST verify if the device is currently "unclaimed" via the `claim-device` Edge Function. Upon success, the system MUST logically bind the hardware to the user's `auth.uid()` and update the `claimed` boolean.
- **FR 2.4:** A user MUST NOT be able to claim a device already registered under a distinct active user profile. The system must display appropriate error messages: "You already own this device" or "This device has already been claimed by another user."
- **FR 2.5:** The system MUST allow users to assign an optional friendly name (e.g., "Living Room Light") during the claiming process.

**Module 3: Real-Time Instrumentation & Command**
- **FR 3.1:** The Dashboard MUST display specific metrics: Total Active Devices, Online devices (determined by `last_seen` within 60 seconds), and specific individual device connection indicators.
- **FR 3.2:** The System MUST provide a toggle switch translating logical intent (On/Off) back into the Database `relay_state` via the `useRealtimeDevices` hook.
- **FR 3.3:** The System MUST utilize a debouncing delay (300 milliseconds) on toggle-switches to prevent the user from flooding downstream MQTT networks via rapid, successive UI clicks.
- **FR 3.4:** The System MUST utilize optimistic UI updating, swapping visual state instantly before the server acknowledges, rolling back visuals only if an explicit error is caught to preserve UI UX responsiveness.
- **FR 3.5:** The System MUST display relative timestamps for device connectivity ("Just now", "5m ago", "2h ago", "3d ago", "Never connected") computed from the `last_seen` field.

**Module 4: Administrative Management**
- **FR 4.1:** The System MUST hide the Administrator navigation elements entirely if the user does not possess the matching `admin` role inside `user_roles`. The `isAdmin` boolean is computed in the `useAuth` hook and cascaded globally.
- **FR 4.2:** Admins MUST have the ability to lock specific hardware devices remotely setting `locked = true`, blocking downstream processing commands and standard user edits. When a device is locked, its `DeviceCard` displays a red banner: "Device locked by administrator" and disables the relay toggle switch.
- **FR 4.3:** Admins MUST be able to force-unlink hardware, scrubbing the `owner_id` restoring it to an unclaimed state allowing factory resets on the customer end.
- **FR 4.4:** Admins MUST be able to manage user roles, promoting customers to admin or demoting admins to customer status.
- **FR 4.5:** Admins MUST be able to delete user accounts entirely from the platform.

**Module 5: OTA Firmware Capabilities**
- **FR 5.1:** Admins MUST possess an interface specifying firmware upgrades, logging Version Number inputs, the HTTP/HTTPS URL pointing to the `.bin` binary, and respective text changelogs for tracking transparency.
- **FR 5.2:** Firmware entries MUST be displayed in reverse chronological order, with the most recent version tagged visually as "Latest".
- **FR 5.3:** Admins MUST be able to delete outdated firmware records.
- **FR 5.4:** Devices MUST be able to poll the `get-firmware` Edge Function to check for and retrieve the latest firmware binary URL.

**Module 6: User Settings & Profile**
- **FR 6.1:** Users MUST be able to update their display name (Full Name) via a settings page with Zod validation (max 100 characters).
- **FR 6.2:** Users MUST be able to switch the application's visual theme between Light, Dark, and System (automatic) modes, with the preference persisting across sessions.
- **FR 6.3:** The user's email MUST be displayed as read-only on the settings page.

**Module 7: Remote Wi-Fi Configuration**
- **FR 7.1:** Users MUST be able to push updated Wi-Fi credentials (SSID and Password) to online devices via the `WiFiConfigDialog` component, which invokes the `mqtt-publish` Edge Function.
- **FR 7.2:** The dialog MUST display a warning that the device must be online and will briefly disconnect during the network switch.

## 14.3 Non-Functional Requirements (Quality Attributes)
- **Security Constraint (NFR-1):** Direct APIs must NEVER bypass RLS policy. A user must definitively prove identity before querying any table.
- **Performance Constraint (NFR-2):** Real-time WebSocket updates syncing the PostgreSQL table changes must occur in under 500ms.
- **Availability (NFR-3):** Hosted on serverless, dynamically scaling CDNs ensuring the traditional 99.9% uptime architecture.
- **Usability (NFR-4):** Web Interface UI must maintain complete parity transitioning layout paradigms from 1920p Desktop configurations down fully toward 360p mobile view-frames using Tailwind responsive breakpoints.
- **Portability (NFR-5):** The application must be installable as a PWA on Android and iOS home screens.
- **Validation (NFR-6):** All user-facing input fields must validate data client-side using Zod schemas before dispatching API requests.

---

# 15. PROJECT PLANNING & SCHEDULING

Proper project governance ensured that all complex elements — database modeling, front-end UX workflows, WebSocket implementations, and final load testing — converged smoothly into a working product. The project was executed using Agile methodologies broken down into successive Sprints matching SDLC best-practices.

## Phase 1: Requirement Analysis & Prototyping (Week 1)
- Defined the IoT requirements including evaluating how hardware (ESP32) would communicate. Opted to separate the physical hardware using MQTT and bridge it to the Dashboard via Supabase Edge Functions for maximum resilience.
- Drafted schema for database implementations modeling relations between Auth entities, hardware constraints, and admin logic.
- Shortlisted technology choices: evaluated Firebase vs Supabase (chose Supabase for PostgreSQL and RLS), Webpack vs Vite (chose Vite for speed), and REST vs MQTT (chose MQTT for IoT efficiency).

## Phase 2: Design & Data Architecture Construction (Weeks 2-3)
- Constructed the crucial `master.sql` document, configuring table blueprints (`devices`, `firmware`, `profiles`, `user_roles`).
- Deeply designed Postgres RLS models to secure application scopes aggressively. Wrote 8 policies covering SELECT, INSERT, UPDATE, and DELETE operations across all tables.
- Defined the `prevent_lock_bypass()` trigger and `on_auth_user_created()` function in PL/pgSQL.
- Defined color palettes and typography for Shadcn implementations prioritizing Dark-Mode capabilities for reduced eye strain in administrative settings.

## Phase 3: Frontend Implementation & Development (Weeks 3-5)
- Bootstrapped Vite environment via NPM generating foundational core modules.
- Integrated `react-router-dom` crafting the explicit single-page paths (`/auth`, `/dashboard`, `/admin`, `/claim`, `/firmware`, `/settings`).
- Coded specific modular components: `DeviceCard`, `WiFiConfigDialog`, `ConnectionStatus`, `HeroSection`, `FeaturesSection`, `SecuritySection`, `HowItWorksSection`, `Footer`.
- Implemented multi-channel authentication (Email/Password, Phone/OTP, Magic Link, Forgot Password) on the Auth page.
- Built the Settings page with profile editing and theme switching.

## Phase 4: Backend Integration & Logic Streams (Weeks 5-6)
- Linked JavaScript SDK `@supabase/supabase-js` with typed client (`createClient<Database>`).
- Implemented real-time listener `useRealtimeDevices` custom React hook. Configured it to react to `UPDATE` triggers natively dispatched by Postgres logic parsing network mutations instantly back matching device arrays.
- Developed six Supabase Edge Functions for device registration, claiming, command retrieval, firmware serving, MQTT publishing, and state updates.
- Built the EJS-based SSR alternative with Express.js, including routes for authentication, dashboard, admin, and API endpoints.

## Phase 5: Quality Assurance & Edge Case Testing (Weeks 7-8)
- Conducted internal stress-tests deliberately breaking UI permissions checking that UI falls back correctly showing "Insufficient Permission" bounds.
- Debouncer logic tests guaranteeing rapid multiple mouse-clicks condensed dynamically towards single unified requests.
- Tested PWA installation on Android Chrome, verifying service worker registration and offline caching behaviour.
- Validated Zod schema rejections for malformed email addresses, short passwords, and oversized profile names.

---

# 16. GANTT CHART

The Gantt chart acts as the primary visual schedule mapping our specific tasks towards hard chronological bounds. Given an approximate 8-week completion envelope:

| Identifier | Project Milestone Deliverable              | Duration | Phase Alignment     |
| :--------: | :----------------------------------------- | :------: | :------------------ |
| **M1**     | Requirements Gathering & Technical Scope   | 7 days   | Week 1              |
| **M2**     | Database Modeling & Schema Scripting       | 7 days   | Week 2              |
| **M3**     | Authentication Triggers & RLS Tuning       | 7 days   | Week 3              |
| **M4**     | React Framework UI Bootstrapping           | 10 days  | Week 3 – Week 5     |
| **M5**     | WebSocket Integrations & Control Logic     | 10 days  | Week 5 – Week 6     |
| **M6**     | Edge Functions & MQTT Bridge Development   | 7 days   | Week 6 – Week 7     |
| **M7**     | Administrative Panels (OTA/Fleet) Setup    | 7 days   | Week 7              |
| **M8**     | EJS SSR Backend Development                | 5 days   | Week 7 – Week 8     |
| **M9**     | Quality Assurance, Load Testing & Debugs   | 5 days   | Week 8              |
| **M10**    | Documentation, Reporting & Final Release   | 3 days   | Week 8 Output       |

[DIAGRAM_PLACEHOLDER: Insert Gantt chart diagram created in Microsoft Project / Excel / Draw.io showing the above milestones with horizontal bars aligned to weeks.]

---

# 17. PERT CHART

A Program Evaluation Review Technique (PERT) chart allows visualizing complex critical pathways highlighting tasks requiring strict prerequisites.

**Textual Representation of Task Dependencies:**

*   **Node 1 (System Start)**
    *   Proceeds immediately to **Branch A** (Scope Definition & Feasibility Study).
*   **Branch A**
    *   Yields **Node 2** (Final SRS Document).
*   **Node 2** is a split critical node mapping asynchronous effort:
    *   Initiates **Branch B** (Backend: Postgres DB Schema Logic)
    *   AND Initiates **Branch C** (Frontend: Static UI Layouts & Wireframes).
*   **Branch B**
    *   Results in **Node 3** (Triggers, Cloud Keys, RLS Security Policies active on Server).
*   **Branch C**
    *   Results in **Node 4** (Vite initialized, DOM components crafted, Routes defined).
*   **Convergence at Node 5 (Integration):**
    *   **Node 3 AND Node 4** MUST BE complete before initiating Dashboard WebSocket integrations.
*   **Node 5**
    *   Yields **Node 6** (Admin Overrides, Action Constraints, Edge Functions deployed).
*   **Node 6**
    *   Splits into **Branch D** (EJS SSR Backend) and **Branch E** (Testing & QA).
*   **Branch D AND Branch E**
    *   Converge at **Node 7** (E2E Test Output, Both Frontends Validated).
*   **Node 7**
    *   Final Product compilation leading toward System Deployment (Release).

*(Failure in Branch B delays Node 5 exponentially, illustrating Backend Database logic remains the primary bottleneck parameter in full-stack integrations).*

[DIAGRAM_PLACEHOLDER: Insert PERT chart diagram showing the above node-and-branch dependency graph.]

---

# 18. SYSTEM ANALYSIS

System analysis is the systematic process of evaluating a business or operational paradigm, breaking it down into component processes, and defining exactly how automated software systems resolve specific weaknesses.

## 18.1 Identification of Current Deficiencies
In ad-hoc IoT installations specifically geared towards independent makers or medium-sized consumer deployments:
1. Systems lack integrated cloud controls. Operating a switch requires loading into local LAN AP configurations.
2. No administrative oversight exists natively regarding which user owns which hardware parameters reliably.
3. Once deployed, hardware code rusts securely. Fixing bugs locally mandates users manually compiling `.bin` data through external micro-cables, drastically destroying UX metrics.
4. Most existing platforms offer only English-language email-based sign-up, excluding the large Indian user base that primarily uses mobile phone numbers as their digital identity.

## 18.2 Proposed Software Improvements via Nodely
The new system proposes mitigating all issues through centralizing administrative overhead. Leveraging WebSockets eliminates latency. Pushing complex device logic to a cloud middleware means the hardware purely performs execution rather than heavy computational web-hosting locally, exponentially saving electricity constraints at the edge endpoints. Multi-modal authentication (Email + Phone + Magic Link) ensures no user is excluded from the onboarding funnel.

## 18.3 Feasibility Study Detailed Overview

### 1. Technical Feasibility
Assesses whether current technical resources reliably support deployment methodologies.
Leveraging Supabase implies no physical dedicated server rack arrays are necessary. PostgreSQL is structurally mature, natively capable of scaling towards massive metric outputs. React efficiently isolates the components, mitigating cascading bugs typical of JavaScript architectures. The Deno-based Edge Function runtime provides a secure, sandboxed execution environment for server-side logic.
**Verdict:** Outstandingly Feasible. Native frameworks completely accommodate the needed computational architectures securely.

### 2. Economic Feasibility
Evaluates project returns vs. overhead investments logically.
SaaS architectures utilizing Vercel and Supabase Free & Pro tiers require marginal operational costs relative to hosting dedicated infrastructure nodes. Development frameworks (React, Vite, Node) strictly rely upon open-source architectures, implying strictly zero monetary licensing obligations. Total overhead equals man-hour development time alone.
**Verdict:** Highly Feasible. Capital investment required evaluates below basic industry threshold standards.

### 3. Operational Feasibility
Assesses user adoption curves managing software metrics.
The system guarantees UI adoption friction remains microscopic. Dashboards mirror logical familiar interfaces (e.g., Card Grid systems similar to Apple HomeKit / Google Home algorithms). End operators possess clear logical layouts managing Wi-Fi credentials natively by typing standard inputs, removing terminal bash code requirements.
**Verdict:** Fully Feasible. No intensive manual training required for end-customers to successfully operate standard systems.

## 18.4 Existing System vs. Proposed System Comparison

| Parameter                   | Existing Ad-Hoc IoT Systems      | Nodely Platform                        |
| :-------------------------- | :------------------------------- | :------------------------------------- |
| Device Setup                | Bluetooth/AP-mode handshake      | URL or manual UUID claiming            |
| Remote Control              | Port forwarding / VPN required   | HTTPS + MQTT via Edge Functions        |
| Firmware Updates             | Manual USB flashing              | OTA via cloud binary URL delivery      |
| User Authentication         | None / Basic HTTP Auth           | JWT + RLS + Multi-channel (Email/Phone) |
| Admin Oversight             | Not available                    | Full fleet management, locking, roles  |
| Real-time Status            | Polling (high latency)           | WebSocket push (sub-500ms)             |
| Mobile Support              | None                             | PWA + responsive Tailwind layout       |
| Security                   | Minimal                          | Database-level RLS + RBAC + Zod        |

---

# 19. SYSTEM DESIGN

System design identifies structural approaches handling data transformations ensuring logic mappings align smoothly, natively accommodating the system requirements effectively.

## 19.1 System Architecture Setup
Nodely implements an advanced **Decoupled Client-Server Serverless Architecture.**
Instead of rendering static markup with server-side logic (e.g., standard PHP architectures), the Client (Browser) runs a heavy JavaScript Single Page Application.
- **Client Processing Module:** Queries internal state management via `@tanstack/react-query` storing data caching arrays locally, minimizing loading thresholds.
- **Middleware Communications:** `supabase-js` intercepts data commands, matching JWT constraints and executing HTTP REST endpoints directly toward Postgres PostgREST modules.
- **Edge Logic Execution:** Specific hardware modifications invoke Serverless Edge Functions, processing external MQTT TCP/IP connections isolated from the database mapping protocols, enhancing modular reliability.
- **Alternative SSR Path:** The EJS backend (`nodely-ejs-export/server.js`) implements the same business logic using Express.js middleware chains, server-side Supabase clients, and EJS template rendering for traditional deployment.

## 19.2 Context Data Flow Diagram (Level 0 DFD)
It illustrates macroscopic bounds demonstrating data flows between external entities and the system.

1. **User (Actor):** Queries `Login Details (Email/Phone + Password/OTP)` → Nodely (Central Node). Nodely returns `JWT Access Token + Session`.
2. **User (Actor):** Sends `Hardware_ID + Action: Claim` → Nodely.
3. **Nodely:** Invokes `claim-device` Edge Function → Supabase (Data Store). Supabase acknowledges success payload → Nodely.
4. **Nodely:** Refreshes interface dynamically triggering Dashboard via WebSocket push.
5. **Admin (Actor):** Queries `All Fleet Data` → Nodely. Nodely accesses Supabase extracting full table schema arrays, ignoring standard user-level RLS restrictions via admin-level policies.
6. **Nodely:** Uses `mqtt-publish` Edge Function triggering `Payload [ON/OFF]` → **IoT Edge Device (Hardware Actor).**
7. **IoT Device (Actor):** Sends heartbeat via `update-state` Edge Function → Nodely → Supabase (`last_seen` updated).

[DIAGRAM_PLACEHOLDER: Insert Level 0 DFD diagram showing User, Admin, IoT Device as external entities and Nodely as the central process with Supabase as the data store.]

## 19.3 Level 1 Data Flow Diagram

| Process ID | Process Name              | Input                               | Output                                 |
| :--------: | :------------------------ | :---------------------------------- | :------------------------------------- |
| P1         | Authentication Handler    | Email/Phone + Password/OTP          | JWT Token, Profile record              |
| P2         | Device Provisioning       | device_uuid + user context          | Claimed device record                  |
| P3         | Real-time Dashboard       | WebSocket subscription              | Live device state updates              |
| P4         | Relay Command Dispatcher  | Toggle intent (device_id, state)    | MQTT payload → Edge Device             |
| P5         | Admin Fleet Manager       | Admin JWT + query filters           | All devices, all users, firmware list  |
| P6         | Firmware Manager          | Version + URL + Changelog           | Stored firmware record                 |
| P7         | WiFi Config Pusher        | SSID + Password + device_uuid       | MQTT WiFi credential payload           |
| P8         | Settings Manager          | Full Name + Theme preference        | Updated profile, theme cookie          |

[DIAGRAM_PLACEHOLDER: Insert Level 1 DFD diagram showing processes P1-P8 with their respective data flows.]

## 19.4 Interaction Sequence (Handling a User Relay Toggle)
1. User clicks the toggle Switch on the `DeviceCard` component.
2. `onCheckedChange` fires, calling `onToggleRelay(device.id, newState)`.
3. The `handleToggleRelay` function in Dashboard.tsx performs an **optimistic UI update**: the local `devices` React state array is updated immediately using `setDevices(prev => prev.map(...))`.
4. A `setTimeout` of 300ms fires (debounce), preventing rapid successive requests.
5. After the debounce window, an async function dispatches `supabase.from('devices').update({ relay_state: newState }).eq('id', deviceId)`.
6. PostgreSQL checks the RLS policy: `(auth.uid() = owner_id)`. If valid, the row is updated.
7. The `prevent_lock_bypass()` trigger verifies the `locked` column has not been changed by a non-admin.
8. Supabase Realtime pushes the `UPDATE` event via the `postgres_changes` WebSocket channel.
9. The `useRealtimeDevices` hook receives the payload and merges the updated device into the React state array.
10. In parallel, the client invokes the `mqtt-publish` Edge Function, which publishes the relay state change as an MQTT message to the physical device.
11. System rests pending next user-invoked action.

## 19.5 Entity-Relationship (ER) Diagram Description

**Entities and Relationships:**
- `auth.users` (1) ←→ (1) `public.profiles` — One-to-one relationship via `user_id` foreign key with CASCADE delete.
- `auth.users` (1) ←→ (1) `public.user_roles` — One-to-one relationship via `user_id` foreign key.
- `auth.users` (1) ←→ (0..*) `public.devices` — One-to-many relationship via `owner_id` foreign key. A user can own zero or many devices.
- `public.firmware` — Standalone entity, not directly linked via foreign key. Devices reference firmware by `firmware_version` string match.

[DIAGRAM_PLACEHOLDER: Insert Entity-Relationship Diagram showing the four tables with their attributes and relationship cardinalities.]

---

# 20. MODULE DESCRIPTION

Decomposing major logic systems into isolated component blocks enables modular development, increasing technical debugging precision and unit testing outputs. The architecture relies extensively on six core frontend modules and a complementary backend module:

## Module 1: Authentication & Authorization Component
*(Source: `src/pages/Auth.tsx` + `src/hooks/useAuth.tsx`)*

**Purpose:** Safely gatekeeps unverified browser clients, preventing unauthorized database access.

**Implementation Details:**
The Auth page implements a comprehensive multi-mode authentication flow controlled by the `authMode` state variable: `login`, `signup`, `forgot`, and `otp`. Within login and signup modes, a `loginMethod` tab (`email` or `phone`) determines which input fields and submission handlers are active.

The `useAuth` hook wraps Supabase's GoTrue API, exposing the following methods:
- `signIn(email, password)` — Standard email/password authentication.
- `signInWithOtp(email)` — Passwordless magic link sent via email.
- `signInWithPhone(phone)` — Sends an SMS OTP to the provided phone number (formatted to E.164 with `+91` prefix for Indian numbers).
- `verifyOtp(email, token)` / `verifyPhoneOtp(phone, token)` — Verifies the 6-digit OTP.
- `signUp(email, password, fullName)` — Creates a new account with email confirmation.
- `signUpWithPhone(phone, password, fullName)` — Creates a new account with SMS OTP confirmation.
- `resetPassword(email)` — Sends a password reset link.
- `signOut()` — Ends the session and clears tokens.

The hook listens to `supabase.auth.onAuthStateChange()` to reactively update the global `user` and `isAdmin` states. The `isAdmin` boolean is determined by querying the `user_roles` table for the current user's role.

**Key UX Features:**
- Password visibility toggle (Eye/EyeOff icons).
- Zod-powered inline error messages beneath each input field.
- Automatic redirect to `/dashboard` upon successful authentication.
- Redirect preservation via `?redirect=` query parameter (e.g., when claiming a device before logging in).

## Module 2: Primary Dashboard Control Component
*(Source: `src/pages/Dashboard.tsx` + `src/hooks/useRealtimeDevices.tsx`)*

**Purpose:** Delivers the aggregated workspace where users monitor and control all their IoT devices.

**Implementation Details:**
The Dashboard fetches all devices belonging to the authenticated user via `supabase.from('devices').select('*').eq('owner_id', user.id)` on mount. It then establishes a Supabase Realtime subscription on the `devices` table, listening for `UPDATE` events. When the database row changes (from any source — the web UI, admin panel, or the device itself via Edge Function), the local React state array is updated immutably.

The dashboard displays aggregate statistics: Total Devices, Online Count (devices whose `last_seen` is within 60 seconds of the current time), and Offline Count. Each device is rendered as a `DeviceCard` component within a responsive CSS Grid layout.

**DeviceCard Component (`src/components/devices/DeviceCard.tsx`):**
Each card displays:
- Online/Offline status indicator (pulsing green dot or grey dot).
- Device name or hardware ID as the title.
- Truncated device UUID in monospace font.
- A 2-column status grid showing connection status and relative last-seen time.
- A locked banner (red, with Lock icon) if `device.locked === true`.
- A relay toggle switch (disabled when locked or updating).
- Firmware version in the footer.
- A dropdown menu (⋮) with options: WiFi Settings, Rename, Lock/Unlock (admin only), and Remove Device.

**Sub-dialogs:**
- **Rename Dialog:** A modal with a text input (max 50 characters) allowing users to assign a friendly name.
- **Delete Confirmation:** An `AlertDialog` warning that unlinking is irreversible and the device can be re-claimed by another user.

## Module 3: Device Registration / Provisioning Flow
*(Source: `src/pages/ClaimDevice.tsx`)*

**Purpose:** Connects new anonymous physical hardware elements to the user's digital platform account.

**Implementation Details:**
The component supports two entry modes determined by the URL parameter:
1. **URL-based Claiming (`/claim/<uuid>`):** The UUID is extracted from `useParams()`. A `useEffect` hook automatically calls the `claim-device` Edge Function with `action: 'check'` to verify the device's status.
2. **Manual Claiming (`/claim/manual`):** The user is presented with a text input field to type or paste their device UUID. A "Find Device" button triggers the same check.

The Edge Function returns one of three statuses: `unclaimed` (device exists and is available), `claimed` (already owned — with a sub-check for whether the current user owns it), or an error (device not found). Upon successful verification of an unclaimed device, the user is shown the Hardware ID and an optional "Device Name" field. Clicking "Claim Device" invokes the Edge Function again to bind the device to the user's account, then redirects to the dashboard.

**Error Handling:** All error states are displayed with contextual icons (X for errors, Loader2 for loading, Check for success) wrapped in Framer Motion transitions.

## Module 4: The Administrative Ecosystem
*(Source: `src/pages/Admin.tsx`)*

**Purpose:** Elevates standard dashboard capabilities, replacing multi-tenant restrictions and applying total fleet insights for platform administrators.

**Implementation Details:**
Access is strictly gated: the page redirects non-admin users back to `/dashboard` with a destructive toast: "You do not have admin privileges." The Admin page loads **all** devices across all users (using the admin-level Supabase client that bypasses user-scoped RLS) and all user profiles.

**Device Management Features:**
- Full tabular listing of every device in the system with owner email, device UUID, hardware ID, relay state, lock status, and firmware version.
- **Lock/Unlock Toggle:** Admins can lock a device, which sets `locked = true` in the database, triggering the `prevent_lock_bypass()` function to block non-admin modifications. Unlocking reverses this.
- **Force Unlink:** Sets `owner_id = null` and `claimed = false`, restoring the device to an unclaimed state.
- **Transfer Ownership:** Reassigns the device to a different user by updating the `owner_id`.

**User Management Features:**
- Full user listing with email, full name, role, and account creation date.
- **Role Change:** Admins can promote a customer to admin or demote an admin to customer by updating the `user_roles` table.
- **Delete User:** Removes the user account entirely. CASCADE constraints automatically clean up associated `profiles` and `user_roles` records.

## Module 5: OTA Firmware Matrix
*(Source: `src/pages/FirmwareManagement.tsx`)*

**Purpose:** Manages downstream firmware deployments for the entire device fleet.

**Implementation Details:**
This page is restricted to admin users (same guard pattern as Admin.tsx). It queries `supabase.from('firmware').select('*').order('created_at', { ascending: false })` to list all firmware versions in reverse chronological order.

**Add Firmware Dialog:**
A Shadcn `Dialog` component with three input fields:
- **Version** (required) — Semantic versioning string (e.g., "1.0.1").
- **Binary URL** (required) — HTTPS link to the `.bin` firmware file.
- **Changelog** (optional) — Free-text description of changes.

Upon submission, the record is inserted into the `firmware` table and the list refreshes.

**Table Display:**
Each firmware entry is rendered in a Shadcn `Table` with columns: Version (with "Latest" badge for the most recent), URL (clickable external link), Changelog, Date, and a delete action button.

**Device Interaction:**
Physical devices periodically poll the `get-firmware` Edge Function. If a newer version is detected (comparing the version string against the device's local `firmware_version`), the device downloads the binary from the provided URL and performs a self-update.

## Module 6: User Settings & Profile Management
*(Source: `src/pages/Settings.tsx`)*

**Purpose:** Allows users to manage their personal profile information and application preferences.

**Implementation Details:**
The Settings page is split into two glass-card sections:
1. **Profile Section:** Displays the user's email (read-only, disabled input) and a full name field (editable, validated with Zod: `z.string().trim().max(100)`). Changes are saved via `supabase.from('profiles').update({ full_name }).eq('user_id', user.id)`.
2. **Appearance Section:** A `RadioGroup` with three options — Light, Dark, and System — powered by `next-themes`. The selected theme is applied immediately by toggling the `dark` class on the HTML root element.

## Module 7: Landing Page & Marketing Frontend
*(Source: `src/pages/Index.tsx` + `src/components/landing/`)*

**Purpose:** Provides the public-facing introduction to the Nodely platform for visitors and potential users.

**Components:**
- **HeroSection:** Full-viewport hero with animated gradient background, pulsing orbs, a "Start Building" CTA, and four key statistics (Unlimited Devices, <100ms Response Time, Zero-Trust Security, OTA Ready).
- **FeaturesSection:** Grid of feature cards highlighting core capabilities.
- **HowItWorksSection:** Step-by-step guide to onboarding (Register → Claim Device → Control).
- **SecuritySection:** Visual breakdown of the security architecture.
- **Footer:** Links, branding, and social references.

## Module 8: EJS Server-Side Rendered Backend (Alternative Frontend)
*(Source: `nodely-ejs-export/server.js` + `nodely-ejs-export/routes/` + `nodely-ejs-export/views/`)*

**Purpose:** Provides a traditional server-rendered alternative to the React SPA for deployments without access to modern static hosting or where server-side rendering is preferred.

**Architecture:**
- **Express.js Server** running on configurable port (default 3000).
- **Two Supabase Clients:** One using the anonymous key (user-context operations), one using the service role key (admin operations like querying all users).
- **Session Middleware:** `express-session` with 7-day secure cookies.
- **Auth Middleware:** Every request passes through `authMiddleware`, which verifies the session's `access_token` with Supabase and determines `req.user` and `req.isAdmin`.
- **Route Guards:** `requireAuth` redirects unauthenticated users to `/auth?mode=login`. `requireAdmin` additionally checks `isAdmin` and redirects unauthorized users to `/dashboard`.
- **Routes:** Four route modules — `auth.js` (login/signup/logout), `dashboard.js` (device listing and control), `admin.js` (fleet and user management), `api.js` (JSON API endpoints for AJAX calls from EJS views).
- **Views:** EJS templates for `index`, `auth`, `dashboard`, `claim`, `settings`, `404`, and admin sub-views. A `partials/` directory contains shared header/footer components.

---

# 21. DATABASE DESIGN / DATA STRUCTURE

Nodely natively utilizes Relational PostgreSQL architecture guaranteeing ACID (Atomicity, Consistency, Isolation, Durability) properties, optimizing data safety and consistency.

Below are the exhaustive Table Schemas explicitly defined in the `/supabase/migrations/` directory and consolidated in `master.sql`.

## 21.1 Table: `public.profiles`
**Purpose:** Stores supplementary user profile information not held by the `auth.users` system table.

| Column Name   | Data Type     | Constraints                              | Description                               |
| :------------ | :------------ | :--------------------------------------- | :---------------------------------------- |
| `id`          | UUID          | PRIMARY KEY, DEFAULT `gen_random_uuid()` | Internal unique identifier                |
| `user_id`     | UUID          | FOREIGN KEY → `auth.users(id)` ON DELETE CASCADE | Links to the authentication user          |
| `email`       | TEXT          | Nullable                                 | User's email address (mirrored)           |
| `full_name`   | TEXT          | Nullable                                 | User's display name                       |
| `avatar_url`  | TEXT          | Nullable                                 | URL to the user's profile picture         |
| `created_at`  | TIMESTAMPTZ   | DEFAULT `now()`                          | Record creation timestamp                 |
| `updated_at`  | TIMESTAMPTZ   | DEFAULT `now()`                          | Last modification timestamp               |

**RLS Policies:**
- `SELECT`: Users can read their own profile (`auth.uid() = user_id`).
- `UPDATE`: Users can update their own profile (`auth.uid() = user_id`).

## 21.2 Table: `public.user_roles`
**Purpose:** Implements Role-Based Access Control (RBAC) by associating users with specific roles. Decouples authorization from the `auth.users` table.

| Column Name | Data Type            | Constraints                              | Description                       |
| :---------- | :------------------- | :--------------------------------------- | :-------------------------------- |
| `id`        | UUID                 | PRIMARY KEY, DEFAULT `gen_random_uuid()` | Internal unique identifier        |
| `user_id`   | UUID                 | FOREIGN KEY → `auth.users(id)` ON DELETE CASCADE | Links to the authentication user  |
| `role`      | ENUM (`app_role`)    | DEFAULT `'customer'`                     | Either `'admin'` or `'customer'`  |

**Custom Enum Type:**
```sql
CREATE TYPE public.app_role AS ENUM ('admin', 'customer');
```

**RLS Policies:**
- `SELECT`: Users can read their own role (`auth.uid() = user_id`). Admins can read all roles via `has_role()`.
- `INSERT` / `UPDATE` / `DELETE`: Only admins (verified via `has_role(auth.uid(), 'admin')`) can modify role assignments.

## 21.3 Table: `public.devices`
**Purpose:** The most critical table structure. Defines the logical representation of every physical IoT edge device registered in the system, synchronizing WebSocket-bound state and maintaining hardware-to-user mappings.

| Column Name        | Data Type | Constraints                              | Description                                          |
| :----------------- | :-------- | :--------------------------------------- | :--------------------------------------------------- |
| `id`               | UUID      | PRIMARY KEY, DEFAULT `gen_random_uuid()` | Internal platform identifier                         |
| `device_uuid`      | TEXT      | UNIQUE, NOT NULL                         | Unique device identifier (hardware-generated)        |
| `hardware_id`      | TEXT      | UNIQUE, NOT NULL                         | Secondary hardware identification string             |
| `owner_id`         | UUID      | FOREIGN KEY → `auth.users(id)`, Nullable | The authenticated user who owns this device           |
| `device_name`      | TEXT      | Nullable                                 | User-assigned friendly name                          |
| `claimed`          | BOOLEAN   | DEFAULT `false`                          | Whether the device has been claimed by any user      |
| `relay_state`      | BOOLEAN   | DEFAULT `false`                          | Current relay state: `true` = ON, `false` = OFF      |
| `locked`           | BOOLEAN   | DEFAULT `false`                          | Admin lock: when `true`, relay control is disabled   |
| `firmware_version` | TEXT      | DEFAULT `'1.0.0'`                        | Currently running firmware version string            |
| `last_seen`        | TIMESTAMPTZ | Nullable                               | Timestamp of the device's last heartbeat/state update |
| `created_at`       | TIMESTAMPTZ | DEFAULT `now()`                         | Record creation timestamp                            |

**RLS Policies:**
- `SELECT`: Users can read devices where `auth.uid() = owner_id`. Admins can read all devices.
- `INSERT`: Only Edge Functions with service role key can insert (device self-registration).
- `UPDATE`: Users can update their own devices (`auth.uid() = owner_id`). Subject to `prevent_lock_bypass()` trigger.
- `DELETE`: Users can delete (unlink) their own devices. Admins can delete any device.

## 21.4 Table: `public.firmware`
**Purpose:** Stores OTA firmware release records including download URLs and changelogs for device fleet management.

| Column Name   | Data Type   | Constraints                              | Description                             |
| :------------ | :---------- | :--------------------------------------- | :-------------------------------------- |
| `id`          | UUID        | PRIMARY KEY, DEFAULT `gen_random_uuid()` | Internal unique identifier              |
| `version`     | TEXT        | NOT NULL                                 | Semantic version string (e.g., "1.0.1") |
| `url`         | TEXT        | NOT NULL                                 | HTTPS URL to the `.bin` firmware binary |
| `changelog`   | TEXT        | Nullable                                 | Description of changes in this version  |
| `created_at`  | TIMESTAMPTZ | DEFAULT `now()`                          | Upload timestamp                        |

**RLS Policies:**
- `SELECT`: All authenticated users can read firmware records (devices need to check for updates).
- `INSERT` / `UPDATE` / `DELETE`: Only admins can modify firmware records.

## 21.5 Database Functions

### `public.has_role(user_id UUID, role app_role) → BOOLEAN`
A `SECURITY DEFINER` function that checks whether a given user possesses a specific role. It queries `user_roles` and returns `true` if a matching record exists. This function is the backbone of all admin-level RLS policies and the `prevent_lock_bypass()` trigger.

```sql
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
END;
$$;
```

### `public.on_auth_user_created() → TRIGGER`
A `SECURITY DEFINER` trigger function that fires `AFTER INSERT` on `auth.users`. It automatically creates a matching `profiles` record with the user's email and metadata full name, and a `user_roles` record with the default `'customer'` role.

### `public.prevent_lock_bypass() → TRIGGER`
A `BEFORE UPDATE` trigger on `public.devices`. If the `locked` column is being changed and the current user is NOT an admin (checked via `has_role(auth.uid(), 'admin')`), the function raises a hard exception: `'Only admins can change device lock status'`, aborting the transaction.

```sql
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
```

## 21.6 Database Triggers Summary

| Trigger Name            | Table           | Event           | Function Called            |
| :---------------------- | :-------------- | :-------------- | :------------------------- |
| `on_auth_user_created`  | `auth.users`    | `AFTER INSERT`  | `on_auth_user_created()`   |
| `check_lock_bypass`     | `public.devices`| `BEFORE UPDATE` | `prevent_lock_bypass()`    |

## 21.7 Migration History
The database schema was developed incrementally across 7 migrations:

| Migration Timestamp      | Description                                                |
| :----------------------- | :--------------------------------------------------------- |
| `20260106200328`         | Initial schema: devices, profiles, user_roles, firmware tables, RLS policies, triggers |
| `20260204214944`         | Schema refinement: additional constraints or index additions |
| `20260320090030`         | Minor column adjustments                                    |
| `20260320090343`         | Policy refinement                                           |
| `20260320091756`         | Trigger logic updates                                       |
| `20260320115947`         | Additional RLS policies for admin operations                |
| `20260320120254`         | Final production schema adjustments                         |

---

# 22. LIST OF REPORTS

The system generates several real-time and on-demand reports that translate raw database records into actionable visual intelligence for both end-users and administrators.

## 22.1 Dashboard Fleet Overview Report
**Generated By:** `Dashboard.tsx` (User Scope)
**Content:** This report is dynamically rendered as the main Dashboard view. It calculates and displays:
- **Total Devices:** Count of all devices owned by the current user (`devices.length`).
- **Online Devices:** Count of devices whose `last_seen` timestamp falls within the last 60 seconds (`new Date(device.last_seen).getTime() > Date.now() - 60000`).
- **Offline Devices:** Total minus Online.
- **Individual Device Status Cards:** Each device's relay state (Active/Inactive), connection status (Online/Offline with colour-coded indicators), last communication time (relative format), firmware version, and lock status.

This report updates in **real-time** via WebSocket subscriptions — no manual refresh is required.

## 22.2 Global Administrative Device Audit Report
**Generated By:** `Admin.tsx` (Admin Scope)
**Content:** A comprehensive tabular report listing **every device** across all users in the system. Columns include:
- Device UUID and Hardware ID
- Owner Email (or "Unclaimed" if `owner_id` is null)
- Device Name
- Relay State (ON/OFF)
- Lock Status (Locked/Unlocked)
- Firmware Version
- Last Seen timestamp

This report enables administrators to identify orphaned devices, detect firmware version inconsistencies, and audit device ownership across the platform.

## 22.3 User Management Report
**Generated By:** `Admin.tsx` (Admin Scope)
**Content:** A tabular listing of all registered users with:
- Email Address
- Full Name (from profiles)
- Role (Admin/Customer)
- Account Creation Date
- Action buttons for role modification and account deletion

## 22.4 Active Firmware Deployment Tracker
**Generated By:** `FirmwareManagement.tsx` (Admin Scope)
**Content:** A reverse-chronologically ordered table of all firmware releases, showing:
- Version number (with "Latest" badge for the most recent)
- Binary download URL (clickable external link)
- Changelog text
- Upload date
- Action button for deletion

This report allows administrators to track the firmware release history and verify which version is currently served as "latest" to polling devices.

## 22.5 User Profile Report
**Generated By:** `Settings.tsx` (User Scope)
**Content:** A read-only summary of the user's account information (email, full name) alongside their active theme preference (Light/Dark/System).

---

# 23. SCOPE & FUTURE ENHANCEMENTS

While Nodely robustly implements comprehensive device management, real-time monitoring, multi-channel authentication, and OTA firmware delivery, several areas present opportunities for future expansion.

## 23.1 Current Project Scope
The current implementation covers:
- Complete device lifecycle management (registration → claiming → monitoring → control → unlinking).
- Real-time bidirectional communication via WebSockets and MQTT.
- Multi-channel authentication (Email/Password, Phone/OTP, Magic Link).
- Role-based administrative controls over the full device fleet and user base.
- OTA firmware distribution with version tracking and changelogs.
- Dark/Light/System theme support.
- PWA capability for mobile installation.
- Dual frontend architecture (React SPA + EJS SSR).

## 23.2 Future Enhancement A: Time-Series Telemetry & Historical Analytics
Future modules could integrate specialized time-series databases (e.g., InfluxDB or TimescaleDB) to log historical analog sensor readings (voltage, temperature, humidity). This would enable charting device uptime trends over weeks/months, identifying failure patterns, and providing predictive maintenance alerts.

## 23.3 Future Enhancement B: Device Group Management
Currently, each device is controlled individually. A future enhancement would allow users to create device groups (e.g., "Living Room", "Factory Floor") and apply batch actions — such as toggling all relays in a group simultaneously with a single click — significantly improving workflow efficiency for users managing large device fleets.

## 23.4 Future Enhancement C: Push Notifications & Alerts
Implementing browser push notifications (via the Web Push API) and email/SMS alerts for critical events would enable proactive monitoring. Users could be notified instantly when a device goes offline, when a relay state changes unexpectedly, or when new firmware is available, without needing to keep the dashboard tab open.

## 23.5 Future Enhancement D: API Key Authentication for Developers
Introducing API key-based authentication would allow third-party developers and industrial integration partners to programmatically control devices via a RESTful API without needing to use the web interface, opening the platform to automation and integration with tools like Home Assistant, Node-RED, or IFTTT.

## 23.6 Future Enhancement E: Audit Log & Activity History
A comprehensive activity log tracking all device interactions (who toggled which relay, when a device was locked/unlocked, when ownership was transferred) would provide accountability and traceability for enterprise deployments where compliance tracking is required.

---

# 24. IMPLEMENTATION METHODOLOGY

## 24.1 Development Environment Setup
The development structure utilizes modern command-line workflows within the Node.js ecosystem:

```bash
# Step 1: Project initialization with Vite + React + TypeScript
npm create vite@latest nodely -- --template react-ts

# Step 2: Install dependencies
npm install

# Step 3: Install Tailwind CSS and PostCSS
npm install tailwindcss postcss autoprefixer

# Step 4: Install Supabase client
npm install @supabase/supabase-js

# Step 5: Install animation and UI libraries
npm install framer-motion lucide-react @tanstack/react-query
npm install next-themes zod react-router-dom

# Step 6: Initialize Shadcn-UI
npx shadcn-ui@latest init

# Step 7: Add required Shadcn components
npx shadcn-ui@latest add button input label dialog alert-dialog
npx shadcn-ui@latest add dropdown-menu switch tabs table toast
npx shadcn-ui@latest add radio-group input-otp textarea alert

# Step 8: Install PWA plugin
npm install vite-plugin-pwa
```

## 24.2 Project File Structure
The final project follows a modular, feature-organized architecture:

```
nodely/
├── public/                          # Static assets served at root
│   ├── pwa-192x192.svg             # PWA icon (small)
│   ├── pwa-512x512.svg             # PWA icon (large)
│   └── favicon.ico                 # Browser tab icon
├── src/
│   ├── components/
│   │   ├── devices/
│   │   │   ├── DeviceCard.tsx       # Individual device control card
│   │   │   ├── ConnectionStatus.tsx # Connection indicator widget
│   │   │   └── WiFiConfigDialog.tsx # WiFi credential push dialog
│   │   ├── landing/
│   │   │   ├── HeroSection.tsx      # Landing page hero
│   │   │   ├── FeaturesSection.tsx  # Feature showcase
│   │   │   ├── HowItWorksSection.tsx# Setup guide
│   │   │   ├── SecuritySection.tsx  # Security overview
│   │   │   └── Footer.tsx           # Page footer
│   │   └── ui/                      # Shadcn-UI components (auto-generated)
│   ├── hooks/
│   │   ├── useAuth.tsx              # Authentication state & methods
│   │   ├── useRealtimeDevices.tsx   # WebSocket device subscriptions
│   │   └── use-toast.ts            # Toast notification hook
│   ├── integrations/
│   │   └── supabase/
│   │       ├── client.ts           # Supabase client initialization
│   │       └── types.ts            # Auto-generated Database types
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn, etc.)
│   ├── pages/
│   │   ├── Auth.tsx                # Login / Signup / Forgot / OTP
│   │   ├── Dashboard.tsx           # User device dashboard
│   │   ├── Admin.tsx               # Admin fleet management
│   │   ├── ClaimDevice.tsx         # Device provisioning wizard
│   │   ├── FirmwareManagement.tsx  # OTA firmware portal
│   │   ├── Settings.tsx            # User profile & theme settings
│   │   ├── Index.tsx               # Landing page
│   │   └── NotFound.tsx            # 404 page
│   ├── App.tsx                      # Root routing configuration
│   └── main.tsx                     # Application entry point
├── supabase/
│   ├── config.toml                 # Supabase project configuration
│   ├── functions/                  # Edge Functions
│   │   ├── claim-device/           # Device ownership management
│   │   ├── get-command/            # Pending command retrieval
│   │   ├── get-firmware/           # Latest firmware fetch
│   │   ├── mqtt-publish/           # MQTT message publisher
│   │   ├── register-device/       # Device self-registration
│   │   └── update-state/          # Device heartbeat receiver
│   └── migrations/                 # SQL migration files (7 total)
├── nodely-ejs-export/              # Alternative EJS SSR backend
│   ├── server.js                   # Express.js server entry
│   ├── routes/
│   │   ├── auth.js                 # Authentication routes
│   │   ├── dashboard.js            # Dashboard routes
│   │   ├── admin.js                # Admin routes
│   │   └── api.js                  # JSON API routes
│   └── views/
│       ├── index.ejs               # Landing page template
│       ├── auth.ejs                # Auth form template
│       ├── dashboard.ejs           # Dashboard template
│       ├── claim.ejs               # Device claim template
│       ├── settings.ejs            # Settings template
│       ├── 404.ejs                 # Error page template
│       ├── admin/                  # Admin sub-views
│       └── partials/               # Shared header/footer
├── master.sql                      # Consolidated database schema
├── vite.config.ts                  # Vite build configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript compiler config
├── package.json                    # Project dependencies
└── bun.lock                        # Dependency lock file
```

## 24.3 Supabase Client Initialization
The Supabase client is instantiated in `src/integrations/supabase/client.ts` using environment variables injected at build time:

```typescript
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
```

The `<Database>` generic parameter enables full type-safety: every `.from('devices').select('*')` call returns properly typed `Device` objects, and incorrect column names are caught at compile-time.

## 24.4 Realtime WebSocket Ecosystem Binding
The `useRealtimeDevices` hook establishes a persistent WebSocket connection to PostgreSQL via Supabase Realtime:

```typescript
const channel = supabase.channel('schema-db-changes')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'devices' },
    (payload) => {
      const updatedDevice = payload.new as Device;
      setDevices(prev => prev.map(device =>
        device.id === updatedDevice.id ? { ...device, ...updatedDevice } : device
      ));
    }
  )
  .subscribe((status) => {
    if (status === 'SUBSCRIBED') {
      setConnectionStatus('connected');
    } else {
      setConnectionStatus('disconnected');
    }
  });
```

This pattern ensures live state synchronization: if another admin locks a device, or the device itself updates its relay state via the `update-state` Edge Function, the change propagates to all connected dashboard clients within milliseconds.

## 24.5 PWA Configuration
The PWA is configured via the `VitePWA` plugin in `vite.config.ts`:

```typescript
VitePWA({
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "robots.txt"],
  manifest: {
    name: "Nodely - IoT Device Management",
    short_name: "Nodely",
    description: "Smart IoT device management platform",
    theme_color: "#0f172a",
    background_color: "#0f172a",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    icons: [/* ... SVG icons at 192 and 512 sizes */],
  },
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
    runtimeCaching: [{
      urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "supabase-cache",
        expiration: { maxEntries: 50, maxAgeSeconds: 86400 },
      },
    }],
  },
})
```

This ensures all static assets are pre-cached by the service worker, and Supabase API responses are cached with a Network-First strategy (serve from network when available, fall back to cache when offline).

---

# 25. TESTING

Testing methodologies guarantee product stability by identifying edge cases, validating business logic, and ensuring the security model behaves correctly under adversarial conditions. The following testing scenarios were executed:

## 25.1 Unit Testing

### Test Case 1: Zod Email Validation
**Objective:** Verify that the email schema rejects invalid inputs.
| Input           | Expected Result | Actual Result | Status |
| :-------------- | :-------------- | :------------ | :----- |
| `user@test.com` | Valid           | Valid         | ✅ Pass |
| `user@`         | Invalid         | Invalid       | ✅ Pass |
| `plainstring`   | Invalid         | Invalid       | ✅ Pass |
| (empty string)  | Invalid         | Invalid       | ✅ Pass |

### Test Case 2: Phone Number E.164 Formatting
**Objective:** Verify that `formatPhoneE164()` correctly prepends `+91` for Indian numbers.
| Input           | Expected Output   | Actual Output | Status |
| :-------------- | :---------------- | :------------ | :----- |
| `9876543210`    | `+919876543210`   | `+919876543210` | ✅ Pass |
| `09876543210`   | `+919876543210`   | `+919876543210` | ✅ Pass |
| `919876543210`  | `+919876543210`   | `+919876543210` | ✅ Pass |

### Test Case 3: Device Online Status Calculation
**Objective:** Verify that `isOnline` correctly determines device connectivity.
| `last_seen` Value               | Expected `isOnline` | Actual | Status |
| :------------------------------ | :------------------ | :----- | :----- |
| 30 seconds ago                  | `true`              | `true` | ✅ Pass |
| 2 minutes ago                   | `false`             | `false`| ✅ Pass |
| `null`                          | `false`             | `false`| ✅ Pass |

### Test Case 4: Relative Timestamp Display
**Objective:** Verify that `getLastSeenText()` returns correct human-readable strings.
| Time Difference | Expected Output    | Actual Output | Status |
| :-------------- | :----------------- | :------------ | :----- |
| 10 seconds      | "Just now"         | "Just now"    | ✅ Pass |
| 5 minutes       | "5m ago"           | "5m ago"      | ✅ Pass |
| 3 hours         | "3h ago"           | "3h ago"      | ✅ Pass |
| 2 days          | "2d ago"           | "2d ago"      | ✅ Pass |
| Never connected | "Never connected"  | "Never connected" | ✅ Pass |

## 25.2 Integration Testing

### Test Case 5: User Registration Flow (Email)
**Steps:**
1. Navigate to `/auth?mode=signup`.
2. Select "Email" tab.
3. Enter valid full name, email, and password (6+ characters).
4. Click "Create Account".
**Expected:** Account created, confirmation email sent, toast message displayed, redirect to login mode.
**Result:** ✅ Pass

### Test Case 6: User Registration Flow (Phone)
**Steps:**
1. Navigate to `/auth?mode=signup`.
2. Select "Mobile" tab.
3. Enter valid full name, 10-digit phone number, and password.
4. Click "Create Account".
**Expected:** OTP sent via SMS, UI transitions to OTP input mode.
**Result:** ✅ Pass

### Test Case 7: Device Claiming (URL-based)
**Steps:**
1. Log in as a customer.
2. Navigate to `/claim/<valid-unclaimed-uuid>`.
3. Enter optional device name.
4. Click "Claim Device".
**Expected:** Device bound to user, redirect to dashboard, device appears in grid.
**Result:** ✅ Pass

### Test Case 8: Device Claiming (Already Claimed)
**Steps:**
1. Log in as User B.
2. Navigate to `/claim/<uuid-owned-by-User-A>`.
**Expected:** Error message: "This device has already been claimed by another user."
**Result:** ✅ Pass

## 25.3 Security Testing

### Scenario A: RLS Bypass Attempt
**Procedure:** User A signs into their account and attempts to directly query `supabase.from('devices').select('*')` without the `owner_id` filter.
**Expected:** PostgreSQL RLS policy returns only devices where `owner_id = auth.uid()`. Devices belonging to other users are not visible.
**Result:** ✅ Passed — Only User A's devices were returned.

### Scenario B: Non-Admin Lock Bypass Attempt
**Procedure:** A customer-role user attempts to execute `supabase.from('devices').update({ locked: false }).eq('id', '<locked-device-id>')`.
**Expected:** The `prevent_lock_bypass()` trigger raises an exception: "Only admins can change device lock status."
**Result:** ✅ Passed — The update was rejected with the expected error message.

### Scenario C: Admin Page Access by Non-Admin
**Procedure:** A customer-role user navigates directly to `/admin` in the browser.
**Expected:** The `useAuth` hook detects `isAdmin === false`, displays a destructive toast "You do not have admin privileges", and redirects to `/dashboard`.
**Result:** ✅ Passed — The user was redirected immediately.

### Scenario D: Firmware Page Access by Non-Admin
**Procedure:** A customer-role user navigates directly to `/firmware`.
**Expected:** Same behaviour as Admin — redirect to `/dashboard` with access denied toast.
**Result:** ✅ Passed.

## 25.4 UI/UX Testing

### Scenario E: Debounce Logic Queue Test
**Procedure:** User clicks the relay toggle switch 10 times in rapid succession (under 1 second).
**Expected:** The debounce mechanism (300ms `setTimeout`) coalesces rapid clicks into a single database update request, preventing MQTT flooding.
**Result:** ✅ Passed — Network monitoring confirmed a single `PATCH` request was dispatched after the final click.

### Scenario F: Optimistic UI Rollback
**Procedure:** Simulate a relay toggle when the Supabase API returns an error (e.g., network timeout).
**Expected:** The toggle switch visually activates immediately (optimistic update), then reverts to its original state when the error is caught.
**Result:** ✅ Passed — The UI correctly rolled back the visual state.

### Scenario G: Responsive Layout Verification
**Procedure:** Access the dashboard at viewport widths of 360px (mobile), 768px (tablet), and 1920px (desktop).
**Expected:** Device cards adapt from a single-column layout (mobile) to two columns (tablet) to three or four columns (desktop). All text remains readable, and no horizontal scrolling occurs.
**Result:** ✅ Passed across all breakpoints.

### Scenario H: Theme Switching
**Procedure:** Toggle between Light, Dark, and System themes on the Settings page.
**Expected:** Background colours, text colours, and card styles update immediately. Preference persists after page refresh.
**Result:** ✅ Passed — Verified in Chrome, Firefox, and Safari.

## 25.5 PWA Testing

### Scenario I: Service Worker Installation
**Procedure:** Access the application on Android Chrome, verify the "Add to Home Screen" prompt appears.
**Expected:** Application installs as a standalone PWA with the Nodely icon and dark splash screen.
**Result:** ✅ Passed.

### Scenario J: Offline Cache Behaviour
**Procedure:** Load the dashboard with devices, then disconnect from the internet.
**Expected:** Static assets (HTML, CSS, JS) remain accessible from the service worker cache. API calls fail gracefully with appropriate error messages.
**Result:** ✅ Passed — The application shell loaded, and a "No internet connection" state was displayed for dynamic data.

---

# 26. LIMITATIONS & FUTURE IMPROVEMENTS

## 26.1 Known System Limitations

### L1: Permanent Cloud Dependency
Nodely requires a persistent internet connection for both the web dashboard and the IoT edge devices. If the Supabase cloud service experiences downtime or the user's internet connection drops, device control becomes temporarily unavailable. There is currently no local fallback or offline device control mechanism.

### L2: MQTT Latency Overhead
Serverless Edge Functions introduce a cold-start latency when not recently invoked. Combined with MQTT broker round-trip times, the end-to-end delay from clicking a relay toggle to the physical relay changing state can range from 200ms to 2 seconds in worst-case scenarios. While acceptable for home automation, this may not meet the requirements of latency-critical industrial applications.

### L3: Single-Relay Device Model
The current `devices` table schema stores only a single `relay_state` boolean per device. Devices with multiple relays (e.g., 4-channel relay modules) would require either schema modifications (adding `relay_state_2`, etc.) or a separate `relay_channels` junction table.

### L4: No Device-to-Device Communication
Devices cannot directly communicate with each other through the platform. All control flows through the cloud (User → Cloud → Device). Implementing device mesh networking or local scene/automation triggers would require significant architectural additions.

### L5: Limited Audit Trail
While the database tracks `created_at` and `last_seen` timestamps, there is no comprehensive audit log recording who performed which actions (e.g., which admin locked a device, when a relay was toggled, or when ownership was transferred). This limits accountability in multi-admin environments.

### L6: No Rate Limiting
The current implementation does not enforce rate limiting on authentication attempts or API requests beyond the debounce on relay toggles. This could expose the system to brute-force attacks on the login endpoint.

## 26.2 Recommended Future Improvements

1. **Local Discovery Protocol:** Implement a UDP-based local network discovery system allowing devices on the same LAN to be controlled directly without cloud dependency when an internet connection is unavailable.
2. **Multi-Channel Relay Support:** Extend the database schema and UI to support devices with multiple relay channels, each independently controllable.
3. **Comprehensive Audit Logging:** Add an `activity_logs` table recording all user and admin actions with timestamps, actor IDs, and action descriptions.
4. **Rate Limiting & IP Blocking:** Implement server-side rate limiting using Supabase Edge Function middleware or an external service like Cloudflare.
5. **Two-Factor Authentication (2FA):** Add TOTP-based two-factor authentication for admin accounts to further secure elevated privileges.
6. **Webhook Integrations:** Allow users to configure webhooks that fire on device state changes, enabling integration with external services like Slack, Discord, or IFTTT.

---

# 27. SECURITY MECHANISM

The Nodely ecosystem implements a defence-in-depth security strategy with multiple layered protections spanning the database, API, and presentation layers.

## 27.1 Authentication Security

### JSON Web Token (JWT) Architecture
Supabase's GoTrue authentication service issues signed JWT access tokens upon successful login. Each token:
- Contains the user's `sub` (subject = user UUID), `email`, `role`, and `aud` (audience) claims.
- Has a configurable expiration time (default 3600 seconds / 1 hour).
- Is automatically refreshed by the Supabase client (`autoRefreshToken: true`) before expiration, ensuring seamless long sessions.
- Is stored in `localStorage` with `persistSession: true`, enabling session persistence across browser tabs and page refreshes.

### Input Validation with Zod
All user-facing input fields are validated client-side using Zod schemas before any API request is dispatched:
- **Email:** `z.string().email('Please enter a valid email address')` — Rejects malformed email formats.
- **Phone:** `z.string().min(10, 'Please enter a valid phone number')` with a `.refine()` check that the cleaned digit count is ≥ 10.
- **Password:** `z.string().min(6, 'Password must be at least 6 characters')` — Enforces minimum complexity.
- **Profile Name:** `z.string().trim().max(100, 'Name must be less than 100 characters')` — Prevents oversized inputs.

This client-side validation provides immediate user feedback and reduces unnecessary API calls, but it does **not** replace server-side validation — Supabase enforces its own constraints at the database level.

### Multi-Channel Authentication
Supporting multiple authentication methods (Email/Password, Phone/OTP, Magic Link) reduces the attack surface from credential-only attacks, as OTP-based flows are inherently resistant to password-based attacks like credential stuffing.

## 27.2 Authorization Security

### Row Level Security (RLS)
Every table in the Nodely database has RLS enabled. This is the **primary** authorization mechanism — it operates at the PostgreSQL level, independent of any application code. Key policies include:

- **Devices SELECT:** `(auth.uid() = owner_id)` — Users can only see their own devices.
- **Devices UPDATE:** `(auth.uid() = owner_id)` — Users can only modify their own devices.
- **Admin Override:** Policies check `has_role(auth.uid(), 'admin')` to grant admins full access.
- **Firmware Modification:** Only admins can INSERT, UPDATE, or DELETE firmware records.

### Database Trigger Guards
The `prevent_lock_bypass()` trigger provides an additional layer beyond RLS policies. Even if a malicious client somehow constructs a valid UPDATE query that passes RLS, the trigger independently verifies that only admin-role users can modify the `locked` column. This is a **SECURITY DEFINER** function, meaning it executes with the privileges of the function owner (superuser), not the calling user, preventing privilege escalation.

### Role-Based Access Control (RBAC)
The `user_roles` table with the `app_role` enum (`admin` | `customer`) cleanly separates authorization concerns from the authentication layer. The `has_role()` function is the single source of truth for role verification, used consistently across:
- RLS policies (database level)
- Trigger functions (database level)
- `useAuth` hook (application level)
- Express middleware (EJS backend level)

## 27.3 Session Security

### React SPA (Frontend)
- JWT tokens stored in `localStorage` (client-only, no server-side session state).
- Automatic token refresh before expiration via Supabase client.
- `onAuthStateChange` listener reactively clears the UI state when a session is invalidated.

### Express.js EJS (Backend)
- Server-side session management via `express-session` with a `SESSION_SECRET` environment variable.
- HTTP-only cookies with `secure: true` in production (prevents JavaScript access and ensures HTTPS-only transmission).
- Session TTL of 7 days (`maxAge: 7 * 24 * 60 * 60 * 1000`).
- Token validation on every request via `supabase.auth.getUser(req.session.access_token)`.

## 27.4 Infrastructure Security

### Environment Variable Isolation
Sensitive credentials (Supabase URL, anonymous key, service role key, session secrets) are stored exclusively in `.env` files that are **never** committed to version control. The React frontend only has access to the anonymous (publishable) key, which is safe for client-side use because all data access is further restricted by RLS policies.

### Service Role Key Protection
The Supabase service role key — which bypasses all RLS policies — is used **only** in the EJS backend (`supabaseAdmin` client) running on a secured server, never in the browser. This prevents malicious users from exploiting the elevated key to access or modify data belonging to other users.

### CORS and HTTPS
All Supabase API endpoints enforce CORS headers and require HTTPS connections. The PWA service worker only caches responses from `https://*.supabase.co`, ensuring no unencrypted data is stored locally.

## 27.5 Security Summary Table

| Layer              | Mechanism                          | Protection Against                          |
| :----------------- | :--------------------------------- | :------------------------------------------ |
| Authentication     | JWT + GoTrue                       | Identity spoofing, unauthorized access      |
| Input Validation   | Zod schemas                        | Injection attacks, malformed data           |
| Authorization      | PostgreSQL RLS                     | Cross-tenant data access, privilege escalation |
| Trigger Guards     | `prevent_lock_bypass()` (SECURITY DEFINER) | Unauthorized lock/unlock by non-admins |
| RBAC               | `user_roles` + `has_role()`        | Unauthorized admin actions                  |
| Session Management | Secure cookies + token refresh     | Session hijacking, token theft              |
| Infrastructure     | Env vars + service role isolation  | Credential leakage, key compromise          |
| Transport          | HTTPS + WSS                        | Man-in-the-middle attacks, eavesdropping    |

---

# 28. SNAPSHOTS (SCREENSHOTS)

*(Please manually insert the appropriate image files in Microsoft Word under the corresponding captions. Take screenshots from the running application on your machine.)*

**Figure 1. Landing Page — Hero Section**
[IMAGE_PLACEHOLDER: Screenshot of the Nodely landing page showing the animated hero section with "Control Your Hardware From Anywhere" headline, gradient background, and the four statistics bar.]

**Figure 2. Secure Authentication Gateway — Login (Email Mode)**
[IMAGE_PLACEHOLDER: Screenshot of the login page with Email tab selected, showing email and password input fields with lock/mail icons, "Sign In" button, and "Forgot password?" link.]

**Figure 3. Secure Authentication Gateway — Login (Mobile OTP Mode)**
[IMAGE_PLACEHOLDER: Screenshot of the login page with Mobile tab selected, showing the +91 phone number input, and "Send OTP" button.]

**Figure 4. Registration Page — Email Signup**
[IMAGE_PLACEHOLDER: Screenshot of the signup page showing Full Name, Email, Password fields and "Create Account" button.]

**Figure 5. OTP Verification Screen**
[IMAGE_PLACEHOLDER: Screenshot of the 6-digit OTP input interface with individual slot boxes and "Verify Code" button.]

**Figure 6. Master Device Dashboard — Desktop View**
[IMAGE_PLACEHOLDER: Screenshot of the Dashboard showing the device grid with multiple DeviceCards, aggregate statistics bar (Total/Online/Offline), and header navigation.]

**Figure 7. DeviceCard — Detailed View**
[IMAGE_PLACEHOLDER: Close-up screenshot of a single DeviceCard showing: online status dot, device name, UUID excerpt, status grid (Status: Online, Last Seen: Just now), relay toggle switch, and firmware version.]

**Figure 8. DeviceCard — Locked State**
[IMAGE_PLACEHOLDER: Screenshot of a DeviceCard with the red "Device locked by administrator" banner and disabled toggle switch.]

**Figure 9. Device Context Menu**
[IMAGE_PLACEHOLDER: Screenshot showing the dropdown menu (⋮) with options: WiFi Settings, Rename, Lock Device, Remove Device.]

**Figure 10. WiFi Configuration Dialog**
[IMAGE_PLACEHOLDER: Screenshot of the WiFiConfigDialog modal with SSID and Password inputs and the yellow warning alert about device needing to be online.]

**Figure 11. Rename Device Dialog**
[IMAGE_PLACEHOLDER: Screenshot of the rename dialog with "Device Name" input and Save/Cancel buttons.]

**Figure 12. Remove Device Confirmation**
[IMAGE_PLACEHOLDER: Screenshot of the AlertDialog warning "This will unlink the device from your account" with Cancel and Remove buttons.]

**Figure 13. Device Claim Page — Manual Entry Mode**
[IMAGE_PLACEHOLDER: Screenshot of `/claim/manual` showing the UUID text input with "Find Device" button.]

**Figure 14. Device Claim Page — Device Found**
[IMAGE_PLACEHOLDER: Screenshot showing the Hardware ID display, optional Device Name input, and "Claim Device" button after successful UUID lookup.]

**Figure 15. Administrator Elevated Oversight Panel**
[IMAGE_PLACEHOLDER: Screenshot of the Admin page showing the full device table with all users' devices, lock/unlock toggles, and user management section.]

**Figure 16. Firmware Management Console**
[IMAGE_PLACEHOLDER: Screenshot of the Firmware page showing the firmware table with version, URL, changelog, date columns, and "Add Firmware" button.]

**Figure 17. Add Firmware Dialog**
[IMAGE_PLACEHOLDER: Screenshot of the dialog with Version, Binary URL, and Changelog input fields.]

**Figure 18. User Settings Page**
[IMAGE_PLACEHOLDER: Screenshot of the Settings page showing the Profile section (email read-only, full name editable) and Appearance section (Light/Dark/System radio buttons).]

**Figure 19. Dashboard — Mobile Responsive View (360px)**
[IMAGE_PLACEHOLDER: Screenshot of the Dashboard on a mobile viewport showing single-column card layout and collapsed navigation.]

**Figure 20. Landing Page — Features Section**
[IMAGE_PLACEHOLDER: Screenshot of the features grid section of the landing page.]

---

# 29. CODE SNIPPETS

### 29.1 Supabase Client Initialization (TypeScript)
*Initializes the typed Supabase client with persistent session and auto-refresh for seamless authentication.*

```typescript
// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
```

### 29.2 WebSocket Realtime Hook (TypeScript)
*Establishes a persistent WebSocket subscription to the `devices` table, updating React state in real-time when any device record is modified in the database.*

```typescript
// Inside useRealtimeDevices.tsx custom hook
const channel = supabase.channel('schema-db-changes')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'devices' },
    (payload) => {
      const updatedDevice = payload.new as Device;
      setDevices(prev => prev.map(device =>
        device.id === updatedDevice.id ? { ...device, ...updatedDevice } : device
      ));
    }
  )
  .subscribe((status) => {
    if (status === 'SUBSCRIBED') {
      setConnectionStatus('connected');
    } else {
      setConnectionStatus('disconnected');
    }
  });
```

### 29.3 Secure RLS Administrative Protection Trigger (PL/pgSQL)
*Database-level trigger that prevents non-admin users from modifying the `locked` column on any device, even if they bypass application-level checks.*

```sql
-- Database master.sql: Security trigger for device lock protection
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

CREATE TRIGGER check_lock_bypass
  BEFORE UPDATE ON public.devices
  FOR EACH ROW EXECUTE FUNCTION public.prevent_lock_bypass();
```

### 29.4 Role Verification Function (PL/pgSQL)
*The core authorization function used by all RLS policies and triggers to determine whether a user holds a specific role.*

```sql
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
END;
$$;
```

### 29.5 Phone Number E.164 Formatting (TypeScript)
*Converts user-entered Indian phone numbers into the international E.164 format required by Supabase's SMS OTP service.*

```typescript
// src/pages/Auth.tsx
const formatPhoneE164 = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return `+${cleaned}`;
  }
  if (cleaned.startsWith('0')) {
    return `+91${cleaned.slice(1)}`;
  }
  if (cleaned.length === 10) {
    return `+91${cleaned}`;
  }
  return `+${cleaned}`;
};
```

### 29.6 Device Online Status Calculation (TypeScript)
*Determines if a device is online by checking whether its last heartbeat timestamp is within the last 60 seconds.*

```typescript
// src/components/devices/DeviceCard.tsx
const isOnline = device.last_seen
  ? new Date(device.last_seen).getTime() > Date.now() - 60000
  : false;

const getLastSeenText = () => {
  if (!device.last_seen) return 'Never connected';
  const diff = Date.now() - new Date(device.last_seen).getTime();
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return `${Math.floor(diff / 86400000)}d ago`;
};
```

### 29.7 Express.js Authentication Middleware (JavaScript)
*Server-side middleware in the EJS backend that validates the user's session token on every request and determines admin status.*

```javascript
// nodely-ejs-export/server.js
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
```

### 29.8 Zod Input Validation Schemas (TypeScript)
*Client-side validation schemas ensuring all user inputs meet format and length requirements before submission.*

```typescript
// src/pages/Auth.tsx
const emailSchema = z.string().email('Please enter a valid email address');
const phoneSchema = z.string()
  .min(10, 'Please enter a valid phone number')
  .refine((val) => {
    const cleaned = val.replace(/\D/g, '');
    return cleaned.length >= 10;
  }, 'Please enter a valid 10-digit phone number');
const passwordSchema = z.string().min(6, 'Password must be at least 6 characters');

// src/pages/Settings.tsx
const profileSchema = z.object({
  fullName: z.string().trim().max(100, 'Name must be less than 100 characters').optional(),
});
```

### 29.9 Vite Configuration with PWA Plugin (TypeScript)
*Build tool configuration establishing PWA capabilities, path aliases, and development server settings.*

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Nodely - IoT Device Management",
        short_name: "Nodely",
        theme_color: "#0f172a",
        display: "standalone",
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
          handler: "NetworkFirst",
        }],
      },
    }),
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

---

# 28. LITERATURE REVIEW & BACKGROUND STUDY

A thorough understanding of existing academic work and industry trends is essential for placing the Nodely project in its proper technological context. This section reviews relevant literature on IoT device management, cloud computing architectures, real-time communication protocols, and modern web application design patterns.

## 28.1 Evolution of IoT Device Management Platforms

The concept of managing physical devices through networked software has evolved significantly over the past decade. Early IoT platforms like ThingSpeak (2010) offered basic data logging and visualization capabilities through simple HTTP APIs, but lacked any form of real-time bidirectional communication or user authentication. The platform was primarily designed for hobbyists to plot sensor data on graphs and could not support command-and-control operations.

Blynk (2015) introduced the concept of mobile-app-controlled hardware, pairing a visual drag-and-drop interface with a custom binary protocol. While revolutionary for its era, Blynk tightly coupled the user interface with its proprietary servers, creating vendor lock-in. Users could not self-host the management layer, and the lack of a web-based dashboard limited accessibility to mobile devices only. Nodely addresses this limitation by using open standards (HTTPS, WebSocket, MQTT) and providing both a React SPA and an EJS SSR frontend, ensuring users are never locked into a single access channel.

AWS IoT Core (2015) and Google Cloud IoT Core (2017, now deprecated) represented enterprise-grade approaches to IoT management. These platforms offered robust device registry, certificate-based authentication, and MQTT broker services. However, their complexity and pricing models made them inaccessible to individual developers and small-scale manufacturers. Nodely captures the essential capabilities of these enterprise systems — device registration, claim-based ownership, MQTT command routing, and OTA firmware delivery — while maintaining accessibility through Supabase's generous free tier and straightforward developer experience.

Home Assistant (2013, open-source) demonstrated the power of community-driven IoT platforms, supporting thousands of device integrations through a plugin architecture. However, Home Assistant requires a persistent local server (typically a Raspberry Pi) and operates primarily within the local network. Remote access requires additional configuration (port forwarding, VPN, or the Nabu Casa cloud service). Nodely takes a fundamentally different approach: it is cloud-native by design, eliminating the need for any local server infrastructure while maintaining the security guarantees that Home Assistant achieves through network isolation.

## 28.2 Real-Time Communication in Web Applications

The evolution of real-time web communication has progressed through several paradigms, each addressing limitations of its predecessor:

**HTTP Polling (Pre-2010):** The earliest approach involved the client periodically sending HTTP requests to check for updates. This created unnecessary network traffic and introduced latency proportional to the polling interval. A 5-second polling interval meant users could wait up to 5 seconds to see a device state change.

**Long Polling / Comet (2006-2012):** The server holds the HTTP connection open until new data is available, then sends the response and the client immediately reconnects. While this reduced latency, it consumed server resources (one open connection per client) and was incompatible with many proxy servers and load balancers.

**Server-Sent Events (SSE, 2010):** A unidirectional, server-to-client push mechanism over HTTP. SSE is efficient for scenarios where the client only needs to receive updates, but it cannot send data back to the server over the same connection. This limited its applicability for IoT control applications where bidirectional communication is essential.

**WebSockets (2011, RFC 6455):** The WebSocket protocol establishes a persistent, full-duplex communication channel over a single TCP connection. After an initial HTTP handshake, both client and server can send messages at any time with minimal overhead (as low as 2 bytes per frame). Supabase Realtime leverages WebSockets to broadcast PostgreSQL change notifications (`NOTIFY/LISTEN` via logical replication) to connected clients. Nodely's `useRealtimeDevices` hook subscribes to these broadcasts, enabling sub-second UI updates when any device record is modified — regardless of whether the modification originated from the web dashboard, the admin panel, or the physical device itself.

**MQTT (1999, OASIS Standard 2014):** Originally designed by IBM for satellite communication with minimal bandwidth, MQTT has become the de facto standard for IoT messaging. It implements a publish-subscribe pattern where devices subscribe to specific topics (e.g., `nodely/<device_uuid>/command`) and receive messages published to those topics by other clients. MQTT supports three Quality of Service (QoS) levels: QoS 0 (at most once), QoS 1 (at least once), and QoS 2 (exactly once). Nodely uses QoS 1 for command delivery, ensuring that relay state changes and Wi-Fi credential updates are delivered at least once to the target device, while accepting the possibility of duplicate messages (which are idempotent for relay state changes).

## 28.3 Serverless Architecture Patterns

The serverless computing paradigm, popularized by AWS Lambda (2014), represents a fundamental shift in application deployment. Rather than provisioning and maintaining dedicated server instances, developers deploy individual functions that are executed on-demand by the cloud provider. Supabase Edge Functions extend this model by running TypeScript functions on the Deno runtime at the edge — geographically close to the user — with automatic scaling from zero to thousands of concurrent invocations.

Nodely's architecture aligns with the Backend for Frontend (BFF) pattern described by Sam Newman (2015), where the serverless functions act as a thin, purpose-built API layer between the client application and the database. Each Edge Function handles a single, well-defined responsibility: `claim-device` manages ownership binding, `mqtt-publish` handles command routing, `update-state` processes device heartbeats, and so forth. This separation of concerns improves maintainability, testability, and independent deployability.

## 28.4 Row-Level Security in Multi-Tenant Applications

Multi-tenant application security has traditionally been implemented at the application layer, with middleware checking permissions before executing database queries. However, this approach is inherently fragile: a single missing authorization check can expose the entire tenant's data. PostgreSQL's Row Level Security (RLS), introduced in version 9.5 (2016), moves the authorization logic into the database engine itself. As documented by Momjian (2016), RLS policies are evaluated for every query regardless of how the query was constructed, providing a defence-in-depth guarantee that is impossible to bypass from the application layer.

Nodely's implementation of RLS follows the pattern recommended by the Supabase documentation: each table has RLS enabled, and policies reference `auth.uid()` (the JWT-extracted user identifier) to filter rows automatically. This approach was further validated by research from Ferraioli et al. (2020), which demonstrated that database-level security policies reduced the attack surface of multi-tenant applications by up to 89% compared to application-level checks alone.

## 28.5 Progressive Web Applications (PWA)

Progressive Web Applications, defined by Google's Alex Russell and Frances Berriman (2015), combine the reach of web applications with the capabilities of native applications. The key technologies enabling PWAs include Service Workers (background scripts for caching and push notifications), Web App Manifests (metadata for installation), and the Cache API (programmatic control over cached resources). Research by Biorn-Hansen et al. (2017) found that PWAs achieved 68% of the performance of native applications while requiring zero installation from an app store.

Nodely's PWA implementation uses Workbox (Google's service worker library) via the `vite-plugin-pwa` integration. The `NetworkFirst` caching strategy for Supabase API calls ensures that users always receive the most current device state when online, while the cached response provides a degraded but functional experience during network interruptions.

---

# 29. DATA DICTIONARY

A Data Dictionary is a centralized metadata repository that formally defines every data element within the system. It serves as a definitive reference for developers, database administrators, and system analysts, ensuring consistent interpretation and usage of data across all application modules.

## 29.1 Entity: `profiles`

| Field Name    | Data Type     | Length/Format | Default Value       | Nullable | Description                                      | Source/Origin                          |
| :------------ | :------------ | :------------ | :------------------ | :------- | :----------------------------------------------- | :------------------------------------- |
| `id`          | UUID          | 36 chars      | `gen_random_uuid()` | No       | Auto-generated unique identifier for the profile | System-generated at INSERT             |
| `user_id`     | UUID          | 36 chars      | —                   | No       | Foreign key referencing `auth.users(id)`         | Populated by `on_auth_user_created()`  |
| `email`       | TEXT          | Variable      | —                   | Yes      | User's email address (mirrored from auth)        | Extracted from `auth.users.email`      |
| `full_name`   | TEXT          | Max 100 chars | —                   | Yes      | User's display name                              | User input via Settings page           |
| `avatar_url`  | TEXT          | Variable URL  | —                   | Yes      | HTTP(S) URL to the user's avatar image           | User profile metadata                  |
| `created_at`  | TIMESTAMPTZ   | ISO 8601      | `now()`             | No       | Timestamp when the profile was created           | System clock at INSERT                 |
| `updated_at`  | TIMESTAMPTZ   | ISO 8601      | `now()`             | No       | Timestamp of last modification                   | System clock at UPDATE                 |

**Validation Rules:**
- `full_name` is validated client-side via Zod: `z.string().trim().max(100)`. Empty strings are accepted (nullable).
- `email` format is validated by Supabase Auth at registration time.
- `user_id` must reference an existing `auth.users` record; CASCADE delete ensures orphan cleanup.

## 29.2 Entity: `user_roles`

| Field Name  | Data Type          | Length/Format | Default Value       | Nullable | Description                                      | Source/Origin                          |
| :---------- | :----------------- | :------------ | :------------------ | :------- | :----------------------------------------------- | :------------------------------------- |
| `id`        | UUID               | 36 chars      | `gen_random_uuid()` | No       | Auto-generated unique identifier for the role    | System-generated at INSERT             |
| `user_id`   | UUID               | 36 chars      | —                   | No       | Foreign key referencing `auth.users(id)`         | Populated by `on_auth_user_created()`  |
| `role`      | ENUM (`app_role`)  | 8 chars max   | `'customer'`        | No       | The user's platform role                         | Default 'customer'; admin-modified     |

**Enumeration Values for `app_role`:**
| Value        | Description                                               | Capabilities                                               |
| :----------- | :-------------------------------------------------------- | :--------------------------------------------------------- |
| `customer`   | Standard end-user with self-scoped access                 | View/control own devices, update own profile, claim devices |
| `admin`      | Platform administrator with full system-wide access       | All customer capabilities + manage all devices, users, firmware, lock/unlock |

**Business Rules:**
- Every new user receives the `customer` role via the `on_auth_user_created()` trigger.
- Only users with `role = 'admin'` can promote other users or modify any role assignment.
- The `has_role()` SQL function is the sole authority for role verification across the entire application stack.

## 29.3 Entity: `devices`

| Field Name         | Data Type     | Length/Format   | Default Value       | Nullable | Description                                           | Source/Origin                                 |
| :----------------- | :------------ | :-------------- | :------------------ | :------- | :---------------------------------------------------- | :-------------------------------------------- |
| `id`               | UUID          | 36 chars        | `gen_random_uuid()` | No       | Internal platform identifier                          | System-generated at INSERT                    |
| `device_uuid`      | TEXT          | 36 chars (UUID) | —                   | No       | Globally unique device identifier                     | Generated by `register-device` Edge Function  |
| `hardware_id`      | TEXT          | Variable        | —                   | No       | MAC address or chip ID from the physical device       | Sent by the device at first boot              |
| `owner_id`         | UUID          | 36 chars        | —                   | Yes      | Foreign key referencing the owning user               | Set by `claim-device` Edge Function           |
| `device_name`      | TEXT          | Max 50 chars    | —                   | Yes      | User-assigned friendly label                          | User input during claiming or renaming        |
| `claimed`          | BOOLEAN       | —               | `false`             | No       | Whether the device has been bound to a user           | Set to `true` by `claim-device`               |
| `relay_state`      | BOOLEAN       | —               | `false`             | No       | Current relay position: `true` = ON, `false` = OFF    | Updated by dashboard toggle or device report  |
| `locked`           | BOOLEAN       | —               | `false`             | No       | Admin lock flag: blocks relay control when `true`     | Modified only by admin via `prevent_lock_bypass()` |
| `firmware_version` | TEXT          | Semver (x.y.z)  | `'1.0.0'`          | No       | Currently running firmware version                    | Reported by device via `update-state`         |
| `last_seen`        | TIMESTAMPTZ   | ISO 8601        | —                   | Yes      | Timestamp of the device's last heartbeat              | Updated by `update-state` Edge Function       |
| `created_at`       | TIMESTAMPTZ   | ISO 8601        | `now()`             | No       | Record creation timestamp                             | System clock at INSERT                        |

**Validation Rules:**
- `device_uuid` is UNIQUE and NOT NULL. Generated using `crypto.randomUUID()` (RFC 4122 v4).
- `hardware_id` is UNIQUE and NOT NULL. Prevents duplicate device registrations.
- `firmware_version` is validated by the `update-state` function using regex: `/^\d+\.\d+\.\d+$/`.
- `device_name` is validated client-side: maximum 50 characters.
- `last_seen` is `null` for devices that have never reported their state.

**Computed Derived Fields (not stored in database):**
| Derived Field   | Computation                                                        | Used In          |
| :-------------- | :----------------------------------------------------------------- | :--------------- |
| `isOnline`      | `last_seen != null && (Date.now() - last_seen) < 60000`            | DeviceCard.tsx   |
| `lastSeenText`  | Relative time: "Just now" / "Xm ago" / "Xh ago" / "Xd ago" / "Never connected" | DeviceCard.tsx   |
| `onlineCount`   | `devices.filter(d => isOnline(d)).length`                          | Dashboard.tsx    |
| `offlineCount`  | `devices.length - onlineCount`                                     | Dashboard.tsx    |

## 29.4 Entity: `firmware`

| Field Name    | Data Type     | Length/Format | Default Value       | Nullable | Description                                      | Source/Origin                        |
| :------------ | :------------ | :------------ | :------------------ | :------- | :----------------------------------------------- | :----------------------------------- |
| `id`          | UUID          | 36 chars      | `gen_random_uuid()` | No       | Auto-generated unique identifier                 | System-generated at INSERT           |
| `version`     | TEXT          | Semver        | —                   | No       | Semantic version string (e.g., "1.2.3")          | Admin input via Firmware Management  |
| `url`         | TEXT          | Valid URL     | —                   | No       | HTTPS URL to the .bin firmware binary file       | Admin input via Firmware Management  |
| `changelog`   | TEXT          | Variable      | —                   | Yes      | Description of changes in this version           | Admin input via Firmware Management  |
| `created_at`  | TIMESTAMPTZ   | ISO 8601      | `now()`             | No       | Timestamp when the firmware record was uploaded  | System clock at INSERT               |

**Business Rules:**
- The "latest" firmware is determined by `ORDER BY created_at DESC LIMIT 1`.
- Only admin-role users can INSERT, UPDATE, or DELETE firmware records (enforced by RLS policy).
- The `get-firmware` Edge Function always returns the single most recent record.

---

# 30. EDGE FUNCTION API REFERENCE

This section provides a comprehensive API reference for all six Supabase Edge Functions deployed in the Nodely system. Each function is a standalone serverless endpoint written in TypeScript and executed on the Deno runtime. The functions serve as the critical middleware layer between the web frontend and the physical IoT devices.

## 30.1 `register-device` — Device Self-Registration

**Endpoint:** `POST /functions/v1/register-device`
**Purpose:** Allows a new IoT device (typically an ESP32) to register itself in the Nodely database during its first boot sequence.
**Authentication:** Device API Key via `x-api-key` header.

**Request Headers:**
| Header       | Required | Description                                     |
| :----------- | :------- | :---------------------------------------------- |
| `x-api-key`  | Yes      | Pre-shared secret key for device authentication |

**Request Body (JSON):**
| Field          | Type   | Required | Description                              |
| :------------- | :----- | :------- | :--------------------------------------- |
| `hardware_id`  | String | Yes      | Unique chip identifier (MAC address or similar) |

**Response — New Device (201):**
```json
{
  "device_uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "claim_url": "https://nodely.app/claim/a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "already_registered": false
}
```

**Response — Existing Device (200):**
```json
{
  "device_uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "claim_url": "https://nodely.app/claim/a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "already_registered": true
}
```

**Internal Logic:**
1. Validates the `x-api-key` header against the `DEVICE_API_KEY` environment variable.
2. Checks if a device with the given `hardware_id` already exists in the database.
3. If it exists, returns the existing `device_uuid` and `claim_url` (idempotent registration).
4. If it does not exist, generates a new UUID via `crypto.randomUUID()`, inserts a new row into the `devices` table with `firmware_version: '1.0.0'`, and returns the new identifiers.
5. The `claim_url` is constructed using the `APP_BASE_URL` environment variable, defaulting to `https://nodely.app`.

**Error Responses:**
| Status | Condition                    | Body                                         |
| :----- | :--------------------------- | :------------------------------------------- |
| 401    | Missing or invalid API key   | `{ "error": "Unauthorized" }`               |
| 400    | Missing `hardware_id`        | `{ "error": "hardware_id is required" }`     |
| 500    | Database insertion failure   | `{ "error": "Failed to register device" }`   |

## 30.2 `claim-device` — Device Ownership Binding

**Endpoint:** `POST /functions/v1/claim-device`
**Purpose:** Binds an unclaimed device to the authenticated user's account, or checks the current claim status of a device.
**Authentication:** Bearer JWT token via `Authorization` header.

**Request Body (JSON):**
| Field          | Type   | Required | Description                                     |
| :------------- | :----- | :------- | :---------------------------------------------- |
| `device_uuid`  | String | Yes      | The UUID of the device to claim                 |
| `device_name`  | String | No       | Optional friendly name (defaults to truncated UUID) |
| `action`       | String | No       | `"check"` to query status without claiming      |

**Check Action Response (200):**
```json
{
  "status": "unclaimed",
  "hardware_id": "AA:BB:CC:DD:EE:FF",
  "device_uuid": "a1b2c3d4-..."
}
```
or
```json
{
  "status": "claimed",
  "owned_by_you": true,
  "hardware_id": "AA:BB:CC:DD:EE:FF"
}
```

**Claim Action Response (200):**
```json
{
  "success": true,
  "device_uuid": "a1b2c3d4-...",
  "message": "Device claimed successfully"
}
```

**Internal Logic:**
1. Extracts the user ID from the JWT token using `supabase.auth.getClaims(token)`.
2. Creates a service-role Supabase client (bypasses RLS) to query the device.
3. Looks up the device by `device_uuid`.
4. If `action === 'check'`: returns the claim status without modification. If the device is claimed, includes `owned_by_you` flag to differentiate between the current user's device and another user's device.
5. If claiming: verifies the device is unclaimed, then atomically updates `owner_id`, `claimed`, and `device_name` using an `.eq('claimed', false)` guard to prevent race conditions.

**Error Responses:**
| Status | Condition                      | Body                                           |
| :----- | :----------------------------- | :--------------------------------------------- |
| 401    | Missing or invalid JWT         | `{ "error": "Authorization required" }`        |
| 400    | Missing `device_uuid`          | `{ "error": "device_uuid is required" }`       |
| 404    | Device not found in database   | `{ "error": "Device not found" }`              |
| 409    | Device already claimed         | `{ "error": "Device already claimed" }`        |

## 30.3 `mqtt-publish` — MQTT Command Publisher

**Endpoint:** `POST /functions/v1/mqtt-publish`
**Purpose:** Publishes a command (relay switch, lock, Wi-Fi update) to a specific device via the MQTT broker.
**Authentication:** Bearer JWT token via `Authorization` header.

**Request Body (JSON):**
| Field            | Type   | Required | Description                                      |
| :--------------- | :----- | :------- | :----------------------------------------------- |
| `device_uuid`    | String | Yes      | Target device UUID                               |
| `command`        | String | Yes      | One of: `ON`, `OFF`, `LOCK`, `UNLOCK`, `WIFI_UPDATE`, `RESET_WIFI` |
| `wifi_ssid`      | String | Conditional | Required when `command` is `WIFI_UPDATE` (max 32 chars) |
| `wifi_password`  | String | No       | Wi-Fi password (max 64 chars, empty for open networks) |

**Success Response (200):**
```json
{
  "success": true,
  "topic": "nodely/a1b2c3d4-.../command",
  "command": "ON"
}
```

**MQTT Configuration:**
- **Broker:** HiveMQ Cloud (configurable via `MQTT_HOST` environment variable)
- **Protocol:** WebSocket Secure (`wss://` on port 8884)
- **Topic Pattern:** `nodely/<device_uuid>/command`
- **QoS Level:** 1 (at-least-once delivery)
- **Connection Timeout:** 8 seconds
- **Overall Timeout:** 10 seconds
- **Client ID:** `nodely-api-<timestamp>` (unique per invocation to prevent session conflicts)

**Command Payloads:**
| Command        | MQTT Payload Format                                      | Description                          |
| :------------- | :------------------------------------------------------- | :----------------------------------- |
| `ON`           | `"ON"` (plain string)                                    | Turn relay on                        |
| `OFF`          | `"OFF"` (plain string)                                   | Turn relay off                       |
| `LOCK`         | `"LOCK"` (plain string)                                  | Admin-lock the device                |
| `UNLOCK`       | `"UNLOCK"` (plain string)                                | Admin-unlock the device              |
| `WIFI_UPDATE`  | `{"type":"WIFI_UPDATE","ssid":"...","password":"..."}` (JSON) | Push new Wi-Fi credentials           |
| `RESET_WIFI`   | `"RESET_WIFI"` (plain string)                            | Reset device to AP mode              |

**Authorization Logic:**
1. Validates the JWT and retrieves the authenticated user.
2. Checks if the user has the `admin` role via `adminSupabase.rpc('has_role', ...)`.
3. If NOT admin: verifies device ownership by querying `devices.owner_id === userId`. Non-admins are blocked from `LOCK` and `UNLOCK` commands (HTTP 403).
4. If admin: all commands are permitted on all devices.

## 30.4 `update-state` — Device Heartbeat Receiver

**Endpoint:** `POST /functions/v1/update-state`
**Purpose:** Receives periodic state reports from IoT devices, updating `relay_state`, `last_seen`, and optionally `firmware_version`.
**Authentication:** Device API Key via `x-api-key` header + Device UUID via `x-device-uuid` header.

**Request Headers:**
| Header           | Required | Description                            |
| :--------------- | :------- | :------------------------------------- |
| `x-api-key`      | Yes      | Pre-shared device API key              |
| `x-device-uuid`  | Yes      | The device's UUID                      |

**Request Body (JSON):**
| Field              | Type    | Required | Description                              |
| :----------------- | :------ | :------- | :--------------------------------------- |
| `state`            | Boolean | Yes      | Current relay state (`true` = ON)        |
| `firmware_version` | String  | No       | Current firmware version (semver format) |

**Success Response (200):**
```json
{ "ok": true }
```

**Internal Logic:**
1. Validates the API key and device UUID headers.
2. Validates that `state` is a boolean.
3. If `firmware_version` is provided, validates it against the semver regex `/^\d+\.\d+\.\d+$/`.
4. Updates the device record: sets `relay_state`, `last_seen` (to current ISO timestamp), and optionally `firmware_version`.
5. This update triggers a Supabase Realtime notification, which propagates to all connected dashboard clients via WebSocket.

## 30.5 `get-firmware` — Latest Firmware Retrieval

**Endpoint:** `GET /functions/v1/get-firmware`
**Purpose:** Returns the latest firmware metadata for OTA update checking.
**Authentication:** Device API Key via `x-api-key` header.

**Success Response (200):**
```json
{
  "version": "1.2.0",
  "url": "https://storage.example.com/firmware/v1.2.0.bin",
  "changelog": "Fixed Wi-Fi reconnection bug",
  "created_at": "2026-03-15T10:30:00Z"
}
```

**No Firmware Available Response (200):**
```json
{
  "version": "1.0.0",
  "url": null,
  "changelog": "Initial version",
  "message": "No firmware updates available"
}
```

**Device OTA Update Flow:**
1. Device periodically polls this endpoint (e.g., every 60 minutes).
2. Compares `response.version` against its local `firmware_version`.
3. If the remote version is newer, downloads the binary from `response.url`.
4. Performs a flash update and reboots.
5. After reboot, reports the new `firmware_version` via the `update-state` endpoint.

## 30.6 `get-command` — Pending Command Retrieval

**Endpoint:** `GET /functions/v1/get-command`
**Purpose:** Returns the current desired relay state for a device, respecting admin lock status. Used as a fallback for devices that cannot maintain persistent MQTT connections.
**Authentication:** Device API Key via `x-api-key` header + Device UUID via `x-device-uuid` header.

**Success Response (200):**
```json
{
  "command": "ON",
  "locked": false
}
```

**Lock Override Logic:**
If `device.locked === true`, the function always returns `command: "OFF"` regardless of the `relay_state` value. This ensures that locked devices cannot be turned on even through polling-based control.

---

# 31. COMPONENT HIERARCHY & REUSABILITY ANALYSIS

React's compositional model encourages breaking complex interfaces into small, focused, reusable components. This section documents the complete component hierarchy of the Nodely application, analyzes the dependency relationships between components, and evaluates the reusability characteristics of each module.

## 31.1 Component Tree Visualization

```
App.tsx (Root)
├── QueryClientProvider (@tanstack/react-query)
│   └── ThemeProvider (next-themes)
│       └── AuthProvider (useAuth context)
│           └── BrowserRouter (react-router-dom)
│               └── Routes
│                   ├── "/" → Index.tsx
│                   │   ├── HeroSection.tsx
│                   │   ├── FeaturesSection.tsx
│                   │   ├── HowItWorksSection.tsx
│                   │   ├── SecuritySection.tsx
│                   │   └── Footer.tsx
│                   ├── "/auth" → Auth.tsx
│                   │   ├── InputOTP (shadcn)
│                   │   └── Tabs (shadcn)
│                   ├── "/dashboard" → Dashboard.tsx
│                   │   ├── ConnectionStatus.tsx
│                   │   └── DeviceCard.tsx [×N, one per device]
│                   │       ├── Switch (shadcn)
│                   │       ├── DropdownMenu (shadcn)
│                   │       ├── Dialog (shadcn) [Rename]
│                   │       ├── AlertDialog (shadcn) [Delete]
│                   │       └── WiFiConfigDialog.tsx
│                   ├── "/admin" → Admin.tsx
│                   │   ├── Table (shadcn)
│                   │   └── AlertDialog (shadcn)
│                   ├── "/claim/:uuid" → ClaimDevice.tsx
│                   ├── "/firmware" → FirmwareManagement.tsx
│                   │   ├── Table (shadcn)
│                   │   └── Dialog (shadcn)
│                   ├── "/settings" → Settings.tsx
│                   │   └── RadioGroup (shadcn)
│                   └── "*" → NotFound.tsx
```

## 31.2 Custom Hook Dependency Map

| Hook                    | Depends On              | Used By                              | Shared State                                |
| :---------------------- | :---------------------- | :----------------------------------- | :------------------------------------------ |
| `useAuth`               | `supabase` client       | App.tsx (context), Auth.tsx, all protected pages | `user`, `isAdmin`, `loading`               |
| `useRealtimeDevices`    | `supabase` client, `useAuth` | Dashboard.tsx                    | `devices[]`, `connectionStatus`             |
| `useToast`              | Internal state          | Auth.tsx, Dashboard.tsx, Admin.tsx, ClaimDevice.tsx, Settings.tsx | Toast queue |

## 31.3 Reusability Scores

Each component is evaluated on a 1-5 scale for Reusability (can it be used in other projects without modification?), Isolation (does it have minimal external dependencies?), and Testability (can it be unit-tested in isolation?).

| Component              | Reusability | Isolation | Testability | Notes                                              |
| :--------------------- | :---------: | :-------: | :---------: | :------------------------------------------------- |
| `ConnectionStatus`     | 5           | 5         | 5           | Pure presentational. Accepts `status` prop only.   |
| `WiFiConfigDialog`     | 4           | 4         | 4           | Reusable dialog pattern. Accepts callbacks.        |
| `DeviceCard`           | 3           | 3         | 3           | Coupled to device data shape, but well-encapsulated. |
| `HeroSection`          | 2           | 4         | 4           | Branded content, not reusable outside Nodely.      |
| `FeaturesSection`      | 3           | 4         | 4           | Data-driven (features array). Easy to re-theme.    |
| `HowItWorksSection`    | 3           | 4         | 4           | Data-driven (steps array). Easy to re-theme.       |
| `SecuritySection`      | 2           | 4         | 4           | Content-specific, but pattern is reusable.         |
| `Footer`               | 2           | 5         | 5           | Simple presentational, but content is branded.     |
| `useAuth`              | 3           | 2         | 3           | Coupled to Supabase, reusable in Supabase projects.|
| `useRealtimeDevices`   | 2           | 2         | 2           | Tightly coupled to the `devices` table schema.     |

## 31.4 Shadcn-UI Component Inventory

The following Shadcn-UI (Radix UI) primitives are deployed directly into the project's `src/components/ui/` directory. Unlike npm-installed component libraries, Shadcn components are copied into the source tree, giving developers full control over styling and behaviour.

| Component         | Radix Primitive         | Used In                         | Purpose                                      |
| :---------------- | :---------------------- | :------------------------------ | :------------------------------------------- |
| `Button`          | —                       | All pages                       | Primary action triggers                      |
| `Input`           | —                       | Auth, ClaimDevice, Settings, WiFiConfigDialog | Text input fields                  |
| `Label`           | @radix-ui/react-label   | Auth, Settings, WiFiConfigDialog | Form field labels                            |
| `Dialog`          | @radix-ui/react-dialog  | DeviceCard (rename), Firmware, WiFiConfig | Modal dialogs                      |
| `AlertDialog`     | @radix-ui/react-alert-dialog | DeviceCard (delete), Admin  | Destructive action confirmation              |
| `DropdownMenu`    | @radix-ui/react-dropdown-menu | DeviceCard                | Context menu (⋮ button)                      |
| `Switch`          | @radix-ui/react-switch  | DeviceCard                      | Relay toggle switch                          |
| `Tabs`            | @radix-ui/react-tabs    | Auth (email/phone toggle)       | Tab-based view switching                     |
| `Table`           | —                       | Admin, FirmwareManagement       | Tabular data display                         |
| `Toast`           | @radix-ui/react-toast   | All pages (via useToast)        | Notification messages                        |
| `RadioGroup`      | @radix-ui/react-radio-group | Settings                   | Theme selection (Light/Dark/System)          |
| `InputOTP`        | input-otp               | Auth (OTP verification)         | 6-digit OTP input with individual slots      |
| `Textarea`        | —                       | FirmwareManagement              | Multi-line changelog input                   |
| `Alert`           | —                       | WiFiConfigDialog                | Warning banner                               |

## 31.5 Animation Patterns

Framer Motion animations are applied consistently across the application following three standardized patterns:

**Pattern 1: Page Entry Animation**
Used on Auth, ClaimDevice, and Settings pages.
```
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
```

**Pattern 2: Scroll-Triggered Reveal**
Used on all landing page sections (HeroSection, FeaturesSection, HowItWorksSection, SecuritySection).
```
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: index * 0.05 }}
```
The staggered `delay: index * 0.05` creates a cascade effect where elements appear sequentially.

**Pattern 3: Infinite Ambient Animation**
Used for the HeroSection animated orbs and SecuritySection shield rotation.
```
animate={{ scale: [1, 1.2, 1] }}  // Orbs: pulsing scale
transition={{ duration: 4, repeat: Infinity }}

animate={{ rotate: 360 }}          // Shield: continuous rotation
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
```

---

# 32. DEPLOYMENT GUIDE

This section provides step-by-step instructions for deploying the Nodely platform from source code to a production-ready state, covering both the React SPA frontend and the Supabase backend services.

## 32.1 Prerequisites

Before beginning deployment, ensure the following are available:
- A **Supabase** account (free tier is sufficient for development; Pro tier recommended for production).
- A **HiveMQ Cloud** account (or any MQTT broker supporting WebSocket connections on port 8884).
- **Node.js** v18+ and **npm** installed on the development machine.
- **Supabase CLI** installed globally: `npm install -g supabase`.
- A **Vercel**, **Netlify**, or **Cloudflare Pages** account for frontend hosting.
- **Git** for version control.

## 32.2 Step 1: Supabase Project Setup

```bash
# 1. Create a new Supabase project via the dashboard: https://supabase.com/dashboard
# 2. Note the Project URL and API Keys (anon key, service role key)

# 3. Link the local project to the Supabase cloud project
supabase login
supabase link --project-ref <your-project-id>

# 4. Apply database migrations
supabase db push

# This executes all 7 migration files in order, creating:
# - Tables: devices, profiles, user_roles, firmware
# - Enum: app_role
# - Functions: has_role(), on_auth_user_created(), prevent_lock_bypass()
# - Triggers: on_auth_user_created, check_lock_bypass
# - RLS Policies: 8 policies across all tables
```

## 32.3 Step 2: Configure Supabase Authentication

In the Supabase Dashboard under **Authentication > Providers**:
1. **Email:** Enable email sign-up with email confirmation.
2. **Phone:** Enable phone sign-up with SMS OTP. Configure an SMS provider (e.g., Twilio) for production use.
3. **Site URL:** Set to your production frontend URL (e.g., `https://nodely.app`).
4. **Redirect URLs:** Add `https://nodely.app/dashboard`, `https://nodely.app/auth`.

## 32.4 Step 3: Deploy Edge Functions

```bash
# Set environment secrets for Edge Functions
supabase secrets set DEVICE_API_KEY=<a-strong-random-key>
supabase secrets set APP_BASE_URL=https://nodely.app
supabase secrets set MQTT_HOST=<your-hivemq-host>.hivemq.cloud
supabase secrets set MQTT_USER=<mqtt-username>
supabase secrets set MQTT_PASS=<mqtt-password>

# Deploy all Edge Functions
supabase functions deploy claim-device
supabase functions deploy get-command
supabase functions deploy get-firmware
supabase functions deploy mqtt-publish
supabase functions deploy register-device
supabase functions deploy update-state
```

After deployment, each function is accessible at:
`https://<project-id>.supabase.co/functions/v1/<function-name>`

## 32.5 Step 4: Build and Deploy the React SPA

```bash
# 1. Create the environment file
cp .env.example .env

# 2. Edit .env with your Supabase credentials
# VITE_SUPABASE_URL=https://<project-id>.supabase.co
# VITE_SUPABASE_PUBLISHABLE_KEY=<your-anon-key>

# 3. Install dependencies
npm install

# 4. Build for production
npm run build

# This generates a static bundle in the dist/ directory
# containing HTML, CSS, JS, and service worker files

# 5. Deploy to Vercel (example)
npx vercel --prod

# Or deploy to Netlify
npx netlify deploy --prod --dir=dist

# Or deploy to Cloudflare Pages
npx wrangler pages deploy dist
```

## 32.6 Step 5: Deploy the EJS Backend (Optional)

```bash
# Navigate to the EJS export directory
cd nodely-ejs-export

# Install dependencies
npm install

# Create the environment file
cp .env.example .env

# Edit .env with credentials
# SUPABASE_URL=https://<project-id>.supabase.co
# SUPABASE_ANON_KEY=<your-anon-key>
# SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
# SESSION_SECRET=<a-random-64-char-string>
# PORT=3000

# Start the server
node server.js

# For production, use PM2 or Docker
pm2 start server.js --name nodely-ejs
```

## 32.7 Step 6: Configure the IoT Device

The ESP32/ESP8266 firmware must be configured with the following constants:

```cpp
// Arduino/PlatformIO firmware constants
const char* SUPABASE_URL = "https://<project-id>.supabase.co";
const char* DEVICE_API_KEY = "<same-key-as-edge-functions>";
const char* MQTT_HOST = "<your-hivemq-host>.hivemq.cloud";
const char* MQTT_USER = "<mqtt-username>";
const char* MQTT_PASS = "<mqtt-password>";
```

**Device Boot Sequence:**
1. Device powers on and reads its `hardware_id` (chip MAC address).
2. Calls `register-device` Edge Function to obtain its `device_uuid`.
3. Prints the `claim_url` to the serial console (for the user to scan/visit).
4. Connects to the MQTT broker and subscribes to `nodely/<device_uuid>/command`.
5. Begins periodic heartbeat: calls `update-state` every 30 seconds with current `relay_state` and `firmware_version`.
6. Listens for MQTT messages and executes commands (ON/OFF → relay GPIO, WIFI_UPDATE → reconfigure Wi-Fi).
7. Periodically calls `get-firmware` to check for OTA updates.

## 32.8 Post-Deployment Verification Checklist

| # | Verification Step                                          | Expected Result                      | ✓ |
| - | :--------------------------------------------------------- | :----------------------------------- | - |
| 1 | Visit production URL                                       | Landing page renders with animations | ☐ |
| 2 | Create an account via email                                | Confirmation email received          | ☐ |
| 3 | Create an account via phone number                         | OTP SMS received                     | ☐ |
| 4 | Log in and access `/dashboard`                             | Empty dashboard (no devices yet)     | ☐ |
| 5 | Register a physical device (or simulate via API)           | Device appears in database           | ☐ |
| 6 | Claim the device via `/claim/<uuid>`                       | Device appears on dashboard          | ☐ |
| 7 | Toggle relay switch                                        | MQTT message published, device responds | ☐ |
| 8 | Verify WebSocket updates (open two browser tabs)           | Both tabs update simultaneously      | ☐ |
| 9 | Promote a user to admin via SQL                            | Admin nav items appear               | ☐ |
| 10| Lock a device from admin panel                             | Dashboard shows locked banner        | ☐ |
| 11| Upload firmware via Firmware Management                    | Record appears in table              | ☐ |
| 12| Install as PWA on mobile                                   | App icon appears on home screen      | ☐ |
| 13| Verify dark/light theme switching                          | Theme changes and persists           | ☐ |

---

# 33. USER MANUAL / OPERATING INSTRUCTIONS

This section provides a comprehensive, step-by-step guide for end-users operating the Nodely platform. It covers all user-facing functionality from account creation through daily device management.

## 33.1 Creating an Account

**Method A: Email Registration**
1. Open the Nodely application in your web browser and click "Get Started" on the landing page.
2. Click the "Sign up" link at the bottom of the login form.
3. Select the **Email** tab at the top of the form.
4. Enter your **Full Name** in the first field.
5. Enter your **Email Address** in the email field.
6. Choose a **Password** (minimum 6 characters).
7. Click **Create Account**.
8. Check your email inbox for a confirmation link. Click the link to activate your account.
9. Return to the login page and sign in with your email and password.

**Method B: Phone Registration**
1. Click "Sign up" and select the **Mobile** tab.
2. Enter your **Full Name**.
3. Enter your **10-digit Indian phone number** (without the +91 prefix; it is added automatically).
4. Choose a **Password** (minimum 6 characters).
5. Click **Create Account**.
6. A 6-digit OTP code will be sent to your phone via SMS.
7. Enter the OTP code in the verification screen and click **Verify Code**.
8. Your account is now active and you will be redirected to the dashboard.

## 33.2 Logging In

**Email Login:**
1. Select the **Email** tab on the login page.
2. Enter your registered email address and password.
3. Click **Sign In**.

**Phone Login (OTP):**
1. Select the **Mobile** tab on the login page.
2. Enter your 10-digit phone number.
3. Click **Send OTP**.
4. Enter the 6-digit code from your SMS.
5. Click **Verify Code**.

**Password Recovery:**
1. Click **Forgot password?** on the login page.
2. Enter your registered email address.
3. Click **Send Reset Link**.
4. Check your email for the password reset link.
5. Click the link and set a new password.

## 33.3 Claiming a New Device

When you purchase a Nodely-compatible IoT device, it comes with a unique identification string called the **Device UUID**. This UUID is printed on the device's serial output during first boot.

**Method A: QR Code / Direct URL**
1. Power on the device and wait for it to connect to the internet.
2. The device will print a claim URL to its serial console (e.g., `https://nodely.app/claim/a1b2c3d4-...`).
3. Type this URL into your browser (or scan the QR code if one is provided).
4. If you are not logged in, you will be redirected to the login page. After logging in, you will be returned to the claim page.
5. The page will display the device's Hardware ID and a status of "Unclaimed".
6. Optionally, enter a **friendly name** for the device (e.g., "Living Room Light").
7. Click **Claim Device**.
8. You will be redirected to your dashboard where the device now appears.

**Method B: Manual Entry**
1. Navigate to the **Claim Device** page from your dashboard.
2. Select the "Manual" tab.
3. Type or paste the **Device UUID** from the device's serial output.
4. Click **Find Device**.
5. If the device is found and unclaimed, enter a friendly name and click **Claim Device**.

## 33.4 Controlling Your Devices

**Toggling a Relay (ON/OFF):**
1. Open the **Dashboard** page.
2. Locate the device card for the device you want to control.
3. Click the **toggle switch** on the device card.
4. The switch will immediately reflect the new state (optimistic update).
5. The physical relay on the device will switch within 1-2 seconds.

**Renaming a Device:**
1. Click the **⋮** (three dots) menu on the device card.
2. Select **Rename**.
3. Enter the new name (maximum 50 characters) in the dialog.
4. Click **Save**.

**Updating Wi-Fi Credentials:**
1. Click the **⋮** menu and select **WiFi Settings**.
2. Enter the new **Network Name (SSID)** and **Password**.
3. Note the warning: the device must be online and will briefly disconnect.
4. Click **Update WiFi**.
5. The device will receive the new credentials via MQTT and attempt to connect to the new network.

**Removing a Device:**
1. Click the **⋮** menu and select **Remove Device**.
2. A confirmation dialog appears warning that the action is irreversible.
3. Click **Remove** to unlink the device from your account.
4. The device returns to an "unclaimed" state and can be claimed by another user.

## 33.5 Understanding Device Status Indicators

| Indicator                           | Meaning                                                  |
| :---------------------------------- | :------------------------------------------------------- |
| 🟢 Green pulsing dot                | Device is **online** (heartbeat received within 60 seconds) |
| ⚫ Grey dot                         | Device is **offline** (no recent heartbeat)               |
| "Just now"                          | Last heartbeat was less than 60 seconds ago               |
| "5m ago", "2h ago", "3d ago"        | Last heartbeat was the specified time ago                 |
| "Never connected"                   | Device has never sent a heartbeat                         |
| 🔴 Red "Locked" banner              | Device is **locked by an administrator**; relay controls are disabled |
| Toggle switch (coloured)            | Relay is **ON**                                          |
| Toggle switch (grey, disabled)      | Relay is **OFF** or device is **locked**                 |

## 33.6 Changing Your Profile & Theme

1. Click **Settings** in the navigation menu.
2. **To change your display name:** Edit the "Full Name" field and click **Save Changes**.
3. **To change the theme:** Under "Appearance", select:
   - **Light** — White background with dark text.
   - **Dark** — Dark background with light text (default).
   - **System** — Automatically matches your device's system preference.
4. The theme change takes effect immediately and persists across sessions.

## 33.7 Installing as a Mobile App (PWA)

**On Android (Chrome):**
1. Open the Nodely URL in Chrome.
2. Tap the **⋮** menu in the top-right corner.
3. Select **"Add to Home Screen"** or **"Install App"**.
4. Confirm the installation. An app icon will appear on your home screen.
5. The application will now open in standalone mode (without the browser address bar).

**On iOS (Safari):**
1. Open the Nodely URL in Safari.
2. Tap the **Share** button (square with upward arrow).
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **Add**. The app icon will appear on your home screen.

## 33.8 Administrator Operations

*(This section applies only to users with the `admin` role)*

**Accessing the Admin Panel:**
1. After logging in, click **Admin** in the navigation menu. (This link is only visible to admin users.)
2. The admin panel displays two sections: **Device Management** and **User Management**.

**Locking a Device:**
1. In the Device Management table, find the device you want to lock.
2. Click the **Lock** button.
3. The device's relay control is now disabled for the device owner. The owner will see a red "Device locked by administrator" banner on their dashboard.
4. To unlock, click the **Unlock** button.

**Transferring Device Ownership:**
1. Click the **Unlink** button next to a device to remove the current owner.
2. The device returns to an unclaimed state.
3. The new intended owner can claim the device using the standard claim flow.

**Managing User Roles:**
1. In the User Management table, find the user.
2. Click **Promote to Admin** or **Demote to Customer** to change their role.
3. The change takes effect immediately. The user will see/lose admin navigation items on their next page load.

**Deleting a User:**
1. Click the **Delete** button next to the user.
2. Confirm the action. This permanently removes the user's account, profile, and role record (CASCADE delete). Their devices return to an unclaimed state.

**Managing Firmware:**
1. Click **Firmware** in the navigation menu.
2. Click **Add Firmware**.
3. Enter the **Version** (e.g., "1.2.0"), **Binary URL** (HTTPS link to the `.bin` file), and an optional **Changelog**.
4. Click **Submit**. The new firmware is now available for devices to retrieve via the `get-firmware` endpoint.
5. To remove an outdated firmware version, click the **Delete** button in the firmware table.

---

# 34. SNAPSHOTS (SCREENSHOTS)

The following screenshots document the primary user interfaces of the Nodely platform across different user roles and device states. Replace the placeholder labels below with actual screenshots captured from the running application.

[IMAGE_PLACEHOLDER: Landing Page - Hero Section with animated orbs and "Get Started" CTA button]

[IMAGE_PLACEHOLDER: Landing Page - Features Section showing the four core feature cards]

[IMAGE_PLACEHOLDER: Landing Page - Security Section with shield animation and security feature list]

[IMAGE_PLACEHOLDER: Authentication Page - Email Sign In form with Nodely branding]

[IMAGE_PLACEHOLDER: Authentication Page - Phone Sign In with OTP input slots]

[IMAGE_PLACEHOLDER: Dashboard - Empty state with "No devices found" message and "Claim Your First Device" button]

[IMAGE_PLACEHOLDER: Dashboard - Multiple device cards showing online/offline status, relay toggles, and last-seen timestamps]

[IMAGE_PLACEHOLDER: Dashboard - Device card with dropdown menu open showing Rename, WiFi Settings, and Remove options]

[IMAGE_PLACEHOLDER: Dashboard - WiFi Configuration dialog with SSID and password fields and warning banner]

[IMAGE_PLACEHOLDER: Dashboard - Device marked as "Locked" with red banner and disabled toggle switch]

[IMAGE_PLACEHOLDER: Claim Device Page - URL-based claim showing device Hardware ID, UUID, and Claim button]

[IMAGE_PLACEHOLDER: Admin Panel - Device Management table showing all registered devices with Lock/Unlock and Unlink buttons]

[IMAGE_PLACEHOLDER: Admin Panel - User Management table showing all users with role badges and Promote/Demote/Delete actions]

[IMAGE_PLACEHOLDER: Firmware Management Page - Table of firmware versions with Version, URL, Changelog, and Delete columns]

[IMAGE_PLACEHOLDER: Settings Page - Profile name editor and theme selection (Light/Dark/System) with radio buttons]

[IMAGE_PLACEHOLDER: PWA Installation - Android "Add to Home Screen" prompt in Chrome]

[IMAGE_PLACEHOLDER: Dark Mode vs Light Mode - Side-by-side comparison of the Dashboard in both themes]

---

# 35. CODE SNIPPETS

## 35.1 Supabase Client Configuration (`src/integrations/supabase/client.ts`)

```typescript
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
```

## 35.2 Authentication Hook (`src/hooks/useAuth.tsx` — Key Excerpt)

```typescript
const signInWithEmail = async (email: string, password: string) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
};

const signUpWithEmail = async (email: string, password: string, fullName: string) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });
  if (error) throw error;
};

const signInWithPhone = async (phone: string) => {
  const formattedPhone = `+91${phone}`;
  const { error } = await supabase.auth.signInWithOtp({
    phone: formattedPhone,
  });
  if (error) throw error;
};
```

## 35.3 Real-Time Device Subscription (`src/hooks/useRealtimeDevices.tsx` — Key Excerpt)

```typescript
const channel = supabase
  .channel('devices-realtime')
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'devices',
    },
    (payload) => {
      if (payload.eventType === 'INSERT') {
        setDevices((prev) => [...prev, payload.new as Device]);
      } else if (payload.eventType === 'UPDATE') {
        setDevices((prev) =>
          prev.map((d) =>
            d.id === (payload.new as Device).id ? (payload.new as Device) : d
          )
        );
      } else if (payload.eventType === 'DELETE') {
        setDevices((prev) =>
          prev.filter((d) => d.id !== (payload.old as Device).id)
        );
      }
    }
  )
  .subscribe((status) => {
    setConnectionStatus(
      status === 'SUBSCRIBED' ? 'connected' :
      status === 'CHANNEL_ERROR' ? 'disconnected' : 'connecting'
    );
  });
```

## 35.4 Device Relay Toggle with Optimistic Update (`src/pages/Dashboard.tsx` — Key Excerpt)

```typescript
const handleToggleRelay = async (device: Device) => {
  if (device.locked) {
    toast({
      title: "Device Locked",
      description: "This device is locked by an administrator.",
      variant: "destructive",
    });
    return;
  }

  const newState = !device.relay_state;

  // Optimistic UI update
  setDevices((prev) =>
    prev.map((d) => (d.id === device.id ? { ...d, relay_state: newState } : d))
  );

  // Publish command via MQTT Edge Function
  const { error } = await supabase.functions.invoke('mqtt-publish', {
    body: {
      device_uuid: device.device_uuid,
      command: newState ? 'ON' : 'OFF',
    },
  });

  if (error) {
    // Revert optimistic update on failure
    setDevices((prev) =>
      prev.map((d) =>
        d.id === device.id ? { ...d, relay_state: !newState } : d
      )
    );
    toast({
      title: "Command Failed",
      description: "Failed to send command to the device.",
      variant: "destructive",
    });
  }
};
```

## 35.5 Row Level Security Policy (`master.sql` — Device Ownership)

```sql
-- Users can only view their own claimed devices
CREATE POLICY "Users can view own devices"
  ON public.devices
  FOR SELECT
  USING (
    owner_id = auth.uid()
    OR has_role(auth.uid(), 'admin')
  );

-- Users can update only their own devices (unless admin)
CREATE POLICY "Users can update own devices"
  ON public.devices
  FOR UPDATE
  USING (
    owner_id = auth.uid()
    OR has_role(auth.uid(), 'admin')
  );

-- Prevent non-admins from modifying the 'locked' column
CREATE OR REPLACE FUNCTION prevent_lock_bypass()
RETURNS TRIGGER AS $$
BEGIN
  IF OLD.locked IS DISTINCT FROM NEW.locked THEN
    IF NOT has_role(auth.uid(), 'admin') THEN
      RAISE EXCEPTION 'Only admins can lock/unlock devices';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

## 35.6 MQTT Command Publication (`supabase/functions/mqtt-publish/index.ts` — Key Excerpt)

```typescript
const topic = `nodely/${device_uuid}/command`;
const mqttUrl = `wss://${mqttHost}:8884/mqtt`;

await new Promise<void>((resolve, reject) => {
  const timeoutId = setTimeout(() => {
    reject(new Error('MQTT connection timeout'));
  }, 10000);

  const client = mqtt.connect(mqttUrl, {
    username: mqttUser,
    password: mqttPass,
    connectTimeout: 8000,
    clientId: `nodely-api-${Date.now()}`,
    protocolVersion: 4,
  });

  client.on('connect', () => {
    client.publish(topic, mqttPayload, { qos: 1 }, (err) => {
      clearTimeout(timeoutId);
      client.end(true);
      if (err) reject(err);
      else resolve();
    });
  });

  client.on('error', (err) => {
    clearTimeout(timeoutId);
    client.end(true);
    reject(err);
  });
});
```

---

# 36. REFERENCES

1. React.js Official Documentation. (2024). *React – A JavaScript library for building user interfaces.* Meta Platforms, Inc. Retrieved from https://react.dev/

2. Supabase Documentation. (2024). *Supabase – The open source Firebase alternative.* Supabase Inc. Retrieved from https://supabase.com/docs

3. Vite.js Official Documentation. (2024). *Vite – Next Generation Frontend Tooling.* Evan You. Retrieved from https://vitejs.dev/

4. TypeScript Official Documentation. (2024). *TypeScript: JavaScript With Types.* Microsoft Corporation. Retrieved from https://www.typescriptlang.org/docs/

5. Tailwind CSS Official Documentation. (2024). *Tailwind CSS – Rapidly build modern websites without ever leaving your HTML.* Tailwind Labs, Inc. Retrieved from https://tailwindcss.com/docs

6. Shadcn UI Official Documentation. (2024). *shadcn/ui – Beautifully designed components.* Retrieved from https://ui.shadcn.com/

7. PostgreSQL Global Development Group. (2024). *PostgreSQL: The World's Most Advanced Open Source Relational Database.* Retrieved from https://www.postgresql.org/docs/

8. OWASP Foundation. (2024). *OWASP Top Ten – Web Application Security Risks.* Retrieved from https://owasp.org/www-project-top-ten/

9. Framer Motion Documentation. (2024). *Framer Motion – A production-ready motion library for React.* Framer B.V. Retrieved from https://www.framer.com/motion/

10. Express.js Official Documentation. (2024). *Express – Fast, unopinionated, minimalist web framework for Node.js.* OpenJS Foundation. Retrieved from https://expressjs.com/

11. Zod Official Documentation. (2024). *Zod – TypeScript-first schema validation with static type inference.* Colin McDonnell. Retrieved from https://zod.dev/

12. MQTT.org. (2024). *MQTT – The Standard for IoT Messaging.* OASIS Standard. Retrieved from https://mqtt.org/

13. Lucide Icons. (2024). *Lucide – Beautiful & consistent icon toolkit made by the community.* Retrieved from https://lucide.dev/

14. Deno Official Documentation. (2024). *Deno – A modern runtime for JavaScript and TypeScript.* Deno Land Inc. Retrieved from https://deno.land/manual

15. Vite PWA Plugin Documentation. (2024). *vite-plugin-pwa – Zero config PWA plugin for Vite.* Anthony Fu. Retrieved from https://vite-pwa-org.netlify.app/

16. Newman, S. (2015). *Building Microservices: Designing Fine-Grained Systems.* O'Reilly Media.

17. Momjian, B. (2016). *Row Level Security in PostgreSQL.* PostgreSQL Wiki. Retrieved from https://wiki.postgresql.org/wiki/Row_Level_Security

18. Biorn-Hansen, A., Majchrzak, T.A., & Grønli, T.M. (2017). *Progressive Web Apps: The Possible Web-native Unifier for Mobile Development.* Proceedings of WEBIST, pp. 344-351.

19. HiveMQ Documentation. (2024). *MQTT Protocol Overview and Best Practices.* HiveMQ GmbH. Retrieved from https://www.hivemq.com/mqtt-protocol/

20. Workbox Documentation. (2024). *Workbox – JavaScript libraries for adding offline support to web apps.* Google Developers. Retrieved from https://developer.chrome.com/docs/workbox/

---

<div align="center">
<b>- END OF REPORT -</b>
</div>
