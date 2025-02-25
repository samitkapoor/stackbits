import SkewedText from '@/components/ui/skewed-text';
import { Document } from '../main';
import RainbowText from '@/components/ui/rainbow-text';

export const skewedTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <SkewedText className="text-[50px] font-bold">Hover</SkewedText>
  </div>
);

export const skewedText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Skewed Text',
    order: 4
  },
  content: {
    sections: [
      {
        heading: '😵 Skewed Text',
        content:
          'Step into the digital future with SkewedText, a bold and animated text distortion effect that makes your words look like they’re breaking free from a static world. 🔥 Inspired by cyberpunk aesthetics, sci-fi interfaces, and glitchy digital landscapes, this React component skews, shifts, and tilts text dynamically—reacting to cursor movements for an interactive, immersive feel. Perfect for hacking-inspired designs, neon-lit UIs, futuristic typography, and gaming websites, it adds movement, depth, and perspective to your UI. 🕶️💻',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <SkewedText className="text-green-500 text-xl">
              Reality is nothing more than code. A program running endlessly, repeating itself,
              glitching when something doesn’t fit. But what if you could rewrite the code?{' '}
              <RainbowText>What if you could break the loop and escape the system?</RainbowText>
            </SkewedText>
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
        description: 'Create a file skewed-text.tsx in your components folder and paste this code',
        code: `import { motion } from 'framer-motion';
import React, { useRef } from 'react';

const SkewedText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const pRef = useRef<HTMLParagraphElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!pRef.current) return;

    const rect = pRef.current.getBoundingClientRect();

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;

    const xd = (mx - width / 2) / 8;
    const yd = (height / 2 - my) / 8;

    pRef.current.style.transform = \`perspective(1000px) rotateY(\${xd + 15}deg) rotateX(\${yd}deg)\`;
  };

  return (
    <div
      onMouseMove={onMouseMove}
      style={{
        transform: \`perspective(300px) rotateX(20deg) rotateY(3deg)\`
      }}
      className="w-full flex items-center justify-center p-10"
    >
      <motion.p
        ref={pRef}
        style={{
          transform: 'perspective(300px) rotateX(10deg) rotateY(3deg)',
          textShadow: '0 0 10px #00ffa39a, 0 0 30px #00ffa39a'
        }}
        initial={{
          y: 300,
          rotateX: 0,
          opacity: 0
        }}
        animate={{
          y: 0,
          rotateX: 20,
          opacity: 1,
          transition: { ease: 'backOut', duration: 1.2 }
        }}
        className={\`font-bold transition-all duration-75 opacity-0 text-center w-[75%] italic \${className}\`}
      >
        {children}
      </motion.p>
    </div>
  );
};

export default SkewedText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<SkewedText className="text-green-500 sm:text-lg md:text-xl">
  Reality is nothing more than code. A program running endlessly, repeating itself,
  glitching when something doesn’t fit. But what if you could rewrite the code?
  What if you could break the loop and escape the system?
</SkewedText>`
      }
    ]
  }
};
