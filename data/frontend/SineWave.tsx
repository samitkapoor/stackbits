import { Document } from '../main';
import SineWave from '@/components/components/sine-wave';
import { images } from '../constants';
import { cnCode } from '@/constants/code';

export const sineWavePreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <SineWave
      items={[...images]}
      itemClassName="w-10 h-10 rounded-md"
      amplitude={70}
      frequency={4}
    />
  </div>
);

export const sineWave: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Sine Wave',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'Sine Wave',
        content:
          'An animated component that arranges items in a sine wave pattern with smooth spring animations. Perfect for creating dynamic, flowing layouts with customizable amplitude and frequency.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <SineWave items={[...images, ...images]} itemClassName="w-20 h-20" />
          </div>
        )
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file sine-wave.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SineWave = ({
  items,
  amplitude = 100,
  frequency = 5,
  shouldAnimate = true
}: {
  items: { image: string }[];
  amplitude?: number;
  frequency?: number;
  shouldAnimate?: boolean;
}) => {
  return (
    <div className="w-full h-96 flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center gap-4 relative">
        {items.map((item, index) => {
          const yd = Math.sin((index * Math.PI) / frequency) * amplitude;

          return (
            <motion.div
              key={\`sine-wave-\${index}\`}
              className="relative"
              initial={{
                y: shouldAnimate ? 0 : yd
              }}
              animate={{
                y: yd
              }}
              transition={{
                duration: 0.8,
                type: 'spring',
                bounce: 0.5,
                delay: index * 0.05
              }}
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={\`Item \${index + 1}\`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SineWave;
        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<SineWave items={images} />`
      }
    ]
  }
};
