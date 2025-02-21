'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

type FadeInTextProps = {
  text: string;
  className?: string;
};

const FadeInText: React.FC<FadeInTextProps> = ({ text, className }) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className={`flex flex-wrap h-full w-full gap-2 ${className}`}>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default FadeInText;
