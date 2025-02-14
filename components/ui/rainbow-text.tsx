import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type RainbowTextProps = {
  initialColor?: string;
  colors?: string[];
  className?: string;
  children?: ReactNode;
};

const RainbowText = ({
  initialColor = '#148bfa',
  colors = ['#148bfa', '#83fa14', '#14fab9', '#148bfa'],
  className = 'text-xs',
  children
}: RainbowTextProps) => {
  return (
    <motion.p
      initial={{ color: initialColor }}
      animate={{
        color: colors,
        transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' }
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default RainbowText;
