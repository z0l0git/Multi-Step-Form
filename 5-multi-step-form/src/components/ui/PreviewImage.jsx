import Image from "next/legacy/image";

export const PreviewImage = ({ imagePreviewUrl, resetFileInput }) => {
  return (
    <div className="relative">
      <div className="flex">
        <Image src={imagePreviewUrl} alt="preview" height={180} width={416} objectFit="cover" className="rounded-md" />
      </div>

      <div className="absolute top-4 right-4 flex items-center justify-center w-6 h-6 bg-[#202124] rounded-full cursor-pointer" onClick={resetFileInput}>
        <Image src="/icons/x-icon.svg" height={12} width={12} alt="x-icon" priority />
      </div>
    </div>
  );
};
