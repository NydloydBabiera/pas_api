const Pool = require("pg").Pool;
const addEmp = require("./employee/add");
const updateEmployee = require("./employee/update");

const pool = new Pool({
  user: "postgres",
  password: "1234",
  database: "pas_db",
  host: "localhost",
  port: 5432,
});

const DA_addEmp = addEmp({ pool });
const DA_updateEmp = updateEmployee({ pool });

const services = Object.freeze(DA_addEmp, DA_updateEmp);

module.exports = services;
