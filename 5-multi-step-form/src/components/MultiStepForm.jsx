import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { retrieveFormDataFromLocalStorage } from "@/utils";
import { initialFormValues, formStepAnimationVariants } from "@/constants";
import {
  PersonalInfoStep,
  ContactInfoStep,
  ProfileStep,
  FinalStep,
} from "./steps";

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues);

  const updateFormErrors = (errors) => {
    setFormErrors((previousErrors) => ({ ...previousErrors, ...errors }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormErrors((previousErrors) => ({ ...previousErrors, [name]: "" }));
    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((previousStep) => previousStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((previousStep) => previousStep - 1);
    }
  };

  useEffect(() => {
    const savedFormData = retrieveFormDataFromLocalStorage();

    if (savedFormData) {
      setFormValues(savedFormData);
      setCurrentStep(savedFormData.currentStep || 0);
    }
  }, []);

  const CurrentStepComponent = [
    PersonalInfoStep,
    ContactInfoStep,
    ProfileStep,
    FinalStep,
  ][currentStep];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial="enter"
        animate="center"
        exit="exit"
        variants={formStepAnimationVariants}
        transition={{ duration: 0.5 }}
      >
        <CurrentStepComponent
          formErrors={formErrors}
          formValues={formValues}
          goToNextStep={goToNextStep}
          setFormValues={setFormValues}
          setFormErrors={setFormErrors}
          goToPreviousStep={goToPreviousStep}
          updateFormErrors={updateFormErrors}
          handleInputChange={handleInputChange}
        />
      </motion.div>
    </AnimatePresence>
  );
}
