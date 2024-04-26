// app.js

// Import the greet function from the local module greet.js
const greet = require('./greet');

// Call the greet function to get the appropriate greeting
const greeting = greet();

// Display the greeting
console.log(greeting + ", user!");
