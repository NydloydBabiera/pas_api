module.exports = function addEmployee({ DA_updateEmp }) {
  return async function updateEmployee(employeeInfo, employeeId) {
    console.log("reached used cases");
    // console.log(DA_updateEmp);
    return await DA_updateEmp.updateEmp(employeeInfo, employeeId);
  };
};
