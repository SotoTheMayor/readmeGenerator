// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: `What is your project title?\n`
        },
        {
            type: 'input',
            name: 'description',
            message: `Please provide a description of your project.\n`
        },
        {
            type: 'input',
            name: 'installation',
            message: `Please explain any installation instructions.\n`
        },
        {
            type: 'input',
            name: 'usage',
            message: `Please provide information about the project's usage.\n`
        },
        {
            type: 'input',
            name: 'contributing',
            message: `What are the contribution guidelines?\n`
        },
        {
            type: 'input',
            name: 'test',
            message: `Any instructions for testing?\n`
        },
        {
            type: 'input',
            name: 'user',
            message: `What is your GitHub user name?\n`
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your email address?\n`
        },
        {
            type: 'list',
            name: 'license',
            message: `Please select a license from the following.\n`,
            choices: [`MIT License`, `GNU General Public License v3.0`, `Apache License 2.0`, `none`]
        },
    ])
}

const writeToFile = responses => {
    fs.writeFile(`README.md`, responses, (err) =>
  err ? console.log(err) : console.log('Success!')
);
}

questions()
    .then(responses => {
        return generateMarkdown(responses)
    })
    .then(responses => {
        return writeToFile(responses)
    })


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
