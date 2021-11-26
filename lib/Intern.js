const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name = "", school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    // gets school
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
