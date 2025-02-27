import FlipBadge from '@/components/ui/flip-badge';
import { Document } from '../main';

export const flipBadgePreview = (
  <div className="h-full w-full flex items-center justify-center">
    <FlipBadge
      frontContent={
        <p className="font-medium text-center text-black">
          "Should be an
          <br />
          easy fix"
        </p>
      }
      backContent={
        <p className="font-medium text-center text-white">
          *Spends
          <br />6 hours*
        </p>
      }
    />
  </div>
);

export const flipBadge: Document = {
  sideBar: {
    group: 'Components',
    name: 'Flip Badge',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Flip Badge',
        content:
          'Ever wanted a badge that stands out—literally? This component adds a dynamic flipping effect to your badges, making them feel interactive and eye-catching. Perfect for status indicators, achievement badges, or call-to-action elements. Fully customizable with different colors, and content on each side.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <FlipBadge
              frontContent={
                <p className="font-medium text-center text-black">
                  "Should be an
                  <br />
                  easy fix"
                </p>
              }
              backContent={
                <p className="font-medium text-center text-white">
                  *Spends
                  <br />6 hours*
                </p>
              }
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
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Styles',
        sectionType: 'styling',
        code: `@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(-180deg); 
  }
  100% {
    transform: rotateY(-360deg); 
  }
}

/* Apply animation to the entire container */
.flip {
  animation: flip 2.4s linear infinite;
  transform-style: preserve-3d;
  position: relative;
}

/* Ensure back side is rotated initially */
.flip-back {
  transform: rotateY(180deg);
}`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file flip-badge.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';

const FlipBadge = ({
  frontContent,
  backContent
}: {
  // * Remove these data types for javascript
  frontContent?: string | React.ReactNode;
  backContent?: string | React.ReactNode;
  // * ----
}) => {
  return (
    <motion.div
      initial={{ y: -5 }}
      animate={{
        y: 0,
        transition: { repeat: Infinity, duration: 0.8, repeatType: 'reverse' }
      }}
      className="relative h-[200px] w-[200px] rounded-full"
      style={{ perspective: '1000px' }}
    >
      <div className="flip h-full w-full rounded-full relative flex items-center justify-center">
        <motion.div
          animate={{
            boxShadow: [
              '0 -10px 10px rgba(255, 85, 0, 0.5), 0 -10px 20px rgba(255, 100, 0, 0.6), 0 -10px 30px rgba(255, 120, 0, 0.7)',
              '0 -10px 15px rgba(255, 100, 0, 0.6), 0 -10px 25px rgba(255, 120, 0, 0.7), 0 -10px 35px rgba(255, 150, 0, 0.8)',
              '0 -10px 12px rgba(255, 85, 0, 0.5), 0 -10px 22px rgba(255, 100, 0, 0.6), 0 -10px 32px rgba(255, 120, 0, 0.7)'
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full border border-orange-500"
        ></motion.div>

        {/* Front Side */}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center rounded-full"
          style={{
            backfaceVisibility: 'hidden',
            background: 'radial-gradient(circle at center, #ffebe6da, #adadadaa)'
          }}
        >
          {frontContent}
        </div>

        {/* Back Side*/}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-neutral-700 rounded-full flip-back"
          style={{
            backfaceVisibility: 'hidden',
            background: 'radial-gradient(circle at center, #2e2a2900, #ododod)'
          }}
        >
          {backContent}
        </div>
      </div>
    </motion.div>
  );
};

export default FlipBadge;

`,
        sentence:
          '💡 Customize the background colors to anything you like—make it as wild or as classy as you want!'
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FlipBadge
  frontContent={<p className="font-medium text-black">"Should be an easy fix"</p>}
  backContent={<p className="font-medium text-white">*Spends 6 hours*</p>}
/>`
      }
    ]
  }
};
