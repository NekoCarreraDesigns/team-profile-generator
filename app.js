// const Employee = require("./lib/Employee");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./output/htmlRenderer");

inquirer.prompt({
    type: "checkbox",
    message: "Are you ready to build your team?",
    choices: [
        "yes",
        "no"

    ]
})