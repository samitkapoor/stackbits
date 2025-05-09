'use client';

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
                className={`z-10 relative px-2 py-1 transition-all ${
                  isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
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
