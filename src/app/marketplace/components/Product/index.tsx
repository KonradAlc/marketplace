import React, { useMemo } from "react";

type ProductProps = {
  data: any;
};

const Product = ({ data }: ProductProps) => {
  const { id, name, image, category, price, manufacturer } = data;

  const currentPrice = useMemo(() => {
    if (price.discount) {
      const converted = price.discount.isPercentage ? (price.value * price.discount.value) / 100 : price.discount.value;
      return converted;
    }
    return price.value;
  }, [price]);

  return (
    <article className='product relative p-5 bg-gray-100 w-full rounded-md'>
      <div>
        <img src={image} alt={name} />
        {price.discount && (
          <div className='discount-badge'>
            {price.discount.value} {`-${price.discount.value}`}
            {price.discount.isPercentage ? "%" : price.currency}
          </div>
        )}
        <h1>{name}</h1>
        <div className='manufacturer'>
          <img className='absolute right-0 top-0' src={manufacturer.logo} alt={manufacturer.name} />
          <p className='text-sm text-gray-500'>{manufacturer.name}</p>
        </div>
        <div className='pricing'>
          <span className='before-discount'>
            {price.discount && price.value} {price.currency}
          </span>
          <span className='current'>
            {currentPrice} {price.currency}
          </span>
          <p>{category.name}</p>
        </div>
      </div>
    </article>
  );
};

export default Product;
