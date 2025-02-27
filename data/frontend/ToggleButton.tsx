import { Moon, Rocket, Sun } from 'lucide-react';
import { Document } from '../main';
import ToggleButton from '@/components/ui/toggle-button';

export const toggleButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <ToggleButton
      //   onChange={(value) => console.log(value)}
      options={[
        {
          icon: <Sun />,
          value: 'Sun'
        },
        {
          icon: <Moon />,
          value: 'Moon'
        },
        {
          icon: <Rocket />,
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
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Toggle Button',
        content:
          "A Toggle Button is a sleek, interactive UI component that lets users seamlessly switch between multiple states—like light/dark mode, on/off, or enabled/disabled—with a single click. Perfect for modern web apps, it enhances usability, efficiency, and user experience, making interactions feel smooth and intuitive. Whether you're toggling themes, preferences, or features, this dynamic button keeps your interface clean, functional, and engaging! 🚀",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: toggleButtonPreview
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file toggle-button.tsx in your components folder and paste this code',
        code: `'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

type ToggleButtonProps = {
  options: Array<{
    icon: React.ReactNode;
    value: string;
  }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const ToggleButton = ({ options, defaultValue, onChange, ...props }: ToggleButtonProps) => {
  const [currentIndex, setCurrentIndex] = useState(
    options.findIndex((option) => option.value === defaultValue) || 0
  );

  const onClick = () => {
    const nextIndex = (currentIndex + 1) % options.length;
    setCurrentIndex(nextIndex);
    if (onChange) onChange(options[nextIndex].value);
  };

  return (
    <motion.div
      className="relative h-[64px] w-[64px] overflow-hidden rounded-full border-2 border-neutral-600 hover:border-neutral-200 transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
      {...props}
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1, ease: 'backOut' }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-label="Toggle button"
    >
      <motion.div
        animate={{ y: -currentIndex * 64 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="flex flex-col pb-1"
        style={{ height: \`\${options.length * 64}px\` }}
      >
        {options.map((option) => (
          <div key={option.value} className="h-[64px] w-full flex items-center justify-center">
            {option.icon}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ToggleButton;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ToggleButton
  // onChange={(value) => console.log(value)}
  options={[
    {
      icon: <Sun />,
      value: 'Sun'
    },
    {
      icon: <Moon />,
      value: 'Moon'
    },
    {
      icon: <Rocket />,
      value: 'Rocket'
    }
  ]}
  defaultValue="Sun"
/>`
      }
    ]
  }
};
