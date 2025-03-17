import { NextButton, PreviousButton } from "../ui";

export const Footer = ({ step, goToPreviousStep }) => {
  return (
    <div className="flex w-full gap-x-2 mt-auto">
      {goToPreviousStep && <PreviousButton goToPreviousStep={goToPreviousStep} />}

      <NextButton text={step} />
    </div>
  );
};
