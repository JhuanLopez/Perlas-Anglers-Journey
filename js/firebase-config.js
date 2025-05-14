// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Your web app's Firebase configuration
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

// Export Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);

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