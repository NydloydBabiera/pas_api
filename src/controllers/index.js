const {
  addNewEmployee_UC,
  updateEmployee_UC,
  getAllEmployee_UC,
} = require("../use-cases");
const addEmployee = require("./employee-registration/add");
const updateEmployee = require("./employee-registration/update");
const getEmployee = require("./employee-registration/get-all-employee");

const addNewEmpController = addEmployee({ addNewEmployee_UC });
const updateEmpController = updateEmployee({ updateEmployee_UC });
const getAllEmployeeController = getEmployee({ getAllEmployee_UC });

module.exports = {
  addNewEmpController,
  updateEmpController,
  getAllEmployeeController,
};
