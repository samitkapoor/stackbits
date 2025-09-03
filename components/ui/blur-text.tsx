import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';

type BlurTextProps = {
  text: string;
  repeat?: boolean;
  className?: string;
};

const BlurText: FC<BlurTextProps> = ({ text, repeat = false, className }) => {
  return (
    <div className={cn('flex flex-wrap overflow-visible', className)}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(10px)' }}
          whileInView={{ filter: 'blur(0px)' }}
          transition={{
            duration: 0.05,
            delay: index * 0.05,
            ease: 'backOut',
            ...(repeat && {
              repeat: Infinity,
              repeatDelay: 0.05 * text.split('').length + 1,
              repeatType: 'reverse'
            })
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
