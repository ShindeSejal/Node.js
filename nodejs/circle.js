// circle.js

// Function to calculate the area of a circle
function calcArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    return 2 * Math.PI * radius;
}

// Function to calculate the diameter of a circle
function calcDiameter(radius) {
    return 2 * radius;
}

module.exports = { calcArea, calcCircumference, calcDiameter };
