'use client';

import { CodeXml, Command, Component, File, Frame, House, Spade, Text } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    {
      name: 'Home',
      href: '/',
      icon: (
        <House className="h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px]" />
      )
    },
    {
      name: 'Texts',
      href: '/docs/texts',
      icon: (
        <Text className="h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px]" />
      )
    },
    {
      name: 'Backgrounds',
      href: '/docs/backgrounds',
      icon: (
        <Frame className="h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px]" />
      )
    },
    {
      name: 'Buttons',
      href: '/docs/buttons',
      icon: (
        <Command className="h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px]" />
      )
    },
    {
      name: 'Cards',
      href: '/docs/cards',
      icon: (
        <Spade className="h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px]" />
      )
    },
    {
      name: 'Components',
      href: '/docs/components',
      icon: (
        <Component className="h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px]" />
      )
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: (
        <File className="h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px]" />
      )
    }
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center justify-between mx-2 sm:mx-4 md:mx-6 lg:mx-8 px-2 sm:px-3 md:px-4 my-2 sm:my-3 md:my-4 lg:my-5 h-[40px] sm:h-[50px] md:h-[60px] rounded-md border-[1px] sm:border-[2px] border-white/20 sticky top-2 sm:top-3 md:top-4 lg:top-5 z-[200] bg-black">
        <div className="overflow-hidden h-full">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 h-full justify-center ml-1 sm:ml-2 text-xs sm:text-sm md:text-base"
          >
            <CodeXml className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            Stackbits
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center px-2 py-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center text-white">
          {links.map((link) => {
            const extraClass =
              pathname === link.href ? 'text-yellow-400 text-black' : 'hover:text-yellow-400';

            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-1 sm:px-2 md:px-3 py-2 sm:py-3 flex items-center gap-1 text-xs sm:text-sm transition-all ${extraClass}`}
              >
                {link.icon}
                <p className="hidden lg:block">{link.name}</p>
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[51] bg-black/95 pt-16">
          <div className="flex flex-col items-center text-white">
            {links.map((link) => {
              const extraClass =
                pathname === link.href ? 'text-yellow-400 text-black' : 'hover:text-yellow-400';

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 flex items-center gap-2 text-sm transition-all ${extraClass}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <p>{link.name}</p>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
