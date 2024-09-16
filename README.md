# AI Trip Planning App

## Overview

AI Trip Planning App is a React Native application that leverages AI to generate personalized trip itineraries based on user-provided budget and duration. The app integrates various APIs to enhance functionality and user experience.

## Features

- **AI-Generated Trip Plans**: Utilizes the Gemini API to create trip plans tailored to user budget and duration.
- **User Authentication**: Implements Firebase for secure user authentication and trip data storage.
- **Dynamic Place Images**: Fetches and displays place images using the Google Place API.
- **Global State Management**: Uses Context API for efficient and centralized state management.
- **Real-Time Data**: Provides real-time trip data and visually appealing design for an enhanced user experience.

## Technologies Used

- **Front-End**: React Native, Context API
- **Back-End**: Firebase (authentication and data storage)
- **APIs**: Gemini API, Google Place API

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/ashusatp/AI-driven-trip-planner.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd AI-driven-trip-planner
    ```
3. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

1. **Start the application**:
    ```sh
    npm start
    ```
2. **Run the app on your device/emulator**:
    ```sh
    npm run android    # For Android
    npm run ios        # For iOS
    ```

## Configuration

1. **Firebase Setup**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Add your app to the Firebase project and obtain the Firebase configuration.
   - Replace the Firebase configuration in your project.

2. **Gemini API Setup**:
   - Obtain an API key from the [Gemini API](https://example.com/gemini-api) provider.
   - Replace the API key in your project configuration.

3. **Google Place API Setup**:
   - Obtain an API key from the [Google Cloud Console](https://console.cloud.google.com/).
   - Replace the API key in your project configuration.

4. **Environment Variables**:
   - EXPO_PUBLIC_GOOGLE_MAP_KEY= 
   - EXPO_PUBLIC_GEMINI_API_KEY=

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes**.
4. **Commit your changes**:
    ```sh
    git commit -m 'Add some feature'
    ```
5. **Push to the branch**:
    ```sh
    git push origin feature/your-feature-name
    ```
6. **Open a pull request**.

## Acknowledgements

- [Gemini API](https://example.com/gemini-api)
- [Firebase](https://firebase.google.com/)
- [Google Place API](https://developers.google.com/places/web-service/overview)
