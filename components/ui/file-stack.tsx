'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FileStackItem = {
  title: string;
  image: string;
  description: string;
  link?: string; // Optional link for clickable items
};

interface FileStackProps {
  items: FileStackItem[];
  spacing?: number; // Customizable spacing between items
}

const FileStack = ({ items, spacing = 10 }: FileStackProps) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});

  // Subtle floating animation
  const floatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  // Calculate consistent spacing value for each card
  const getCardSpacing = (index: number) => {
    if (index === 0) return 0;
    return `-${spacing}rem`;
  };

  return (
    <div className="h-full w-full relative group grid grid-cols-2">
      <div className="overflow-y-auto h-full max-h-[500px]">
        <div
          style={{ perspective: '1000px' }}
          className="flex flex-col h-full w-full items-center overflow-y-auto relative pt-[20%]"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
              initial={{
                rotateX: -50,
                marginTop: getCardSpacing(i)
              }}
              animate={!isHovered ? floatingAnimation : undefined}
              whileHover={{
                rotateX: 0,
                marginBottom: '7rem',
                scale: 1.02,
                boxShadow:
                  '0 0 30px 5px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.1)',
                transition: { duration: 0.3 }
              }}
              className={`
              flex relative rounded-md flex-col items-center 
              max-w-[500px] justify-center bg-neutral-800 p-2
              ${item.link ? 'cursor-pointer' : ''}
              transition-shadow duration-300
              hover:shadow-xl hover:shadow-neutral-900/20
            `}
              onClick={() => item.link && window.open(item.link, '_blank')}
            >
              {/* FileStack Edge Detail */}
              <div className="h-4 w-20 bg-neutral-800 rounded-ss-md rounded-se-md absolute -top-2" />

              {/* Loading State */}
              {isLoading[item.image] && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-800/50">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white" />
                </div>
              )}

              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={400}
                  width={400}
                  className="object-cover h-full max-w-[350px] transition-all duration-300"
                  onLoadingComplete={() =>
                    setIsLoading((prev) => ({ ...prev, [item.image]: false }))
                  }
                  onLoadStart={() => setIsLoading((prev) => ({ ...prev, [item.image]: true }))}
                  priority={i < 2}
                />
              </div>

              {/* Hover Indicator */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-full relative flex items-center justify-center w-full bg-gradient-to-b from-[#000000da] pointer-events-none to-transparent rounded-lg z-10">
        <AnimatePresence mode="popLayout">
          {isHovered !== null && (
            <motion.div
              key={isHovered + 'text'}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center mt-2 p-4"
            >
              <h2 className="text-center font-bold text-2xl mb-2">{items[isHovered].title}</h2>
              <p className="text-center text-neutral-300 max-w-[500px] line-clamp-2">
                {items[isHovered].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FileStack;
