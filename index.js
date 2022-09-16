//node modules 
const inquirer = require('inquirer');
const fs = require('fs');

//ES6 class profiles for Manager, Engineer, Intern
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern  = require('./lib/Intern');

const teamProfileArr = [];

//Manager Prompt
const managerInput = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name (Required)",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    console.log("Please enter your manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID",
            validate: managerId => {
                if (managerId) {
                    return true;
                }else {
                    console.log('Please enter a valid ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email', //Manager's Email
            message: 'What is the email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number! (Required)",
            validate: officeNum => {
                if (officeNum) {
                    return true;
                } else {
                    console.log("Please enter an office number!");
                    return false;
                }
            }
        }
    ])
    .then(teamManager => {
        // descruture properties from object array
        const { name, id, email, officeNumber } = teamManager;
        const manager = new manager (name, id, email, officeNumber);
        console.log(manager);

        // push desctrutured items into new array to prep for output
        teamProfileArr.push(manager);
    })
}

managerInput()
.then(answers => {console.log(answers)})
