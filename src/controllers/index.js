const { addNewEmployee_UC, updateEmployee_UC } = require("../use-cases");
const addEmployee = require("./employee/add");
const updateEmployee = require("./employee/update");

const addNewEmpController = addEmployee({ addNewEmployee_UC });
const updateEmpController = updateEmployee({ updateEmployee_UC });

module.exports = {
  addNewEmpController,
  updateEmpController,
};
