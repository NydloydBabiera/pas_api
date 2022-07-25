const makeExpressCallback = require("../express-callback");
const express = require("express");
const router = express.Router();
const empRoutes = require("./employee");

const employeeRoutes = empRoutes({ makeExpressCallback, router });

const services = Object.freeze({ employeeRoutes });

module.exports = services;

module.exports = {
  employeeRoutes,
};
module.exports = router;
