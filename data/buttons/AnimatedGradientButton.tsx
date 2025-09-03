import { cnCode } from '@/constants/code';
import { Document } from '../main';
import AnimatedGradientButton from '@/components/ui/animated-gradient-button';

export const animatedGradientButtonPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <AnimatedGradientButton>Continue</AnimatedGradientButton>
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
        heading: 'Animated Gradient Button',
        content:
          'A button that continuously changes colors like a rainbow. Perfect for adding eye-catching, colorful elements to your interface.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <AnimatedGradientButton>Continue</AnimatedGradientButton>
      },
      cnCode,
      {
        heading: 'Animated Gradient Button',
        sectionType: 'component',
        description:
          'Create a file animated-gradient-button.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedGradientButtonProps = HTMLMotionProps<'button'> & {
  children?: React.ReactNode;
  className?: string;
};

const AnimatedGradientButton = ({ children, className, ...props }: AnimatedGradientButtonProps) => {
  return (
    <motion.button
      {...props}
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
      className={cn(
        'relative overflow-hidden hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] rounded-lg border-none px-4 py-2 font-medium text-white tracking-wide shadow-md transition-all duration-300 hover:bg-opacity-90',
        className
      )}
    >
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
        code: `<AnimatedGradientButton>Continue</AnimatedGradientButton>`
      }
    ]
  }
};
