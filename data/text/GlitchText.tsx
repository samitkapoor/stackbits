import { installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import GlitchText from '@/components/texts/glitch-text';

export const glitchTextPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <GlitchText className="text-4xl">Glitch Text</GlitchText>
  </div>
);

export const glitchText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Glitch Text',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Glitch Text',
        content:
          'Text that looks broken and glitchy, like a computer screen with errors. Perfect for creating a digital, futuristic feel.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: <GlitchText className="text-4xl">Glitch Text</GlitchText>
      },
      installDependenciesCode({ framerMotion: true }),
      {
        heading: 'Glitch Text',
        sectionType: 'component',
        description: 'Create a file glitch-text.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      animate={{
        x: [0, 0, 0, 2, 0, 2, 2],
        y: [2, -2, -2, 0, 0, 2, 0],
        filter: [
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(2px)',
          'blur(4px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(4px)',
          'blur(0px)'
        ],
        textShadow: [
          '3px 3px 0 #ff0d00, -3px -3px 0 #00ffff',
          '-3px -3px 0 #ff00ff, 3px 3px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px 0px 0 #ff0d00, -3px -3px 0 #00ffff'
        ],
        transition: {
          repeat: Infinity,
          duration: 0.5
        }
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

export default GlitchText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GlitchText className="text-4xl">Glitch Text</GlitchText>`
      }
    ]
  }
};
