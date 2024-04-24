import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "src/assets/img/logo.webp";

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto p-6 lg:px-8 max-w-7xl px-6 py-16 lg:px-8 flex flex-col items-center gap-8'>
        <div className='flex items-center justify-center gap-2'>
          <Image className='w-14' src={logo} alt='' />
          <div>
            <span className='font-bold'>Moto</span>
            <span className='font-extralight'>Rynek</span>
          </div>
        </div>
        <nav className='flex gap-12 items-center'>
          <Link href='/' className='text-sm text-gray-400 font-regular'>
            Przeglądaj
          </Link>
          <Link href='/' className='text-sm text-gray-400 font-regular'>
            Kategorie
          </Link>
          <Link href='/' className='text-sm text-gray-400 font-regular'>
            Poradniki
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
