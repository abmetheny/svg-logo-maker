// Imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js')
// const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for SVG text.',
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Enter a color/hex number for your text.',
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
    },
];

// Function to write to SVG file
function writeToFile(svgContent) {
    fs.writeFile(`logo.svg`, svgContent, (err) => {
                if (err) throw err;
                console.log("Saved!");
            });
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers);
            const text = answers.text;
            const textfill = answers.textcolor;
            const shape = answers.shape;
            const shapefill = answers.shapecolor;

            const newShape = new Shape(text, textfill, shape, shapefill);
            console.log(newShape);

            console.log(newShape.renderShape(text, textfill, shape, shapefill));
            
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