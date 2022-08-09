const { addNewEmpController, updateEmpController } = require("../controllers");
const makeExpressCallback = require("../express-callback");
const express = require("express");
const { route } = require("..");
const router = express.Router();

router.post("/insertNewEmp", makeExpressCallback(addNewEmpController));
router.put("/updateEmp/:id", makeExpressCallback(updateEmpController));

module.exports = router;
