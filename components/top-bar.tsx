'use client';

import { CodeXml, Component } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ShineButton from './ui/shine-button';
import MovingBorderButton from './ui/moving-border-button';
import { motion } from 'framer-motion';

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

  return (
    <div className="flex flex-col w-full fixed h-[40px] sm:h-[50px] md:h-[70px] z-[200]">
      <div className="fixed top-0 w-full flex items-start justify-center h-[50px] z-10">
        <motion.div
          animate={{
            background: [
              'linear-gradient(to right, transparent, #9370DB, #4B0082, #FF6347, transparent)',
              'linear-gradient(to right, transparent, #4B0082, #FF6347, #9370DB, transparent)',
              'linear-gradient(to right, transparent, #FF6347, #9370DB, #4B0082, transparent)',
              'linear-gradient(to right, transparent, #9370DB, #FF6347, #4B0082, transparent)',
              'linear-gradient(to right, transparent, #4B0082, #9370DB, #FF6347, transparent)',
              'linear-gradient(to right, transparent, #FF6347, #4B0082, #9370DB, transparent)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="w-full h-full absolute bottom-8 pointer-events-none left-0 z-0 blur-3xl"
        />
      </div>

      <div className="z-10 w-full flex gap-2 items-center justify-center border-b border-black text-xs bg-black">
        Stackbits is going through a refresh! Some features may not be available. Follow @stackbitss
        on twitter for updates.
      </div>
      <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8 h-full bg-gradient-to-b from-black to-transparent">
        <div className="overflow-hidden h-full">
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 h-full justify-center ml-1 sm:ml-2 text-sm md:text-base"
          >
            <CodeXml className="w-5 h-5 md:w-6 md:h-6" />
            Stackbits
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="flex items-center text-white gap-2 ">
          {links.map((link) => {
            return (
              <Link key={link.name} href={link.href}>
                <MovingBorderButton
                  className={`flex items-center gap-1 text-xs sm:text-sm transition-all`}
                >
                  {link.icon}
                  <p className="text-xs sm:text-sm">{link.name}</p>
                </MovingBorderButton>
              </Link>
            );
          })}
          <Link href="https://github.com/samitkapoor/stackbits">
            <ShineButton className="!px-2 md:!px-3 !py-2 !rounded-md text-xs sm:text-sm">
              Github
            </ShineButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
