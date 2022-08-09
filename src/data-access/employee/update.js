module.exports = function updateEmployee({ pool }) {
  return Object.freeze({
    updateEmp,
  });

  async function updateEmp(reqEmpInfo, empId) {
    console.log("reached data access");
    const {
      firstName,
      middleName,
      lastName,
      age,
      gender,
      address_emp,
    } = reqEmpInfo;

    let sql = `UPDATE pas_employee SET firstname = $1 , middlename = $2 , lastname = $3 , 
          age = $4, gender = $5, address_emp = $6 WHERE employee_id = $7 returning *`;
    let param = [
      firstName.toLowerCase(),
      middleName.toLowerCase(),
      lastName.toLowerCase(),
      age,
      gender.toLowerCase(),
      address_emp.toLowerCase(),
      empId,
    ];

    return await pool
      .query(sql, param)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log("=============================");
        console.log(err.message);
        console.log("=============================");
      });
  }
};
