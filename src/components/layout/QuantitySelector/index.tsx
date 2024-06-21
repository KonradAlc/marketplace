import classNames from "classnames";
import React from "react";

type QuantitySelectorProps = {
  className?: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
};

const QuantitySelector = (props: QuantitySelectorProps) => {
  const { className, quantity, setQuantity } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const onBlur = () => {
    if (quantity < 1) {
      setQuantity(1);
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const subtractQuantity = () => {
    setQuantity(quantity - 1);
  };

  const buttonStyles = "button w-10 border border-slate-200 hover:bg-slate-200 transition ease-in-out duration-200";

  return (
    <div className={classNames("quantity-selector flex", className)}>
      <button className={buttonStyles} onClick={subtractQuantity}>
        -
      </button>
      <div className='quantity-input'>
        <input className='border border-slate-200 w-12 text-center' type='text' value={quantity} onChange={handleChange} onBlur={onBlur} />
      </div>
      <button className={buttonStyles} onClick={addQuantity}>
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
