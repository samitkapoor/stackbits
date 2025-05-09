import { Document } from '../main';
import MagnetTabsDemo from '@/components/magnet-tabs-demo';

export const magnetTabsPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-10 gap-5">
    <MagnetTabsDemo isPreview />
  </div>
);

export const magnetTabs: Document = {
  sideBar: {
    group: 'Components',
    name: 'Magnet Tabs',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Magnet Tabs',
        content:
          'MagnetTabs is a stylish tab navigation component for switching between sections in a user interface. It’s ideal for dashboards, settings pages, admin panels, or product views—anywhere content needs to be organized into tabs for better usability.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
            <MagnetTabsDemo />
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
        description: 'Create a file magnet-tabs.tsx in your components folder and paste this code',
        code: `'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MagnetTabsProps {
  slug: string;
  options: string[];
  onSelect: (option: string) => void;
  activeTab: string;
}

const MagnetTabs = ({ slug, options, onSelect, activeTab }: MagnetTabsProps) => {
  const [hovered, setHovered] = React.useState<string | undefined>(undefined);

  return (
    <div className="flex items-start justify-start">
      <ul className="flex border-[1px] border-black/10 border-b-0">
        {options.map((option) => {
          const isActive = activeTab === option;
          return (
            <li
              onMouseEnter={() => setHovered(option)}
              onMouseLeave={() => setHovered(undefined)}
              key={slug + option}
              onClick={() => onSelect(option)}
              className="relative cursor-pointer shrink-0"
            >
              <p
                className={\`z-10 relative px-2 py-1 transition-all \${
                  isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }\`}
              >
                {option}
              </p>

              {isActive && (
                <motion.div
                  layout
                  layoutId={slug + 'magnet'}
                  transition={{ duration: 0.3, ease: 'backOut' }}
                  className="w-full h-1 absolute bottom-full left-0 bg-red-500 rounded-sm"
                />
              )}

              {(hovered === option || (hovered === undefined && isActive)) && (
                <motion.div
                  layout
                  layoutId={slug + 'tab-bar-highlight'}
                  transition={{ duration: 0.3, ease: 'backOut' }}
                  className="w-full h-full absolute bottom-0 left-0 bg-white/10 rounded-sm"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MagnetTabs;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `import React, { useState } from 'react';
import MagnetTabs from './ui/magnet-tabs';

const MagnetTabsDemo = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <MagnetTabs
      slug="magnet-tabs"
      options={[
        'Tab 1',
        'Tab 2',
        'Tab 3',
        'Tab 4',
        'Tab 5',
        'Tab 6',
        'Tab 7',
        'Tab 8',
        'Tab 9',
        'Tab 10'
      ]}
      onSelect={(option) => setActiveTab(option)}
      activeTab={activeTab}
    />
  );
};

export default MagnetTabsDemo;
`
      }
    ]
  }
};
