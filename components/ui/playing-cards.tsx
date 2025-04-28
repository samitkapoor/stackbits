'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PlayingCards = ({ images }: { images: string[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[300px] max-w-[300px] w-full mx-auto p-5 rounded-lg transition-all duration-300 hover:translate-x-[10px]"
    >
      {images.map((image, i) => {
        return (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-full border border-white/40 rounded-lg overflow-hidden"
            initial={{
              left: i * 10,
              rotate: (i - 1) * 3
            }}
            animate={{
              left: isHovered ? (i - 1) * 50 : i * 10,
              rotate: isHovered ? (i - 1) * 10 : (i - 1) * 3
            }}
            transition={{ duration: 0.3 }}
            style={{
              zIndex: images.length - i,
              transformOrigin: 'center center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              opacity: 1 - i * 0.2,
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)'
            }}
          >
            <Image
              src={image}
              alt={`Stacked image ${i + 1}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default PlayingCards;
