//node modules 
const inquirer = require('inquirer');
const fs = require('fs');

//ES6 class profiles for Manager, Engineer, Intern
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamProfileArr = [];

//Manager Prompt
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
            // descruture properties from object array
            const { name, id, email, officeNumber } = teamManager;
            const manager = new Manager(name, id, email, officeNumber);
            console.log(manager);

            // push desctrutured items into new array to prep for output
            teamProfileArr.push(manager);
        })
};




const promptEmployee = () => {

    console.log(`
        =================
        Add a New Employee to the Team
        =================
        `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Select the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name ? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID",
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
            when: (input) => input.role === "Engineer",
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('You need to enter a valid GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Since you are an Intern, please enter the school you attended. (Required)',
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('You need to enter a valid school name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to add another employee?',
            default: false
        },

    ])
        .then(teamEmployeeData => {
            let newEmployee;
            let { name, id, email, role, github, school, confirmNewEmployee } = teamEmployeeData;
            
            switch (teamEmployeeData.role) {
                case 'Engineer':
                    if (role === 'Engineer') {
                       newEmployee = new Engineer(name, id, email, github);
                        console.log(newEmployee);
                    }
                    break;
                case 'Intern':
                    if (role === 'Intern') {
                         newEmployee = new Intern(name, id, email, school);
                        console.log(newEmployee);
                    }
                    break;
                }
                
                teamProfileArr.push(newEmployee);
                    if (confirmNewEmployee) {
                        return promptEmployee(teamProfileArr)
                    } else return teamProfileArr
        });
};



// A function to write HTML file
function writeFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send te successful data to the `.then()` method 
            resolve({
                ok: true,
                message: 'Your HTML file has been created!'
            });
        });
    });
};




addManager()
    .then(promptEmployee)
    .then(answers => { console.log(answers)})
