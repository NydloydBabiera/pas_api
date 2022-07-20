module.exports = function employeeEntities() {
  return function addNewEmployee(reqEmpInfo) {
    const {
      firstName,
      middleName,
      lastName,
      age,
      gender,
      address,
    } = reqEmpInfo;

    if (!firstName) {
      throw new Error("First name is Required");
    }
    if (!middleName) {
      throw new Error("Middle name is Required");
    }
    if (!lastName) {
      throw new Error("Last name is Required");
    }
    if (!age) {
      throw new Error("Age is Required");
    }
    if (!gender) {
      throw new Error("Gender is required");
    }
    if (!address) {
      throw new Error("Addres is required");
    }

    return Object.freeze({
      getHeader: () => headers,
      getBody: () => body,
      getDetails: () => details,
    });
  };

  function chkSpecialChar(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;
    return specialChars.test(str);
  }
};
