import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "perlas-database", // Replace with your actual API key if needed
  authDomain: "perlas-database.firebaseapp.com",
  databaseURL: "https://perlas-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "perlas-database",
  storageBucket: "perlas-database.firebasestorage.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;