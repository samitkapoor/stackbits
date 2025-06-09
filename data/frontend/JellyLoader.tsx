import JellyLoader from '@/components/ui/jelly-loader';
import { Document } from '../main';

export const jellyLoaderPreview = (
  <div className="flex flex-wrap items-center gap-10 p-5 justify-center w-full h-full scale-75">
    <JellyLoader />
  </div>
);

export const jellyLoader: Document = {
  sideBar: {
    group: 'Components',
    name: 'Jelly Loader',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'Jelly Loader',
        content:
          'A smooth, animated loading component that creates a mesmerizing jelly-like effect with rotating and scaling circles. Built with Framer Motion, this customizable loader features a beautiful gradient transition from light pink to deep magenta, perfect for enhancing user experience during loading states in modern web applications.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Meet the Designer',
        sectionType: 'credits',
        description: 'All the design credits goes to',
        designer: [{ name: 'Lovish Saini', link: 'https://x.com/lovishotherdays' }]
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-[800px] w-full flex items-center justify-center">
            <div className="flex flex-wrap items-center gap-10 justify-center w-[600px]">
              <JellyLoader />
            </div>
          </div>
        )
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file jelly-loader.tsx in your components folder and paste this code',
        code: `'use client';

import React from 'react';
import { motion, Transition } from 'framer-motion';

type JellyLoaderProps = {
  numberOfCubes?: number;
};

const JellyLoader = ({ numberOfCubes = 8 }: JellyLoaderProps) => {
  const colors = [
    '#FFE4E1',
    '#FFB6C1',
    '#FF8A95',
    '#FF6B8A',
    '#E91E63',
    '#C2185B',
    '#AD1457',
    '#880E4F'
  ];

  const transition: Transition = {
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 0.5,
    ease: 'easeOut'
  };

  return (
    <div className="-translate-x-1/5 flex items-center justify-center">
      {Array.from({ length: numberOfCubes }).map((_, index) => {
        const x = index * 10;
        const y = -index * 10;

        return (
          <motion.span
            key={index}
            className="h-[70px] w-[100px] absolute rounded-full"
            style={{
              x,
              y,
              zIndex: numberOfCubes - index,
              backgroundColor: colors[index],
              opacity: 1 - index * 0.05
            }}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 0.75, 1], rotate: [0, 360] }}
            transition={{
              ...transition,
              delay: index * 0.05
            }}
          >
            {/* <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 360] }}
              transition={{
                ...transition,
                delay: index * 0.05
              }}
              style={{ backgroundColor: colors[index] }}
              className="h-[70px] w-[100px] shrink-0 absolute rounded-full"
            /> */}
          </motion.span>
        );
      })}
    </div>
  );
};

export default JellyLoader;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<JellyLoader />`
      }
    ]
  }
};
