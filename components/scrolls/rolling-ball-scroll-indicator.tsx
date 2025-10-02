'use client';

import { motion, MotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

const BARS = 40;

const ScrollBar = ({
  index,
  scrollProgress
}: {
  index: number;
  scrollProgress: MotionValue<number>;
}) => {
  const thisBarPosition = index / BARS;

  // Transform scroll progress directly into distance
  const distance = useTransform(scrollProgress, (value) => {
    return Math.abs(value - thisBarPosition);
  });

  // Apply spring to the distance for smooth animation
  const springDistance = useSpring(distance, {
    stiffness: 700,
    damping: 40
  });

  // Transform the spring distance into height
  const height = useTransform(springDistance, [0, 1], [0, 35]);
  const opacity = useTransform(springDistance, [0, 0.05, 1], [0, 0.2, 1]);

  return (
    <motion.div
      className="w-0.5 bg-white"
      style={{
        height: height,
        opacity: useTransform(opacity, (value) => `${value}`)
      }}
    />
  );
};

const ScrollIndicator = ({
  scrollContainerId = 'scroll-target',
  direction = 'vertical'
}: {
  scrollContainerId?: string;
  direction?: 'vertical' | 'horizontal';
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref.current = null;
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      ref.current = scrollContainer;
    }
  }, []);

  const { scrollXProgress, scrollYProgress } = useScroll({
    container: ref
  });

  const springDistance = useSpring(direction === 'vertical' ? scrollYProgress : scrollXProgress, {
    stiffness: 700,
    damping: 40
  });

  const left = useTransform(springDistance, [0, 1], [0, 100]);
  const rotateZ = useTransform(springDistance, [0, 1], [0, 3000]);

  return (
    <div className="flex items-end justify-center gap-1 md:gap-2 relative w-fit">
      {Array.from({ length: BARS }).map((_, index) => {
        return (
          <ScrollBar
            key={`scroll-bar-${index}`}
            index={index}
            scrollProgress={direction === 'vertical' ? scrollYProgress : scrollXProgress}
          />
        );
      })}
      <motion.div
        className="h-3.5 w-1 rounded-full absolute bottom-0"
        style={{ left: useTransform(left, (value) => `${value}%`) }}
      >
        <motion.div
          style={{ rotateZ: useTransform(rotateZ, (value) => `${value}deg`) }}
          className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-yellow-500 to-green-500 from-50% to-50% absolute top-0 left-1/2 -translate-x-1/2"
        ></motion.div>
      </motion.div>
    </div>
  );
};

const RollingBallScrollIndicator = ({
  scrollContainerId = 'scroll-target',
  direction = 'vertical'
}: {
  scrollContainerId?: string;
  direction?: 'vertical' | 'horizontal';
}) => {
  const pathname = usePathname();

  return (
    <ScrollIndicator key={pathname} scrollContainerId={scrollContainerId} direction={direction} />
  );
};

export default RollingBallScrollIndicator;
