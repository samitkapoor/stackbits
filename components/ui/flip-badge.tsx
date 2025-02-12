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
      initial={{ y: -20 }}
      animate={{
        y: 0,
        transition: { repeat: Infinity, duration: 0.8, repeatType: 'reverse' }
      }}
      className="relative h-[175px] w-[175px] rounded-full"
      style={{ perspective: '1000px' }}
    >
      <div className="flip h-full w-full rounded-full relative flex items-center justify-center">
        {/* Front Side */}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-neutral-100 rounded-full"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          {frontContent}
        </div>

        {/* Back Side*/}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-neutral-700 rounded-full flip-back"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          {backContent}
        </div>
      </div>
    </motion.div>
  );
};

export default FlipBadge;
