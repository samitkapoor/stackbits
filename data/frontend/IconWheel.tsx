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

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type IconWheelProps = {
  icons: string[];
  size?: number;
  iconSize?: number;
};

const DEFAULT_ICON_SIZE = 64;

const randomValues = () => Array.from({ length: 15 }, () => Math.random() * 80 - 40);

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full shadow-[0_0_8px_rgba(173,216,230,0.8)] opacity-70"
    animate={{
      x: randomValues(),
      y: randomValues(),
      opacity: [0.6, 0.8, 0.6],
      scale: [0.8, 0.9, 0.8],
      backgroundColor: [
        'rgba(255, 215, 0, 0.9)', // Gold
        'rgba(173, 216, 230, 0.9)', // Soft Cyan
        'rgba(147, 112, 219, 0.9)', // Purple
        'rgba(255, 215, 0, 0.9)' // Gold
      ]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'linear',
      delay
    }}
  />
);

const IconWheel = ({ icons, size = 400, iconSize = DEFAULT_ICON_SIZE }: IconWheelProps) => {
  const [radius, setRadius] = useState(size / 2 - 32);
  const angleStep = (2 * Math.PI) / icons.length;

  const updateRadius = useCallback(() => {
    setRadius(window.innerWidth < size ? 100 : size / 2 - 32);
  }, [size]);

  useEffect(() => {
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [updateRadius]);

  const squares = [350, 250, 150];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: size, width: size }}
    >
      {squares.map((square, i) => {
        return (
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{
              rotate: i % 2 === 0 ? 360 : -360,
              borderColor: [
                'rgba(255, 215, 0, 0.9)', // Gold
                'rgba(173, 216, 230, 0.9)', // Soft Cyan
                'rgba(147, 112, 219, 0.9)', // Purple
                'rgba(255, 215, 0, 0.9)' // Gold
              ]
            }}
            transition={{ duration: 5, ease: 'linear', repeat: Infinity, delay: i * 0.1 }}
            className="absolute border-8 border-double rounded-3xl"
            style={{ height: square, width: square, opacity: 0.2 + i * 0.2 }}
          ></motion.div>
        );
      })}

      {/* Center Particle Area */}
      <div className="relative h-[75px] w-[75px] flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-gradient-to-br from-white/10 to-white/30 backdrop-blur-lg">
        {Array.from({ length: 15 }, (_, index) => (
          <Particle key={index} delay={Math.random() * 2} />
        ))}
      </div>

      {icons.map((url, i) => {
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            whileHover={{ scale: 1.3, rotateY: 10 }}
            key={i}
            className="absolute"
            style={{
              left: \`calc(50% + \${x}px - \${iconSize / 2}px)\`,
              top: \`calc(50% + \${y}px - \${iconSize / 2}px)\`
            }}
            transition={{ duration: 0.1, ease: 'linear' }}
          >
            <Image
              src={url}
              height={iconSize}
              width={iconSize}
              alt="tech stack icon"
              className="filter brightness-125"
            />
          </motion.div>
        );
      })}
    </div>
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
