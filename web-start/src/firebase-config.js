import { initializeApp } from 'firebase/app';

/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: 'AIzaSyAAfYBBUwQfVVg_VL9b9J6PWSERHQxXTJA',
  authDomain: 'alpine-task-342916.firebaseapp.com',
  projectId: 'alpine-task-342916',
  storageBucket: 'alpine-task-342916.appspot.com',
  messagingSenderId: '486022655273',
  appId: '1:486022655273:web:ff27e7092ac061a270db38',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
