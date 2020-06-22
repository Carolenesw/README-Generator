

// create function to generate answers based on user response
// console.log(generateMarkdown(res))
function generateMarkdown(res) {
    return `
                # Project Title: ${res.title}
                ## Badge: 
                *
                ## Description: 
                * ${res.description}
                ## Table of Content: 
                * ${res.content}
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
                ## Picture: 
                * ${res.pic}
                * response.data.avatar_url
                ## Email: 
                * ${res.email}
                *  * response.data.email
                `;

};

module.exports = generateMarkdown;