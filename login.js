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
