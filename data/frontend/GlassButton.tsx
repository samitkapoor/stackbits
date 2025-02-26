import GlassButton from '@/components/ui/glass-button';
import { Document } from '../main';

export const glassButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <GlassButton className="text-lg md:text-xl font-medium !px-5 sm:!px-10 py-4 rounded-lg">
      Glass
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
        heading: '🔍 Glass Button',
        content:
          'GlassButton brings a modern, glassmorphic touch to your UI with a semi-transparent gradient background, a soft blur effect, and smooth hover transitions. Powered by Framer Motion for animations and Tailwind CSS for styling, this button delivers a sleek, futuristic feel perfect for minimalist and modern designs.',
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
        sectionType: 'dependencies',
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
      className={\`relative overflow-hidden rounded-xl px-6 py-3 text-white font-semibold
        bg-gradient-to-tr from-[#46C0F780] to-[#E3E8EA80] backdrop-blur-lg 
        shadow-inner shadow-white/20 transition-all duration-300 
        hover:shadow-lg hover:shadow-cyan-200/30 \${className}\`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Light Reflection Animation */}
      <motion.span
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-70deg, transparent 45%, #ffffffa0 50%, transparent 55%)',
          filter: 'blur(2px)'
        }}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeatDelay: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Button Content */}
      <div className="relative">{children}</div>
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
