const res = require('./index')

// create function to generate answers based on user response
// console.log(generateMarkdown(res))
function generateMarkdown(res) {
    // console.log(res)
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
                <img src="${res.avatar_url}">  
                Email: ${res.email}
        
                `;
};

module.exports = generateMarkdown;
