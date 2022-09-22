module.exports = function addEmployee({ addNewEmployee_UC }) {
  return async function post(httpRequest) {
    try {
      const userInfo = httpRequest.body;

      // Usecase
      const result = await addNewEmployee_UC(userInfo);
      if (result) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          status: 201,
          body: "Success!", //result.json
        };
      } else {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          status: 400,
          body: result,
        };
      }
    } catch (e) {
      // Catch error
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
