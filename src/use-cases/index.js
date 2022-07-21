const DA_addEmp = require("../data-access");
const employeeEntites = require("../entities");
const addNewEmp = require("./employee/add");

const addNewEmployee = addNewEmp({ DA_addEmp, employeeEntites });

module.exports = {
  addNewEmployee,
};
