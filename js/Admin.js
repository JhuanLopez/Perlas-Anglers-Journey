const accountsTable = document.getElementById("accountsTable");

// Fetch all registered emails from the server-side API
async function fetchEmails() {
  try {
    const response = await fetch("https://your-server-endpoint.com/list-users"); // Replace with your API endpoint
    const users = await response.json();

    if (users.length > 0) {
      users.forEach((user) => {
        const row = document.createElement("tr");

        // Add Email
        const emailCell = document.createElement("td");
        emailCell.textContent = user.email || "No email found"; // Fallback if email is missing
        row.appendChild(emailCell);

        // Append the row to the table
        accountsTable.appendChild(row);
      });
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