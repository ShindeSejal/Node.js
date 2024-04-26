// rectangle.js

// Function to calculate the area of a rectangle
function calcArea(length, breadth) {
    return length * breadth;
}

// Function to calculate the perimeter of a rectangle
function calcPerimeter(length, breadth) {
    return 2 * (length + breadth);
}

module.exports = { calcArea, calcPerimeter };
