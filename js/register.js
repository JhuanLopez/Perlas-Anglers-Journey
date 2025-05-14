import app from "./firebase-config.js"; // Import Firebase configuration
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

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

    // Determine role based on email
    const role = email.endsWith(".admin") ? "admin" : "user";

    // Save user data to the database
    await set(ref(database, `users/${user.uid}`), {
      fullName,
      email,
      role,
    });

    alert("Registration successful!");

    // Redirect based on role
    if (role === "admin") {
      window.location.href = "Admin.html";
    } else {
      window.location.href = "User_Login.html";
    }
  } catch (error) {
    console.error(error);
    alert("Error during registration: " + error.message);
  }
});