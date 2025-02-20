'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { categories, getSideBarTabs } from '@/data/main';
import Image from 'next/image';
import Link from 'next/link';
import RainbowText from './ui/rainbow-text';

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  const tabs = getSideBarTabs();

  const pathname = usePathname();

  return (
    <div
      className={
        `${
          isOpen
            ? `left-[20px] md:left-[50px] overflow-y-auto lg:overflow-y-hidden pb-10`
            : `-left-[350px]`
        } lg:left-[50px] ` +
        `absolute bg-black h-full top-[20px] flex flex-col gap-5 w-[350px] z-40 pb-40`
      }
    >
      <Link href="/">
        <Image
          src="/stackbits-logo.png"
          alt="logo"
          height={110}
          width={110}
          className="w-[50%] object-contain"
        />
      </Link>
      {tabs.map((group) => {
        return (
          <div key={group.title} className="flex flex-col items-start gap-2">
            {categories.includes(group.title.toLowerCase()) ? (
              <a
                href={`/docs/${group.title.toLowerCase()}`}
                className={
                  (pathname?.split('docs/')[1] === group.title.toLowerCase()
                    ? 'text-yellow-400'
                    : 'hover:text-yellow-400 transition-all') + ' font-semibold'
                }
              >
                {group.title}
              </a>
            ) : (
              <p className="font-semibold">{group.title}</p>
            )}

            <div className="flex flex-col ml-1">
              {group.children.map((child, j) => {
                return (
                  <div key={j} className="flex items-center gap-1">
                    <a
                      href={child.href}
                      className={
                        pathname === child.href
                          ? 'text-yellow-400'
                          : 'hover:text-yellow-400 transition-all'
                      }
                    >
                      {child.name}
                    </a>
                    {child.isNew && (
                      <RainbowText className="text-xs" duration={1.5}>
                        New
                      </RainbowText>
                    )}
                  </div>
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
