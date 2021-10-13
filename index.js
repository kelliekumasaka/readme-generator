// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
inquirer.prompt([
    {
        type:'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type:'input',
        message: 'Please describe your project.',
        name: 'description',
    },
    {
        type:'input',
        message: 'Please enter any installation instructions.',
        name: 'installation',
    },
    {
        type:'input',
        message: 'Please enter any usage information.',
        name: 'usage',
    },
    {
        type:'input',
        message: 'Please enter any contribution guidelines.',
        name: 'contributing',
    },
    {
        type:'input',
        message: 'Please enter any test instructions.',
        name: 'tests',
    },
    {
        type:'list',
        message: 'Please choose a license.',
        name: 'license',
        choices:['MIT','ISC', 'PostgreSQL License', 'Educational Community License v2.0', 'Apache license 2.0']
    },
    {
        type:'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type:'input',
        message: 'What is your email address?',
        name: 'email',
    },
]).then((response) => {
    console.log(response);
    fs.writeFile(`README.md`, generateMarkdown(response),function(err){
        if(err){
            throw err;
        }
        console.log("Done!")
    })
});
