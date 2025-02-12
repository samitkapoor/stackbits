'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { getSideBarTabs } from '@/data/main';
import Image from 'next/image';
import Link from 'next/link';

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  const tabs = getSideBarTabs();

  const pathname = usePathname();

  return (
    <div
      className={
        `${isOpen ? `left-[50px] overflow-y-auto` : `-left-[300px]`} lg:left-[50px] ` +
        `absolute bg-black h-full top-[50px] flex flex-col gap-5 w-[350px] z-40`
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
            <p className="font-semibold">{group.title}</p>
            <div className="flex flex-col ml-1">
              {group.children.map((child, j) => {
                return (
                  <div className="flex items-center gap-1">
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
                    {child.isNew && (
                      <motion.p
                        initial={{ color: '#148bfa' }}
                        animate={{
                          color: ['#148bfa', '#83fa14', '#14fab9', '#148bfa'],
                          transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' }
                        }}
                        className="text-xs"
                      >
                        New
                      </motion.p>
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
