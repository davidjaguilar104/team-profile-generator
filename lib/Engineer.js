const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name = "", github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    // gets github username
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
