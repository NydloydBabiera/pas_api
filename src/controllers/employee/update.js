module.exports = function updateEmpInfo({ updateEmployee_UC }) {
  return async function put(httpRequest) {
    try {
      // console.log(
      //   "body:",
      //   httpRequest.body,
      //   "\n",
      //   "id:",
      //   httpRequest.params.id
      // );
      const employeeInfo = httpRequest.body;
      const employeeId = httpRequest.params.id;
      const result = await updateEmployee_UC(employeeInfo, employeeId);
      if (result) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          status: 201,
          body: "User info updated!", //result,
        };
      }
    } catch (error) {
      return {
        headers: {
          "Content-Type": "application/json",
        },
        status: e.status ? e.status : 400,
        body: { errorMsg: e.message },
      };
    }
  };
};
