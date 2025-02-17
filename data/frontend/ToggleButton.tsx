import { Moon, Rocket, Sun } from 'lucide-react';
import { Document } from '../main';
import ToggleButton from '@/components/ui/toggle-button';

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
          'A Toggle Button is an interactive UI component that allows users to switch between 2+ states, such as on/off or enabled/disabled.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
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
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file toggle-button.tsx in your components folder and paste this code',
        code: `'use client';

import { motion, useAnimationControls } from 'framer-motion';
import React, { ButtonHTMLAttributes, useState } from 'react';

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
          height: \`\${height}%\`
        }}
        className={\`flex flex-col w-full\`}
      >
        {options.map((option, i) => {
          return (
            <button
              type="button"
              key={option.value}
              onClick={() => onClick(i)}
              className={\`h-full w-full flex items-center justify-center rounded-full outline-none border-none\`}
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
