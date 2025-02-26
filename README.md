# Fintech Clone - React Native

A modern fintech mobile application built with React Native and Expo 52. This project integrates **Clerk** for authentication, **CoinMarketCap API** for real-time cryptocurrency data, and **Victory Native** for interactive graphs. 

> **Note:** This app is built specifically for **Android** and may cause errors on **iOS**.

## Features

- **Authentication**: Secure login and signup using Clerk.
- **Real-Time Crypto Data**: Fetch and display live cryptocurrency prices and trends using CoinMarketCap API.
- **Interactive Graphs**: Visualize crypto trends using Victory Native.
- **App Lock on Inactivity**: Automatically locks the app when idle.
- **Movable Widgets**: Customize the dashboard with drag-and-drop widgets using gesture handling.
- **State Management**: Uses **TanStack Query (React Query)** for data fetching and caching, **MMKV Storage** for fast storage, and **Zustand** for global state management.
- **UI & Styling**: Designed with **Tailwind CSS** and **Expo Vector Icons**.


## Tech Stack

- **Framework**: React Native (Expo 52)
- **Authentication**: Clerk
- **API**: CoinMarketCap API
- **State Management**: TanStack Query, Zustand, MMKV Storage
- **UI & Styling**: Tailwind CSS, Expo Vector Icons
- **Gesture Handling**: React Native Gesture Handler

## Installation & Setup

### Prerequisites
Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)
- Create an account on [Clerk](https://clerk.dev/) to get your **Clerk API key**.
- Create an account on [CoinMarketCap](https://coinmarketcap.com/) to get your **CoinMarketCap API key**.
- Add these API keys in the `.env` file as shown in the setup instructions.

### Clone the Repository
```sh
git clone https://github.com/ARehman047/react-native-fintech-clone
cd fintech-clone
```

### Install Dependencies
```sh
npm install
```

## Set Up Environment Variables
 Create a .env file in the root directory and add your API keys:

 ```sh
 CLERK_FRONTEND_API=<your-clerk-api-url>
COINMARKETCAP_API_KEY=<your-coinmarketcap-api-key>
```

### Run the App
Start the Expo development server:
```sh
npx expo start
```

### Run on Android
```sh
npm run android
```
