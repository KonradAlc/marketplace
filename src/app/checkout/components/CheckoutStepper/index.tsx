import React from "react";

type CheckoutStepperProps = {
  currentStep: number;
  changeStep: (step: number) => void;
  steps: { id: number; title: string }[];
};

const CheckoutStepper = (props: CheckoutStepperProps) => {
  const { currentStep, changeStep, steps } = props;

  const handleChangeStep = (step: number) => {
    changeStep(step);
  };

  return (
    <ul className='relative flex flex-row gap-x-2'>
      {steps.map((step) => (
        <li key={step.id} className='flex items-center gap-x-2 shrink basis-0 flex-1 group'>
          <div className='min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle'>
            <span
              className={`size-7 flex justify-center items-center flex-shrink-0 ${
                step.id <= currentStep ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-800"
              } font-medium rounded-full`}
            >
              {step.id}
            </span>
            <span className='ms-2 block text-sm font-medium text-gray-800'>{step.title}</span>
          </div>
          <div className={`w-full h-px flex-1 ${step.id < currentStep ? "bg-indigo-600" : "bg-gray-200"} group-last:hidden`}></div>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutStepper;
