import React, { useState } from "react";

type ShippingMethodFormProps = {};

const ShippingMethodForm = (props: ShippingMethodFormProps) => {
  const [shippingMethod, setShippingMethod] = useState(1);

  const availableShippingMethods = [
    {
      id: 1,
      name: "Poczta Polska",
      price: 15,
    },
    {
      id: 2,
      name: "Kurier DHL",
      price: 20,
    },
    {
      id: 3,
      name: "Paczkomat InPost",
      price: 10,
    },
  ];

  return (
    <div>
      <h2 className='text-md font-medium mb-4'>Wybierz metodę dostawy</h2>
      <div className='flex flex-col gap-2'>
        {availableShippingMethods.map((method) => (
          <div key={method.id} className='flex items-center gap-4'>
            <input
              type='radio'
              name='shippingMethod'
              id={`shipping-method-${method.id.toString()}`}
              checked={shippingMethod === method.id}
              onChange={() => setShippingMethod(method.id)}
              value={method.id}
            />
            <label htmlFor={`shipping-method-${method.id.toString()}`}>{method.name}</label>
            <div className='ml-auto'>{method.price} zł</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingMethodForm;
