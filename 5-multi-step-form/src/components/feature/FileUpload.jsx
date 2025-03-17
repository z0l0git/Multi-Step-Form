import { useRef, useState } from "react";
import { InputLabel, InputError, DragAndDropField, PreviewImage } from "../ui";

export const FileUpload = ({ error, setFormValues, setFormErrors }) => {
  const fileInputElementRef = useRef(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const handleFileSelection = (file) => {
    if (file) {
      setImagePreviewUrl(URL.createObjectURL(file));

      setFormValues((prevValues) => ({ ...prevValues, profileImage: file }));
    }
  };

  const onFileInputChange = (event) => {
    const selectedFile = Array.from(event.target.files)[0];

    handleFileSelection(selectedFile);

    setFormErrors((previousErrors) => ({ ...previousErrors, profileImage: "" }));
  };

  const triggerFileInputClick = () => fileInputElementRef.current.click();

  const resetFileInput = () => {
    setImagePreviewUrl(null);

    if (fileInputElementRef.current) {
      fileInputElementRef.current.value = "";
    }

    setFormValues((prevValues) => ({ ...prevValues, profileImage: "" }));
  };

  return (
    <div className="space-y-2">
      <InputLabel label="Profile image" name="profileImage" />

      {imagePreviewUrl ? (
        <PreviewImage imagePreviewUrl={imagePreviewUrl} resetFileInput={resetFileInput} />
      ) : (
        <DragAndDropField triggerFileInputClick={triggerFileInputClick} handleFileSelection={handleFileSelection} />
      )}

      <input ref={fileInputElementRef} type="file" name="profileImage" hidden onChange={onFileInputChange} />

      <InputError error={error} />
    </div>
  );
};
