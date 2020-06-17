// npm packages
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// prompt user for required github information
inquirer
    .prompt([
        {
            type: "input",
            message: "Enter your GitHub username",
            name: "username"
        }
    ])

    // use response to get url data 
    .then(res => {
        // const queryUrl = `https://api.github.com/users/${username}`;

        if (res) {
            console.log("Success!");
            // this shows all information contain in the array/object 
            console.log(res)
          } else if (res.username == "")
          {
            console.log("You forgot to enter your User Name!");
          }
        })