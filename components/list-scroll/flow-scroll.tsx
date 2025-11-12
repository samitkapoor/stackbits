import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

interface FlowScrollCardProps {
  image: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
}

const FlowScrollCard = ({ image, index, scrollYProgress, totalItems }: FlowScrollCardProps) => {
  const ITEMS_PER_ROW = 3;
  const prev = Math.max(0, index - ITEMS_PER_ROW);
  const next = Math.min(totalItems - 1, index + ITEMS_PER_ROW);

  const previousRow = Math.floor(prev / ITEMS_PER_ROW);
  const currentRow = Math.floor(index / ITEMS_PER_ROW);
  const nextRow = Math.floor(next / ITEMS_PER_ROW);

  const totalRows = Math.floor(totalItems / ITEMS_PER_ROW);

  const scrollRangePerRow = 1 / totalRows;

  const entryAnimation = previousRow / totalRows - scrollRangePerRow;
  const currPosition = currentRow / totalRows;
  const holdAnimationStart = currPosition;
  const holdAnimationEnd = currPosition;
  const exitAnimation = nextRow / totalRows + scrollRangePerRow * 2;

  const offsetToAdd = (scrollRangePerRow / totalItems) * (currentRow + 2);
  const range = [
    0,
    entryAnimation - offsetToAdd,
    holdAnimationStart - offsetToAdd,
    holdAnimationEnd - offsetToAdd,
    exitAnimation - offsetToAdd,
    1
  ];

  const scale = useTransform(scrollYProgress, range, [0.5, 0.5, 1, 1, 0.5, 0.5]);

  const isLeft = index % ITEMS_PER_ROW === 0;
  const isRight = index % ITEMS_PER_ROW === 2;
  const xTransform = useTransform(scrollYProgress, range, [
    isLeft ? '100%' : isRight ? '-100%' : '0%',
    isLeft ? '100%' : isRight ? '-100%' : '0%',
    '0%',
    '0%',
    '0%',
    '0%'
  ]);
  const rotate = useTransform(scrollYProgress, range, [
    isLeft ? -20 : isRight ? 20 : 0,
    isLeft ? -20 : isRight ? 20 : 0,
    0,
    0,
    0,
    0
  ]);
  const shadowY = useTransform(scrollYProgress, range, [50, 50, 25, 25, -50, -50]);

  return (
    <motion.div
      style={{
        scale,
        x: xTransform,
        rotate,
        zIndex: !isLeft && !isRight ? 1 : 0,
        boxShadow: useTransform(shadowY, (value) => `0px ${value}px 40px 10px rgba(0, 0, 0, 0.1)`)
      }}
      className="w-full sm:max-w-48 md:max-w-60 h-32 sm:h-60 md:h-72 overflow-hidden rounded-2xl"
    >
      <Image
        src={image}
        alt={image}
        width={1000}
        height={1000}
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};

interface FlowScrollProps {
  images: string[];
}

const FlowScroll = ({ images }: FlowScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={ref} className="w-full h-full overflow-y-auto flex justify-center py-36 pb-96">
      <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-12 h-max">
        {images.map((image, index) => (
          <FlowScrollCard
            key={`sphere-scroll-card-${index}`}
            image={image}
            index={index}
            scrollYProgress={scrollYProgress}
            totalItems={images.length}
          />
        ))}
      </div>
    </div>
  );
};

export default FlowScroll;
