"use client";

import React, { useEffect, useRef, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import LogoImg from "src/assets/img/logo.webp";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  RadioIcon,
  BriefcaseIcon,
  ChevronDoubleUpIcon,
  SwatchIcon,
  MusicalNoteIcon,
  PauseIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { NavItemType } from "./types";
import DesktopNavItem from "./components/DesktopNavItem";
import MobileNavItem from "./components/MobileNavItem";
import { isServer } from "src/utils/helpers";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const checkSticky = () => {
    if (isServer()) false;

    if (ref.current) {
      if (window.scrollY > 60) {
        ref.current.classList.add("bg-white");
        ref.current.classList.remove("bg-transparent");
        ref.current.classList.add("py-4");
        ref.current.classList.remove("py-6");
      } else {
        ref.current.classList.add("bg-transparent");
        ref.current.classList.remove("bg-white");
        ref.current.classList.add("py-6");
        ref.current.classList.remove("py-4");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkSticky);

    return () => {
      window.removeEventListener("scroll", checkSticky);
    };
  }, []);

  const menu: NavItemType[] = [
    {
      title: "Kaski motocyklowe",
      submenu: [
        {
          title: "Integralne",
          description: "Kaski dla wymagających",
          href: "/marketplace/helmets?category=integral",
          icon: MusicalNoteIcon,
        },
        {
          title: "Szczękowe",
          description: "Dla miłośników retro",
          href: "/marketplace/helmets?category=jet",
          icon: PauseIcon,
        },
        {
          title: "Otwarte",
          description: "Dla miłośników wolności",
          href: "/marketplace/helmets?category=open",
          icon: SwatchIcon,
        },
        {
          title: "Enduro",
          description: "Dla miłośników off-roadu",
          href: "/marketplace/helmets?category=enduro",
          icon: RadioIcon,
        },
      ],
    },
    { title: "Interkomy", href: "#" },
    { title: "Torby i bagaże", href: "#" },
    { title: "Akcesoria", href: "#" },
  ];

  return (
    <header className='bg-transparent sticky top-0 z-50 py-6' ref={ref}>
      <nav className='mx-auto flex gap-12 max-w-7xl items-center justify-between px-6 lg:px-8' aria-label='Global'>
        <div className='flex'>
          <a href='/' className='flex items-center -m-1.5 p-1.5'>
            <span className='sr-only'>Moto rynek</span>
            <Image className='h-12 w-auto' src={LogoImg} alt='' />
            <span className='font-bold'>Moto</span>
            <span className='font-extralight'>Rynek</span>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          {menu.map((item) => (
            <DesktopNavItem key={item.title} data={item} />
          ))}
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-8'>
          <Link href='/cart' className='flex gap-2 items-center text-gray-600'>
            <ShoppingCartIcon className='h-6 w-6' />
            <span className='text-sm font-semibold leading-6'>0,00 zł</span>
          </Link>
          <Link href='/sign-in'>
            <button className='bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium leading-6 text-white'>Zaloguj się</button>
          </Link>
        </div>
      </nav>

      {/* MOBILE ONLY */}
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <Image className='h-8 w-auto' src={LogoImg} alt='' />
            </a>
            <button type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700' onClick={() => setMobileMenuOpen(false)}>
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {menu.map((item) => (
                  <MobileNavItem key={item.title} data={item} />
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='/sign-in'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Zaloguj się
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
