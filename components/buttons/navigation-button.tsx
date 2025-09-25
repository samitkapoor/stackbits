'use client';

import { ArrowUpRight, Eye } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  text: string;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
  icon?: React.ReactNode;
}

const NavigationButton = ({
  href,
  text = 'Open',
  icon = undefined,
  target = '_blank',
  className = ''
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const variants = {
    initial: (direction: number) => ({
      x: -16 * direction,
      scale: 0,
      filter: 'blur(3px)',
      opacity: 0
    }),
    animate: {
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      opacity: 1
    },
    exit: (direction: number) => ({
      x: -16 * direction,
      scale: 0,
      filter: 'blur(3px)',
      opacity: 0
    })
  };

  return (
    <div className="flex items-start">
      <Link href={href} target={target}>
        <button
          className={cn(
            'flex items-center gap-1 outline-none cursor-pointer hover:text-blue-400 font-medium py-1 px-1',
            className
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <MotionConfig transition={{ duration: 0.2, ease: 'easeOut' }}>
            <AnimatePresence mode="popLayout" initial={false}>
              {!hovered && (
                <motion.span
                  key={`eye-btn-${text}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  custom={1}
                  className="h-4 w-4 flex items-center justify-center"
                >
                  {icon ? icon : <Eye size={14} />}
                </motion.span>
              )}
              <motion.p
                layout
                className={cn(
                  'text-xs sm:text-sm whitespace-nowrap',
                  hovered && 'underline underline-offset-2'
                )}
              >
                {text}
              </motion.p>
              {hovered && (
                <motion.span
                  key={`arrow-btn-${text}`}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={variants}
                  custom={-1}
                  className="h-4 w-4 flex items-center justify-center"
                >
                  <ArrowUpRight strokeWidth={2.5} size={16} className="h-full w-full" />
                </motion.span>
              )}
            </AnimatePresence>
          </MotionConfig>
        </button>
      </Link>
    </div>
  );
};

export default NavigationButton;
