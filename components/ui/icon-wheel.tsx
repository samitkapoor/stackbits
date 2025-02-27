'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type IconWheelProps = {
  icons: Array<string>;
  size?: number;
  iconSize?: number;
};

const ICON_SIZE = 64;

const IconWheel = ({ icons, size = 400, iconSize = ICON_SIZE }: IconWheelProps) => {
  const [radius, setRadius] = useState(size ? size / 2 - 32 : 200); // Adjust based on the container size
  const centerX = iconSize / 2; // Center of the wheel (half of the container width)
  const centerY = iconSize / 2; // Center of the wheel (half of the container height)
  const angleStep = (2 * Math.PI) / icons.length; // Angle between each item

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < size) setRadius(100);
      else setRadius(200);
    });
  }, []);

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
      style={{
        height: `${size}px`,
        width: `${size}px`
      }}
      className={`relative flex items-center justify-center`}
    >
      {icons.map((url, i) => {
        const angle = i * angleStep; // Angle for the current icon
        const x = centerX + radius * Math.cos(angle) - iconSize / 2; // Subtract half of img width (64/2)
        const y = centerY + radius * Math.sin(angle) - iconSize / 2; // Subtract half of img height (64/2)

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
            <Image src={url} height={iconSize} width={iconSize} alt="techstackwheel" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default IconWheel;
