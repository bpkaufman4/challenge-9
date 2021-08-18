// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project title.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'How would a user install your project?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter installation instructions');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How would a user use your project?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter usage instructions');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter any contribution guidelines',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter any contribution guidelines');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter any tests/testing instructions',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter any tests/testing instructions');
        return false;
      }
    }
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init();
