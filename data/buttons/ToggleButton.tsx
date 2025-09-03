import { Document } from '../main';
import ToggleButton from '@/components/ui/toggle-button';
import { cnCode } from '@/constants/code';
import { Sun, Moon, Rocket } from 'lucide-react';

export const toggleButtonPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <ToggleButton
      options={[
        {
          label: <Sun size={18} />,
          value: 'Sun'
        },
        {
          label: <Moon size={18} />,
          value: 'Moon'
        },
        {
          label: <Rocket size={18} />,
          value: 'Rocket'
        }
      ]}
      defaultValue="Sun"
    />
  </div>
);

export const toggleButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Toggle Button',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Toggle Button',
        content:
          'A button that cycles through different options when clicked. Each click moves to the next option in the list, with smooth animations between states.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <ToggleButton
            options={[
              {
                label: <Sun size={18} />,
                value: 'Sun'
              },
              {
                label: <Moon size={18} />,
                value: 'Moon'
              },
              {
                label: <Rocket size={18} />,
                value: 'Rocket'
              }
            ]}
            defaultValue="Sun"
          />
        )
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      cnCode,
      {
        heading: 'Toggle Button',
        sectionType: 'component',
        description:
          'Create a file toggle-button.tsx in your components folder and paste this code',
        code: `'use client';

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
        'relative border-2 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 flex items-center justify-center h-[45px] w-[45px] rounded-full overflow-hidden',
        className
      )}
      {...props}
    >
      <div className="relative overflow-hidden h-full w-full flex items-center justify-center">
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
                  damping: 30
                }}
              >
                {option.label}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </button>
  );
};

export default ToggleButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ToggleButton
  options={[
    {
      label: <Sun size={18} />,
      value: 'Sun'
    },
    {
      label: <Moon size={18} />,
      value: 'Moon'
    },
    {
      label: <Rocket size={18} />,
      value: 'Rocket'
    }
  ]}
  defaultValue="Sun"
/>`
      }
    ]
  }
};
