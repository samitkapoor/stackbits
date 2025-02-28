'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type IconWheelProps = {
  icons: string[];
  size?: number;
  iconSize?: number;
};

const DEFAULT_ICON_SIZE = 64;

const IconWheel = ({ icons, size = 400, iconSize = DEFAULT_ICON_SIZE }: IconWheelProps) => {
  const [radius, setRadius] = useState(size / 2 - 32);
  const angleStep = (2 * Math.PI) / icons.length;

  const updateRadius = useCallback(() => {
    setRadius(window.innerWidth < size ? 100 : size / 2 - 32);
  }, [size]);

  useEffect(() => {
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [updateRadius]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      viewport={{ once: true }}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      style={{ height: size, width: size }}
      className="relative flex items-center justify-center"
    >
      {icons.map((url, i) => {
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={`techstackwheel-${i}`}
            animate={{ rotate: -360 }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
            style={{
              position: 'absolute',
              left: `calc(50% + ${x}px - ${iconSize / 2}px)`,
              top: `calc(50% + ${y}px - ${iconSize / 2}px)`
            }}
          >
            <Image src={url} height={iconSize} width={iconSize} alt="tech stack icon" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default IconWheel;
