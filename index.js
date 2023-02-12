// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please explain any installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please provide information about the project's usage."
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Any instructions for testing?'
        },
    ])
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
