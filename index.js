// npm packages
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util")

const writeFileAsyn = util.promisify(fs.writeFile)

// prompt function to capture user data and github information
userPrompt();
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
            message: "Enter Project Description",
            name: "description"
        },
        {
            type: "input",
            message: "Table of Content",
            name: "content"
        },
        {
            type: "input",
            message: "Enter step-by-step installation instructions",
            name: "install"
        },
        {
            type: "input",
            message: "Enter usage instructions",
            name: "usage"
        },
        {
            type: "input",
            message: "Enter license instructions",
            name: "license"
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
        },
        {
            type: "input",
            message: "Enter your GitHub profile picture",
            name: "pic"
        },
        {
            type: "input",
            message: "Enter your GitHub email",
            name: "email"
        }
    ])

        // use response to get url data 
        .then(res => {
            const userName = res.username;
            const queryUrl = `https://api.github.com/users/${userName}`;

            if (res) {
                console.log("Success!");
                // this shows all information contain in the array/object 
                console.log(res)
            } else if (res === "") {
                console.log("You forgot to enter your User Name!");
            }

            // make request with user name
            axios.
                get(queryUrl)
                .then(function (response) {
                    console.log(response.data)

                    console.log(response.data.repos_url)

                })
                // catches and handle error
                .catch(function (error) {

                    console.log(error);

                });

            console.log(res.title)
            function generateMarkdown(res) {
                return `
                    # ${res.title}
                    
                    # Table of Content

                    # ${res.description}
                    # ${res.content}
                    # ${res.install}
                    # ${res.license}
                    # ${res.collab}
                    # ${res.testing}
                    # ${res.pic}
                    # ${res.email}`;

            }

            console.log(res.email)

            module.exports = generateMarkdown;

            // console.log(generateMarkdown())
            // function writeToFile(fileName, data) {
            // }

            // function init() {

            // }

            // init();



            // function writeToFile(fileName, data) {
            // }

            // function init() {

            // }

            // init();


        })
}