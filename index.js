const { writeFile } = require('fs').promises;
const { prompt } = require('inquirer');
const generateSVG = require('./lib/generateSVG');
const fs = require('fs');

async function run() {
  // Create a list of questions
  // The first question will be a choices question for what would the shape be
  const questions = [
    {
      name: "shape",
      message: "Which shape would you like?",
      type: "list",
      choices: [
        { name: "square", value: "Square" },
        { name: "circle", value: "Circle" },
        { name: "triangle", value: "Triangle" },
      ],
    },
    // The second question will be a prompt to input your character to be used to gather the text for the shape
    {
      name: "characters",
      type: "input",
      message: "Please enter 3 characters for use in your image",
      validate: function (input) {
        if (input.length > 3) {
          return "The limit to characters is 3.";
        } else if (input.length < 1) {
          return "Please enter atleast 1 character to be used.";
        } else {
          return true;
        }
      },
    },
    // The third question would be a choices of colors input for shape
    {
      name: "shapeColor",
      message: "Which color would you like to use for the shape?",
      type: "list",
      choices: [
        { name: "green", value: "Green" },
        { name: "blue", value: "Blue" },
        { name: "purple", value: "Purple" },
        { name: "yellow", value: "Yellow" },
        { name: "gray", value: "Gray" },
        { name: "teal", value: "Teal" },
      ],
    },
    // The fourth question would be a choices of color input for text
    {
      name: "textColor",
      message: "Which color would you like to use for the text?",
      type: "list",
      choices: [
        { name: "green", value: "Green" },
        { name: "blue", value: "Blue" },
        { name: "purple", value: "Purple" },
        { name: "yellow", value: "Yellow" },
        { name: "gray", value: "Gray" },
        { name: "teal", value: "Teal" },
      ],
    },
  ];

  try {
    const answers = await prompt(questions);
    const svgMarkup = generateSVG(answers);
    await writeToFile(svgMarkup);
  } catch (err) {
    console.error(err);
  }
}

function writeToFile(svgMarkup) {
    const dir = './output';
  
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  
    const filePath = './output/logo.svg';
  
    return writeFile(filePath, svgMarkup)
      .then(() => console.log('File saved successfully'))
      .catch((err) => console.error(err));
  }

run();