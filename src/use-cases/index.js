const DA_employee_crud = require("../data-access/employee-registration");
const employeeEntities = require("../entities");
const addNewEmp = require("./employee-registration/add");
const updateEmp = require("./employee-registration/update");
const getAllEmp = require("./employee-registration/get-all-employee");

const addNewEmployee_UC = addNewEmp({ DA_employee_crud, employeeEntities });
const updateEmployee_UC = updateEmp({ DA_employee_crud });
const getAllEmployee_UC = getAllEmp({ DA_employee_crud });
module.exports = {
  addNewEmployee_UC,
  updateEmployee_UC,
  getAllEmployee_UC,
};
