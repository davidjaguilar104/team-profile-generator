class Employee {
  constructor(name = "", id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    // gets name
  }

  getId() {
    // gets id
  }

  getEmail() {
    // gets email
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
