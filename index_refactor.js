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

async function teamPrompt() {
    return inquirer.prompt({
        type: 'list',
        name: 'getEmployee',
        message: 'Who would you like to add to your team?',
        choices: [
            'Manager', 
            'Engineer', 
            'Intern',
            'Team Complete! Exit'
        ]
    })
    .then(teamAnswers => {
        // console.log(teamAnswers);
        // Switch statement to handle if user selects from initialPrompt choices
        switch (teamAnswers.getEmployee) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            case 'Team Complete! Exit':
                confirmTeam();
                break;
           
            default:
                // re-run prompt 
                teamPrompt();
                
        }
    
    })
    .then(answers => { 
        
        return buildHTML(teamProfileArr);
    })
    .then(teamProfileArr => {
        return writeToFile(teamProfileArr);
    })
    .catch(err => {
        console.log(err);
    });
}

// Add Manager Prompt 
const addManager = () => {
   inquirer.prompt([
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

        const manager = new Manager(
            name, 
            id, 
            email, 
            officeNum
        ); 
        // console.log(teamManager);
        // push items to array
        const push = teamProfileArr.push(manager);
        // console.log("teamPushed:", push);
        // console.log("ManagerInfo:", manager);
        // console.log("TeamProfile:", teamProfileArr);
        teamPrompt()
    })
}

// Add Engineer Prompt
 const addEngineer = () => {
    console.log(`
        ==============================
        Add a New Engineer to the Team
        ==============================
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
                // console.log(teamEngineer);

                // push items to array
                teamProfileArr.push(engineer);
                teamPrompt()
            })
}

// Add Intern Prompt
const addIntern = () => {
    console.log(`
        ==============================
        Add a New Intern to the Team
        ==============================
        `);
         inquirer.prompt([
           {
                type: 'input',
                name: 'name',
                message: 'What is the Intern name ? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a valid Intern name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter the Intern's ID",
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
                name: 'school',
                message: 'Since you are an Intern, please enter the school you attended. (Required)',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('You need to enter a valid GitHub username!');
                        return false;
                    }
                }
            }
        ])

        .then(teamIntern => {
                const name = teamIntern.name;
                const id = teamIntern.id;
                const email = teamIntern.email;
                const school = teamIntern.school;

                const intern = new Intern(name, id, email, school); 
                // console.log(teamIntern);
                // push items to array
                teamProfileArr.push(intern);
                teamPrompt()
            })
}

// Confirm if user would wants to add another employee Prompt
const confirmTeam = () => {
    console.log(`
        ===================================
                    Create Team
        ===================================
        `);
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Team Finished! Create my team.',
            default: false
        }
    ])
}


// A function to write HTML file
function writeToFile(data) {
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

teamPrompt()
//  .then((answers) => {
//     //   console.log('teamProfile',teamProfileArr);
//       console.log('==========================');
//       console.log(answers)
//  })
    // .then(answers => { 
    //     console.log(answers)
    //     // return buildHTML(answers);
    // })
    // .then(teamProfileArr => {
    //     return writeToFile(teamProfileArr);
    // })
    // .then(writeToFileResponse => {
    //     console.log(writeToFileResponse.message)
    // })
    // .catch(err => {
    //     console.log(err);
    // });