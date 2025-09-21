'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

const BackFace = () => {
  return (
    <div
      className="border border-white/15 h-[500px] w-full absolute rounded-3xl top-0 left-0 flex items-center justify-center bg-black text-white font-bold text-7xl"
      style={{
        transform: 'rotateY(180deg) translateZ(-1px)',
        backfaceVisibility: 'hidden'
      }}
    >
      ?
    </div>
  );
};

const FlipScrollItem = ({
  image,
  index,
  isLeft,
  scrollYProgress,
  totalItems,
  mode
}: {
  image: string;
  index: number;
  isLeft: boolean;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
  mode: 'alternate' | 'normal';
}) => {
  const direction = isLeft ? -1 : 1;
  const position = index / totalItems;

  const translateX = useTransform(
    scrollYProgress,
    [0, position, 1],
    [-index * 400 * direction, 0, (totalItems - index) * 400 * direction]
  );

  const normalRotateY = useTransform(
    scrollYProgress,
    [0, position - 0.04, position - 0.015, position + 0.015, position + 0.04, 1],
    [180, 180, 0, 0, -180, -180]
  );
  const alternateRotateY = useTransform(
    scrollYProgress,
    [0, position, 1],
    [index * -180 * direction, 0, (totalItems - index) * 180 * direction]
  );

  return (
    <motion.div
      style={{
        translateX,
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      className="h-[500px] max-w-sm w-full absolute rounded-3xl overflow-visible text-black"
    >
      <motion.div
        style={{
          rotateY: mode === 'normal' ? normalRotateY : alternateRotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative"
      >
        <Image
          src={image}
          alt={image}
          width={1000}
          height={1000}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(1px)'
          }}
          className="object-cover h-[500px] w-full rounded-3xl absolute top-0 left-0"
        />
        <BackFace />
      </motion.div>
    </motion.div>
  );
};

const FlipScroll = ({
  items,
  mode = 'normal'
}: {
  items: { image: string }[];
  mode?: 'alternate' | 'normal';
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end end']
  });

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-y-auto relative"
      style={{ minHeight: '400px' }}
    >
      <div className="h-full w-full absolute top-0 left-0">
        <div
          className="w-full"
          style={{
            height: (items.length - 3) * 500
          }}
        />
      </div>
      <div className="grid grid-cols-1 h-full w-full sticky top-0 left-0">
        <div className="flex flex-col h-full justify-center w-full items-center relative">
          {items.map((image, index) => (
            <FlipScrollItem
              key={`left-column-image-${index}`}
              image={image.image}
              index={index}
              isLeft={true}
              scrollYProgress={scrollYProgress}
              totalItems={items.length}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipScroll;
