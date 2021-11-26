const inquirer = require("inquirer");

function choseEngineer() {
  //   // This logged that i chose engineer
  //   // need to add inquirer prompt here to ask the questions based on
  //   // what option was chosen!

  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the team engineer's name?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "engineerGitHub",
      message: "What is the engineer's GitHub Username?",
    },
  ]);
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
      choices: [
        { name: "engineer", value: 0 },
        { name: "intern", value: 1 },
        { name: "finish builing the team", value: 2 },
      ],
    },
  ]);
};

const promptChoices = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "engineerOrInternOrTeam",
      message:
        "Would you like to add an engineer, add an intern, or finish building your team?",
      choices: [
        { name: "engineer", value: 0 },
        { name: "intern", value: 1 },
        { name: "finish builing the team", value: 2 },
      ],
    },
  ]);
};

promptUser().then((answers) => {
  if (answers.engineerOrInternOrTeam === 0) {
    console.log("chose to add an engineer");
    choseEngineer().then(() => {
      promptChoices();
    });
  }
  //   console.log(answers); // logs answer object to promptUser questions
});
