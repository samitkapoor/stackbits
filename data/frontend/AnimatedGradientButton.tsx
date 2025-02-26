import { Document } from '../main';
import AnimatedGradientButton from '@/components/ui/animated-gradient-button';

export const animatedGradientButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <AnimatedGradientButton className="text-lg md:text-xl font-medium !px-5 sm:!px-10 py-4 rounded-lg">
      Gradient
    </AnimatedGradientButton>
  </div>
);

export const animatedGradientButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Animated Gradient Button',
    order: 1
  },
  content: {
    sections: [
      {
        heading: '🌈 Animated Gradient Button',
        content:
          "Upgrade your call-to-action buttons with the Animated Gradient Button, a stylish React component featuring seamless, looping color transitions. Designed for modern UIs, this button cycles through vibrant gradient combinations, making elements like 'Submit,' 'Get Started,' and 'Sign Up' more interactive and visually engaging. With smooth hover effects and fluid animations, it enhances user experience while maintaining high performance.",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: animatedGradientButtonPreview
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
        description:
          'Create a file animated-gradient-button.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type AnimatedGradientButtonProps = HTMLMotionProps<'button'> & {
  children?: React.ReactNode;
  className?: string;
};

const AnimatedGradientButton = ({ children, className, ...props }: AnimatedGradientButtonProps) => {
  return (
    <motion.button
      {...props}
      initial={{ scale: 1, boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)' }}
      whileHover={{
        scale: 1.08,
        boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.6)'
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        background: [
          'linear-gradient(135deg, #ff6b6b, #ff8e53, #ffcc00)',
          'linear-gradient(135deg, #42a5f5, #478ed1, #7b1fa2)',
          'linear-gradient(135deg, #00c9a7, #2ecc71, #ffeb3b)',
          'linear-gradient(135deg, #ff4081, #ff80ab, #f48fb1)',
          'linear-gradient(135deg, #8e44ad, #c0392b, #e74c3c)',
          'linear-gradient(135deg, #ffcc00, #ff5733, #ff1744)',
          'linear-gradient(135deg, #009688, #26c6da, #00e5ff)',
          'linear-gradient(135deg, #e91e63, #9c27b0, #673ab7)',
          'linear-gradient(135deg, #f57c00, #ffca28, #ffeb3b)',
          'linear-gradient(135deg, #00bcd4, #03a9f4, #1de9b6)'
        ],
        transition: { duration: 15, repeat: Infinity, repeatType: 'mirror' }
      }}
      className={\`relative overflow-hidden rounded-lg border-none px-6 py-3 text-lg font-semibold text-white tracking-wide shadow-md transition-all duration-300 hover:bg-opacity-90 \${className}\`}
    >
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: [
            '0px 0px 10px rgba(255, 255, 255, 0.3)',
            '0px 0px 20px rgba(255, 255, 255, 0.6)',
            '0px 0px 10px rgba(255, 255, 255, 0.3)'
          ],
          transition: { duration: 2, repeat: Infinity, repeatType: 'mirror' }
        }}
      />
      <motion.span
        className="absolute inset-0"
        animate={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 20%, transparent 80%)',
          opacity: [0.5, 1, 0.5],
          transition: { duration: 2, repeat: Infinity, repeatType: 'mirror' }
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedGradientButton;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<AnimatedGradientButton className="rounded-md text-lg">
  Let's go!
</AnimatedGradientButton>`
      }
    ]
  }
};
