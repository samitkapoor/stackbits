import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

type GlassButtonProps = HTMLMotionProps<'button'> & {
  children?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
};

const GlassButton = ({ children, className, wrapperClassName, ...props }: GlassButtonProps) => {
  return (
    <motion.button
      {...props}
      className={cn(
        `relative overflow-hidden rounded-lg px-4 py-2 text-white`,
        `bg-gradient-to-tr from-[#46C0F750] to-[#E3E8EA50] backdrop-blur-lg`,
        `shadow-inner shadow-white/20 transition-all duration-300`,
        `hover:shadow-lg hover:shadow-cyan-200/30`,
        wrapperClassName
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Light Reflection Animation */}
      <motion.span
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-70deg, transparent 45%, #ffffff21 50%, transparent 55%)',
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
      <div className={cn('relative', className)}>{children}</div>
    </motion.button>
  );
};

export default GlassButton;
