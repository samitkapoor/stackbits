import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type RainbowTextProps = {
  colors?: string[];
  className?: string;
  duration?: number;
  children?: ReactNode;
};

const RainbowText = ({
  colors = [
    '#FF4D4D',
    '#FF944D',
    '#FFC14D',
    '#E8FF4D',
    '#6DFF4D',
    '#4DFFA1',
    '#4DFFFF',
    '#4DAAFF',
    '#4D6DFF',
    '#6D4DFF',
    '#A14DFF',
    '#D14DFF',
    '#FF4DAA',
    '#FF4D6D',
    '#FF4D4D',
    '#FF944D'
  ],
  className = '',
  duration = 2,
  children
}: RainbowTextProps) => {
  const linearGradients = [];
  for (let i = 0; i < colors.length - 1; i++) {
    linearGradients.push(`linear-gradient(90deg, ${colors[i]} 0%, ${colors[i + 1]} 100%)`);
  }

  return (
    <motion.p
      initial={{ backgroundImage: linearGradients[0] }}
      animate={{ backgroundImage: linearGradients }}
      transition={{
        duration: duration,
        ease: 'linear',
        repeat: Infinity
      }}
      className={className}
      style={{
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {children}
    </motion.p>
  );
};

export default RainbowText;
