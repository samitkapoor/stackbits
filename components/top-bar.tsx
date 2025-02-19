'use client';

import { File, House } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const TopBar = () => {
  const links = [
    {
      name: 'Home',
      href: '/',
      icon: <House className="h-[12px] sm:h-[18px] w-[12px] sm:w-[18px]" />
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: <File className="h-[12px] sm:h-[18px] w-[12px] sm:w-[18px]" />
    }
  ];

  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-between px-10 lg:px-40 h-[120px]">
      <div className="py-3">
        <Image
          src="/stackbits-logo.png"
          alt="logo"
          height={100}
          width={150}
          className="h-[65px] sm:h-[150px] w-[65px] sm:w-[150px] object-contain"
        />
      </div>
      <div className="flex items-center text-white">
        {links.map((link) => {
          const extraClass =
            pathname === link.href ? 'text-yellow-400 text-black' : 'hover:text-yellow-400';

          return (
            <a
              key={link.name}
              href={link.href}
              className={`px-1 sm:px-3 py-3 flex items-center gap-1 text-xs sm:text-sm transition-all ${extraClass}`}
            >
              {link.icon}
              <p>{link.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
