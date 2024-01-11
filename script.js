// Data Sources
const lifeAspects = ["In work", "In relationships", "In personal growth", "In your daily routine"];
const adviceTypes = ["remember", "consider", "never forget"];
const quotes = [
    "“The only way to do great work is to love what you do.” - Steve Jobs",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill",
    "“Believe you can and you're halfway there.” - Theodore Roosevelt",
    "“To handle yourself, use your head; to handle others, use your heart.” - Eleanor Roosevelt"
];

let lastAspect = '';
let lastAdvice = '';
let lastQuote = '';

// Advanced Random Selection
function getRandomElement(arr, lastElement) {
    let element;
    do {
        element = arr[Math.floor(Math.random() * arr.length)];
    } while (element === lastElement);
    return element;
}

// Message Assembly
function generateMessage(category) {
    let aspect = getRandomElement(lifeAspects, lastAspect);
    let advice = getRandomElement(adviceTypes, lastAdvice);
    let quote = getRandomElement(quotes, lastQuote);

    // Update last elements
    lastAspect = aspect;
    lastAdvice = advice;
    lastQuote = quote;

    // Conditional Assembly based on user input
    if (category && lifeAspects.includes(category)) {
        aspect = category;
    }

    return `${aspect}, ${advice} that ${quote}`;
}

// Event Listeners
document.getElementById('generateButton').addEventListener('click', () => {
    const category = document.getElementById('categorySelector').value;
    const advice = generateMessage(category);
    document.getElementById('adviceOutput').textContent = advice;
});
