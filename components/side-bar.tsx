'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { getSideBarTabs } from '@/data/main';
import Image from 'next/image';
import Link from 'next/link';

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  const tabs = getSideBarTabs();

  const pathname = usePathname();

  return (
    <div
      className={
        `${isOpen ? `left-[50px]` : `-left-[300px]`} lg:left-[50px] ` +
        `absolute bg-black top-[50px] h-full flex flex-col gap-5 overflow-y-auto w-[350px]`
      }
    >
      <Link href="/">
        <Image
          src="/stackbits-logo.png"
          alt="logo"
          height={110}
          width={110}
          className="h-auto w-[125px] object-contain"
        />
      </Link>
      {tabs.map((group) => {
        return (
          <div key={group.title} className="flex flex-col items-start gap-2">
            <p className="font-semibold">{group.title}</p>
            <div className="flex flex-col ml-1">
              {group.children.map((child, j) => {
                return (
                  <a
                    href={child.href}
                    key={j}
                    className={
                      pathname === child.href
                        ? 'text-yellow-400'
                        : 'hover:text-yellow-400 transition-all'
                    }
                  >
                    {child.name}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
