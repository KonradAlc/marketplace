import { Disclosure, Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { NavItemType } from "../../types";
import classNames from "classnames";

const MobileNavItem = ({ data }: { data: NavItemType }) => {
  const { title, href, submenu = [], callsToAction = [] } = data;

  if (href)
    return (
      <Link href={href} className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
        {title}
      </Link>
    );

  return (
    <Disclosure as='div' className='-mx-3'>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
            {title}
            <ChevronDownIcon className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden='true' />
          </Disclosure.Button>
          {(submenu || callsToAction) && (
            <Disclosure.Panel className='mt-2 space-y-2'>
              {[...submenu, ...callsToAction].map((item) => (
                <Disclosure.Button
                  key={item.title}
                  as='a'
                  href={item.href}
                  className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
};

export default MobileNavItem;
