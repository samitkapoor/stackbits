'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconBrandX, IconMail } from '@tabler/icons-react';
import { MessageCircle, X } from 'lucide-react';
import NavigationButton from '../buttons/navigation-button';
import { cn } from '@/lib/utils';

export interface NavigationLink {
  href: string;
  text: string;
  icon?: React.ReactNode;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
}

export interface InteractiveCTAProps {
  heading?: string;
  subheading?: string;
  avatar?: React.ReactNode;
  navigationLinks?: NavigationLink[];
  initialOpen?: boolean;
  className?: string;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  openWidth?: string;
  closeWidth?: string;
  openHeight?: string;
  closeHeight?: string;
}

const DEFAULT_NAVIGATION_LINKS: NavigationLink[] = [
  {
    href: 'https://twitter.com/samitkapoorr',
    text: 'DM me on X',
    className: 'px-2 py-1 text-white hover:text-blue-500',
    icon: <IconBrandX size={14} />
  },
  {
    href: 'mailto:samitkapoor77@gmail.com',
    text: 'Send me an email',
    className: 'px-2 py-1 text-white hover:text-red-500',
    icon: <IconMail size={14} />
  }
];

const InteractiveCTA = ({
  heading = 'Want something custom made?',
  subheading = "Let's talk",
  avatar,
  navigationLinks = DEFAULT_NAVIGATION_LINKS,
  initialOpen = true,
  className,
  openIcon,
  closeIcon,
  openWidth = '310px',
  closeWidth = '50px',
  openHeight = '155px',
  closeHeight = '50px'
}: InteractiveCTAProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  return (
    <div className={cn('fixed z-50 bottom-4 right-4 overflow-hidden', className)}>
      <AnimatePresence mode="popLayout">
        <motion.div
          animate={{
            width: isOpen ? openWidth : closeWidth,
            height: isOpen ? openHeight : closeHeight,
            borderColor: !isOpen ? '#3F3F46' : '#888888'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 27
          }}
          className="flex-col border-[2px] rounded-xl border-white/5 bg-zinc-900 flex items-center justify-center relative"
        >
          {!isOpen && (
            <motion.button
              key="open-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center hover:bg-white/5 rounded-xl justify-center absolute -bottom-0.5 -right-0.5"
              style={{ width: closeWidth, height: closeHeight }}
            >
              {openIcon || <MessageCircle size={20} />}
            </motion.button>
          )}
          {isOpen && (
            <div className="flex flex-col p-4 h-full w-full">
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.1,
                    ease: 'linear',
                    delay: 0.1
                  }}
                  key="image-container"
                  className="rounded-full h-[42px] w-[42px] bg-gradient-to-b from-yellow-400 to-purple-500 flex items-center justify-center overflow-hidden"
                >
                  {avatar}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.1,
                    ease: 'linear',
                    delay: 0.1
                  }}
                  key="text-container"
                  className="text-sm truncate text-white/70 font-medium"
                >
                  {heading}
                  <br />
                  <span className="text-white">{subheading}</span>
                </motion.p>
              </div>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{
                  duration: 0.1,
                  ease: 'linear',
                  delay: 0.1,
                  staggerChildren: 0.1
                }}
                key="navigation-buttons"
                className="flex flex-col mt-4"
              >
                {navigationLinks.map((link, index) => (
                  <NavigationButton
                    key={`${link.href}-${index}`}
                    href={link.href}
                    text={link.text}
                    className={link.className}
                    icon={link.icon}
                    target={link.target}
                  />
                ))}
              </motion.div>
              <div className="absolute bottom-4 right-4">
                <motion.button
                  key="close-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center hover:bg-white/10 place-self-end h-[32px] w-[32px] rounded-md"
                >
                  {closeIcon || <X size={20} />}
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InteractiveCTA;
