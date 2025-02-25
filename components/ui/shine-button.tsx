import { motion } from 'framer-motion';
import React from 'react';

type ShineButtonProps = {
  speed?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ShineButton: React.FC<ShineButtonProps> = ({
  children,
  className,
  speed = 2.5,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`relative overflow-hidden rounded-lg border border-neutral-700 px-6 py-3 text-white font-semibold transition-all duration-300 hover:border-neutral-500 ${className}`}
    >
      <motion.span
        className="absolute -left-full top-0 h-full w-[150%] blur-[4px]"
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        style={{
          background: 'linear-gradient(-55deg, transparent 45%, #ffffffaa, transparent 55%)'
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default ShineButton;
