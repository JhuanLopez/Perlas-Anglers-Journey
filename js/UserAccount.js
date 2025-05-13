const firebaseConfig = {
    apiKey: "AIzaSyDEMS5xrTRv7mW9IvOquAaukWpAYJfvl3E",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "perlasdb-53fcd",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Function to check if the email is already registered
async function isEmailRegistered(email) {
    try {
        const signInMethods = await auth.fetchSignInMethodsForEmail(email);
        return signInMethods.length > 0; // Returns true if email is already registered
    } catch (error) {
        console.error("Error checking email:", error);
        alert("An error occurred while checking the email. Please try again.");
        return false;
    }
}

// Handle form submission
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if the email is already registered
    const emailExists = await isEmailRegistered(email);
    if (emailExists) {
        alert('This email is already registered. Please use a different email or log in.');
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Optionally, save the full name to the user's profile
        await user.updateProfile({
            displayName: fullName
        });

        alert('Registration successful!');
        window.location.href = 'User_Login.html'; // Redirect to login page
    } catch (error) {
        alert(error.message);
    }
});