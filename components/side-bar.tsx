'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { categories, getSideBarTabs } from '@/data/main';
import RainbowText from './ui/rainbow-text';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  const tabs = getSideBarTabs();

  const [hovered, setHovered] = useState<string | false>(false);

  const pathname = usePathname();

  return (
    <div
      className={
        `${
          isOpen
            ? `absolute lg:static left-[20px] md:left-[50px] pb-10`
            : `absolute -left-[350px] lg:static`
        } ` + `backdrop-blur-md h-full flex flex-col w-[350px] z-40 `
      }
    >
      <div className="h-full overflow-y-auto scrollbar-hide flex flex-col gap-2 w-full z-40 pt-28">
        {tabs.map((group) => {
          return (
            <div key={group.title} className="flex gap-2 flex-col items-start">
              {categories.includes(group.title.toLowerCase()) ? (
                <a
                  href={`/docs/${group.title.toLowerCase()}`}
                  className={
                    (pathname?.split('docs/')[1] === group.title.toLowerCase()
                      ? 'text-yellow-400'
                      : 'hover:text-yellow-400 transition-all') + ' font-medium text-sm'
                  }
                >
                  {group.title}
                </a>
              ) : (
                <p className="font-medium text-sm">{group.title}</p>
              )}

              <div className="flex flex-col w-full">
                <AnimatePresence>
                  {group.children.map((child, j) => {
                    const isActive =
                      (pathname === child.href && hovered === false) || hovered === child.href;

                    return (
                      <Link
                        href={child.href}
                        onMouseEnter={() => setHovered(child.href)}
                        onMouseLeave={() => setHovered(false)}
                        key={j}
                        className="flex items-center gap-1 relative py-1 "
                      >
                        {isActive && (
                          <motion.div
                            layout
                            layoutId="side-bar-highlight"
                            transition={{ duration: 0.2 }}
                            className="border-l-[2px] border-yellow-500 bg-gradient-to-r from-yellow-500/10 rounded-md z-0 absolute top-[-5px] w-full h-[calc(100%+10px)]"
                          />
                        )}
                        <div className="border-l-[2px] border-white/10 z-0 absolute inset-0" />
                        <p
                          className={
                            (isActive
                              ? 'text-yellow-400'
                              : 'hover:text-yellow-400 transition-all') + ' z-20 relative pl-4'
                          }
                        >
                          {child.name}
                        </p>
                        {child.isNew && (
                          <RainbowText className="text-xs" duration={1.5}>
                            New
                          </RainbowText>
                        )}
                      </Link>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
        <div className="p-36"></div>
      </div>
    </div>
  );
};

export default SideBar;
