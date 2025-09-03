import { Document } from '../main';
import RainbowText from '@/components/ui/rainbow-text';

export const rainbowTextPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <RainbowText className="text-4xl">Rainbow Text</RainbowText>
  </div>
);

export const rainbowText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Rainbow Text',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'Rainbow Text',
        content:
          'Text that cycles through different colors like a rainbow. The colors smoothly transition from one to another, creating a colorful animated effect that repeats continuously.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <RainbowText className="text-4xl">Rainbow Text</RainbowText>
      },
      {
        heading: 'Rainbow Text',
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
    <motion.span
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
    </motion.span>
  );
};

export default RainbowText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<RainbowText className="text-4xl">Rainbow Text</RainbowText>`
      }
    ]
  }
};
