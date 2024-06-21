"use client";

import React, { useMemo, useState } from "react";
import { Button, PageContainer } from "src/components";
import CheckoutStepper from "./components/CheckoutStepper";
import PersonalInfoForm from "./components/PersonalInfoForm";
import Summary from "./components/Summary";
import FinalizeCheckout from "./components/FinalizeCheckout";
import PaymentMethodForm from "./components/PaymentMethodForm";
import ShippingMethodForm from "./components/ShippingMethodForm";

const steps = [
  {
    id: 1,
    title: "Dane wysyłki",
  },
  {
    id: 2,
    title: "Dostawa i płatność",
  },
  {
    id: 3,
    title: "Podsumowanie",
  },
];

const CheckoutPage = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const content = useMemo(() => {
    switch (step) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return (
          <div className='flex flex-col gap-6'>
            <ShippingMethodForm />
            <PaymentMethodForm />
          </div>
        );
      case 3:
        return <FinalizeCheckout />;
      default:
        return null;
    }
  }, [step]);

  return (
    <PageContainer>
      <div className='flex flex-col gap-10'>
        <CheckoutStepper steps={steps} currentStep={step} changeStep={(step) => setStep(step)} />

        <div className='flex gap-4 relative'>
          <div className='cart bg-white rounded-md p-6 w-2/3'>
            <h1 className='text-lg font-bold'>{steps.find((s) => s.id === step)?.title}</h1>
            <hr className='h-1 border-slate-200 my-4' />
            {content}
          </div>

          <Summary nextStep={nextStep} />
        </div>
      </div>
    </PageContainer>
  );
};

export default CheckoutPage;
