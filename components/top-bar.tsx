'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const TopBar = () => {
  const links = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Documentation',
      href: '/docs'
    },
    {
      name: 'About',
      href: '/about'
    }
  ];

  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-between px-40 ">
      <div className="py-3">
        <Image src="/logo1.png" alt="logo" height={110} width={110} />
      </div>
      <div className="flex items-center text-white">
        {links.map((link, index) => {
          const extraClass =
            pathname === link.href
              ? 'border-yellow-400 bg-yellow-400 text-black'
              : 'border-neutral-900 hover:bg-yellow-700 hover:border-yellow-700';

          return (
            <a
              key={link.name}
              href={link.href}
              className={`px-8 py-3 border-[1px] transition-all ${extraClass}`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
