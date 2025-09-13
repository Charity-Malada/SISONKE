> _This document serves as a template for you to write **setup** instructions for your project._

> Depending on the scale/complexity of your project, it may prove beneficial to have a **Python/Batch/Bash** script in the `scripts/` directory which _automatically sets-up_ the project.

# Setup Instructions


## Follow the steps below to set up and run the project.

## 📦 Requirements

````c
// Each dependency is explained with:
//  - Why it’s needed
//  - Quick setup steps
//  - Links/docs for deeper setup
//
// ---------------------------------------------------------------------------

// 1) Android Studio (IDE + Android SDK + Emulator)
// Why: build the mobile wallet (native Android) and run/test on emulator or device.
//
// Quick setup:
// - Download Android Studio for your OS and run the installer.
// - During install, accept Android SDK, Platform Tools, and Emulator components.
// - In Android Studio → SDK Manager: ensure at least one Android API level is installed (API 33+ recommended).
// - In AVD Manager: create an Android Virtual Device for emulator testing.
//
// Docs: https://developer.android.com/studio

// ---------------------------------------------------------------------------

// 2) Java JDK (11+)
// Why: Firebase Emulator Suite and Android build tools require Java 11+.
//
// Quick setup:
// - Install OpenJDK 11 (Adoptium / Temurin or OS package manager).
// - Verify with: `java -version`  → expect: openjdk version "11.x" or later.
//
// Docs: https://firebase.google.com/docs/emulator-suite

// ---------------------------------------------------------------------------

// 3) Node.js & npm (for Firebase CLI / Cloud Functions)
// Why: Firebase CLI, Cloud Functions, and Emulator require Node.js.
// Firebase Functions currently support Node 20 & 22 runtimes (recommended).
//
// Quick setup:
// - Install Node.js LTS (v20 or v22).
// - Windows/macOS: installer from nodejs.org.
// - Linux: install via NodeSource or nvm.
// - Verify: `node -v` and `npm -v`.
//
// Docs: https://nodejs.org/en

// ---------------------------------------------------------------------------

// 4) Firebase account + Firebase CLI (firebase-tools)
// Why: backend platform (Phone Auth, Firestore/Realtime DB, Cloud Functions, Hosting).
//
// Quick setup:
// - Create Firebase project: https://console.firebase.google.com
// - Enable: Authentication (Phone), Firestore or Realtime DB.
// - Install CLI: `npm install -g firebase-tools`
// - Login: `firebase login`
// - Initialize in project: `firebase init` (choose Functions, Firestore, Auth emulator, Hosting as needed).
//
// Notes: Emulator Suite requires Java + Node.js.
//
// Docs: https://firebase.google.com/docs/cli

// ---------------------------------------------------------------------------

// 5) USSD gateway provider (Africa’s Talking recommended; alternative: Clickatell)
// Why: handle USSD sessions from feature phones via aggregator/gateway.
//
// Quick setup (sandbox dev):
// - Create free Africa’s Talking sandbox account.
// - Set up a USSD channel in sandbox.
// - Point sandbox callback/webhook URL to your backend (Cloud Function or hosted endpoint).
// - Use simulator for testing menus without real shortcode.
//
// Production: requires aggregator (shared/dedicated shortcode) or direct MNO agreement.
//
// Docs:
// Africa’s Talking: https://help.africastalking.com
// Clickatell: https://clickatell.com

// ---------------------------------------------------------------------------

// 6) Local webhook tunneling (ngrok or equivalent)
// Why: USSD provider sandbox/webhooks need a public HTTPS URL for callbacks.
//
// Quick setup:
// - Install ngrok: https://ngrok.com/download
// - Run: `ngrok http 5001`  (replace port with local server/Function port).
// - Copy generated https://xxxxx.ngrok.io → paste into provider sandbox callback config.
//
// Docs: https://ngrok.com/docs

// ---------------------------------------------------------------------------

// 7) Git (source control)
// Why: clone repo, collaborate, version control.
//
// Quick setup:
// - Install Git from https://git-scm.com/downloads
// - Verify: `git --version`
// - Clone: `git clone https://github.com/PraisesObi/SISONKE.git`

// ---------------------------------------------------------------------------
// ✅ SHORT CHECKLIST
//
// [ ] Install Android Studio (SDK + Emulator).
// [ ] Install Java JDK 11+.
// [ ] Install Node.js (LTS v20 or v22) + npm.
// [ ] Install Firebase CLI + init project.
// [ ] Create Firebase project & enable Phone Auth + Firestore/DB.
// [ ] Sign up for Africa’s Talking sandbox (or Clickatell) for USSD testing.
// [ ] Install ngrok (for webhook tunneling).
// [ ] Install Git and clone repo.
//
// ---------------------------------------------------------------------------


---

## ⚙️ Installation

```bash
// 1) Clone the repository
git clone <https://github.com/PraisesObi/SISONKE>
cd SISONKE    # project root

// -------------------------------------------------------------------
// 2) Mobile App Setup (Android Wallet)
// Why: This is the main wallet app students will install on Android.
//
// Steps:
// - Navigate into the mobile directory
// - Install Flutter dependencies
cd mobile
flutter pub get

// To check setup: run `flutter doctor` and confirm no critical issues.

// -------------------------------------------------------------------
// 3) Backend Setup (Firebase Functions + Emulator)
// Why: The backend handles phone auth, database storage, and USSD callbacks.
//
// Steps:
// - Navigate into backend directory
// - Install npm dependencies (Cloud Functions + Firebase tools)
cd ../backend
npm install

// -------------------------------------------------------------------
// 4) Firebase CLI Project Initialization
// Run once in project root to connect local repo → Firebase project.
//
// Commands:
// firebase login
// firebase init        # choose Functions, Firestore/Realtime DB, Auth emulator, Hosting as needed
//
// Notes: Emulator Suite can be used locally during dev/testing.
//
// -------------------------------------------------------------------
// 5) USSD Gateway Sandbox Setup
// (Done outside repo, but required for testing)
//
// - Create Africa’s Talking sandbox account.
// - Configure USSD channel callback → ngrok HTTPS URL → backend endpoint.
// - Example callback URL: https://xxxxx.ngrok.io/ussd
//
// -------------------------------------------------------------------
// 6) Webhook Tunneling (ngrok)
// Why: Expose backend locally to test USSD provider callbacks.
//
// Example usage:
// ngrok http 5001    # if local Firebase Functions serve on port 5001
//
// Copy generated HTTPS URL into Africa’s Talking sandbox config.
//
// -------------------------------------------------------------------
// ✅ At this point you should be able to:
// - Run the mobile wallet (Flutter app) on emulator/device.
// - Run backend Firebase Functions locally with Emulator Suite.
// - Expose backend to USSD sandbox via ngrok.
// - Test end-to-end USSD menu flows.


## ▶️ Running the Project
## ▶️ Running the Project

```bash
// -------------------------------------------------------------------
// 1) Run the Mobile Wallet (Flutter app)
// Why: to test the student-facing wallet on Android.
//
// From project root:
cd mobile

// Ensure all dependencies are installed:
flutter pub get

// Run the app on emulator or connected device:
flutter run

// Notes:
// - Start Android Studio Emulator via AVD Manager OR plug in a physical Android device.
// - Make sure `flutter doctor` shows no blocking issues.
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// 2) Run Firebase Backend (Cloud Functions + Emulator)
// Why: handles phone authentication, Firestore, and USSD callback endpoints.
//
// From project root:
cd backend

// Install dependencies (first time only):
npm install

// Start Firebase Emulator Suite (auth, Firestore, functions, hosting if enabled):
firebase emulators:start

// This will:
// - Spin up local Firestore DB
// - Spin up local Auth emulator (for phone verification testing)
// - Expose Cloud Functions on localhost (usually http://localhost:5001)
//
// Keep this running in a separate terminal.
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// 3) Expose Local Backend to Internet (for USSD callbacks)
// Why: USSD sandbox (Africa’s Talking / Clickatell) needs a public HTTPS URL.
//
// In another terminal window:
ngrok http 5001

// Copy the generated https://xxxxx.ngrok.io URL.
// Paste this into your USSD provider sandbox callback config.
// Example (Africa’s Talking):
//  → USSD Channel → Callback URL → https://xxxxx.ngrok.io/ussd
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// 4) Test USSD Flow
// - Dial the test code in Africa’s Talking Sandbox Simulator.
// - Walk through menus served from your backend (Cloud Functions).
// - Confirm session text flows correctly (menu navigation, inputs).
//
// Expected dev flow:
// [Student phone/USSD dial] → [Africa’s Talking Sandbox] → [ngrok URL] → [Local Firebase Function] → [menu response returned]
// -------------------------------------------------------------------


// -------------------------------------------------------------------
// ✅ End-to-End Running Checklist:
// [ ] Mobile wallet runs in emulator/phone (Flutter).
// [ ] Backend Firebase emulators running (functions + auth + firestore).
// [ ] ngrok exposing backend (copy correct URL).
// [ ] USSD sandbox configured with ngrok URL.
// [ ] Test USSD menu navigation works.
// -------------------------------------------------------------------

````
