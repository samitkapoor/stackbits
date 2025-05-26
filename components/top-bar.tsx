'use client';

import { CodeXml, Component } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import AnimatedGradientButton from './ui/animated-gradient-button';
import GlassButton from './ui/glass-button';

const TopBar = () => {
  const links = [
    {
      name: 'Components',
      href: '/docs/components',
      icon: (
        <Component className="h-[12px] sm:h-[14px] md:h-[16px] lg:h-[18px] w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px]" />
      )
    }
  ];

  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8 h-[40px] sm:h-[50px] md:h-[70px] rounded-md fixed z-[200] bg-gradient-to-b from-black to-transparent">
      <div className="overflow-hidden h-full">
        <Link
          href="/"
          className="flex items-center gap-1 sm:gap-2 h-full justify-center ml-1 sm:ml-2 text-xs sm:text-sm md:text-base"
        >
          <CodeXml className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          Stackbits
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="flex items-center text-white gap-4">
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              <GlassButton
                wrapperClassName={`px-1 sm:px-2 md:px-3 py-1 sm:py-2 !rounded-md`}
                className={`flex items-center gap-1 text-xs sm:text-sm transition-all`}
              >
                {link.icon}
                <p className="">{link.name}</p>
              </GlassButton>
            </Link>
          );
        })}
        <Link href="/prompt">
          <AnimatedGradientButton className="!px-4 !py-1 md:!py-2 text-sm">
            Request
          </AnimatedGradientButton>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
