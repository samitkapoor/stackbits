import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const SineWave = ({
  items,
  amplitude = 100,
  frequency = 5,
  shouldAnimate = true,
  itemClassName = ''
}: {
  items: { image: string }[];
  amplitude?: number;
  frequency?: number;
  shouldAnimate?: boolean;
  itemClassName?: string;
}) => {
  return (
    <div className="w-full h-96 flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center gap-4 relative">
        {items.map((item, index) => {
          const yd = Math.sin((index * Math.PI) / frequency) * amplitude;

          return (
            <motion.div
              key={`sine-wave-${index}`}
              className="relative"
              initial={{
                opacity: shouldAnimate ? 0 : 1,
                y: shouldAnimate ? 0 : yd
              }}
              animate={{
                opacity: 1,
                y: yd
              }}
              transition={{
                duration: 0.8,
                type: 'spring',
                bounce: 0.5,
                delay: index * 0.05
              }}
            >
              <div className={cn(`w-20 h-20 rounded-xl overflow-hidden`, itemClassName)}>
                <Image
                  src={item.image}
                  alt={`Item ${index + 1}`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SineWave;
