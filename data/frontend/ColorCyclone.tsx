import { Document } from '../main';
import ColorCyclone from '@/components/ui/color-cyclone';

export const colorCyclonePreview = (
  <div className="h-full w-full flex items-center justify-center">
    <ColorCyclone>
      <p className="text-black font-extrabold text-xl">Color Cyclone Background</p>
    </ColorCyclone>
  </div>
);

export const colorCyclone: Document = {
  sideBar: {
    group: 'Components',
    name: 'Color Cyclone',
    order: 1
  },
  content: {
    sections: [
      {
        heading: '🌀 Color Cyclone Background',
        content:
          'A mesmerizing swirl of dynamic hues that continuously shift and blend, creating a dreamy, atmospheric fog effect. Ideal for enhancing hero sections, landing pages, interactive backgrounds, or adding a subtle yet captivating ambiance to modern web designs.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <ColorCyclone>
              <p className="text-black font-extrabold text-5xl">Color Cyclone Background</p>
            </ColorCyclone>
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
          'Create a file color-cyclone.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';

const ColorCyclone = ({ children }: { children?: React.ReactNode }) => {
  const fogs = [
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '-40%',
      gotoY: '-40%',
      background: 'radial-gradient(circle, rgba(255,182,193,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '40%',
      gotoY: '40%',
      background: 'radial-gradient(circle, rgba(173,216,230,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '-40%',
      gotoY: '40%',
      background: 'radial-gradient(circle, rgba(144,238,144,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '40%',
      gotoY: '-40%',
      background: 'radial-gradient(circle, rgba(255,228,181,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '0%',
      gotoY: '40%',
      background: 'radial-gradient(circle, rgba(221,160,221,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '0%',
      gotoY: '-40%',
      background: 'radial-gradient(circle, rgba(240,230,140,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '40%',
      gotoY: '0%',
      background: 'radial-gradient(circle, rgba(255,218,185,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '-40%',
      gotoY: '0%',
      background: 'radial-gradient(circle, rgba(175,238,238,1), transparent 45%)'
    }
  ];

  return (
    <div
      className="h-full w-full relative flex items-center justify-center overflow-hidden bg-[#ffffff71]"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className="z-10">{children}</div>

      <motion.div
        initial={{
          rotateZ: 0
        }}
        animate={{
          rotateZ: 360
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className="h-full w-full absolute "
      >
        {fogs.map((fog, index) => (
          <motion.div
            key={index}
            initial={{
              transform: \`translateZ(-10px) translateX(\${fog.fromX}) translateY(\${fog.fromY})\`
            }}
            animate={{
              transform: \`translateZ(-10px) translateX(\${fog.gotoX}) translateY(\${fog.gotoY})\`,
              transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{
              transformStyle: 'preserve-3d',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: fog.background
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ColorCyclone;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ColorCyclone>
  <p className="text-3xl font-bold text-black">Color Cyclone</p>
</ColorCyclone>`
      }
    ]
  }
};
