import React from 'react';
import { motion } from 'framer-motion';

const BarricadeTape = ({
  text,
  delimiter,
  rotation = -4,
  entryFrom = 'left',
  delay = 0,
  duration = 2,
  ease = 'backOut',
  className
}: {
  text: string | Array<string>;
  delimiter: string;
  rotation?: number;
  entryFrom?: 'left' | 'right';
  delay?: number;
  duration?: number;
  ease?: string;
  className?: string;
}) => {
  let sentence = '';
  if (typeof text === 'string') sentence = Array(10).fill(text).join(` ${delimiter} `);
  else
    sentence = Array(10)
      .fill(text.join(` ${delimiter} `))
      .join(` ${delimiter} `);

  return (
    <div className="relative w-full overflow-visible">
      <motion.div
        initial={{
          transform: `translateX(${
            entryFrom === 'left' ? '-50vw' : '50vw'
          }) rotateZ(${rotation}deg)`,
          scale: 1,
          y: -5
        }}
        whileInView={{
          transform: `translateX(0) rotateZ(${rotation}deg)`,
          y: 0,
          scale: [1.1, 1],
          transition: { duration, ease, delay }
        }}
        viewport={{ once: true }}
        className={`text-black font-bold text-3xl md:text-5xl flex items-center justify-center gap-5 h-[50px] md:h-[80px] bg-yellow-500 overflow-hidden whitespace-nowrap border-[5px] md:border-[10px] border-black border-dashed ${className}`}
        style={{
          width: '150vw',
          position: 'relative',
          left: '-25vw'
        }}
      >
        {sentence}
      </motion.div>
    </div>
  );
};

export default BarricadeTape;
