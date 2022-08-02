const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHTML.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
newMemberData = [];
const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email adress?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role in the company?",
      name: "role",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  if (answers.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office number",
        name: "officeNumber",
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAns.officeNumber
    );
    newMemberData.push(newManager);
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github",
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAns.github
    );
    newMemberData.push(newEngineer);
  } else if (answers.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "What university do you currently attend?",
        name: "school",
      },
    ]);

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAns.school
    );
    newMemberData.push(newIntern);
  }
}; // End of questions

async function promptQuestions() {
  await questions();

  const addMemberAns = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add a new member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);

  if (addMemberAns.addMember === "Add a new member") {
    return promptQuestions();
  }
  return createTeam();
}

promptQuestions();

function createTeam() {
  console.log("new guy", newMemberData);
  fs.writeFileSync("./dist/index.html", generateTeam(newMemberData), "utf-8");
}
