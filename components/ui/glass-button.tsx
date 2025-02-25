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
      className={`relative overflow-hidden rounded-xl px-6 py-3 text-white bg-gradient-to-tr from-[#46C0F7a9] to-[#E3E8EAa9] font-semibold ${className}`}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{
        y: -5
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-70deg, transparent 48%, #ffffff8f 50%, transparent 52%)'
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
