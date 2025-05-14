// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Firebase configuration
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
const auth = getAuth(app);
const database = getDatabase(app);

// Handle Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data to the database
      await set(ref(database, `users/${user.uid}`), {
        email,
        role: "user" // Default role
      });

      alert("Registration successful!");
      window.location.href = "User_Login.html";
    } catch (error) {
      console.error(error);
      alert("Error during registration: " + error.message);
    }
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert("Login successful!");
      window.location.href = "User_Account.html"; // Redirect to user account page
    } catch (error) {
      console.error(error);
      alert("Error during login: " + error.message);
    }
  });
}