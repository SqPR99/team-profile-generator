// Imports the employee constructor once again from employee.js
const Employee = require("./Employee");

// Creates the intern constructor/extends employee one further
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }

// Returns the school 
    getSchool() {
        return this.school;
    }

// Returns role as "Intern" if employee is set as it
    getRole () {
        return "Intern"
    }
}

// exports
module.exports = Intern;