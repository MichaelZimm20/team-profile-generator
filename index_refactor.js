//node modules 
const inquirer = require('inquirer');
const fs = require('fs');

//ES6 class profiles for Manager, Engineer, Intern
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//links to build HTML 
const buildHTML = require('./src/buildHTML');

//team profile array 
const teamProfileArr = [];

function teamPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'getEmployee',
        message: 'Who would you like to add to your team?',
        choices: [
            'Manager', 
            'Engineer', 
            'Intern',
            'Add another Employee'
        ]
    })
    .then(answers => {
        // Switch statement to handle if user selects from initialPrompt choices
        switch (answers.getEmployee) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'Add another Employee':
                confirmEmployee();
                break;
           
            default:
                // re-run prompt 
                teamPrompt();
                break;
        }
    
    })
}

// Add Manager Prompt 
const addManager = () => {
    return inquirer.prompt([
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
                } else {
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
        const name = teamManager.name;
        const id = teamManager.id;
        const email = teamManager.email;
        const officeNum = teamManager.officeNumber;

        const manager = new Manager(name, id, email, officeNum); 

        // push items to array
        teamProfileArr.push(manager);
    })
}

// Add Engineer Prompt
const addEngineer = () => {
    console.log(`
        =================
        Add a New Engineer to the Team
        =================
        `);
        return inquirer.prompt([
           {
                type: 'input',
                name: 'name',
                message: 'What is the engineer name ? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid engineer name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the engineer's ID",
                validate: employeeId => {
                    if (employeeId) {
                        return true;
                    } else {
                        console.log('Please enter a valid ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
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
                name: 'github',
                message: 'Since you are an Engineer, please enter a github username. (Required)',
                validate: gitInput => {
                    if (gitInput) {
                        return true;
                    } else {
                        console.log('You need to enter a valid GitHub username!');
                        return false;
                    }
                }
            }
        ])

        .then(teamEngineer => {
                const name = teamEngineer.name;
                const id = teamEngineer.id;
                const email = teamEngineer.email;
                const github = teamEngineer.github;

                const engineer = new Engineer(name, id, email, github); 

                // push items to array
                teamProfileArr.push(engineer);
            })
}







teamPrompt()