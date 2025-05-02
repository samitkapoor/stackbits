'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

interface SpotlightItemType {
  name: string;
  logo: string;
}

interface SpotlightGridProps {
  items: SpotlightItemType[];
}

const SpotlightGrid = ({ items }: SpotlightGridProps) => {
  // * Randomly select an item to highlight when component mounts
  const randomIndex = Math.floor(Math.random() * items.length);
  const [hoveredItem, setHoveredItem] = useState<string>(items[randomIndex].name);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full sm:gap-0 gap-2 text-white/85">
        {items
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => {
            return (
              <div
                key={item.name}
                className="relative flex items-center justify-start group cursor-default"
              >
                <div
                  onMouseEnter={() => setHoveredItem(item.name)}
                  className="flex p-1 sm:p-2 items-center justify-center gap-1 z-10 relative"
                >
                  <div className="relative h-[12px] w-[12px] md:h-[16px] md:w-[16px]">
                    <Image src={item.logo || ''} alt={item.name} fill className="object-contain" />
                  </div>
                  <p className="truncate">{item.name}</p>
                  {hoveredItem === item.name && (
                    <motion.div
                      layout
                      layoutId="item-highlight"
                      style={{
                        boxShadow: '0px 0px 100px 10px #ffffff4c'
                      }}
                      className="absolute h-full z-0 rounded-md w-[calc(100%+30px)] pointer-events-none"
                    ></motion.div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SpotlightGrid;
