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

const randomValues = () => Array.from({ length: 25 }, () => Math.random() * 100 - 50);

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_6px_white] opacity-60"
    animate={{
      x: randomValues(),
      y: randomValues(),
      opacity: [0.3, 0.7, 0.3]
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
      delay,
      repeatType: 'reverse'
    }}
  />
);

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
      whileInView={{ rotate: 360 }}
      transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      className="relative flex items-center justify-center"
      style={{ height: size, width: size }}
    >
      <div
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)'
        }}
        className="absolute inset-0 rounded-full h-full w-full pointer-events-none shadow-[0_0_60px_rgba(255,255,255,0.2)] blur-sm"
      ></div>

      <div className="relative h-[100px] w-[100px] flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-gradient-to-br from-white/10 to-white/30 backdrop-blur-lg">
        {Array.from({ length: 25 }, (_, index) => (
          <Particle key={index} delay={Math.random() * 2} />
        ))}
      </div>

      {icons.map((url, i) => {
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <motion.div
            key={i}
            whileInView={{ rotate: -360 }}
            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
            className="absolute"
            style={{
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
