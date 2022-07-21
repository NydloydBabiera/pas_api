module.exports = function addEmployee({ DA_addEmp, employeeEntites }) {
  return async function insertEmployee(employeeInfo) {
    await employeeEntites();
    return await DA_addEmp.insertEmployee(employeeInfo);
  };
};
