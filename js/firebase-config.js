// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA25xHdOKXO3Xejj23-JjfGnTDd1gZPZM",
  authDomain: "perlas-database.firebaseapp.com",
  databaseURL: "https://perlas-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "perlas-database",
  storageBucket: "perlas-database.firebasestorage.app",
  messagingSenderId: "623014500525",
  appId: "1:623014500525:web:48b3fbb3759dd3c4b90e24",
  measurementId: "G-KFK18WZW79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);