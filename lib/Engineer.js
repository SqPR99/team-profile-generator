// Imports the employee construct from employee.js
const Employee = require("./Employee");

// Creates the engineer constructor/extends employee one further
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

// Returns github
  getGithub() {
    return this.github;
  }

// Returns role as "Engineer" if employee is set to it
  getRole() {
    return "Engineer";
  }
}

// Exports
module.exports = Engineer;
