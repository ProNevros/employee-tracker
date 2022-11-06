const inquirer = require('inquirer');
const path = require('path');
const mysql = require('mysql2');
const cTable = require('console.table');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'departments_db'
    },
    console.log(`Connected to the departments_db database.`)
);

// Initial menu 
function mainMenu() {
    return inquirer
        .prompt([{
            name: 'mainMenu',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all Employees', 'Add Employee', 'Update Employee role', 'View all roles', 'Add roles', 'View all Departments', 'Add Department', 'Quit'],
        }])
        .then((data) => { return data })
}

//   mainMenu()
// Adds new departnment
function addDept(params) {
    return inquirer
        .prompt(
            [
                {
                    name: 'department',
                    type: 'input',
                    message: 'What is the name of the Department?'
                }
            ]
        )
        .then((response) => {
            db.query(response.name, function (err, results) {
                console.log(`\n New Department added as: ${response.name} \n`);
                mainMenu();
            })
        });
};

// addDept()
// Prompt for new Role
function addRole(params) {
    return inquirer
        .prompt(
            [
                {
                    name: 'role',
                    type: 'input',
                    message: 'What is the name of the Role?'
                },
                {
                    name: 'roleSalary',
                    type: 'input',
                    message: 'What is the salary of the role?'
                },
                {
                    name: 'roleDept',
                    type: 'list',
                    message: 'Which department does the role belong to?',
                    choices: ['Deez Nuts', 'Cheeked Up', 'Bruh',]
                },

            ]
        )
        .then((data) => { return data })
}

// addRole()
// Prompt for a new employee
function addEmployee(params) {
    return inquirer
        .prompt(
            [
                {
                    name: 'empFirstName',
                    type: 'input',
                    message: 'What is the first name of the employee?'
                },
                {
                    name: 'empLastName',
                    type: 'input',
                    message: 'What is the last name of the employee?'
                },
                {
                    name: 'empRole',
                    type: 'list',
                    message: 'What is the role of the employee?',
                    choices: ['1', '2', '3', '4', '5']
                },
                {
                    name: 'empManager',
                    type: 'list',
                    message: 'Who is their manager?',
                    choices: ['1', '2', '3', '4', '5']
                },
            ]
        )
}

// addEmployee()