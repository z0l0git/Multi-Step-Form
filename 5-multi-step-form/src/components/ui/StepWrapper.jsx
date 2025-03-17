import { Header } from "../layer";

export const StepWrapper = ({ children, handleSubmit }) => {
  return (
    <div className="flex flex-col w-[480px] min-h-[655px] p-8 bg-white rounded-lg">
      <Header />

      <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-y-3">
        {children}
      </form>
    </div>
  );
};
