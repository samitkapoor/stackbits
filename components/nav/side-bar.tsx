'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { categories, getSideBarTabs } from '@/data/main';
import RainbowText from '../texts/rainbow-text';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const SideBar = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const tabs = getSideBarTabs();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState<string | false>(false);
  let timeoutId: NodeJS.Timeout | null = null;

  const pathname = usePathname();

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 z-[899]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        ref={sidebarRef}
        style={{
          position: 'absolute',
          zIndex: 900
        }}
        initial={{
          left: '-250px'
        }}
        animate={{
          left: isOpen ? 0 : '-250px'
        }}
        transition={{
          duration: 0.15,
          ease: 'easeInOut'
        }}
        className="h-full flex flex-col z-40 w-[250px] relative"
      >
        <div
          className="w-full h-full bg-black absolute top-0 left-0"
          style={{
            maskImage: 'linear-gradient(to right, black 30%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black 30%, transparent)'
          }}
        ></div>
        <div className="w-full flex flex-col gap-8 h-full items-start justify-start overflow-y-auto scrollbar-hide pl-7 pt-3 z-40">
          <button
            onClick={() => setIsOpen(false)}
            className="z-[1001] rounded-md bg-black p-2 flex items-center justify-center"
          >
            <X size={16} />
          </button>
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
                          className="flex items-center gap-1 relative py-0.5 group"
                        >
                          {isActive && (
                            <motion.div
                              layout
                              layoutId="side-bar-highlight"
                              transition={{ duration: 0.15, ease: 'easeInOut' }}
                              className="w-[3px] bg-yellow-400 absolute top-[0px] h-full z-10 rounded-full"
                            />
                          )}
                          <div className="z-0 absolute inset-0" />
                          <p
                            className={cn(
                              'z-20 relative pl-3 text-sm',
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
      </motion.div>
    </>
  );
};

export default SideBar;
