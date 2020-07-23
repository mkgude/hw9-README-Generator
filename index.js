//DEPENDECIES ========================
// Generate Markdown
const generateMarkdown = require("./utils/generateMarkdown");
// inquirer - for terminal prompts
var inquirer = require("inquirer");
// fs - for file working
var fs = require("fs");
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your application?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your Github profile?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your description of the application?",
    name: "description",
  },
  {
    type: "input",
    message: "Please describe how to install?",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe how to run?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What type of license? (if none, select 'None')",
    choices: ["MIT", "ISC", "ODbL", "Unlicense", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "How can others contribute?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How do I test?",
    name: "testing",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    var markdownData = generateMarkdown(response);
    writeToFile("README.md", markdownData);
  });
}

// function call to initialize program
init();
