export const InputError = ({ error }) => {
  if (!error) return null;

  return <p className="text-error text-xs">{error}</p>;
};
