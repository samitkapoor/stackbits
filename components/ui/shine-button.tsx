import { motion, MotionProps } from 'framer-motion';
import React from 'react';

type ShineButtonProps = {
  className?: string;
  children: React.ReactNode;
} & MotionProps;

const ShineButton: React.FC<ShineButtonProps> = ({ children, className, ...props }) => {
  return (
    <motion.button
      {...props}
      className={`relative overflow-hidden rounded-lg border border-neutral-700 px-6 py-3 text-white font-semibold transition-all duration-300 hover:border-neutral-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] active:scale-95 ${className}`}
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
