const inquirer = require('inquirer');
const path = require('path');
const mysql = require('mysql2');

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
  
function addDept(params) {
    return inquirer
    .prompt([{
        name: 'department',
        type: 'input',
        message: 'What is the name of the Department?'
    }])
    .then((data) => { return data })
}

// addDept()