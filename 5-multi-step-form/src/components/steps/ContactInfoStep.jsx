import { Fragment } from "react";
import { Footer } from "../layer";
import { StepWrapper, InputField } from "../ui";
import { validateStepTwo, saveFormDataToLocalStorage } from "@/utils";

export const ContactInfoStep = ({ formErrors, formValues, goToNextStep, goToPreviousStep, updateFormErrors, handleInputChange }) => {
  const { email, phoneNumber, password, confirmPassword } = formValues;
  const { email: errorEmail, phoneNumber: errorPhoneNumber, password: errorPassword, confirmPassword: errorConfirmPassword } = formErrors;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { isFormValid, validationErrors } = validateStepTwo(formValues);

    if (isFormValid) {
      saveFormDataToLocalStorage(2, formValues);
      goToNextStep();
      return;
    }

    updateFormErrors(validationErrors);
  };

  return (
    <StepWrapper handleSubmit={handleSubmit}>
      <Fragment>
        <InputField name="email" value={email} onChange={handleInputChange} placeholder="Your email" error={errorEmail} label="Email" />

        <InputField
          name="phoneNumber"
          value={phoneNumber}
          label="Phone number"
          error={errorPhoneNumber}
          onChange={handleInputChange}
          placeholder="Your phone number"
        />

        <InputField
          name="password"
          type="password"
          value={password}
          label="Password"
          error={errorPassword}
          placeholder="Your password"
          onChange={handleInputChange}
        />

        <InputField
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm password"
          error={errorConfirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm password"
        />

        <Footer step="Continue 2/3" goToPreviousStep={goToPreviousStep} />
      </Fragment>
    </StepWrapper>
  );
};
