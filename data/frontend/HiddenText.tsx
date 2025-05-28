import { Document } from '../main';
import HiddenText from '@/components/ui/hidden-text';

export const hiddenTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <HiddenText text="Awesome" />
  </div>
);

export const hiddenText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Hidden Text',
    order: 3
  },
  content: {
    sections: [
      {
        heading: '👾 Hidden Text',
        content:
          'Discover the magic of our Hidden Text component! Perfect for adding an element of surprise to your content, this interactive feature reveals text on hover, making it ideal for secret messages, spoilers, or playful interactions. Enhance user engagement with a touch of mystery and fun!',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-4 items-center min-h-[500px] justify-center">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-bold">Hidden Text</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className="text-orange-600 font-bold">Q:</span> Top 5 secrets to go viral on
                  Twitter?
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-teal-600 font-bold">A:</span>{' '}
                  <HiddenText text="Number 3 will SHOCK you!" symbol=">" delaySpeed={0.015} />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className="text-red-400 font-bold">Q:</span> What's my password?
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-blue-400 font-bold">A:</span>{' '}
                  <HiddenText text="qwertyuiop" symbol="*" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className="text-red-400 font-bold">Q:</span> How do you comfort a JavaScript
                  bug?
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-blue-400 font-bold">A:</span>{' '}
                  <HiddenText text="You console it" symbol="?" />
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file hidden-text.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HiddenText = ({
  text,
  symbol = '*',
  delaySpeed = 0.025
}: {
  text: string;
  symbol?: string;
  delaySpeed?: number;
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
      className="group flex gap-1 overflow-hidden items-center p-0 m-0 cursor-pointer"
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
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<HiddenText text="Number 3 will SHOCK you!" symbol=">" delaySpeed={0.015} />`
      }
    ]
  }
};
