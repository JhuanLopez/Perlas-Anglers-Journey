import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const auth = getAuth();
const database = getDatabase();

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const userSnapshot = await get(ref(database, `users/${user.uid}`));
    if (userSnapshot.exists()) {
      const userData = userSnapshot.val();
      document.getElementById("welcomeMessage").innerText = `Welcome, ${userData.fullName} (${userData.role})`;
    } else {
      alert("User data not found!");
    }
  } else {
    window.location.href = "User_Login.html";
  }
});