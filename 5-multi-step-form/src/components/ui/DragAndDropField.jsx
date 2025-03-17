import { useState } from "react";
import Image from "next/legacy/image";

export const DragAndDropField = ({ handleFileSelection, triggerFileInputClick }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = Array.from(event.dataTransfer.files).at(0);
    handleFileSelection(droppedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={triggerFileInputClick}
      className={`flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-[180px] border rounded-md ${
        isDragging ? "border-dashed border-gray-600" : "border-solid"
      }`}
    >
      <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
        <Image src="/icons/add-image-icon.svg" width={12} height={12} alt="add-image-icon" priority />
      </div>

      <h4 className="text-sm text-center">Browse or Drop Image</h4>
    </div>
  );
};
