import { Fragment } from "react";
import { Footer } from "../layer";
import { StepWrapper, InputField } from "../ui";
import { validateStepOne, saveFormDataToLocalStorage } from "@/utils";

export const PersonalInfoStep = ({
  formErrors,
  formValues,
  goToNextStep,
  updateFormErrors,
  handleInputChange,
}) => {
  const { firstName, lastName, username } = formValues;
  const {
    firstName: errorFirstName,
    lastName: errorLastName,
    username: errorUsername,
  } = formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepOne(formValues);

    if (isFormValid) {
      saveFormDataToLocalStorage(1, formValues);
      goToNextStep();
      return;
    }

    updateFormErrors(validationErrors);
  };

  return (
    <StepWrapper handleSubmit={handleSubmit}>
      <Fragment>
        <InputField
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          placeholder="Your first name"
          error={errorFirstName}
          label="First name"
        />

        <InputField
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          placeholder="Your last name"
          error={errorLastName}
          label="Last name"
        />

        <InputField
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Your username"
          error={errorUsername}
          label="Username"
        />

        <Footer step="Continue 1/3" />
      </Fragment>
    </StepWrapper>
  );
};
