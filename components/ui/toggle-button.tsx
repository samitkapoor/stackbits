'use client';

import { motion, useAnimationControls } from 'framer-motion';
import React from 'react';

type ToggleButtonProps = {
  options: Array<{
    icon: React.ReactNode;
    value: string;
  }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const ToggleButton = ({ options, defaultValue, onChange, ...props }: ToggleButtonProps) => {
  const controls = useAnimationControls();

  const onClick = (i: number) => {
    const j = (i + 1) % options.length;

    if (onChange) onChange(options[j].value);

    controls.start({ y: -60 * j });
  };

  const height = options.length * 100;

  return (
    <div
      className="rounded-full border-[2px] border-neutral-600 hover:border-neutral-200 transition-all h-[64px] w-[64px] flex items-start justify-start overflow-hidden relative hover:bg-white/10"
      {...props}
    >
      <motion.div
        initial={{
          y: options.findIndex((option) => option.value === defaultValue) * -60
        }}
        animate={controls}
        style={{
          height: `${height}%`
        }}
        className={`flex flex-col w-full`}
      >
        {options.map((option, i) => {
          return (
            <button
              type="button"
              key={option.value}
              onClick={() => onClick(i)}
              className={`h-full w-full flex items-center justify-center rounded-full outline-none border-none`}
            >
              {option.icon}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ToggleButton;
