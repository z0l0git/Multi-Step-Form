import { InputError } from "./InputError";
import { InputLabel } from "./InputLabel";

export const InputField = ({
  name,
  value,
  placeholder,
  error,
  label,
  onChange,
  type = "text",
}) => {
  return (
    <fieldset className="space-y-2">
      <InputLabel label={label} name={name} />

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 text-base leading-5 rounded-md outline ${
          error ? "outline-error" : "outline-[#CBD5E1]"
        } focus:outline-[#0CA5E9] text-[#121316]`}
      />

      <InputError error={error} />
    </fieldset>
  );
};
