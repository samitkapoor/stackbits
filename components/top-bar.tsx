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
    <div className="flex flex-col w-full fixed h-[40px] sm:h-[50px] md:h-[50px] z-[200]">
      <div className="fixed top-0 w-full flex items-start justify-center h-[60px] z-0 pointer-events-none">
        <motion.div
          animate={{
            background: [
              'linear-gradient(to right, transparent, #8A2BE2, #00CED1, #FF4500, transparent)',
              'linear-gradient(to right, transparent, #00CED1, #FF4500, #8A2BE2, transparent)',
              'linear-gradient(to right, transparent, #FF4500, #8A2BE2, #00CED1, transparent)',
              'linear-gradient(to right, transparent, #8A2BE2, #FF4500, #00CED1, transparent)',
              'linear-gradient(to right, transparent, #00CED1, #8A2BE2, #FF4500, transparent)',
              'linear-gradient(to right, transparent, #FF4500, #00CED1, #8A2BE2, transparent)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="w-full h-full absolute bottom-8 pointer-events-none left-0 z-0 blur-xl opacity-40"
        />
      </div>
      <div
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          maskImage: 'linear-gradient(to top, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to top, transparent, black)'
        }}
        className="fixed top-0 w-full flex items-start justify-center h-[40px] sm:h-[50px] md:h-[50px] z-0"
      ></div>

      <div className="flex items-center justify-between w-full px-3 pt-5 md:pt-0 h-full z-10">
        <div className="overflow-hidden h-full">
          <Link
            href="/"
            className="flex items-center gap-2 h-full justify-center ml-1 sm:ml-2 text-base"
          >
            <CodeXml className="w-5 h-5 md:w-6 md:h-6" />
            Stackbits
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="flex items-center text-white gap-2 pr-11 lg:pr-0 z-10">
          {links.map((link) => {
            return (
              <Link key={link.name} href={link.href}>
                <button className="rounded-md bg-black h-9 w-min px-2 flex items-center justify-center gap-1 text-sm">
                  {link.icon}
                  <p className="text-xs sm:text-sm">{link.name}</p>
                </button>
              </Link>
            );
          })}
          <Link href="https://github.com/samitkapoor/stackbits" target="_blank">
            <button className="rounded-md bg-black h-9 w-min px-2 flex items-center justify-center text-sm">
              Github
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
