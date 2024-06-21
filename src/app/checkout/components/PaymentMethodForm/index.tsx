import React, { useState } from "react";

type PaymentMethodFormProps = {};

const PaymentMethodForm = (props: PaymentMethodFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState(1);

  const availablePaymentMethods = [
    {
      id: 1,
      name: "Przelew tradycyjny",
      price: 0,
    },
    {
      id: 2,
      name: "Płatność przy odbiorze",
      price: 5,
    },
  ];

  return (
    <div>
      <h2 className='text-md font-medium mb-4'>Wybierz opcję płatności</h2>
      <div className='flex flex-col gap-2'>
        {availablePaymentMethods.map((method) => (
          <div key={method.id} className='flex items-center gap-4'>
            <input
              type='radio'
              name='paymentMethod'
              id={`payment-method-${method.id.toString()}`}
              checked={paymentMethod === method.id}
              value={method.id}
              onChange={() => setPaymentMethod(method.id)}
            />
            <label htmlFor={`payment-method-${method.id.toString()}`}>{method.name}</label>
            <div className='ml-auto'>{method.price} zł</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodForm;
