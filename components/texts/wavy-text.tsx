import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';

type WavyTextProps = {
  text: string;
  className?: string;
};

const WavyText: FC<WavyTextProps> = ({ text, className }) => {
  return (
    <div className={cn('flex flex-wrap overflow-visible p-4', className)}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%' }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: index * 0.1,
            repeatDelay: (text.split('').length / 2) * 0.1,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default WavyText;
