const res = require('./index')
const axios = require("axios");
 
console.log("avatar: ", res.avatar_url)
// create function to generate answers based on user response
// console.log(generateMarkdown(res))
function generateMarkdown(res) {
    console.log("prompt response", res)
   
    // data.license= 
    return `
# Project Title: ${res.title}
## Badge: 
*
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
<img src="${res.data.avatar_url}">  
Email: ${res.data.name}

`;

};

module.exports = generateMarkdown;
