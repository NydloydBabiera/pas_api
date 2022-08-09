module.exports = function addEmployee({ DA_addEmp, employeeEntities }) {
  return async function insertEmployee(employeeInfo) {
    console.log(DA_addEmp);
    await employeeEntities(employeeInfo);
    const isExist = await DA_addEmp.isEmpExist(employeeInfo);
    if (isExist) {
      throw new Error("Employee already exist");
    }

    return await DA_addEmp.insertEmployee(employeeInfo);
  };
};
