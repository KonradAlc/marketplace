import React from "react";
import { Button } from "src/components";

type SummaryProps = {
  nextStep: () => void;
};

const Summary = (props: SummaryProps) => {
  const { nextStep } = props;

  return (
    <div className='summary w-1/3 h-fit sticky bg-white rounded-md p-6 top-24'>
      <h2 className='text-lg font-bold'>Podsumowanie</h2>
      <hr className='h-1 border-slate-200 my-4' />
      <Button fullWidth onClick={nextStep}>
        Przejdź dalej
      </Button>
    </div>
  );
};

export default Summary;
