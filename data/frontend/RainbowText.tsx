import { Document } from '../main';
import RainbowText from '@/components/ui/rainbow-text';

export const rainbowText: Document = {
  sideBar: {
    group: 'Components',
    name: 'RainbowText',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'RainbowText',
        content:
          'RainbowText is a dynamic React component that brings text to life with smooth, animated gradients. Perfect for creating eye-catching headlines, call-to-actions, or any UI element that needs a bold and colorful touch.',
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
        sectionType: 'component',
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
