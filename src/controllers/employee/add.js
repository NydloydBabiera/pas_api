module.exports = function addEmployee({ addNewEmployee }) {
  return async function post(httpRequest) {
    try {
      const userInfo = httpRequest.body;

      // Usecase
      const result = await userInfo;
      if (result) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          status: 201,
          body: "Success!", //result,
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
