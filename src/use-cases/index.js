const DA_addEmp = require("../data-access");
const DA_updateEmp = require("../data-access");
const employeeEntities = require("../entities");
const addNewEmp = require("./employee/add");
const updateEmp = require("./employee/update");

const addNewEmployee_UC = addNewEmp({ DA_addEmp, employeeEntities });
const updateEmployee_UC = updateEmp({ DA_updateEmp });
console.log(DA_updateEmp);
module.exports = {
  addNewEmployee_UC,
  updateEmployee_UC,
};
