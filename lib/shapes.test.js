// Importing the shapes.js file
const Shapes = require('../lib/shapes');

// Testing the square shape to ensure it meets proper points
describe("Square", () => {
  it("should have the correct polygon points", () => {
    const square = new Shapes.Square("SVG", "Orange", "Purple");
    expect(square.render()).toContain('<rect fill="Orange" width="300" height="300" />');
  });
});


// Testing the circle shape to ensure it meets proper points
describe("Circle", () => {
  it("should have the correct polygon points", () => {
    const circle = new Shapes.Circle("SVG", "Orange", "Purple");
    expect(circle.render()).toContain('<circle cx="150" cy="150" r="120" fill="Orange"/>');
  });
});


// Testing the triangle shape to ensure it meets proper points
describe("Triangle", () => {
  it("should have the correct polygon points", () => {
    const triangle = new Shapes.Triangle("SVG", "Orange", "Purple");
    expect(triangle.render()).toContain('<polygon points="150, 18 282, 283 18, 283" fill="Orange"/>');
  });
});