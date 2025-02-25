import { Document } from '../main';
import WaveNoiseBackground from '@/components/ui/wave-noise-background';

export const waveNoiseBackgroundPreview = (
  <div className="h-full w-full relative flex items-center justify-center">
    <WaveNoiseBackground
      speed={5}
      className="bg-gradient-to-tr from-neutral-500 to-green-500 rounded-xl flex items-center justify-center h-full w-full text-black font-extrabold text-xl"
    >
      Wave Noise Background
    </WaveNoiseBackground>
  </div>
);

export const waveNoiseBackground: Document = {
  sideBar: {
    group: 'Backgrounds',
    name: 'Wave Noise Background',
    order: 4
  },
  content: {
    sections: [
      {
        heading: '🌊 Wave Noise Background',
        content:
          "Ditch static backgrounds and bring your UI to life with WaveNoiseBackground, a sleek React component featuring a seamless, undulating SVG wave animation. Perfect for adding depth, movement, and elegance to hero sections, landing pages, and interactive backgrounds, this effect creates a calming yet dynamic atmosphere. Whether you're designing for a futuristic, minimal, or nature-inspired aesthetic, WaveNoiseBackground delivers a fluid, high-performance experience that feels effortlessly modern.",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <WaveNoiseBackground
              speed={7}
              className="bg-gradient-to-tr text-5xl font-extrabold text-black from-neutral-500 to-green-500 rounded-xl flex items-center justify-center h-full w-full"
            >
              Wave Noise Background
            </WaveNoiseBackground>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file wave-noise-background.tsx in your components folder and paste this code',
        code: `import React, { CSSProperties } from 'react';
import { motion } from 'framer-motion';

type WaveNoiseBackgroundProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  speed?: number;
};

const WaveNoiseBackground = ({
  children,
  className,
  style,
  speed = 10
}: WaveNoiseBackgroundProps) => {
  return (
    <div className={\`overflow-hidden relative h-full w-full\`}>
      <motion.div
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%232d2c2c' fill-opacity='0.04' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E\")"
        }}
        animate={{
          x: ['-50%', 0],
          transition: {
            repeat: Infinity,
            duration: speed,
            repeatType: 'loop',
            ease: 'linear'
          }
        }}
        className="h-[200%] w-[200%] absolute z-0 top-0 left-0"
      />
      <div style={style} className={\`\${className} z-10\`}>
        {children}
      </div>
    </div>
  );
};

export default WaveNoiseBackground;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<WaveNoiseBackground
    speed={7}
    className="bg-gradient-to-tr text-5xl font-extrabold text-black from-neutral-500 to-green-500 rounded-xl flex items-center justify-center h-full w-full"
>
    Wave Noise Background
</WaveNoiseBackground>`
      }
    ]
  }
};
