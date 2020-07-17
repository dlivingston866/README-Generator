const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


//function promptUser() {
return inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of your Project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the new project"
    },
    {
        type: "input",
        name: "installInstr",
        message: "How is the project to be installed?"
    },
    {
        type: "input",
        name: "usageInfo",
        message: "How is the project to be used?"
    },
    {
        type: "checkbox",
        name: "stack",
        message: "Available Licenses:",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "Creative Commons Zero v1,0 Universal"
        ]
    },
    {
        type: "input",
        name: "contGuidelines",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "testInstructns",
        message: "What are the instructions for testing?"
    },
    {
        type: "input",
        name: "githubUserName",
        message: "What is your Github User Name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "questions",
        message: "Do you have any questions?"
    },

]).then(function(data) {
    console.log(data);

    let markdown = generateMarkdown(data);
    console.log(markdown);

    var filename = "./myreadme.md";

    fs.writeFile(filename, markdown, function(err) {

        if (err) {
            return console.log(err);
        }
        console.log("Success!");

    });
});