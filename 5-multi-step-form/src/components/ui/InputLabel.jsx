export const InputLabel = ({ name, label }) => (
  <label htmlFor={name} className="block text-sm font-semibold leading-4 text-[#334155]">
    {label} <span className="text-error">*</span>
  </label>
);
