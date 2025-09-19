import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import BlurText from '@/components/texts/blur-text';
import BounceInText from '@/components/texts/bounce-in-text';

export const bounceInTextPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <BounceInText text="Bounce In Text" className="text-4xl" repeat />
  </div>
);

export const bounceInText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Bounce In Text',
    order: 6
  },
  content: {
    sections: [
      {
        heading: 'Bounce In Text',
        content: 'Text that starts at the bottom and bounces up to the top.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: <BounceInText text="Bounce In Text" className="text-4xl" />
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Bounce In Text',
        sectionType: 'component',
        description:
          'Create a file bounce-in-text.tsx in your components folder and paste this code',
        code: `'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

const BounceInText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={cn('flex flex-wrap items-center overflow-hidden justify-center', className)}>
      {text.split('').map((char, index) => {
        if (char === ' ')
          return (
            <span key={\`bounce-in-text-\${text}-\${index}\`} className="w-1">
              {' '}
            </span>
          );

        return (
          <motion.span
            initial={{ filter: 'blur(4px)', transform: 'translateY(100%)' }}
            animate={{ filter: 'blur(0px)', transform: 'translateY(0%)' }}
            transition={{
              duration: 0.9,
              type: 'spring',
              bounce: 0.5,
              delay: index * 0.05
            }}
            key={\`bounce-in-text-\${text}-\${index}\`}
            className="inline-block"
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default BounceInText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<BounceInText text="Bounce In Text" className="text-4xl" />`
      }
    ]
  }
};
