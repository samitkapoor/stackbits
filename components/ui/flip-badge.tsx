import React from 'react';
import { motion } from 'framer-motion';

const FlipBadge = ({
  frontContent,
  backContent
}: {
  // * Remove these data types for javascript
  frontContent?: string | React.ReactNode;
  backContent?: string | React.ReactNode;
  // * ----
}) => {
  return (
    <motion.div
      initial={{ y: -5 }}
      animate={{
        y: 0,
        transition: { repeat: Infinity, duration: 0.8, repeatType: 'reverse' }
      }}
      className="relative h-[200px] w-[200px] rounded-full"
      style={{ perspective: '1000px' }}
    >
      <div className="flip h-full w-full rounded-full relative flex items-center justify-center">
        <motion.div
          animate={{
            boxShadow: [
              '0 -10px 10px rgba(255, 85, 0, 0.5), 0 -10px 20px rgba(255, 100, 0, 0.6), 0 -10px 30px rgba(255, 120, 0, 0.7)',
              '0 -10px 15px rgba(255, 100, 0, 0.6), 0 -10px 25px rgba(255, 120, 0, 0.7), 0 -10px 35px rgba(255, 150, 0, 0.8)',
              '0 -10px 12px rgba(255, 85, 0, 0.5), 0 -10px 22px rgba(255, 100, 0, 0.6), 0 -10px 32px rgba(255, 120, 0, 0.7)'
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full border border-orange-500"
        ></motion.div>

        {/* Front Side */}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center rounded-full"
          style={{
            backfaceVisibility: 'hidden',
            background: 'radial-gradient(circle at center, #ffebe6da, #adadadaa)'
          }}
        >
          {frontContent}
        </div>

        {/* Back Side*/}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-neutral-700 rounded-full flip-back"
          style={{
            backfaceVisibility: 'hidden',
            background: 'radial-gradient(circle at center, #2e2a2900, #ododod)'
          }}
        >
          {backContent}
        </div>
      </div>
    </motion.div>
  );
};

export default FlipBadge;
