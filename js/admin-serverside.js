// admin-server.js
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// Initialize Firebase Admin SDK
const serviceAccount = require("./path-to-service-account-key.json"); // Replace with your service account key file
initializeApp({
  credential: cert(serviceAccount),
});

// Fetch all users
async function listAllUsers() {
  try {
    const auth = getAuth();
    const listUsersResult = await auth.listUsers(1000); // Fetch up to 1000 users
    listUsersResult.users.forEach((userRecord) => {
      console.log("User:", userRecord.toJSON());
    });
  } catch (error) {
    console.error("Error listing users:", error);
  }
}

// Call the function
listAllUsers();