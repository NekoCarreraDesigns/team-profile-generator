// const Employee = require("./lib/Employee");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
//const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./output/htmlRenderer");

inquirer.prompt([{

    type: "input",
    name: "teammate",
    message: "What is your name?"
},
{
    type: "input",
    name: "position",
    message: "What is your position??"


},
{
    type: "input",
    name: "teammate1",
    message: "What is your first team members name?"
},
{
    type: "input",
    name: "position1",
    message: "What is your first team members position?"
},
{
    type: "input",
    name: "teammate2",
    message: "What is your second team members name?"
},
{
    type: "input",
    name: "position2",
    message: "What is your second team members position?"
},
{
    type: "input",
    name: "teammate3",
    message: "What is your third team members name?"
},
{
    type: "input",
    name: "position3",
    message: "What is your third team members position?"
},
{
    type: "input",
    name: "teammate4",
    message: "What is your fourth team members name?"
},
{
    type: "input",
    name: "position4",
    message: "What is your fourth team members position?"
},



])
const positionQuestion = {
    type: "input",
    message: "What is their github username?",
    name: "positionQuestion",
    when: function (position1, position2, position3, position4) {
        positionQuestion === engineer
    }
}
const positionQuestion1 = {
    type: "input",
    message: "What school do they attend?",
    name: "positionQuestion1",
    when: function (position1, position2, position3, position4) {
        position1 === intern
        position2 === intern
        position3 === intern
        position4 === intern
    }
}