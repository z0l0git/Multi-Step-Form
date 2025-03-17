import Image from "next/legacy/image";

export const PreviousButton = ({ goToPreviousStep }) => {
  return (
    <button
      type="button"
      onClick={goToPreviousStep}
      className="flex items-center justify-center w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100"
    >
      <Image src="/icons/back-arrow-icon.svg" width={7} height={12} alt="backward-arrow-icon" priority /> <span>Back</span>
    </button>
  );
};
