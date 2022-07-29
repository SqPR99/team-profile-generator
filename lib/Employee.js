// This creates the employee role
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

// Returns the name of the employee
  getName() {
    return this.name;
  }

// Returns the employee ID
  getId() {
    return this.id;
  }

// Returns the email
  getEmail() {
    return this.email;
  }

// Returns the role of the employee
  getRole() {
    return "Employee";
  }
}

// exports the js file
module.exports = Employee;
