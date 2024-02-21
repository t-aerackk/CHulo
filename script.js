const quotes = {
    science: [
        "Science is organized knowledge.",
        "The important achievement of Apollo was demonstrating that humanity is not forever chained to this planet and our visions go rather further than that and our opportunities are unlimited.",
        "Time is relative",
        "The most important thing is to never stop questioning."
    ],
    inspiration: [
        "The only way to do great work is to love what you do.",
        "Don't watch the clock; do what it does. Keep going.",
        "When you have a dream, you've got to grab it and never let go.",
        "Nothing is impossible. The word itself says 'I'm possible!'"
    ],
};

let currentCategory = 'science';
let currentQuoteIndex = 0;
let darkMode = false;
let fontSize = 18;

const darkModeToggle = document.getElementById('darkModeToggle');
const fontSizeDisplay = document.getElementById('fontSize');
const quoteDisplay = document.getElementById('quoteDisplay');
const container = document.getElementById('container');

const setQuote = () => {
    quoteDisplay.textContent = quotes[currentCategory][currentQuoteIndex];
};

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? '#333' : '#66D3FA';
    document.body.style.color = darkMode ? '#fff' : '#333';
    container.style.backgroundColor = darkMode ? '#333' : '#fff';
};

function changeFontSize(value) {
    fontSize += value;
    fontSizeDisplay.textContent = fontSize;
    quoteDisplay.style.fontSize = `${fontSize}px`;
};

function getNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    setQuote();
};

function getPrevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    setQuote();
};

function getRandomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    setQuote();
};

function onCategorySelect(event) {
    currentCategory = event.target.value;
    currentQuoteIndex = 0;
    setQuote();
}

setQuote(); 