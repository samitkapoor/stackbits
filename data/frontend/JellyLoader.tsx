import JellyLoader from '@/components/components/jelly-loader';
import { Document } from '../main';
import { installDependenciesCode } from '@/constants/code';

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
          'A loading animation with circles that move and scale like jelly. Perfect for showing that something is loading on your website.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-wrap items-center gap-10 justify-center">
              <JellyLoader />
            </div>
          </div>
        )
      },
      {
        heading: 'Original Designer',
        sectionType: 'credits',
        designer: [{ name: 'Lovish Saini', link: 'https://x.com/lovishotherdays' }]
      },
      installDependenciesCode({ framerMotion: true }),
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
