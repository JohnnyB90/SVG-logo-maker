const shapes = require('./shapes');

function generateSVG(data) {
  const { shape, characters, shapeColor, textColor } = data;

  let svgMarkup;

  if (shape === "Square") {
    svgMarkup = new shapes.Square(characters, shapeColor, textColor).render();
  } else if (shape === "Circle") {
    svgMarkup = new shapes.Circle(characters, shapeColor, textColor).render();
  } else if (shape === "Triangle") {
    svgMarkup = new shapes.Triangle(characters, shapeColor, textColor).render();
  }

  return svgMarkup;
}

module.exports = generateSVG;