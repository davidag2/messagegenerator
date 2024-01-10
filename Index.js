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

  // Conditional Assembly based on user input category
  if (category && lifeAspects.includes(category)) {
    aspect = category;
  }

  return `${aspect}, ${advice} that ${quote}`;
}

// Displaying the Message
console.log(generateMessage("In personal growth")); // Example with a category
console.log(generateMessage()); // Example without specifying a category
