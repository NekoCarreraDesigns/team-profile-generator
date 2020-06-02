const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./output/htmlRenderer");

const employeeData = [];


inquirer.prompt([{

    type: "input",
    name: "name",
    message: "What is your name?"
},
{
    type: "input",
    name: "role",
    message: "What is your role?"
},
{
    type: "input",
    name: "id",
    message: "What is your id?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "officeNumber",
    message: "what is your office number?"
},
{
    type: "list",
    name: "employees",
    message: "Would you like to add more employees?",
    choices: [
        "yes",
        "no"
    ]

},

]).then((res) => {
    const managerData = new Manager("res.name, res.id, res.role, res.officeNumber, res.email")
    employeeData.push(managerData)

    if (res.employees === "yes") {
        inquirer.prompt([{
            type: "list",
            name: "employee",
            message: "What is the employees position?",
            choices: [
                "Engineer",
                "Intern"
            ]

        }])
    } else {

    }
    const Employee = new Employee(`res.name, res.email, res.role, res.id`)
    employeeData.push(employeeData)
    const Engineer = new Engineer(`res.github, ${employee}`)
    const Intern = new Intern(`res.school, ${employee}`)



})