import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 text-center'>
        <h2 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Rozpocznij zakupy</h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit
          at. In mi viverra elit nunc.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            href='/marketplace'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Przeglądaj
          </Link>
          <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
            Poradniki <span aria-hidden='true'>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
