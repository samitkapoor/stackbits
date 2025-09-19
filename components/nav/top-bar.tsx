'use client';

import { Joystick, Menu } from 'lucide-react';
import {
  IconBackground,
  IconBrandGithub,
  IconBrandX,
  IconComponents,
  IconLetterT
} from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Target } from '../ui/eagle-vision';

const TopBar = ({
  sideBarIsOpen,
  setSideBarIsOpen
}: {
  sideBarIsOpen?: boolean;
  setSideBarIsOpen?: (isOpen: boolean) => void;
}) => {
  const links = [
    {
      name: 'Backgrounds',
      href: '/docs/backgrounds',
      icon: (
        <IconBackground className="h-[12px] sm:h-[14px] md:h-[16px] w-[12px] sm:w-[14px] md:w-[16px]" />
      )
    },
    {
      name: 'Buttons',
      href: '/docs/buttons',
      icon: (
        <Joystick className="h-[12px] sm:h-[14px] md:h-[16px] w-[12px] sm:w-[14px] md:w-[16px]" />
      )
    },
    {
      name: 'Components',
      href: '/docs/components',
      icon: (
        <IconComponents className="h-[12px] sm:h-[14px] md:h-[16px] w-[12px] sm:w-[14px] md:w-[16px]" />
      )
    },
    {
      name: 'Texts',
      href: '/docs/texts',
      icon: (
        <IconLetterT className="h-[12px] sm:h-[14px] md:h-[16px] w-[12px] sm:w-[14px] md:w-[16px]" />
      )
    }
  ];

  const toggleSideBar = () => {
    if (setSideBarIsOpen) {
      setSideBarIsOpen(!sideBarIsOpen);
    }
  };

  return (
    <div className="flex flex-col w-full left-1/2 -translate-x-1/2 fixed h-[50px] px-2 z-20 bg-black/50 backdrop-blur-sm">
      {/* <div className="fixed top-0 w-full flex items-start justify-center h-[60px] z-0 pointer-events-none">
        <div
          style={{
            background:
              'linear-gradient(to right, transparent, #8A2BE2, #00CED1, #FF4500, transparent)'
          }}
          className="w-full h-full absolute bottom-8 pointer-events-none left-0 z-0 blur-xl opacity-40"
        />
      </div> */}
      {/* <div
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          maskImage: 'linear-gradient(to top, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to top, transparent, black)'
        }}
        className="fixed top-0 w-full flex items-start justify-center h-[40px] sm:h-[50px] md:h-[50px] z-0"
      ></div> */}

      <div className="flex items-center justify-between w-full px-5 pt-5 md:pt-0 h-full z-10">
        <motion.div layout className="flex items-center gap-4">
          <AnimatePresence mode="popLayout">
            {sideBarIsOpen !== undefined && (
              <motion.button
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1
                }}
                exit={{
                  scale: 0
                }}
                onClick={toggleSideBar}
                className="z-[1001] rounded-md bg-black p-2 flex items-center justify-center"
              >
                {!sideBarIsOpen && <Menu size={16} />}
              </motion.button>
            )}
          </AnimatePresence>
          <motion.div
            layout
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className="overflow-hidden h-full w-full flex items-center gap-4"
          >
            <Link href="/" className="flex items-center gap-2 h-full justify-center text-base">
              {/* <CodeXml className="w-5 h-5" /> */}
              <span className="rounded-full h-4 w-4 bg-gradient-to-b from-yellow-400 to-purple-500 flex items-center justify-center overflow-hidden"></span>
              Stackbits
            </Link>
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center text-white gap-2 z-10">
              {links.map((link) => {
                return (
                  <Link key={link.name} href={link.href}>
                    <button className="rounded-md backdrop-blur-sm hover:bg-white/90 hover:text-black 0 h-7 w-min px-2 flex items-center justify-center gap-1.5 text-sm">
                      {link.icon}
                      <p className="text-xs sm:text-sm">{link.name}</p>
                    </button>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
        <div className="flex items-center gap-2">
          <Target>
            <Link href="https://x.com/samitkapoorr" target="_blank">
              <button className="rounded-md backdrop-blur-sm hover:bg-white/90 hover:text-black h-7 w-min px-2 flex items-center justify-center text-sm gap-1.5">
                <IconBrandX className="w-4 h-4" />
                <p className="whitespace-nowrap hidden sm:block">Get in touch</p>
              </button>
            </Link>
          </Target>
          <Link href="https://github.com/samitkapoor/stackbits" target="_blank">
            <button className="rounded-md backdrop-blur-sm hover:bg-white/90 hover:text-black h-7 w-min px-2 flex items-center justify-center text-sm gap-1.5">
              <IconBrandGithub className="w-4 h-4" />
              <p className="whitespace-nowrap hidden sm:block">Github</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
