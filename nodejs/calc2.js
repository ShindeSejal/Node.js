// calc2.js

// Import the functions from the calc module
const { add, subtract, multiply, divide, square, sum, min, max } = require('./calc');

// Test the functions
console.log("Addition:", add(5, 2));
console.log("Subtraction:", subtract(8, 3));
console.log("Multiplication:", multiply(4, 7));
console.log("Division:", divide(8, 2));
console.log("Square:", square(2));
console.log("Sum:", sum(1, 2, 3, 4, 5));
console.log("Minimum:", min(10, 20, 5, 15));
console.log("Maximum:", max(10, 20, 5, 15));
