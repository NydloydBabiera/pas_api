const Pool = require("pg").Pool;
const addEmp = require("./employee/add");

const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "pas_db",
  host: "localhost",
  port: 5432,
});

const DA_addEmp = addEmp({ pool });

module.exports = DA_addEmp;
