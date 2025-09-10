'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const HiddenText = ({
  text,
  symbol = '*',
  delaySpeed = 0.025,
  className = ''
}: {
  text: string;
  symbol?: string;
  delaySpeed?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [displayValue] = useState(text);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
    }
  }, [firstTime]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ul
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCopy}
      className={cn(
        'group flex gap-1 overflow-hidden items-center p-0 m-0 cursor-pointer',
        className
      )}
    >
      {displayValue.split(' ').map((word, i) => {
        return (
          <div key={'word-' + i} className="flex items-center">
            {word.split('').map((char, j) => {
              const delay =
                (displayValue.split(' ').slice(0, i).join('').length + i + j) * delaySpeed;

              return (
                <AnimatePresence key={'char-' + j} mode="popLayout">
                  {isHovered ? (
                    <motion.li
                      key="char"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 700,
                        damping: 30,
                        delay: delay
                      }}
                    >
                      {char}
                    </motion.li>
                  ) : (
                    <motion.li
                      key="symbol"
                      initial={{ y: firstTime ? 0 : -10, opacity: firstTime ? 1 : 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 700,
                        damping: 30,
                        delay: delay
                      }}
                    >
                      {symbol}
                    </motion.li>
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        );
      })}
    </ul>
  );
};

export default HiddenText;
