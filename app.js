//const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeData = [];

let html;
const managerPrompt = async () => {
    try {
        const { name, id, email, officeNumber } = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "what is you name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your Id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?"
            },
        ]);
        employeeData.push(new Manager(name, id, email, officeNumber));
    } catch (err) {
        throw err;
    }
};
const internPrompt = async () => {
    try {
        const { name, id, email, school } = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is their Id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                name: "school",
                message: "Where do they attend school?"
            },
        ]);
        employeeData.push(new Intern(name, id, email, school));
    } catch (err) {
        throw err;
    }
};

const engineerPrompt = async () => {
    try {
        const { name, id, email, github } = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is their name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is their Id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is their email address?"
            },
            {
                type: "input",
                name: "github",
                message: "What is their Github username?"
            },
        ]);
        employeeData.push(new Engineer(name, id, email, github));
    } catch (err) {
        throw err;
    }
};


const mainPrompt = async () => {
    try {
        const { next } = await inquirer.prompt([
            {
                name: "next",
                message: "What team member would you like to add?:",
                type: "list",
                choices: ["Intern", "Engineer", "Manager", "I'm finished"],
            },
        ]);

        switch (next) {
            case "I'm finished":
                console.log(employees);
                html = render(employees);
                return;
            case "Manager":
                await managerPrompt();
                await mainPrompt();
                return;
            case "Intern":
                await internPrompt();
                await mainPrompt();
                return;
            case "Engineer":
                await engineerPrompt();
                await mainPrompt();
                return;
        }
    } catch (err) {
        throw err;
    }
};

const write = async () => {
    try {
        await fs.mkdirSync(OUTPUT_DIR, (err) => {
            throw err;
        });
        await fs.writeFileSync(outputPath, html, (err) => {
            throw err;
        });
    } catch (err) {
        throw err;
    }
};

const init = async (html) => {
    try {
        await mainPrompt();
        await write(html);
    } catch (err) {
        throw err;
    }
};
init();