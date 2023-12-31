const data = require('../data/zoo_data');

const managers = [
  '9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83',
];

function isManager(id) {
  return managers.includes(id);
}

function getRelatedEmployees(managerId) {
  const listEmployees = [];
  if (isManager(managerId)) {
    data.employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        listEmployees.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return listEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
