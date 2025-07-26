# 🚗 RideWave - Complete Transportation App

A complete urban transportation app built with React Native, Node.js, and WebSockets, offering a robust solution for passengers and drivers. The project's goal was to further explore React Native with Expo and the backend with Node.js. The project lacks some tweaks, such as improved typing, new endpoints integrating the entire project ecosystem, and improvements to the layout of both apps. However, the time I spent studying it was very rewarding.

## 📱 Project Overview

RideWave consists of **4 integrated applications** that work together to provide a complete transportation experience:

- **📱 User App** - Interface for passengers to request rides
- **🚖 Driver App** - Interface for drivers to manage rides  
- **🖥️ Backend Server** - REST API with authentication and service integrations
- **🔌 Socket Server** - Real-time communication between apps

---
### App User
<img width="1631" height="506" alt="driver" src="https://github.com/user-attachments/assets/14effd44-6319-4c09-bd9e-ab32b68cec4f" />

---
### App Driver
<img width="1763" height="493" alt="user" src="https://github.com/user-attachments/assets/ca740715-ab79-4353-abb5-4d4bb772645f" />

---

## 🚀 How to Initialize Projects

### 1. 🖥️ **Backend Server** 
```bash
cd server
npm run dev
```
**Default port:** `3000`

### 2. 📱 **User App**
```bash
cd ridewave
npm start
```

### 3. 🚖 **Driver App** 
```bash
cd ridewave-driver
npm start
```

### 4. 🔌 **Socket Server**
```bash
cd socket
npm start
```

---

## 🛠️ Main Technologies and Libraries

### 📱 **Mobile Frontend (React Native)**

#### **Navigation & Interface**
- `expo-router` - File-based routing
- `@react-navigation/native` - Screen navigation
- `react-native-screens` & `react-native-safe-area-context` - Screen optimization

#### **Maps & Location**
- `react-native-maps` - Native maps integration
- `react-native-maps-directions` - Route calculation
- `expo-location` - Precise geolocation
- `react-native-google-places-autocomplete` - Address search
- `geolib` - Geographic calculations

#### **Communication & Networking**
- `axios` - HTTP requests
- `expo-network` - Connectivity monitoring
- `react-native-websocket` - WebSocket client

#### **Authentication & Security**
- `react-native-otp-inputs` & `react-native-otp-textinput` - SMS verification
- `@react-native-async-storage/async-storage` - Secure local storage
- `react-native-get-random-values` - Random value generation

#### **Interface & Experience**
- `react-native-swiper` - Interactive carousels
- `react-native-toast-notifications` - Elegant notifications
- `react-native-reanimated` - Smooth animations
- `react-native-picker-select` - Custom selectors
- `react-native-switch-toggle` - Custom switches

#### **Utilities**
- `lodash` - Utility functions
- `moment` - Date manipulation
- `timeago.js` - Relative time formatting

### 🖥️ **Backend (Node.js + Express)**

#### **Server & API**
- `express` - Robust web framework
- `cookie-parser` - Cookie management
- `ts-node-dev` - TypeScript development

#### **Database & ORM**
- `@prisma/client` - Modern and type-safe ORM
- **PostgreSQL** - Relational database (Render.com)

#### **Authentication & Security**
- `jsonwebtoken` - Secure JWT tokens
- `@types/jsonwebtoken` - TypeScript typing

#### **External Integrations**
- `twilio` - SMS sending for verification
- `nylas` - Email integration

#### **Environment & Configuration**
- `dotenv` - Environment variables management

### 🔌 **Socket Server (WebSocket)**

#### **Real-time Communication**
- `ws` - Native WebSocket server
- `express` - Basic HTTP server
- `geolib` - Real-time distance calculations

---

## 🗄️ **Database Solution**

### **PostgreSQL on Render (Free Tier)**
- ✅ **1GB** free storage
- ⚠️ **Data deleted** after 30 days of inactivity
- 🔄 **Auto-backup** during active period

### **Essential Prisma Commands**
```bash
# Clear old migrations
rm -rf prisma/migrations

# Recreate database
npx prisma migrate dev --name init

# Update Prisma client
npx prisma generate

# Open Prisma Studio
npx prisma studio
```

---

## 📊 **Project Scope**

### **📈 Technical Statistics**
- **4 Integrated Applications**
- **50+ Dependencies** carefully selected
- **3 Main Languages** (TypeScript, JavaScript, SQL)
- **5 Supported Platforms** (iOS, Android, Web, Server, Socket)

### **🎯 Implemented Features**
- ✅ SMS Authentication (Twilio)
- ✅ Interactive maps with routes
- ✅ Real-time communication
- ✅ Precise geolocation
- ✅ Optimized native interface
- ✅ Notification system
- ✅ Relational database
- ✅ Complete REST API

### **🔧 External Integrations**
- **Google Maps API** - Maps and geocoding
- **Twilio SMS** - Phone verification
- **Render PostgreSQL** - Cloud database
- **Expo Services** - Build and distribution

---

## 🏗️ **System Architecture**

```
┌─────────────────┐    ┌─────────────────┐
│    User App     │    │   Driver App    │
│  (React Native) │    │ (React Native)  │
└─────────┬───────┘    └─────────┬───────┘
          │                      │
          └──────────┬───────────┘
                     │
            ┌────────▼────────┐
            │  Socket Server  │
            │   (WebSocket)   │
            └────────┬────────┘
                     │
            ┌────────▼────────┐
            │ Backend Server  │
            │ (Express + JWT) │
            └────────┬────────┘
                     │
            ┌────────▼────────┐
            │   PostgreSQL    │
            │  (Render.com)   │
            └─────────────────┘
```

---

## 🚀 **Key Achievements**

### **Technical Excellence**
- **Microservices Architecture** - Scalable and maintainable system
- **Real-time Communication** - WebSocket implementation for live updates
- **Cross-platform Development** - Single codebase for iOS and Android
- **Type-safe Development** - Full TypeScript implementation
- **Modern Development Stack** - Latest versions of all major frameworks

### **Business Features**
- **Complete Ride-sharing Solution** - From request to completion
- **Driver-Passenger Matching** - Intelligent location-based pairing
- **Route Optimization** - Google Maps integration for best routes
- **Secure Authentication** - SMS-based verification system
- **Real-time Tracking** - Live location updates for both parties

### **Performance & Scalability**
- **Optimized Bundle Size** - Careful dependency management
- **Efficient State Management** - Redux-like patterns with React hooks
- **Database Optimization** - Prisma ORM with query optimization
- **Memory Management** - Proper cleanup and resource management

---

## 🛡️ **Security & Quality**

- **JWT Authentication** - Secure token-based authentication
- **Input Validation** - Comprehensive data validation
- **Error Handling** - Graceful error recovery
- **Type Safety** - Full TypeScript coverage
- **Code Quality** - ESLint and Prettier configuration

---

## 🌟 **Development Highlights**

This project demonstrates expertise in:

- **Full-Stack Mobile Development**
- **Microservices Architecture**
- **Real-time Systems**
- **External API Integration** 
- **Geographic Information Systems (GIS)**
- **Authentication & Security**
- **Database Design & Optimization**
- **DevOps & Cloud Deployment**

---

## 👨‍💻 **Developed by**
**Thomas Costa** - Full Stack Developer

This project showcases comprehensive skills in modern mobile and web development, from conception to deployment, including complex integrations and real-time features.

---

## 📝 **License**
This project was developed for educational and portfolio purposes.

---

## 🔄 **Quick Start Guide**

1. **Clone the repository**
2. **Install dependencies** in all 4 directories
3. **Configure environment variables**
4. **Set up PostgreSQL database**
5. **Run Prisma migrations**
6. **Start all services** using the commands above

For detailed setup instructions and troubleshooting, please refer to individual project directories.

</br>

### By
Edition made with ❤️ by Thomas Costa 👋

[![Linkedin Badge](https://img.shields.io/badge/-Thomas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/thomasjeffcosta/) 
[![Gmail Badge](https://img.shields.io/badge/-thomas.jeffcosta@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thomas.jeffcosta@gmail.com)](mailto:thomas.jeffcosta@gmail.com)




