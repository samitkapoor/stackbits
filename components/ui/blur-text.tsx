import { motion } from 'framer-motion';
import { FC } from 'react';

type BlurTextProps = {
  text: string;
  className?: string;
};

const BlurText: FC<BlurTextProps> = ({ text, className }) => {
  return (
    <div className={`flex flex-wrap overflow-visible ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 10, filter: 'blur(10px)' }}
          whileInView={{ y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.2,
            delay: index * 0.1,
            ease: 'backOut'
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
