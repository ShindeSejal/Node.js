// triangle.js

// Function to check if the triangle is equilateral
function isEquilateral(side1, side2, side3) {
    return side1 === side2 && side1 === side3;
}

// Function to calculate the perimeter of a triangle
function calcPerimeter(side1, side2, side3) {
    return side1 + side2 + side3;
}

module.exports = { isEquilateral, calcPerimeter };
