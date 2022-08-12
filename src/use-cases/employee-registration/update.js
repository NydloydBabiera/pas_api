module.exports = function addEmployee({ DA_employee_crud }) {
  return async function updateEmployee(employeeInfo, employeeId) {
    return await DA_employee_crud.updateEmployee(employeeInfo, employeeId);
  };
};
