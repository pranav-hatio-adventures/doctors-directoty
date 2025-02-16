import clsx from "clsx";

interface StepperProps {
  data: Array<{
    title: string;
    description: string;
  }>;
}
const Stepper = (props: StepperProps) => {
  const SingleStepperInner = (
    title: string,
    description: string,
    index: number
  ) => {
    return (
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <div
            className={clsx({
              "flex-1 relative": true,
              "border-l border-dotted border-[#766F6F] before:absolute before:-left-[1px] before:bottom-[102%] before:border-l before:border-[#766F6F] before:border-dotted before:h-4":
                index != 0,
            })}
          />
          <div className="w-6 h-6 rounded-full border-[3px] border-primary-color" />
          <div
            className={clsx({
              "flex-1 relative": true,
              "border-l border-dotted border-[#766F6F] after:absolute after:-left-[1px] after:top-[102%] after:border-l after:border-[#766F6F] after:border-dotted after:h-4":
                props.data.length - 1 != index,
            })}
          />
        </div>
        <div className="m-y-auto">
          <h3 className="font-bold text-3xl text-tertiary-color">{title}</h3>
          <span className="font-medium text-base text-gray-color">
            {description}
          </span>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-8">
      {props.data.map(({ description, title }, index) =>
        SingleStepperInner(title, description, index)
      )}
    </div>
  );
};

export default Stepper;
