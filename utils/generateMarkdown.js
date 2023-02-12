
// TODO: Create a function that returns a license badge based on which license is passed in
renderLicenseBadge(responses);
const generateMarkdown = responses => {
return `# ${responses.title}

${badge}


## Description
${responses.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${responses.installation}


## Usage
${responses.usage}


## License
${responses.license}


## Contributing
${responses.contributing}


## Test
${responses.test}


## Questions
If you have any questions, please email me at ${responses.email}.
You can also find more information at https://github.com/${responses.user}
`
}
// If there is no license, return an empty string
function renderLicenseBadge(responses) {
  if (responses.license == `MIT`) {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (responses.license == `GNU`) {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (responses.license == `none`) {
    badge = ``
  }
}

// ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;
