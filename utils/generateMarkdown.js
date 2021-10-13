// Create a function to generate markdown for README
function generateMarkdown(response) {
  var userAnswers = `# ${response.title}`

if(response.license==='PostgreSQL License'){
  userAnswers+=`<br>![GitHub license](https://img.shields.io/badge/license-PostgreSQL%20License-blue.svg)`
}else if(response.license==='Educational Community License v2.0'){
  userAnswers+=`<br>![GitHub license](https://img.shields.io/badge/license-Educational%20Community%20License%20v2.0-blue.svg)`
}else if(response.license==='Apache license 2.0'){
  userAnswers+=`<br>![GitHub license](https://img.shields.io/badge/license-Apache%20license%202.0-blue.svg)`
}else{
  userAnswers+=`<br>![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)`
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
