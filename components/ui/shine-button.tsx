import { cn } from '@/lib/utils';
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
        `relative overflow-hidden rounded-lg border border-neutral-700 px-4 py-2 text-white transition-all duration-300 hover:border-neutral-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]`,
        `hover:shadow-lg hover:shadow-white/30`,
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
