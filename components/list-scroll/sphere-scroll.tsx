import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { RefObject, useRef } from 'react';

interface SphereScrollCardProps {
  image: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
}

const SphereScrollCard = ({ image, index, scrollYProgress, totalItems }: SphereScrollCardProps) => {
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
    entryAnimation - offsetToAdd,
    holdAnimationStart - offsetToAdd,
    holdAnimationEnd - offsetToAdd,
    exitAnimation - offsetToAdd
  ];

  const scale = useTransform(scrollYProgress, range, [0, 1, 1, 0]);

  const isLeft = index % ITEMS_PER_ROW === 0;
  const isRight = index % ITEMS_PER_ROW === 2;
  const xTransform = useTransform(scrollYProgress, range, [
    isLeft ? '200%' : isRight ? '-200%' : '0%',
    '0%',
    '0%',
    '0%'
  ]);
  const rotate = useTransform(scrollYProgress, range, [isLeft ? -20 : isRight ? 20 : 0, 0, 0, 0]);
  const shadowY = useTransform(scrollYProgress, range, [200, 0, 0, -200]);
  const shadowScale = useTransform(scrollYProgress, range, [-10, 2, 2, -10]);

  const blur = useTransform(scrollYProgress, range, [5, 0, 0, 0]);

  return (
    <motion.div
      style={{
        scale,
        x: xTransform,
        rotate,
        zIndex: !isLeft && !isRight ? 1 : 0,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
        boxShadow: useTransform(
          [shadowY, shadowScale],
          (value) => `0px ${value[0]}px 40px ${value[1]}px rgba(0, 0, 0, 0.3)`
        )
      }}
      className="w-full max-w-xs h-96 overflow-hidden rounded-2xl"
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

interface SphereScrollProps {
  images: string[];
}

const SphereScroll = ({ images }: SphereScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={ref} className="w-full h-full overflow-y-auto flex justify-center py-36 pb-96">
      <div className="grid grid-cols-3 gap-12 h-max">
        {images.map((image, index) => (
          <SphereScrollCard
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

export default SphereScroll;
