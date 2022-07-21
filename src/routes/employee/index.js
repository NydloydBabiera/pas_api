const { addNewEmpController } = require("../../controllers");

module.exports = function empRoutes({ makeExpressCallback, router }) {
  router.post("/", makeExpressCallback(addNewEmpController));
};
