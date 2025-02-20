import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

type GlassButtonProps = HTMLMotionProps<'button'> & {
  children?: React.ReactNode;
  className?: string;
};

const GlassButton = ({ children, className, ...props }: GlassButtonProps) => {
  return (
    <motion.button
      {...props}
      className={`relative overflow-hidden rounded-xl px-6 py-3 text-white font-semibold backdrop-blur-md ${className}`}
      initial={{ y: 10, opacity: 0, background: 'rgba(255, 255, 255, 0.1)' }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{
        y: -5,
        background: 'rgba(255, 255, 255, 0.3)'
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
