// npm packages and files required 
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
// const utils = require("utils")
const generateMarkdown = require("./generateMarkdown")

// const writeFileAsyn = util.promisify(fs.writeFile)

// prompt function to capture user data and github information
function userPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter your GitHub username",
            name: "username"
        },
        {
            type: "input",
            message: "Enter your Project Title",
            name: "title"
        },
        {
            type: "input",
            message: "Enter your Project Description",
            name: "description"
        },
        
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "install",
            default: "npm i"
        },
        {
            type: "input",
            message: "Enter usage instructions",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter license instructions",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]
        },
        {
            type: "input",
            message: "Enter collaborators, if any, with links to their github profile",
            name: "collab"
        },
        {
            type: "input",
            message: "Enter testing requirements",
            name: "testing"
        }
       
    ])

        // use response to get url data 
        .then(res => {
            const userName = res.username;
            const queryUrl = `https://api.github.com/users/${userName}`;

            if (res) {
                console.log("Success!");
                // console.log(res)
            } else if (res === "") {
                console.log("You forgot to enter your User Name!");
            }

            // make request with user name
            axios.
                get(queryUrl)
                .then(function (response) {
                    console.log("response from api call:", response.data)

                    console.log("avatar from axios call:", response.data.avatar_url)

                })
                // catches and handle error
                .catch(function (error) {

                    console.log(error);

                })
         
            // create write file function to generate readme file
                const readMe = generateMarkdown(res);
                fs.writeFile("README1.md", readMe, function(err) {
                    if (err) {
                        throw err;
                    }
                    console.log(`Congratulation, you have successfully generated your README.md file ${readMe}`)
                });
            
        });
};

// create initialize function  
async function init() {
    console.log("How are you?")

    try {
        const res = await userPrompt();
    }
    catch (error) {
        console.log(error);
    };
};

init();

