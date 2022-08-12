module.exports = function getEmployee({ getAllEmployee_UC }) {
  return async function get(httpRequest) {
    try {
      const userInfo = httpRequest.body;

      // Usecase
      const result = await getAllEmployee_UC();
      if (result) {
        return {
          headers: {
            "Content-Type": "application/json",
          },
          status: 201,
          body: result, //result,
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
