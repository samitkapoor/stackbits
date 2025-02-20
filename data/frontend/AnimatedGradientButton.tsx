import { Document } from '../main';
import AnimatedGradientButton from '@/components/ui/animated-gradient-button';

export const animatedGradientButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <AnimatedGradientButton className="text-lg md:text-xl font-medium !px-5 sm:!px-10 py-4 rounded-lg">
      Let's go!
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
        heading: 'Animated Gradient Button',
        content:
          'The animated gradient button features a smooth, looping color transition that creates a dynamic, eye-catching effect. It cycles through various gradient combinations, adding interactivity and visual appeal to call-to-action elements like "Submit" or "Get Started." This modern design enhances user engagement with smooth hover and transition effects.',
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
        sectionType: 'component',
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
      initial={{ background: 'linear-gradient(45deg, #84cc16, #ec4899)', scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        background: [
          'linear-gradient(45deg, #84cc16, #ec4899)',
          'linear-gradient(45deg, #facc15, #6366f1)',
          'linear-gradient(45deg, #ec4899, #84cc16)',
          'linear-gradient(45deg, #ff7e5f, #feb47b)',
          'linear-gradient(45deg, #00b4d8, #90e0ef)',
          'linear-gradient(45deg, #6a1b9a, #ab47bc)',
          'linear-gradient(45deg, #009688, #ff5722)',
          'linear-gradient(45deg, #ff77ff, #00aaff)',
          'linear-gradient(45deg, #ff3d00, #ffea00)',
          'linear-gradient(45deg, #2196f3, #4caf50)'
        ],
        transition: { duration: 20, repeat: Infinity, repeatType: 'reverse' }
      }}
      className={\`outline-none border-[2px] border-[#ffffff5a] hover:border-white px-4 py-2 text-white \${className}\`}
    >
      {children}
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
