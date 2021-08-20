// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')




// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name');
        return false;
      }
    }
  },
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
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to add?',
    choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License']
  }];

  const promptUser = () => {
    return inquirer.prompt(questions)
  };

  promptUser()
    .then(markdownData => {
      const pageMarkdown = generateMarkdown(markdownData);

      fs.writeFile('README.md', pageMarkdown, err => {
        if (err) throw err;
      
        console.log('markdown complete');
      });

    });
// TODO: Create a function to write README file



// TODO: Create a function to initialize app



// Function call to initialize app
