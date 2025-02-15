import SkewedText from '@/components/ui/skewed-text';
import { Document } from '../main';
import RainbowText from '@/components/ui/rainbow-text';

export const skewedText: Document = {
  sideBar: {
    group: 'Components',
    name: 'SkewedText',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'SkewedText',
        content:
          'Step into the digital future with SkewedText, a dynamic and animated text effect that distorts and tilts your words as if they’re breaking free from a static world. Inspired by cyberpunk aesthetics, sci-fi interfaces, and glitchy digital landscapes, this effect brings a sense of movement, depth, and perspective to your typography. Perfect for hacking-inspired designs, neon-lit interfaces, or just making text look cool, this effect distorts, shifts, and skews with interactivity—reacting dynamically to your cursor movements. Make your UI feel responsive, immersive, and ahead of its time.',
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
        sectionType: 'component',
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

    // ? Making sure the values of y remain between 30 and -30
    const posY: number = Math.max(e.clientX - rect.left, 0);
    let y = Math.min(posY / rect.width, 1) * 60;
    if (y < 30) y = +(30 - y);
    else if (y >= 30) y = -(y - 30);

    // ? Making sure the values of x remain between 10 and -10
    const posX: number = Math.max(e.clientY - rect.top, 0);
    let x = Math.min(posX / rect.height, 1) * 20;
    if (x < 10) x = +(10 - x);
    else if (x >= 10) x = -(x - 10);

    if (posY >= 0) {
      pRef.current.style.transform = \`perspective(300px) rotateX(\${x + 10}deg) rotateY(\${
        y + 3
      }deg)\`;
    }
  };

  return (
    <div
      onMouseMove={onMouseMove}
      style={{
        transform: \`perspective(300px) rotateX(20deg) rotateY(3deg)\`
      }}
      className="w-full flex items-center justify-center"
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
        className={\`font-bold opacity-0 text-center w-[75%] italic \${className}\`}
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
        code: `<SkewedText className="text-green-500 text-xl">
  Reality is nothing more than code. A program running endlessly, repeating itself,
  glitching when something doesn’t fit. But what if you could rewrite the code?
  What if you could break the loop and escape the system?
</SkewedText>`
      }
    ]
  }
};
