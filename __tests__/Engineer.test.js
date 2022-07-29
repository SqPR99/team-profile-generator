const Engineer = require("../lib/Engineer");

test("Creates a github/engineer role", () => {
    const testGithub = "SqPR99";
    const employeeInstance = new Engineer("Patrick", 11, "patrick@gmai.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Gets github", () => {
    const testGithub = "SqPR99";
    const employeeInstance = new Engineer("Patrick", 11, "patrick@gmai.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Gets role from getRole", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Patrick", 11, "patrick@gmai.com", "SqPR99");
    expect(employeeInstance.getRole()).toBe(returnValue);
});