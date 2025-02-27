import React from 'react';
import { motion } from 'framer-motion';

const FlickerBox = ({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={`relative duration-200 hover:scale-105 ${className}`}
      style={{
        background: 'radial-gradient(circle at left, #1a1a2e, transparent)'
      }}
      animate={{
        boxShadow: [
          '0 0 2px #00ccff, 0 0 5px #00ccff, 0 0 10px rgba(0, 204, 255, 0.5)',
          '0 0 3px #00c9ff, 0 0 6px #00c9ff, 0 0 12px rgba(0, 201, 255, 0.55)',
          '0 0 4px #cc00ff, 0 0 8px #cc00ff, 0 0 16px rgba(204, 0, 255, 0.7)',
          '0 0 5px #d100ff, 0 0 10px #d100ff, 0 0 18px rgba(210, 0, 255, 0.75)',
          '0 0 6px #ff66cc, 0 0 12px #ff66cc, 0 0 20px rgba(255, 102, 204, 0.8)',
          '0 0 5px #ff75d0, 0 0 10px #ff75d0, 0 0 18px rgba(255, 117, 208, 0.78)',
          '0 0 4px #00ffcc, 0 0 10px #00ffcc, 0 0 18px rgba(0, 255, 204, 0.75)',
          '0 0 3px #77ffcc, 0 0 7px #77ffcc, 0 0 14px rgba(119, 255, 204, 0.70)',
          '0 0 2px #66ff66, 0 0 7px #66ff66, 0 0 14px rgba(102, 255, 102, 0.65)'
        ],
        opacity: [
          1, 0.9, 1, 0.95, 1, 1, 0.9, 1, 0.95, 1, 1, 0.9, 1, 0.95, 1, 1, 0.9, 1, 0.95, 1, 1, 0.9, 1,
          0.95, 1, 1, 0.9, 1, 0.95, 1, 1, 0.9, 1, 0.95, 1, 1, 0.9, 1, 0.95, 1
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default FlickerBox;
