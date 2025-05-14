import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const auth = getAuth();
const database = getDatabase();

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user role from the database
    const userSnapshot = await get(ref(database, `users/${user.uid}`));
    if (userSnapshot.exists()) {
      const userData = userSnapshot.val();
      const role = userData.role;

      // Redirect based on role
      if (role === "admin") {
        window.location.href = "Admin.html";
      } else {
        window.location.href = "User_Account.html";
      }
    } else {
      alert("User data not found!");
    }
  } catch (error) {
    console.error(error);
    alert("Error during login: " + error.message);
  }
});