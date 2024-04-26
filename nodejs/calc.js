// calc.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Function to calculate the square of a number
function square(a) {
    return a * a;
}

// Function to calculate the sum of multiple numbers
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function to find the minimum among multiple numbers
function min(...numbers) {
    return Math.min(...numbers);
}

// Function to find the maximum among multiple numbers
function max(...numbers) {
    return Math.max(...numbers);
}

module.exports = { add, subtract, multiply, divide, square, sum, min, max };
