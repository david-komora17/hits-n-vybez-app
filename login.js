// --- Quote Generation Logic (kept mostly the same as it's separate) ---
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

async function getQuote() {
    const apiUrl = 'https://api.quotable.io/random';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        quoteText.textContent = data.content;
        quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteText.textContent = 'Failed to load quote.';
        quoteAuthor.textContent = '';
    }
}

newQuoteBtn.addEventListener('click', getQuote);
document.addEventListener('DOMContentLoaded', getQuote);


// --- Login Authentication Logic (Simplified) ---

const loginForm = document.getElementById('login-form');
const loginMessageDiv = document.getElementById('login-message');

// Simplified "user database"
const VALID_CREDENTIALS = {
    "JohnDoe12345password123john.doe@example.com": true,
    "JaneSmith67890securepassjane.smith@example.com": true
};
// Note: This concatenates all fields into a single key. Extremely basic.

// Function to display messages
function displayMessage(message, type) {
    loginMessageDiv.textContent = message;
    loginMessageDiv.className = `login-message ${type}`;
    loginMessageDiv.style.display = 'block';

    setTimeout(() => {
        loginMessageDiv.style.display = 'none';
        loginMessageDiv.textContent = '';
    }, 5000);
}

// Handle form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Access input values directly from the form's elements property
    const { firstName, secondName, idNumber, password, email } = event.target.elements;

    const inputFirstName = firstName.value.trim();
    const inputSecondName = secondName.value.trim();
    const inputIdNumber = idNumber.value.trim();
    const inputPassword = password.value.trim();
    const inputEmail = email.value.trim();

    // Check if any required field is empty
    if (!inputFirstName || !inputSecondName || !inputIdNumber || !inputPassword || !inputEmail) {
        displayMessage("Please fill in all fields.", "error");
        return;
    }

    // Create a unique key from the input values
    const inputKey = `${inputFirstName}${inputSecondName}${inputIdNumber}${inputPassword}${inputEmail}`;

    if (VALID_CREDENTIALS[inputKey]) {
        displayMessage("Login successful! Redirecting...", "success");
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        displayMessage("Invalid credentials. Please try again.", "error");
    }
});