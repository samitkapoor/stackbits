'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type IconWheelProps = {
  icons: Array<string>;
  radius?: number;
  className?: string;
};

const IconWheel = ({ icons, radius = 200, className }: IconWheelProps) => {
  const centerX = 32; // Center of the wheel (half of the container width)
  const centerY = 32; // Center of the wheel (half of the container height)
  const angleStep = (2 * Math.PI) / icons.length; // Angle between each item

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5
        }
      }}
      viewport={{
        once: true
      }}
      animate={{
        rotateZ: 360,
        transition: { duration: 10, ease: 'linear', repeat: Infinity }
      }}
      className={cn(
        'relative h-[250px] sm:h-[500px] w-[250px] sm:w-[500px] flex items-center justify-center my-10',
        className
      )}
    >
      {icons.map((url, i) => {
        const angle = i * angleStep; // Angle for the current icon
        const x = centerX + radius * Math.cos(angle) - 32; // Subtract half of img width (64/2)
        const y = centerY + radius * Math.sin(angle) - 32; // Subtract half of img height (64/2)

        return (
          <motion.div
            animate={{
              rotateZ: -360,
              transition: { duration: 10, ease: 'linear', repeat: Infinity }
            }}
            whileHover={{
              scale: 1.2
            }}
            key={`techstackwheel${i}`}
            initial={{ x, y }}
            className="absolute rounded-full"
          >
            <Image src={url} height={64} width={64} alt="techstackwheel" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default IconWheel;
