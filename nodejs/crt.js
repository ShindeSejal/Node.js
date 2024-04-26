// app.js

// Import functions from the shape modules
const circle = require('./circle.js');
const rectangle = require('./rectangle.js');
const triangle = require('./traingle.js');

// Test the circle functions
console.log("Circle Area:", circle.calcArea(5));
console.log("Circle Circumference:", circle.calcCircumference(5));
console.log("Circle Diameter:", circle.calcDiameter(5));

// Test the rectangle functions
console.log("Rectangle Area:", rectangle.calcArea(4, 6));
console.log("Rectangle Perimeter:", rectangle.calcPerimeter(4, 6));

// Test the triangle functions
console.log("Is the triangle equilateral?", triangle.isEquilateral(5, 5, 5));
console.log("Triangle Perimeter:", triangle.calcPerimeter(3, 4, 5));
