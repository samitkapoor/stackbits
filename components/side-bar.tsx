'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { categories, getSideBarTabs } from '@/data/main';
import RainbowText from './ui/rainbow-text';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const SideBar = ({ isOpen }: { isOpen: boolean }) => {
  const tabs = getSideBarTabs();

  const [hovered, setHovered] = useState<string | false>(false);

  const pathname = usePathname();

  return (
    <div
      className={
        `${
          isOpen
            ? `absolute lg:static left-[0px] w-full z-[900]`
            : `absolute -left-[350px] lg:static`
        } ` + `backdrop-blur-md h-full flex flex-col w-[350px] z-40 px-3`
      }
    >
      <div className="h-full overflow-y-auto scrollbar-hide flex flex-col gap-8 w-full z-40 pt-10 md:pt-20">
        {tabs.map((group) => {
          return (
            <div key={group.title} className="flex gap-2 flex-col items-start">
              {categories.includes(group.title.toLowerCase()) ? (
                <a
                  href={`/docs/${group.title.toLowerCase()}`}
                  className={cn(
                    'text-xs text-white',
                    pathname?.split('docs/')[1] === group.title.toLowerCase()
                      ? 'text-yellow-400'
                      : 'hover:text-yellow-400 transition-all'
                  )}
                >
                  {group.title}
                </a>
              ) : (
                <p className="text-xs text-white">{group.title}</p>
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
                        className="flex items-center gap-1 relative py-1 group"
                      >
                        {isActive && (
                          <motion.div
                            layout
                            layoutId="side-bar-highlight"
                            transition={{ duration: 0.2 }}
                            className="w-px bg-yellow-500 z-0 absolute top-[0px] h-full"
                          />
                        )}
                        <div className="border-l-[2px] border-white/10 z-0 absolute inset-0" />
                        <p
                          className={cn(
                            'z-20 relative pl-4 text-sm',
                            pathname === child.href
                              ? 'text-white font-medium'
                              : 'text-white/70 group-hover:text-white transition-all'
                          )}
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
