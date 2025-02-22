import React from 'react';
import { motion } from 'framer-motion';

const FlipRevealCard = ({
  frontContent,
  backContent
}: {
  // * Remove these data types for javascript
  frontContent?: string | React.ReactNode;
  backContent?: string | React.ReactNode;
  // * ----
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: isHovered ? 180 : 0,
          scale: isHovered ? 1.1 : 1,
          transition: { duration: 0.5 }
        }}
        style={{
          transformStyle: 'preserve-3d'
        }}
        className="flex items-center justify-center"
      >
        {/* Front Side */}
        <div
          className="flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          {frontContent}
        </div>

        {/* Back Side*/}
        <div
          className="absolute top-0 left-0 flex items-center justify-center flip-back"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipRevealCard;
