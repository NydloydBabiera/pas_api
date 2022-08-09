module.exports = function addEmployee({ pool }) {
  return Object.freeze({
    insertEmployee,
    createUserAcct,
    isEmpExist,
  });

  async function insertEmployee(reqEmpInfo) {
    const {
      firstName,
      middleName,
      lastName,
      age,
      gender,
      address_emp,
    } = reqEmpInfo;

    let sql = `INSERT INTO pas_employee(firstname,middlename,lastname,age,gender,address_emp)
      VALUES($1, $2, $3, $4 , $5, $6) RETURNING *`;
    let param = [
      firstName.toLowerCase(),
      middleName.toLowerCase(),
      lastName.toLowerCase(),
      age,
      gender.toLowerCase(),
      address_emp.toLowerCase(),
    ];
    return await pool
      .query(sql, param)
      .then((res) => {
        createUserAcct(res.rows.employee_id, firstName, lastName);
        return res;
      })
      .catch((err) => {
        console.log("=============================");
        console.log(err.message);
        console.log("=============================");
      });

    
  }

  async function createUserAcct(employee_id, firstName, lastName) {
    let username = firstName.charAt(0).toLowerCase() + lastName.toLowerCase();
    let password = firstName.charAt(0).toLowerCase() + lastName.toLowerCase();
    let sql = `INSERT INTO pas_userAccounts(username,user_password,employee_id)
    VALUES($1, $2 ,$3) RETURNING *`;
    let param = [username.toLowerCase(), password.toLowerCase(), employee_id];
    await pool
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

  async function isEmpExist(reqEmpInfo) {
    let isExist = false;
    const { firstName, middleName, lastName } = reqEmpInfo;
    let sql = `SELECT * FROM pas_employee where firstname = $1 and middlename = $2 and lastname = $3`;
    let param = [
      firstName.toLowerCase(),
      middleName.toLowerCase(),
      lastName.toLowerCase(),
    ];

    await pool
      .query(sql, param)
      .then((res) => {
        return (isExist = res.rowCount > 0 ? true : false);
      })
      .catch((err) => {
        console.log("=============================");
        console.log(err.message);
        console.log("=============================");
      });
    return isExist;
  }
};
