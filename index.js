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
  type: "input",
  validate: function (input) {
    const validColors = [
      "green",
      "blue",
      "purple",
      "yellow",
      "gray",
      "teal",
      "azure",
      "aqua",
      "blue Gray",
      "blue Green",
      "jade",
    ];
    const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
    if (validColors.includes(input.toLowerCase()) || isHexCode) {
      return true;
    } else {
      return "Please enter a valid color name or hex code (e.g. #FF0000 for red).";
    }
  },
},
// The fourth question would be a choices of color input for text
{
  name: "textColor",
  message: "Which color would you like to use for the text?",
  type: "input",
  validate: function (input) {
    const validColors = [
      "green",
      "blue",
      "purple",
      "yellow",
      "gray",
      "teal",
      "azure",
      "aqua",
      "blue Gray",
      "blue Green",
      "jade",
      // Add any additional valid color names here
    ];
    const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
    if (validColors.includes(input.toLowerCase()) || isHexCode) {
      return true;
    } else {
      return "Please enter a valid color name or hex code (e.g. #FF0000 for red).";
    }
  },
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

async function writeToFile(svgMarkup) {
  const dir = './examples';
  const baseName = 'Generated logo';
  const extName = 'svg';
  let counter = 0;
  let filePath = `${dir}/${baseName}.${extName}`;

  // Check if the file already exists
  while (fs.existsSync(filePath)) {
    counter++;
    filePath = `${dir}/${baseName}-${counter}.${extName}`;
  }

  // Write the file
  try {
    await writeFile(filePath, svgMarkup);
    console.log(`Logo saved successfully to ${filePath}!!`);
  } catch (err) {
    console.error(err);
  }
}

run();