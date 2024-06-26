import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { NavItemType } from "../../types";

const DesktopNavItem = ({ data }: { data: NavItemType }) => {
  const { title, href, submenu, callsToAction } = data;

  if (href)
    return (
      <Link href={href}>
        <button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>{title}</button>
      </Link>
    );

  return (
    <Popover className='relative'>
      <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
        {title}
        <ChevronDownIcon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
      </Popover.Button>

      {((submenu && submenu.length > 0) || callsToAction) && (
        <Transition
          as={Fragment}
          enter='transition ease-out duration-200'
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'
        >
          <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
            {submenu && (
              <div className='p-4'>
                {submenu.map((item) => (
                  <div
                    key={item.title}
                    className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                  >
                    <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                      <item.icon className='h-6 w-6 text-gray-600 group-hover:text-indigo-600' aria-hidden='true' />
                    </div>
                    <div className='flex-auto'>
                      <a href={item.href} className='block font-semibold text-gray-900'>
                        {item.title}
                        <span className='absolute inset-0' />
                      </a>
                      <p className='mt-1 text-gray-600'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {callsToAction && (
              <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                {callsToAction.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                  >
                    <item.icon className='h-5 w-5 flex-none text-gray-400' aria-hidden='true' />
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </Popover.Panel>
        </Transition>
      )}
    </Popover>
  );
};

export default DesktopNavItem;
