# Sele Native App

A modern React Native mobile application built with Expo and TypeScript, featuring a clean architecture and robust navigation.

## Features

- Cross-platform support (iOS, Android, Web)
- Modern UI with Expo Router
- TypeScript for type safety
- Responsive design
- Custom components and hooks
- Environment configuration
- Testing setup with Jest

## Tech Stack

- **Framework**: Expo (React Native)
- **Language**: TypeScript
- **Navigation**: Expo Router
- **UI Components**: React Native, Expo Vector Icons
- **Development Tools**: Jest, ESLint

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (recommended)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd sele-native-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

## Running the App

- **Android**: `npm run android`
- **iOS**: `npm run ios`
- **Web**: `npm run web`

## Project Structure

```
sele-native-app/
├── app/              # Main application routes and screens
├── components/       # Reusable UI components
├── constants/        # Application constants
├── hooks/           # Custom React hooks
├── assets/          # Static assets (images, fonts)
└── scripts/         # Utility scripts
```

## Available Scripts

- `npm start` - Start the development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset project configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
