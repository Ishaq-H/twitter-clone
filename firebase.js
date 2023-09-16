// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI9Q8Ae4o4JqNJhDZ44DHnP_MfHzWE9Jw",
  authDomain: "twitter-clone-64aa2.firebaseapp.com",
  projectId: "twitter-clone-64aa2",
  storageBucket: "twitter-clone-64aa2.appspot.com",
  messagingSenderId: "897246861831",
  appId: "1:897246861831:web:6fd5e3e82fbe97d7ce28a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
