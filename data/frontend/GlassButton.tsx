import GlassButton from '@/components/ui/glass-button';
import { Document } from '../main';

export const glassButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <GlassButton className="text-lg md:text-xl font-medium !px-5 sm:!px-10 py-4 rounded-lg">
      Continue
    </GlassButton>
  </div>
);

export const glassButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'GlassButton',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Glass Button',
        content:
          'GlassButton is a modern, glassmorphism-style button with a semi-transparent gradient background, soft blur effect, and smooth hover transitions. It uses Framer Motion for animations and Tailwind CSS for styling, creating a sleek and interactive UI component.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: glassButtonPreview
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
        description: 'Create a file glass-button.tsx in your components folder and paste this code',
        code: `import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

type GlassButtonProps = HTMLMotionProps<'button'> & {
  children?: React.ReactNode;
  className?: string;
};

const GlassButton = ({ children, className, ...props }: GlassButtonProps) => {
  return (
    <motion.button
      {...props}
      className={\`relative overflow-hidden rounded-xl px-6 py-3 text-white font-semibold backdrop-blur-md \${className}\`}
      initial={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
      whileHover={{
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(15px)',
        scale: 1.05
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <span className="absolute inset-0 opacity-50 bg-gradient-to-tr from-sky-400 to-neutral-200" />

      <div className="relative z-10">{children}</div>
    </motion.button>
  );
};

export default GlassButton;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GlassButton>Continue</GlassButton>`
      }
    ]
  }
};
