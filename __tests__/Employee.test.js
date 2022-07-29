const Employee = require("../lib/Employee");

// Builds the employee object
test("Can build an employee object", () => {
  const employee = new Employee("Patrick", 11, "patrick@gmail.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// Gets the name from getId() (string)
test("Gets employee name through getID", () => {
  const testName = "Patrick";
  const employeeInstance = new Employee(testName);
  expect(employeeInstance.getName()).toBe(testName);
});

// Gets the id from getId() (number)
test("Gets employee ID through getID", () => {
  const testID = 11;
  const employeeInstance = new Employee("James", testID);
  expect(employeeInstance.getId()).toBe(testID);
});

// Gets the emails from getEmail()
test("Gets employee email through getEmail", () => {
  const testEmail = "patrick@gmail.com";
  const employeeInstance = new Employee("Patrick", 11, testEmail);
  expect(employeeInstance.getEmail()).toBe(testEmail);
});

// Gets the role from getRole()
test("Gets role of employee through getRole", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("Patrick", 11, "patrick@gmail.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});
