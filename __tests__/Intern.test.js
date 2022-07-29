const Intern = require("../lib/Intern");

//
test("Creates a school.", () => {
    const testSchool = "School Name";
    const employeeIntern = new Intern("Patrick", 11, "patrick@gmail.com", testSchool);
    expect(employeeIntern.school).toBe(testSchool);
});

//Gets school from getSchool()
test("Gets school from getSchool()", () => {
    const testSchool = "School Name";
    const employeeIntern = new Intern("Patrick", 11, "patrick@gmail.com", testSchool);
    expect(employeeIntern.getSchool()).toBe(testSchool);
});

// Gets role from getRole()
test("Gets role from getRole()", () => {
    const returnValue = "Intern";
    const employeeIntern = new Intern("Patrick", 11, "patrick@gmail.com", "School Name");
    expect(employeeIntern.getRole()).toBe(returnValue);
});