# Mobile Development Setup with Expo Go

## Objective

Mobile development demands more computational resources compared to web development. To ensure a smooth development experience, we are using the **Expo Framework** for React Native, which simplifies mobile app development and testing.  

This guide documents the process of setting up **Expo Go** on a physical device for testing React Native applications.

---

## Prerequisites

Before setting up Expo Go, ensure you already have the following installed:
- **Node.js LTS** [Download Node.js](https://nodejs.org/)
- **VS Code (IDE)** [Download VS Code](https://code.visualstudio.com/)
- A compatible **Operating System** (macOS, Linux, or Windows)

---

## Why Expo Go?

Unlike web development, which can be tested directly in a browser, mobile development often requires device emulators (iOS Simulator, Android Emulator). These emulators:
- Demand high computational power  
- Require frequent updates to match real devices (e.g., iPhone 7 iPhone 16 Pro Max, multiple Android versions)  
- Can be costly to maintain  

**Expo Go** provides a cost-effective and seamless solution by allowing you to:
- Run and test React Native apps directly on a **physical device** (Android or iOS)  
- Avoid heavy emulator dependencies  
- Use a single setup for both platforms  

---

## Installation Steps for Expo Go

1. Visit the official Expo Go homepage → [https://expo.dev/go](https://expo.dev/go)  
2. Select the latest **SDK version**.  
3. Install Expo Go on your physical device:  
   - **Android** [Install from Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)  
   - **iOS** [Install from Apple App Store](https://apps.apple.com/app/expo-go/id982107779)  
4. Open the **Expo Go** app on your device.  
5. Create a new account **or** log in with an existing account.  

---

## Verification

- Run the following command in your terminal to confirm Expo CLI is working:  
  ```bash
  npx create-expo-app MyFirstApp
  cd MyFirstApp
  npx expo start
