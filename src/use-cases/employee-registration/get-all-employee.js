module.exports = function getAllEmployee({ DA_employee_crud }) {
  return async function retrieveAllEmployee(employeeInfo) {
    return await DA_employee_crud.getAllEmployee();
  };
};
