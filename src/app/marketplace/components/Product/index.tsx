import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useMemo } from "react";
import { getFormatedAmount } from "src/utils/helpers";

type ProductProps = {
  data: any;
};

const Product = ({ data }: ProductProps) => {
  const { id, name, image, category, price, manufacturer } = data;

  const currentPrice = useMemo(() => {
    if (price.discount) {
      const discount = price.discount.isPercentage ? (price.value * price.discount.value) / 100 : price.discount.value;
      return price.value - discount;
    }
    return price.value;
  }, [price]);

  const addToCart = () => {
    console.log("Add to cart", id);
  };

  return (
    <article className='product relative p-3 bg-white w-full rounded-md flex flex-col gap-1'>
      <Link href={`/marketplace/item/${id}`}>
        <div className='product-image h-48 overflow-hidden rounded-md mb-2'>
          <img className='object-cover w-full h-48 max-w-none' src={image} alt={name} />
        </div>
      </Link>
      {!!price.discount && (
        <div className='discount-badge absolute right-5 top-5 bg-white py-1 px-2 rounded-3xl text-sm'>
          {`-${price.discount.isPercentage ? price.discount.value : getFormatedAmount(price.discount.value)}`}{" "}
          <span className='text-xs text-gray-500 font-light'>{price.discount.isPercentage ? "%" : price.currency}</span>
        </div>
      )}
      <Link href={`/marketplace/item/${id}`}>
        <h1>{name}</h1>
      </Link>
      <div className='manufacturer mb-1'>
        <p className='text-sm text-gray-500'>{manufacturer.name}</p>
      </div>
      {/* <p>{category.name}</p> */}
      <div className='pricing flex gap-2 items-center mt-auto'>
        {!!price.discount && (
          <del className='before-discount text-gray-500 text-sm font-light'>
            {price.discount && getFormatedAmount(price.value)} {price.currency}
          </del>
        )}
        <span className={`current font-bold ${!!price.discount && "text-md"}`}>
          {getFormatedAmount(currentPrice)} <span className='text-xs text-gray-500 font-light'>{price.currency}</span>
        </span>
      </div>
      <button
        onClick={addToCart}
        className='absolute bottom-3 right-3 h-7 w-7 p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition ease-in-out duration-200'
      >
        <ShoppingCartIcon />
      </button>
    </article>
  );
};

export default Product;
