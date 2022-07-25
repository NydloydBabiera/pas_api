const { addNewEmpController } = require("../../controllers");

// module.exports = function empRoutes({ makeExpressCallback, router }) {
//   router.post("/", makeExpressCallback(addNewEmpController));
// };

const addNewEmployee = async ({ router, makeExpressCallback }) => {
  router.post("/", makeExpressCallback(addNewEmpController));
  return router;
};

module.exports = addNewEmployee;
