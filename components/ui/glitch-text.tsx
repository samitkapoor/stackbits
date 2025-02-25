import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      animate={{
        scale: [1, 1, 1.3, 1, 1, 1, 1],
        x: [0, 0, 0, 2, 0, 2, 2],
        y: [2, -2, -2, 0, 0, 2, 0],
        filter: [
          'blur(0px)',
          'blur(2px)',
          'blur(4px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)'
        ],
        transition: {
          repeat: Infinity,
          duration: 0.3,
          repeatDelay: 1
        }
      }}
      className={`glitch ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default GlitchText;
