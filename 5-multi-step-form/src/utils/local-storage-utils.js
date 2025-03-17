export const saveFormDataToLocalStorage = (currentStep, formData) => {
  const formWithStep = { ...formData, currentStep };

  localStorage.setItem("savedFormData", JSON.stringify(formWithStep));
};

export const retrieveFormDataFromLocalStorage = () => {
  const savedFormData = localStorage.getItem("savedFormData");

  return savedFormData ? JSON.parse(savedFormData) : null;
};

export const removeFormDataFromLocalStorage = () => {
  localStorage.removeItem("savedFormData");
};
