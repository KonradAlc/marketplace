import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button, PageContainer } from "src/components";
import CartItem from "./components/CartItem";
import { productList } from "src/mocks/marketplace/product-list";

const CartPage = () => {
  return (
    <PageContainer>
      <div className='grid grid-cols-3 gap-4'>
        <div className='cart bg-white rounded-md p-6 col-span-2'>
          <header className='flex justify-between gap-4'>
            <h1 className='text-lg font-bold'>Koszyk</h1>
            <button>
              <TrashIcon className='h-6 w-6 text-slate-600' />
            </button>
          </header>
          <hr className='h-1 border-slate-200 my-4' />
          <div className='cart-items flex flex-col gap-4 items-stretch'>
            {productList.map((product) => (
              <CartItem key={product.id} item={product} />
            ))}
          </div>
        </div>
        <div className='summary bg-white rounded-md p-6 col-span-1'>
          <h2 className='text-lg font-bold'>Podsumowanie</h2>
          <hr className='h-1 border-slate-200 my-4' />
          <Button fullWidth href={"/checkout"}>
            Przejdź do zamówienia
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default CartPage;
