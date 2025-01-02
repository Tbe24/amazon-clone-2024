// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5_KE1WVgSJZkTsyUdnFHLLU3wdwFfLbM",
  authDomain: "e-clone-49b04.firebaseapp.com",
  projectId: "e-clone-49b04",
  storageBucket: "e-clone-49b04.firebasestorage.app",
  messagingSenderId: "488204113159",
  appId: "1:488204113159:web:290c893a593e8afda7a1a2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
