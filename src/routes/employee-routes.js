const {
  addNewEmpController,
  updateEmpController,
  getAllEmployeeController,
} = require("../controllers");
const makeExpressCallback = require("../express-callback");
const express = require("express");
const { route } = require("..");
const router = express.Router();

router.post("/insertNewEmp", makeExpressCallback(addNewEmpController));
router.put("/updateEmp/:id", makeExpressCallback(updateEmpController));
router.get("/getAllEmp", makeExpressCallback(getAllEmployeeController));

module.exports = router;
