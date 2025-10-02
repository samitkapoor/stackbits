'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    ref.current = null;
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      ref.current = scrollContainer;
    } else {
      // Fallback: try to find the container after a short delay
      const timeoutId = setTimeout(() => {
        const fallbackContainer = document.getElementById(scrollContainerId);
        if (fallbackContainer) {
          ref.current = fallbackContainer;
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const { scrollYProgress, scrollXProgress } = useScroll({
    container: ref
  });

  if (!mounted) {
    return (
      <div className="flex items-end justify-center gap-1 relative">
        {Array.from({ length: BARS }).map((_, index) => (
          <div key={`scroll-bar-${index}`} className="w-1 bg-zinc-200 h-10" />
        ))}
      </div>
    );
  }

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
