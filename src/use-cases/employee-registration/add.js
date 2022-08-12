module.exports = function addEmployee({ DA_employee_crud, employeeEntities }) {
  return async function insertEmployee(employeeInfo) {
    console.log(DA_employee_crud);
    await employeeEntities(employeeInfo);
    const isExist = await DA_employee_crud.isEmpExist(employeeInfo);
    if (isExist) {
      throw new Error("Employee already exist");
    }

    return await DA_employee_crud.insertEmployee(employeeInfo);
  };
};
