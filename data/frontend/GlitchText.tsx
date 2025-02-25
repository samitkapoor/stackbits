import GlitchText from '@/components/ui/glitch-text';
import { Document } from '../main';

export const glitchTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <GlitchText className="text-[50px] font-bold">Awesome</GlitchText>
  </div>
);

export const glitchText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Glitch Text',
    order: 2
  },
  content: {
    sections: [
      {
        heading: '👾 Glitch Text',
        content:
          'Meet GlitchText—a dynamic, animated text effect that brings chaotic, digital distortion to your UI. Perfect for cyberpunk themes, futuristic designs, gaming websites, and high-tech branding, this Framer Motion-powered React component adds a real-time glitch effect that makes your text look broken, hacked, or straight out of a sci-fi universe. ⚡👾',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-4xl">
              Stackbits is <GlitchText className="font-semibold">Awesome</GlitchText>
            </p>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Styling',
        sectionType: 'styling',
        code: `.glitch {
  position: relative;
  display: inline-block;
  animation: glitch 0.7s infinite;
}

@keyframes glitch {
  0% {
    text-shadow: 3px 3px 0 #ff0d00, -3px -3px 0 #00ffff;
  }
  25% {
    text-shadow: -3px -3px 0 #ff00ff, 3px 3px 0 #00ffff;
  }
  50% {
    text-shadow: 3px -3px 0 #0400ff, -3px 3px 0 #00ffff;
  }
  75% {
    text-shadow: -3px 3px 0 #00ff00, 3px -3px 0 #00ffff;
  }
  100% {
    text-shadow: 3px 3px 0 #ff0d00, -3px -3px 0 #00ffff;
  }
}`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file custom-scrollbar.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      animate={{
        scale: [1, 1, 1.3, 1, 1, 1, 1],
        x: [0, 0, 0, 2, 0, 2, 2],
        y: [2, -2, -2, 0, 0, 2, 0],
        filter: [
          'blur(0px)',
          'blur(2px)',
          'blur(4px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)'
        ],
        transition: {
          repeat: Infinity,
          duration: 0.3,
          repeatDelay: 1
        }
      }}
      className={\`glitch \${className}\`}
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
        code: `<p className="text-4xl">
    Stackbits is <GlitchText className="font-semibold">Awesome</GlitchText>
</p>`
      }
    ]
  }
};
