import { Document } from '../main';
import RainbowText from '@/components/ui/rainbow-text';

export const rainbowTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <RainbowText className="text-[50px] font-bold">Fresh Drop</RainbowText>
  </div>
);

export const rainbowText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Rainbow Text',
    order: 3
  },
  content: {
    sections: [
      {
        heading: '🌈 Rainbow Text',
        content:
          'Why settle for boring text when you can make it shine with color? ✨ RainbowText is a React component that adds smooth, animated gradient effects to your text, making every word pop with vibrant, eye-catching colors. Perfect for headlines, call-to-actions, banners, landing pages, and playful UI elements, this Framer Motion-powered animation brings a fun and dynamic touch to your design. 🌟',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
            <RainbowText className="text-2xl sm:text-4xl md:text-6xl text-center font-semibold drop-shadow-lg">
              Fresh Drop
            </RainbowText>
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
        description: 'Create a file rainbow-text.tsx in your components folder and paste this code',
        code: `import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type RainbowTextProps = {
  colors?: string[];
  className?: string;
  duration?: number;
  children?: ReactNode;
};

const RainbowText = ({
  colors = [
    '#FF4D4D',
    '#FF944D',
    '#FFC14D',
    '#E8FF4D',
    '#6DFF4D',
    '#4DFFA1',
    '#4DFFFF',
    '#4DAAFF',
    '#4D6DFF',
    '#6D4DFF',
    '#A14DFF',
    '#D14DFF',
    '#FF4DAA',
    '#FF4D6D',
    '#FF4D4D',
    '#FF944D'
  ],
  className = '',
  duration = 2,
  children
}: RainbowTextProps) => {
  const linearGradients = [];
  for (let i = 0; i < colors.length - 1; i++) {
    linearGradients.push(\`linear-gradient(90deg, \${colors[i]} 0%, \${colors[i + 1]} 100%)\`);
  }

  return (
    <motion.p
      initial={{ backgroundImage: linearGradients[0] }}
      animate={{ backgroundImage: linearGradients }}
      transition={{
        duration: duration,
        ease: 'linear',
        repeat: Infinity
      }}
      className={className}
      style={{
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {children}
    </motion.p>
  );
};

export default RainbowText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<RainbowText className="text-6xl font-semibold drop-shadow-lg">Fresh Drop</RainbowText>`
      }
    ]
  }
};
