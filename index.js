var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of your Project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the new project?"
    },
    {
        type: "input",
        name: "install-instr",
        message: "How is the project to be installed?"
    },
    {
        type: "input",
        name: "usage-info",
        message: "How is the project to be used?"
    },
    {
        type: "input",
        name: "cont-guidelines",
        message: "What is the title of your Project?"
    },
    {
        type: "input",
        name: "test-instructns",
        message: "What is the title of your Project?"
    },
]).then(function(data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
            return console.log(err);
        }
        console.log("Success!");

    });
});


// array of questions for user
//const questions = [

//];

// function to write README file
//function writeToFile(fileName, data) {}

// function to initialize program
//function init() {

// }

// function call to initialize program
// init();