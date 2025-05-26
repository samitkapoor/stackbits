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
      className={`relative overflow-hidden rounded-xl px-6 py-3 text-white font-semibold
        bg-gradient-to-tr from-[#46C0F780] to-[#E3E8EA80] backdrop-blur-lg 
        shadow-inner shadow-white/20 transition-all duration-300 
        hover:shadow-lg hover:shadow-cyan-200/30 ${wrapperClassName}`}
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
      <div className={cn('relative', className)}>{children}</div>
    </motion.button>
  );
};

export default GlassButton;
