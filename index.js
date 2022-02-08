// import node_modules
const fs = require('fs');
const inquirer = require('inquirer');

// generate the html page
const generatePage = require('./src/page-template.js');

// import the team members' objects
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");


// arrays for the team members
const managerArray = [];
const employeeArray = [];
//const internArray = [];

async function addManagerToTeam() {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: 'Who is the Manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false; 
                }
            }
        },
        
        {
            type:'input',
            name:'id',
            message:'What is the id of the Manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's id!");
                    return false; 
                }
            }
        },

        {
            type:'input',
            name:'email',
            message:'What is the email of the Manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's email address!");
                    return false; 
                }
            }
        },

        {
            type:'input',
            name:'officeNumber',
            message:'Please provide  the office number of the Manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's office number!");
                    return false; 
                }
            }
        }

    ])

    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        managerArray.push(manager); 
        console.log(manager); 
        for(let i =0; i < managerArray.length; i++) {
            console.log(managerArray[i]);
        }
    })
};

addManagerToTeam()


async function addOtherMembers() {

    console.log(`
    =================
    Adding other employees to the Team
    =================
    `);

    return inquirer.prompt([
        {
            type:'list',
            name:'role',
            message:'What is your position in the team?',
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the employee's name!");
                    return false; 
                }
            }
        },
        
        {
            type:'input',
            name:'id',
            message:'What is the id of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the id!");
                    return false; 
                }
            }
        },

        {
            type:'input',
            name:'email',
            message:'What is the email of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the email address!");
                    return false; 
                }
            }
        },

        {
            type:'input',
            name:'github id',
            message: 'Please provide  the github id of the employee',
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the github id!");
                    return false; 
                }
            }
        },

        {
            type: 'input',
            name:'school',
            message:'Please provide  the name of the school of the employee',
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the school!");
                    return false; 
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }

    ])

    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 
        
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }
        // populate the Array

        employeeArray.push(employee); 

        // to add more employee

        if (confirmAddEmployee) {
            return addOtherMembers(employeeArray); 
        } else {
            return employeeArray;
        }
    })
};


(addOtherMembers());


