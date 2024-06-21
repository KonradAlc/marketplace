import React from "react";

type InputProps = {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue?: (value: string) => void;
};

const Input = (props: InputProps) => {
  const { id, name, label, placeholder, type = "text", value, setValue, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    if (setValue) setValue(e.target.value);
  };

  return (
    <div>
      {label && (
        <label htmlFor={id} className='block text-sm font-medium leading-6 text-gray-900'>
          {label}
        </label>
      )}
      <div className='relative mt-2 rounded-md shadow-sm'>
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
          className='block w-full rounded-md border-0 py-3 px-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
