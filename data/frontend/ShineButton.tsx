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
        sectionType: 'component',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file shine-button.tsx in your components folder and paste this code',
        code: `import { motion } from 'framer-motion';
import React from 'react';

type ShineButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ShineButton: React.FC<ShineButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={\`relative overflow-hidden rounded-lg border border-neutral-700 px-6 py-3 text-white font-semibold transition-all duration-300 hover:border-neutral-500 \${className}\`}
    >
      <motion.span
        className="absolute -left-full top-0 h-full w-[150%] blur-[4px]"
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        style={{
          background: 'linear-gradient(-55deg, transparent 45%, #ffffffaa, transparent 55%)'
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <span className="relative z-10">{children}</span>
    </button>
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
