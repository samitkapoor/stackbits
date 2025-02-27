'use client';

import { Command, Component, File, Frame, House, Spade, Square, Text } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
      name: 'Texts',
      href: '/docs/texts',
      icon: <Text className="h-[12px] sm:h-[18px] w-[12px] sm:w-[18px]" />
    },
    {
      name: 'Backgrounds',
      href: '/docs/backgrounds',
      icon: <Frame className="h-[12px] sm:h-[18px] w-[12px] sm:w-[18px]" />
    },
    {
      name: 'Buttons',
      href: '/docs/buttons',
      icon: <Command className="h-[12px] sm:h-[18px] w-[12px] sm:w-[18px]" />
    },
    {
      name: 'Cards',
      href: '/docs/cards',
      icon: <Spade className="h-[12px] sm:h-[18px] w-[12px] sm:w-[18px]" />
    },
    {
      name: 'Components',
      href: '/docs/components',
      icon: <Component className="h-[12px] sm:h-[18px] w-[12px] sm:w-[18px]" />
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: <File className="h-[12px] sm:h-[18px] w-[12px] sm:w-[18px]" />
    }
  ];

  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between mx-8 px-2 lg:mx-4 lg:px-4  my-5 h-[60px] rounded-md border-[2px] border-white/20 sticky top-5 z-50 bg-black">
      <div className="overflow-hidden h-[56px]">
        <Link href="/">
          <Image
            src="/stackbits-logo.png"
            alt="logo"
            height={100}
            width={150}
            className="h-[60px] w-[90px] sm:w-[115px] object-contain"
          />
        </Link>
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
              <p className="hidden lg:block">{link.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TopBar;
