import React from 'react';
import { motion } from 'framer-motion';

const ColorCyclone = ({ children }: { children?: React.ReactNode }) => {
  const fogs = [
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '-40%',
      gotoY: '-40%',
      background: 'radial-gradient(circle, rgba(255,182,193,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '40%',
      gotoY: '40%',
      background: 'radial-gradient(circle, rgba(173,216,230,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '-40%',
      gotoY: '40%',
      background: 'radial-gradient(circle, rgba(144,238,144,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '40%',
      gotoY: '-40%',
      background: 'radial-gradient(circle, rgba(255,228,181,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '0%',
      gotoY: '40%',
      background: 'radial-gradient(circle, rgba(221,160,221,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '0%',
      gotoY: '-40%',
      background: 'radial-gradient(circle, rgba(240,230,140,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '40%',
      gotoY: '0%',
      background: 'radial-gradient(circle, rgba(255,218,185,1), transparent 45%)'
    },
    {
      fromX: '0%',
      fromY: '0%',
      gotoX: '-40%',
      gotoY: '0%',
      background: 'radial-gradient(circle, rgba(175,238,238,1), transparent 45%)'
    }
  ];

  return (
    <div
      className="h-full w-full relative flex items-center justify-center overflow-hidden bg-[#ffffff71]"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className="z-10">{children}</div>

      <motion.div
        initial={{
          rotateZ: 0
        }}
        animate={{
          rotateZ: 360
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className="h-full w-full absolute "
      >
        {fogs.map((fog, index) => (
          <motion.div
            key={index}
            initial={{
              transform: `translateZ(-10px) translateX(${fog.fromX}) translateY(${fog.fromY})`
            }}
            animate={{
              transform: `translateZ(-10px) translateX(${fog.gotoX}) translateY(${fog.gotoY})`,
              transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            style={{
              transformStyle: 'preserve-3d',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: fog.background
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ColorCyclone;
