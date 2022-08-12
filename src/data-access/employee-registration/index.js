const Pool = require("pg").Pool;
const employee_crud = require("./employee-crud");

const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "pas_db",
  host: "localhost",
  port: 5432,
});

const DA_employee_crud = employee_crud({ pool });

module.exports = DA_employee_crud;
