const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { generateHTML } = require('./src/generateHTML');
const { listenerCount } = require('process');
const teamMembers = [];



const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name:",
            confirm: nameInput => {
                if (!nameInput) {
                    console.log("Please enter the manager's name.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's Employee ID number?",
            confirm: idInput => {
                if (!idInput) {
                    console.log("Please enter the manager's ID number.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            confirm: emailInput => {
                if (!emailInput) {
                    console.log("Please enter the manager's email address.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            confirm: officeNumberInput => {
                if (!officeNumberInput) {
                    console.log("Please enter the manager's office number.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        console.log(teamMembers);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do next?',
            choices: ['add engineer information', 'add intern information', 'finish building the team']
        }
    ]).then(choice => {
        switch (choice.choices) {
            case 'add engineer information':
                engineerPrompt();
                break;
            case 'add intern information':
                internPrompt();
                break;
            case 'finish building the team':
                finishedTeam();
        }
    });
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter this engineer's name:",
            confirm: nameInput => {
                if (!nameInput) {
                    console.log("Please enter a name.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this engineer's Employee ID number?",
            confirm: idInput => {
                if (!idInput) {
                    console.log("Please enter an Employee ID number.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this engineer's email address?",
            confirm: emailInput => {
                if (!emailInput) {
                    console.log("Please enter an email address.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's github username?",
            confirm: githubInput => {
                if (!githubInput) {
                    console.log("Please enter a github username.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        console.log(teamMembers);
        promptMenu();
    })
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter this intern's name:",
            confirm: nameInput => {
                if (!nameInput) {
                    console.log("Please enter a name.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this intern's Employee ID number?",
            confirm: idInput => {
                if (!idInput) {
                    console.log("Please enter an Employee ID number.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this intern's email address?",
            confirm: emailInput => {
                if (!emailInput) {
                    console.log("Please enter an email address.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is this intern attending?",
            confirm: schoolInput => {
                if (!schoolInput) {
                    console.log("Please enter the name of a school.");
                    return false;
                } else {
                    return true;
                }
            } 
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        console.log(teamMembers);
        promptMenu();
    })
};

const finishedTeam = () => {
    console.log(' You have finished building your team.');
    const html = generateHTML(teamMembers);
    console.log(html);
}

managerPrompt();











