import React from "react";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Kaski",
    description: "Kaski dla wymagających. Znajdziesz tutaj kaski integralne, otwarte, a także kaski z systemem komunikacji.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Interkomy",
    description: "Interkomy dla motocyklistów. Znajdziesz tutaj interkomy jedno- i dwukierunkowe, a także zestawy dla grupy.",
    icon: LockClosedIcon,
  },
  {
    name: "Torby i bagaże",
    description: "Torby i bagaże dla motocyklistów. Znajdziesz tutaj torby na kask, sakwy boczne, a także plecaki.",
    icon: ArrowPathIcon,
  },
  {
    name: "Akcesoria",
    description: "Akcesoria dla motocyklistów. Znajdziesz tutaj akcesoria do nawigacji, do ochrony motocykla, a także do ochrony ciała.",
    icon: FingerPrintIcon,
  },
];

const Features = () => {
  return (
    <section className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>Łatwo, szybko, wygodnie</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Wszystko czego szukasz</p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Znajdziesz tutaj wszystko czego potrzebujesz, aby poprawić swoje doznania z jazdy na motocyklu. Od kasków, przez odzież, aż po
            akcesoria.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
