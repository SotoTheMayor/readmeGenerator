
// TODO: Create a function that returns a license badge based on which license is passed in
const generateMarkdown = responses => {
  renderLicenseBadge(responses);
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
${licenseDes}


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
  if (responses.license == `MIT License`) {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`
    licenseDes = `
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. 
Licensed works, modifications, and larger works may be distributed under different terms and without source code.

![License Source](https://choosealicense.com/licenses/)
    `
  } else if (responses.license == `GNU General Public License v3.0`) {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`
    licenseDes = `
Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, 
which include larger works using a licensed work, under the same license. 
Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

![License Source](https://choosealicense.com/licenses/)
    `
  }  else if (responses.license == `Apache License 2.0`) {
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)`
      licenseDes = `
A permissive license whose main conditions require preservation of copyright and license notices. 
Contributors provide an express grant of patent rights. 
Licensed works, modifications, and larger works may be distributed under different terms and without source code.

[License Source](https://choosealicense.com/licenses/)
      `
  } else if (responses.license == `none`) {
    badge = ``
    licenseDes = `
No license added
    `
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
