// Create a function to generate markdown for README
function generateMarkdown(response) {
  var userAnswers = `# ${response.title}`

if(response.license==='Mozilla Public License 2.0'){
  userAnswers+=`<br>![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
}else if(response.license==='Eclipse Public License 1.0'){
  userAnswers+=`<br>![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`
}else if(response.license==='Apache license 2.0'){
  userAnswers+=`<br>![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
}else if(response.license==='ISC'){
  userAnswers+=`<br>![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
}else{
  userAnswers+=`<br>![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
}

userAnswers+=`
## Description
${response.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contributing}

## Tests
${response.tests}

## License
This project is licensed under ${response.license}.

## Questions
Here is a link to my [GitHub](https://github.com/${response.github}) or shoot me an [email](mailto:${response.email}).
`;
return userAnswers;
}

module.exports = generateMarkdown;