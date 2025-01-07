# UOV Student Care App

UOV Student Care App is a React Native application designed for students of the University of Vavuniya. It enables secure login for existing users and allows them to view their course details, subject marks, and average grades.

## Features
- **Secure Login**: Authentication system for existing students.
- **View Course Details**: Detailed course information, including subjects.
- **Subject Marks**: Display of marks for individual subjects.
- **Average Calculation**: Automatic calculation and display of average marks.

## Prerequisites
Ensure you have the following installed:
- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
  ```bash
  npm install -g expo-cli
  ```
- **Git**: [Download and Install Git](https://git-scm.com/)

## Setting Up the Project

1. **Clone the Repository**
   ```bash
   git clone (https://github.com/chamoindrejith/StudentCareApp.git)
   cd StudentCareApp
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Expo Development Server**
   ```bash
   npx expo start
   ```

## Dependencies
The following dependencies are used in the project:

```json
"dependencies": {
  "@react-navigation/bottom-tabs": "^7.2.0",
  "@react-navigation/elements": "^2.2.5",
  "@react-navigation/native": "^7.0.14",
  "@react-navigation/native-stack": "^7.2.0",
  "expo": "~52.0.23",
  "expo-status-bar": "~2.0.0",
  "react": "18.3.1",
  "react-native": "0.76.5",
  "react-native-paper": "^5.12.5",
  "react-native-safe-area-context": "^5.0.0"
}
```

## Usage
1. **Run the App**
   Once the development server is running, you can open the app on an emulator or a physical device using the Expo Go app.

2. **Login**
   Use your existing credentials to log in.

3. **View Information**
   - Navigate through the bottom tabs to view your course details and marks.
   - The average marks will be displayed automatically.

## Development
  
### Adding a New Dependency
To add a new dependency, run:
```bash
npm install <dependency-name>
```

### Updating Dependencies
To update all dependencies to their latest compatible versions, run:
```bash
npm update
```