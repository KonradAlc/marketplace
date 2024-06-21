"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { QuantitySelector } from "src/components";

type CartItemProps = {
  item: any;
};

const CartItem = ({ item }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='cart-item flex gap-4 w-100 items-center'>
      <img className='h-16 rounded-md' src={item.image} alt={item.name} />
      <div className='flex flex-col gap-2'>
        <h3 className='text-md font-bold'>{item.name}</h3>
        <div className='flex justify-between items-center'>
          <div className='price'>
            {item.price.value} {item.price.currency}
          </div>
        </div>
      </div>
      <QuantitySelector className='ml-auto' quantity={quantity} setQuantity={setQuantity} />
      <button>
        <TrashIcon className='h-6 w-6 text-slate-600' />
      </button>
    </div>
  );
};

export default CartItem;
