'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
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

  const rotateZ = useTransform(scrollProgress, [0, thisBarPosition, 1], [0, 0, 90]);

  return (
    <motion.div
      className="w-1 bg-zinc-200 h-10"
      style={{
        rotateZ: useTransform(rotateZ, (value) => `${value}deg`),
        transformOrigin: 'bottom'
      }}
    />
  );
};

const DominoesScroll = ({
  scrollContainerId,
  direction
}: {
  scrollContainerId: string;
  direction: 'vertical' | 'horizontal';
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    ref.current = null;
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      ref.current = scrollContainer;
      console.log('Found scroll container:', scrollContainerId, scrollContainer);
    } else {
      console.log('Scroll container not found:', scrollContainerId);
    }
  }, []);

  const { scrollYProgress, scrollXProgress } = useScroll({
    container: ref
  });

  // Debug scroll progress
  useEffect(() => {
    if (ref.current) {
      const unsubscribe = scrollYProgress.on('change', (latest) => {
        console.log('Scroll Y Progress:', latest);
      });
      return unsubscribe;
    }
  }, [scrollYProgress]);

  return (
    <div className="flex items-end justify-center gap-1 relative">
      {Array.from({ length: BARS }).map((_, index) => {
        return (
          <ScrollBar
            key={`scroll-bar-${index}`}
            index={index}
            scrollProgress={direction === 'vertical' ? scrollYProgress : scrollXProgress}
          />
        );
      })}
    </div>
  );
};

const DominoesScrollIndicator = ({
  scrollContainerId = 'scroll-target',
  direction = 'vertical'
}: {
  scrollContainerId?: string;
  direction?: 'vertical' | 'horizontal';
}) => {
  const pathname = usePathname();

  return (
    <DominoesScroll key={pathname} scrollContainerId={scrollContainerId} direction={direction} />
  );
};

export default DominoesScrollIndicator;
