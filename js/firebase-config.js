// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import app from "./firebase-config.js"; // Import Firebase configuration
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

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

// Initialize Firebase Auth and Database
const auth = getAuth(app);
const database = getDatabase(app);

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validate passwords
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user data to the database
    await set(ref(database, `users/${user.uid}`), {
      fullName,
      email,
      role: "user", // Default role is "user"
    });

    alert("Registration successful! Redirecting to login page...");

    // Redirect to login page
    window.location.href = "User_Login.html";
  } catch (error) {
    console.error(error);
    alert("Error during registration: " + error.message);
  }
});