const axios = require("axios");
const queryUrl = require("./index");

  // make request with user name
  const api = {
      
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

    axios.
    get(queryUrl)
    .then(function (response) {
        console.log(response.data)
  // generateMarkdown(res);
        console.log(response.data.repos_url)
  
    })
    // catches and handle error
    .catch(function (error) {
  
        console.log(error);
  
    });
  }
 

  module.exports = api;
  
require('dotenv').config()
const api = {
  getUser(username) { 
    let auth=""
    if(process.env.CLIENT_ID && process.env.CLIENT_SECRET){
      auth = `?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    }
    const url = `https://api.github.com/users/${username}${auth}`
    return axios.get(
     url
    )
    .catch(err => {
          console.log("Error!");
          process.exit(1);
        });
  }
};
