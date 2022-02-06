// import node_modules
const fs = require('fs');
const inquirer = require('inquirer');

// generate the html page
const generatePage = require('./src/page-template.js');

// import the team members' objects
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// array for the team
const theTeam = [];

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
});