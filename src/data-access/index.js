const Pool = require("pg").Pool;
const addEmp = require("./employee/add");

const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "db_nydloydapi_test",
  host: "localhost",
});

const DA_addEmp = addEmp({ pool });

module.exports = { DA_addEmp };
