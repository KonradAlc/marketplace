import React from "react";

type FiltersProps = {};

const Filters = (props: FiltersProps) => {
  return (
    <section className='flex flex-col gap-4 w-96 h-fit p-6 bg-white rounded-md'>
      <h3 className='text-md font-semibold'>Filtry</h3>
      <div className='filters'>
        <input type='checkbox' id='discount' name='discount' value='discount' />
      </div>
    </section>
  );
};

export default Filters;
