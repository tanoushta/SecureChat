# SecureChat

Welcome to SecureChat! This is a chat application built with React Native Expo and Firebase.

## Technology Used
React Native Expo: A JavaScript framework for building native mobile applications.

Firebase Firestore: A flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.

Firebase Authentication (Auth2.0): A service that can authenticate users using only client-side code, for ease of use and simplicity.

CryptoJS: A JavaScript library used for encryption and decryption, providing implementations of cryptographic algorithms like AES.

Node.js: A JavaScript runtime environment that allows you to run JavaScript code on the server-side.

Android Studio:  Only for Mobile Emulator for testing the app.

npm: The package manager for JavaScript, used for managing project dependencies.

Git: A distributed version control system used for tracking changes in the project codebase.

GitHub: A platform for hosting and collaborating on Git repositories.


## Getting Started

### Clone the Repository

Clone the repo using the following command:

```
git clone https://github.com//ChatApp.git
```

cd into the just created project and install dependencies with npm

```
cd SecureChat
```
```
npm i
```

## Setup Firebase 

Do not close your VS code, open a browser and enter in Firebase website.

Create a project and within it create the Authentication of email only.

Then Create and activate the Firestore Database.

Set the rules of the Firestore Database:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read and write access to authenticated users
    match /chats/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Go the Project setting in Firebase and copy the config in the `firebase.js` file
Replace your firebase backend config in the `firebase.js` file which look like this in your vs code project.

```
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
  
};

```
## Start Project 

To run the project open a command prompt(not powershell) in vs code and type: 

```
npm start
```

## Known issues

Expo SDK and libreries are always updating their versions and deprecating others. before installing the libreries run.

```
npm i expo@latest
```

Next you can run:

```
npx expo install --fix
```

Older versions of `react-native-gifted-chat` have a some issues. make sure you have the latest.

```
npx expo install 
npx i react-native-gifted-chat@latest

```

Expo will show you what dependencies need to be updated. Install the dependencies expo suggest you. It is possible that there is cache and you have to run.

```
npm start --reset-cache
```
