const inquirer = require("inquirer");

function whatOption(answers) {
    if(answers.engineerOrInternOrTeam === 'engineer') {
        console.log('chose engineer');
        // This logged that i chose engineer
        // need to add inquirer prompt here to ask the questions based on
        // what option was chosen!
    }
}

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the manager's employee ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?",
    },
    {
      type: "input",
      name: "managerOffNumber",
      message: "What is the manager's office number?",
    },
    {
      type: "list",
      name: "engineerOrInternOrTeam",
      message:
        "Would you like to add an engineer, add an intern, or finish building your team?",
      choices: ["engineer", "intern", "finish builing the team"],
    }
  ]);
};

promptUser()
.then(answers => {
    whatOption(answers);
    console.log(answers);
});