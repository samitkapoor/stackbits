import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import ShineButton from '@/components/ui/shine-button';

export const shineButtonPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <ShineButton>Continue</ShineButton>
  </div>
);

export const shineButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Shine Button',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Shine Button',
        content:
          'A button with a shining light that sweeps across the surface. Creates a polished, premium look for your interface.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: <ShineButton>Continue</ShineButton>
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Shine Button',
        sectionType: 'component',
        description: 'Create a file shine-button.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';
import React, { ButtonHTMLAttributes } from 'react';

type ShineButtonProps = {
  className?: string;
  children: React.ReactNode;
} & MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const ShineButton: React.FC<ShineButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        \`relative overflow-hidden rounded-xl border border-neutral-700 px-4 py-2 text-white transition-all duration-300 hover:border-neutral-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]\`,
        \`hover:shadow-sm hover:shadow-white/30\`,
        'hover:bg-zinc-900',
        className
      )}
    >
      <motion.span
        className="absolute -left-full top-0 h-full w-[150%] blur-[6px] opacity-50 hover:opacity-100"
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        style={{
          background: 'linear-gradient(-55deg, transparent 40%, #ffffffbb 50%, transparent 60%)'
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="relative z-10 flex items-center">{children}</div>
    </button>
  );
};

export default ShineButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ShineButton>Continue</ShineButton>`
      }
    ]
  }
};
