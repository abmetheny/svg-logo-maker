// Imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Square, Circle } = require('./lib/shapes.js')
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
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Enter a color/hex number for your shape.',
    },
];

function createShape(shapeFill, textFill) {
    return new Shape(
        '1.1',
        '300',
        '200',
        'http://www.w3.org/2000/svg',
        '150',
        '100',
        shapeFill,
        '150',
        '125',
        '60',
        'middle',
        textFill
    );
}
  

// Function to write SVG to HTML  file
// function writeToFile(fileName, answersArray) {
//     console.log(answersArray);

//     fs.writeFile(`newSVG.html`, answersArray, (err) => {
//                 if (err) throw err;
//                 console.log("Saved!");
//             });
// }

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // console.log(answers.Title);
            // console.log(answers);
            const shapeFill = answers.shapecolor;
            const textFill = answers.textcolor;
            const shape = JSON.stringify(createShape(shapeFill, textFill));
            console.log("createShape function run: " + shape);
            // const answersObj = generateMarkdown(answers);
            // const fileName = answers.title;
            // writeToFile(fileName, answersArray);
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