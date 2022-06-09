const inquirer = require('inquirer')
const Engineer = require('./dist/engineer')
const Intern = require('./dist/intern')
const Manager = require('./dist/manager')
const fs = require('fs')
const generatePage = require('./dist/generatePage')
const employeeQuestions = [
    {
        type: 'list',
        name: 'choose',
        message: 'What type of employee do you want to add?',
        choices: ['Intern','Engineer','None']
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the manager?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the manager?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the manager?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the intern?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the intern?',
    },

    {
        type: 'input',
        name: 'school',
        message: 'What school did the intern go to?',
    },

]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the engineer?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the engineer?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the engineer?',
    },

    {
        type: 'input',
        name: 'github',
        message: "What is the username of the engineer's github?",
    },

]

const theTeam = []

async function init(){
    await inquirer.prompt(managerQuestions).then(async(answers)=>{
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
        )
        theTeam.push(manager)
        console.log(theTeam)
        let employeeType
    while (employeeType !== "None") {
      await inquirer.prompt(employeeQuestions).then(async (answer) => {
        employeeType = answer.choose
        if (employeeType === "Engineer") {
          await inquirer.prompt(engineerQuestions).then(async (answers) => {
            const engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.github
            )
            theTeam.push(engineer)
          })
        }
        if (employeeType === "Intern") {
          await inquirer.prompt(internQuestions).then(async (answers) => {
            const intern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.school
            )
            theTeam.push(intern)
          })
        }
       
      })
    }
    page = generatePage(theTeam)
    fs.writeFile('team.html',generatePage(theTeam),(error)=>{
        if (error){
            return console.error(error)
           }
        console.log(`File Successfully Created: 'team.html'`)
    })
  })}
  

init()
