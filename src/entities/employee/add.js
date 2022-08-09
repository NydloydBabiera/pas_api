module.exports = function employeeEntities() {
  return function addNewEmployee(employeeInfo) {
    const {
      firstName,
      middleName,
      lastName,
      age,
      gender,
      address_emp,
    } = employeeInfo;

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
    if (!address_emp) {
      throw new Error("Address is required");
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
