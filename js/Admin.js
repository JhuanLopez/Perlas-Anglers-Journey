// Mock user data for demonstration purposes
const users = [
    { username: "user1", password: "password1", accountType: "user" },
    { username: "admin1", password: "adminpass", accountType: "admin" }
];

// Function to handle login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Find the user in the mock data
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        if (user.accountType === "admin") {
            // Redirect to admin page
            window.location.href = "Admin.html";
        } else if (user.accountType === "user") {
            // Redirect to landing page
            window.location.href = "Landing.html";
        }
    } else {
        alert("Invalid username or password!");
    }
}

// Attach the login function to the login button
document.getElementById("loginButton").addEventListener("click", login);