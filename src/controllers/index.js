const { addNewEmployee } = require("../use-cases");
const addEmployee = require("./employee/add");

const addNewEmpController = addEmployee({ addNewEmployee });

module.exports = {
  addNewEmpController,
};
