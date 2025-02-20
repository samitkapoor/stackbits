import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type AnimatedGradientButtonProps = HTMLMotionProps<'button'> & {
  children?: React.ReactNode;
  className?: string;
};

const AnimatedGradientButton = ({ children, className, ...props }: AnimatedGradientButtonProps) => {
  return (
    <motion.button
      {...props}
      initial={{ background: 'linear-gradient(45deg, #84cc16, #ec4899)', scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        background: [
          'linear-gradient(45deg, #ec4899, #84cc16)',
          'linear-gradient(45deg, #ff7e5f, #feb47b)',
          'linear-gradient(45deg, #00b4d8, #90e0ef)',
          'linear-gradient(45deg, #6a1b9a, #ab47bc)',
          'linear-gradient(45deg, #009688, #ff5722)',
          'linear-gradient(45deg, #ff77ff, #00aaff)',
          'linear-gradient(45deg, #ff3d00, #ffea00)',
          'linear-gradient(45deg, #2196f3, #4caf50)',
          'linear-gradient(45deg, #84cc16, #ec4899)',
          'linear-gradient(45deg, #facc15, #6366f1)'
        ],
        transition: { duration: 20, repeat: Infinity, repeatType: 'reverse' }
      }}
      className={`outline-none border-[2px] border-[#ffffff5a] hover:border-white px-4 py-2 text-white ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedGradientButton;
