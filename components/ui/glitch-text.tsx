import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      animate={{
        x: [0, 0, 0, 2, 0, 2, 2],
        y: [2, -2, -2, 0, 0, 2, 0],
        filter: [
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(2px)',
          'blur(4px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(4px)',
          'blur(0px)'
        ],
        textShadow: [
          '3px 3px 0 #ff0d00, -3px -3px 0 #00ffff',
          '-3px -3px 0 #ff00ff, 3px 3px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px 0px 0 #ff0d00, -3px -3px 0 #00ffff'
        ],
        transition: {
          repeat: Infinity,
          duration: 0.5
        }
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

export default GlitchText;
