import { isEmpty, isValidEmail, isValidPhoneNumber } from "./validation-utils";

export const validateStepOne = ({ firstName, lastName, username }) => {
  const validationErrors = {};

  if (isEmpty(firstName)) {
    validationErrors.firstName = "Нэрээ оруулна уу";
  }

  if (isEmpty(lastName)) {
    validationErrors.lastName = "Овгоо оруулна уу.";
  }

  if (isEmpty(username)) {
    validationErrors.username = "Хэрэглэгчийн нэрээ оруулна уу";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};

export const validateStepTwo = ({
  email,
  phoneNumber,
  password,
  confirmPassword,
}) => {
  const validationErrors = {};

  if (isEmpty(email)) {
    validationErrors.email = "Мэйл хаягаа оруулна уу";
  } else if (!isValidEmail(email)) {
    validationErrors.email = "Зөв мэйл хаяг оруулна уу";
  }

  if (isEmpty(phoneNumber)) {
    validationErrors.phoneNumber = "Утасны дугаараа оруулна уу.";
  } else if (phoneNumber.length < 8) {
    validationErrors.phoneNumber = "8 оронтой дугаар оруулна уу.";
  } else if (!isValidPhoneNumber(phoneNumber)) {
    validationErrors.phoneNumber = "Зөв утасны дугаар оруулна уу";
  }

  if (isEmpty(password)) {
    validationErrors.password = "Нууц үгээ оруулна уу";
  } else if (password.length < 6) {
    validationErrors.password = "6 оронтой тоо оруулна уу";
  }

  if (!confirmPassword) {
    validationErrors.confirmPassword = "Нууц үгээ давтаж оруулна уу";
  } else if (confirmPassword !== password) {
    validationErrors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};

export const validateStepThree = ({ dateOfBirth, profileImage }) => {
  const validationErrors = {};

  if (isEmpty(dateOfBirth)) {
    validationErrors.dateOfBirth = "Төрсөн өдрөө оруулна уу";
  }

  const currentDate = new Date();
  const dob = new Date(dateOfBirth);

  const age = currentDate.getFullYear() - dob.getFullYear();

  if (dob > currentDate) {
    validationErrors.dateOfBirth =
      "Төрсөн өдөр одоогийн огнооноос өмнө байх ёстой.";
  } else if (age < 18) {
    validationErrors.dateOfBirth = "Та 18 ба түүнээс дээш настай байх ёстой.";
  }

  if (!profileImage) {
    validationErrors.profileImage = "Профайл зурагаа оруулна уу";
  }

  const isFormValid = Object.keys(validationErrors).length === 0;

  return { isFormValid, validationErrors };
};
