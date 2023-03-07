// Imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape } = require('./lib/shapes.js');
const Validate = require('./lib/validate.js')

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for SVG text.',
        validate: (answerString) => {
            const validate = new Validate(answerString);
            if(!validate.isText() || !validate.isLength(answerString)){
                console.log("\n Please enter SVG text up to 3 characters.");
                return false;
            } return true;
        }
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter a color/hex number for your text.',
        validate: (answerString) => {
            const validate = new Validate("text", answerString);
            if(!validate.isTextColor()){
                console.log("\n Please enter a valid color.");
                return false;
            } return true;
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['triangle', 'square', 'circle'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Enter a color/hex number for your shape.',
        validate: (answerString) => {
            const validate = new Validate("text", "textcolor", answerString);
            if(!validate.isShapeColor()){
                console.log("\n Please enter a valid color.");
                return false;
            } return true;
        }
    },
];

// Function to write to SVG file
function writeToFile(svgContent) {
    fs.writeFile(`./examples/logo.svg`, svgContent, (err) => {
                if (err) throw err;
                console.log("Generated logo.svg.");
            });
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const text = answers.text;
            const textfill = answers.textcolor;
            const shape = answers.shape;
            const shapefill = answers.shapecolor;

            const newShape = new Shape(text, textfill, shape, shapefill);
            
            const svgContent = newShape.renderShape(text, textfill, shape, shapefill);
            writeToFile(svgContent);
            
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt couldn't be rendered in the current environment.")
            } else {
                console.log("Something else went wrong.")
            }
        })
}

// Function call to initialize app
init();