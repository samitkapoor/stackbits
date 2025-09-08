'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { categories, getSideBarTabs } from '@/data/main';
import RainbowText from '../ui/rainbow-text';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const SideBar = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const tabs = getSideBarTabs();

  const [hovered, setHovered] = useState<string | false>(false);
  let timeoutId: NodeJS.Timeout | null = null;

  const pathname = usePathname();

  return (
    <div
      className={
        `${isOpen ? `absolute left-[0px] w-full z-[900]` : `absolute -left-[350px]`} ` +
        `h-full flex flex-col z-40 transition-all duration-200`
      }
    >
      <div
        style={
          {
            // maskImage: 'linear-gradient(to left, transparent 60%, black)',
            // WebkitMaskImage: 'linear-gradient(to left, transparent 60%, black)'
          }
        }
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 black/15"
      />
      <div
        className="w-full max-w-[350px] h-full bg-black absolute top-0 left-0"
        style={{
          maskImage: 'linear-gradient(to right, black 30%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, black 30%, transparent)'
        }}
      ></div>
      <div className="w-full max-w-[350px] flex flex-col gap-8 h-full items-start justify-start overflow-y-auto scrollbar-hide md:pl-4 pt-10 md:pt-20 z-40">
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
                        onMouseEnter={() => {
                          if (timeoutId) {
                            clearTimeout(timeoutId);
                            timeoutId = null;
                          }
                          setHovered(child.href);
                        }}
                        onMouseLeave={() => {
                          if (timeoutId) {
                            clearTimeout(timeoutId);
                            timeoutId = null;
                          }
                          timeoutId = setTimeout(() => setHovered(false), 100);
                        }}
                        key={j}
                        className="flex items-center gap-1 relative py-1 group"
                      >
                        {isActive && (
                          <motion.div
                            layout
                            layoutId="side-bar-highlight"
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                            className="w-[3px] bg-yellow-400 absolute top-[0px] h-full z-10 rounded-full"
                          />
                        )}
                        <div className="border-l-[3px] border-zinc-800 z-0 absolute inset-0" />
                        <p
                          className={cn(
                            'z-20 relative pl-4 text-sm',
                            pathname === child.href
                              ? 'text-yellow-400 font-medium'
                              : 'text-zinc-300 group-hover:text-white'
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
