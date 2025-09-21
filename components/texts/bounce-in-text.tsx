'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

const BounceInText = ({
  text,
  className,
  letterClassName,
  repeat = false
}: {
  text: string;
  className?: string;
  letterClassName?: string;
  repeat?: boolean;
}) => {
  return (
    <div className={cn('flex flex-wrap items-center overflow-hidden justify-center', className)}>
      {text.split('').map((char, index) => {
        if (char === ' ')
          return (
            <span key={`bounce-in-text-${text}-${index}`} className="w-4">
              {' '}
            </span>
          );

        return (
          <motion.span
            initial={{ filter: 'blur(4px)', opacity: 0, scale: 0.5, transform: 'translateY(100%)' }}
            whileInView={{ filter: 'blur(0px)', opacity: 1, scale: 1, transform: 'translateY(0%)' }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              type: 'spring',
              bounce: 0.5,
              delay: index * 0.03,
              ...(repeat && {
                repeat: Infinity,
                repeatDelay: 0.03 * text.split('').length + 1,
                repeatType: 'loop'
              })
            }}
            key={`bounce-in-text-${text}-${index}`}
            className={cn('inline-block', letterClassName)}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default BounceInText;
