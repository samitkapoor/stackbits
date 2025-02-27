'use client';

import { CodeXml, Command, Component, File, Frame, House, Spade, Text } from 'lucide-react';
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
    <div className="flex items-center justify-between ml-2 sm:ml-[100px] h-[60px] rounded-md border-[1px] border-yellow-500/40 fixed w-[calc(100%-20px)] sm:w-[calc(100%-200px)] top-5 z-50 bg-black/50 overflow-hidden">
      <div className="w-full h-full absolute inset-0 backdrop-blur-lg z-[-1]"></div>
      <div className="overflow-hidden h-[56px]">
        <Link href="/" className="flex items-center gap-2 h-full justify-center ml-4 sm:ml-10">
          <CodeXml />
          Stackbits
        </Link>
      </div>
      <div className="flex items-center text-white pr-3 sm:pr-0">
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
