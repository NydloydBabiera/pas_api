module.exports = function addEmployee({ pool }) {
  return Object.freeze({
    insertEmployee,
  });

  async function insertEmployee(reqEmpInfo) {
    const {
      firstName,
      middleName,
      lastName,
      age,
      gender,
      address,
    } = reqEmpInfo;

    try {
      let insertRes = await pool.query(
        `INSERT INTO pas_employee(firstname,middlename,lastname,age,gender,address_emp)
        VALUES($1, $2, $3, $4 , $5, $6) RETURNING *`,
        [firstName, middleName, lastName, age, gender, address]
      );
      createUserAcct(insertRes.rows.employee_id, firstName, lastName);
    } catch (err) {
      console.log("=============================");
      console.log("======", err.message, "======");
      console.log("=============================");
    }
  }

  async function createUserAcct(employee_id, firstName, lastName) {
    let username = firstName.charAt(0) + lastName;
    let password = firstName.charAt(0) + lastName;
    try {
      await pool.query(
        `INSERT INTO pas_userAccounts(username,user_password,employee_id)
      VALUES($1, $2 ,$3) RETURNING *`[(username, password, employee_id)]
      );
    } catch (error) {
      console.log("=============================");
      console.log("======", err.message, "======");
      console.log("=============================");
    }
  }
};
