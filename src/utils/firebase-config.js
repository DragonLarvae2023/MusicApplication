// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ3MlRUYVcME1ypQye3ezTUGbFS2gKubg",
  authDomain: "musicapp-by-prakhar.firebaseapp.com",
  projectId: "musicapp-by-prakhar",
  storageBucket: "musicapp-by-prakhar.appspot.com",
  messagingSenderId: "1026710641333",
  appId: "1:1026710641333:web:4765729e4cc1844c213cfc",
  measurementId: "G-661YZDT9J2",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth()
export { auth };

