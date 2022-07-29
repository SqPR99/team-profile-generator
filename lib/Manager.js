// Imports the employee constructor
const Employee = require("./Employee");

// Creates the manager constructor/extends employee one further
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

// Returns office number
  getOfficeNumber() {
    return this.officeNumber;
  }

// Returns role as manager if employee is set as it
  getRole() {
    return "Manager";
  }
}

// exports
module.exports = Manager;
