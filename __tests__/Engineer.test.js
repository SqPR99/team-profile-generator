const Engineer = require("../lib/Engineer");

// Creates a github/engineer role
test("Creates a github/engineer role", () => {
    const testGithub = "SqPR99";
    const employeeInstance = new Engineer("Patrick", 11, "patrick@gmai.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

// Gets the name github
test("Gets github", () => {
    const testGithub = "SqPR99";
    const employeeInstance = new Engineer("Patrick", 11, "patrick@gmai.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

// Gets the role from getRole()
test("Gets role from getRole", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Patrick", 11, "patrick@gmai.com", "SqPR99");
    expect(employeeInstance.getRole()).toBe(returnValue);
});