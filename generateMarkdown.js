const res = require('./index')
const axios = require("axios");
 
console.log("avatarUrl within generate markDown: ", res.avatar_url)
// create function to generate answers based on user response
// console.log(generateMarkdown(res))
 function generateMarkdown(res) {
    // console.log("prompt response", res)
    return`
# Project Title: ${res.title}

## Badge: 

<img alt="NPM" src="https://img.shields.io/npm/l/inquirer?logo=github&style=flat-square"> <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/carolenesw/README.md/total?logo=Github&logoColor=%23ff0000&style=flat-square">

## Description: 
* ${res.description}
## Table of Content: 

* [Installation](#installation)  
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)

## Installaion:
* ${res.install}
## Usage: 
* ${res.usage}
## License: 
* ${res.license}
# Contributing: 
* ${res.collab}
## Testing: 
* ${res.testing}
## Questions
If you have any questions, please contact the GitHub user.           
<img src="${res.picture}">  
Email: ${res.email}

`;

};

module.exports = generateMarkdown;
