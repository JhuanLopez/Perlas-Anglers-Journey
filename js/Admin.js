import { database } from "./firebase-config.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const accountsTable = document.getElementById("accountsTable");

// Fetch all registered emails from Firebase Realtime Database
async function fetchEmails() {
  try {
    const usersRef = ref(database, "users");
    const snapshot = await get(usersRef);

    if (snapshot.exists()) {
      const users = snapshot.val();
      for (const userId in users) {
        const user = users[userId];
        const row = document.createElement("tr");

        // Add Email
        const emailCell = document.createElement("td");
        emailCell.textContent = user.email || "No email found"; // Fallback if email is missing
        row.appendChild(emailCell);

        // Append the row to the table
        accountsTable.appendChild(row);
      }
    } else {
      const row = document.createElement("tr");
      const noDataCell = document.createElement("td");
      noDataCell.textContent = "No registered emails found.";
      noDataCell.colSpan = 1;
      row.appendChild(noDataCell);
      accountsTable.appendChild(row);
    }
  } catch (error) {
    console.error("Error fetching emails:", error);
  }
}

// Call the function to fetch emails
fetchEmails();