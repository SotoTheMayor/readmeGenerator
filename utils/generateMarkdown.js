
//Function to generate the body of the README using responses from the prompt in index.js
const generateMarkdown = responses => {
//Function to generate license badges, language, and links
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

[text displayed](https://**urlhere**)

![description of image](./**img_path**)

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
// Called within generateMarkdown, creates badges, description, and link based on list selection of license
function renderLicenseBadge(responses) {
  if (responses.license == `MIT License`) {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)`
    licenseDes = `
MIT License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. 
Licensed works, modifications, and larger works may be distributed under different terms and without source code.

[License Source](https://choosealicense.com/licenses/)
    `
  } else if (responses.license == `GNU General Public License v3.0`) {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)`
    licenseDes = `
GNU General Public License v3.0

Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, 
which include larger works using a licensed work, under the same license. 
Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

[License Source](https://choosealicense.com/licenses/)
    `
  }  else if (responses.license == `Apache License 2.0`) {
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)`
      licenseDes = `
Apache License 2.0

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

//exports results for index.js to call
module.exports = generateMarkdown;
