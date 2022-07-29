const Manager = require("../lib/Manager");

// Creates the manager object
test("Creates a manager", () => {
    const testOfficeNumber = 1;
    const employeeManager = new Manager("Patrick", 11, "patrick@gmail.com", testOfficeNumber);
    expect(employeeManager.officeNumber).toBe(testOfficeNumber);
});

// Gets role from getRole()
test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeManager = new Manager("Patrick", 11, "patrick@gmail.com", 1);
    expect(employeeManager.getRole()).toBe(returnValue);
});

