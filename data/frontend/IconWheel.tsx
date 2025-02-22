import IconWheel from '@/components/ui/icon-wheel';
import { Document } from '../main';

export const iconWheelPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-10 gap-5">
    <div className="scale-50">
      <IconWheel
        icons={[
          '/css.png',
          '/framermotion.png',
          '/javascript.png',
          '/nextjs.png',
          '/nodejs.png',
          '/reactjs.png',
          '/tailwindcss.png',
          '/typescript.png'
        ]}
      />
    </div>
  </div>
);

export const iconWheel: Document = {
  sideBar: {
    group: 'Components',
    name: 'Icon Wheel',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Icon Wheel',
        content:
          'The IconWheel brings your favorite icons to life, spinning endlessly in a mesmerizing circular motion. Whether showcasing tech stacks, skills, or fun graphics, this component keeps things dynamic and engaging. Plus, with smooth hover effects and responsive resizing, it’s the perfect way to add some interactive flair to your UI. Let your icons orbit in style! ✨🌀',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
            <IconWheel
              icons={[
                '/css.png',
                '/framermotion.png',
                '/javascript.png',
                '/nextjs.png',
                '/nodejs.png',
                '/reactjs.png',
                '/tailwindcss.png',
                '/typescript.png'
              ]}
            />
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
        description: 'Create a file icon-wheel.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type IconWheelProps = {
  icons: Array<string>;
};

const IconWheel = ({ icons }: IconWheelProps) => {
  const [radius, setRadius] = useState(200); // Adjust based on the container size
  const centerX = 32; // Center of the wheel (half of the container width)
  const centerY = 32; // Center of the wheel (half of the container height)
  const angleStep = (2 * Math.PI) / icons.length; // Angle between each item

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) setRadius(100);
      else setRadius(200);
    });
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5
        }
      }}
      viewport={{
        once: true
      }}
      animate={{
        rotateZ: 360,
        transition: { duration: 10, ease: 'linear', repeat: Infinity }
      }}
      className="relative h-[250px] sm:h-[500px] w-[250px] sm:w-[500px] flex items-center justify-center my-10"
    >
      {icons.map((url, i) => {
        const angle = i * angleStep; // Angle for the current icon
        const x = centerX + radius * Math.cos(angle) - 32; // Subtract half of img width (64/2)
        const y = centerY + radius * Math.sin(angle) - 32; // Subtract half of img height (64/2)

        return (
          <motion.div
            animate={{
              rotateZ: -360,
              transition: { duration: 10, ease: 'linear', repeat: Infinity }
            }}
            whileHover={{
              scale: 1.2
            }}
            key={\`iconwheel\${i}\`}
            initial={{ x, y }}
            className="absolute rounded-full"
          >
            <Image src={url} height={64} width={64} alt="iconwheel" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default IconWheel;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<IconWheel
    icons={[
    '/css.png',
    '/framermotion.png',
    '/javascript.png',
    '/nextjs.png',
    '/nodejs.png',
    '/reactjs.png',
    '/tailwindcss.png',
    '/typescript.png'
    ]}
/>`
      }
    ]
  }
};
