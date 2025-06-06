'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

type ToggleButtonProps = {
  options: Array<{
    label: React.ReactNode;
    value: string;
  }>;
  defaultValue?: string;
  className?: string;
  onClick?: (value: string) => void;
};

const ToggleButton = ({
  options,
  defaultValue,
  onClick,
  className,
  ...props
}: ToggleButtonProps) => {
  const [activeValue, setActiveValue] = useState(defaultValue || options[0].value);

  const handleClick = (value: string) => {
    const currentIndex = options.findIndex((option) => option.value === value);
    const nextIndex = (currentIndex + 1) % options.length;
    const newValue = options[nextIndex].value;
    setActiveValue(newValue);

    if (onClick) onClick(newValue);
  };

  return (
    <button
      onClick={() => handleClick(activeValue)}
      className={cn(
        'relative border flex items-center justify-center h-[45px] w-[45px] rounded-full overflow-hidden',
        className
      )}
      {...props}
    >
      <motion.div
        whileHover={{
          x: [0, 2, -2, 2, -2, 2, -2, 0]
        }}
        transition={{
          duration: 0.1
        }}
        className="relative overflow-hidden h-full w-full flex items-center justify-center"
      >
        <AnimatePresence mode="popLayout">
          {options.map((option) => {
            if (option.value !== activeValue) return null;

            return (
              <motion.div
                key={option.value}
                className="absolute flex items-center justify-center"
                initial={{
                  y: 40
                }}
                animate={{
                  y: 0
                }}
                exit={{
                  y: -40
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
              >
                {option.label}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ToggleButton;
