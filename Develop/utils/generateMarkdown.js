// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache License v2.0') {
    licenseTag = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU General Public License v3.0') {
    licenseTag = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (license === 'MIT License') {
    licenseTag = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } 
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = templateData => {
  console.log(templateData);

  renderLicenseBadge(templateData.license);

  return `
  # ${templateData.title} by ${templateData.name}
  
  ## Installation
  ${templateData.install}


  ## Usage 
  ${templateData.usage}


  ## Contributing
  ${templateData.contributing}


  ## Testing
  ${templateData.test}


  ## License
  ${templateData.license}

  ${licenseTag}
  `


  };

module.exports = generateMarkdown;
