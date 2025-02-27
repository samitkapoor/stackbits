import ShineButton from '@/components/ui/shine-button';
import { Document } from '../main';

export const shineButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <ShineButton className="text-lg md:text-xl font-medium rounded-xl !px-5 sm:!px-10 py-4">
      Shine
    </ShineButton>
  </div>
);

export const shineButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Shine Button',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'Shine Button',
        content:
          'ShineButton is a sleek, transparent button with a subtle diagonal shimmer effect. It features a smooth animated glow, a minimalist 1px border, and a modern hover interaction—perfect for adding a premium touch to your UI',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: shineButtonPreview
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
        description: 'Create a file shine-button.tsx in your components folder and paste this code',
        code: `import { motion, MotionProps } from 'framer-motion';
import React from 'react';

type ShineButtonProps = {
  className?: string;
  children: React.ReactNode;
} & MotionProps;

const ShineButton: React.FC<ShineButtonProps> = ({ children, className, ...props }) => {
  return (
    <motion.button
      {...props}
      className={\`relative overflow-hidden rounded-lg border border-neutral-700 px-6 py-3 text-white font-semibold transition-all duration-300 hover:border-neutral-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] active:scale-95 \${className}\`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="absolute -left-full top-0 h-full w-[150%] blur-[6px] opacity-40"
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        whileHover={{ opacity: 60 }}
        style={{
          background: 'linear-gradient(-55deg, transparent 40%, #ffffffbb 50%, transparent 60%)'
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default ShineButton;
        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ShineButton className="text-lg md:text-xl font-medium rounded-xl !px-5 sm:!px-10 py-4">
  Shine
</ShineButton>`
      }
    ]
  }
};
