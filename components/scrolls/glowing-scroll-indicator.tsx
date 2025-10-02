'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const BARS = 40;

const ScrollBar = ({
  index,
  scrollProgress
}: {
  index: number;
  scrollProgress: MotionValue<number>;
}) => {
  const thisBarPosition = index / BARS;
  const preStep = Math.max(0, (index - 3) / BARS);
  const postStep = Math.min(1, (index + 3) / BARS);

  const height = useTransform(
    scrollProgress,
    [0, preStep, thisBarPosition, postStep, 1],
    [5, 15, 35, 15, 5]
  );
  const opacity = useTransform(
    scrollProgress,
    [0, preStep, thisBarPosition, postStep, 1],
    [0.1, 0.4, 1, 0.4, 0.1]
  );
  const width = useTransform(scrollProgress, [0, thisBarPosition, 1], [1.5, 5, 1.5]);

  return (
    <motion.div
      className="bg-white"
      style={{
        height: height,
        opacity: useTransform(opacity, (value) => `${value}`),
        width: useTransform(width, (value) => `${value}px`)
      }}
    />
  );
};

const ScrollIndicatorBars = ({
  container,
  direction
}: {
  container: HTMLElement;
  direction: 'vertical' | 'horizontal';
}) => {
  const ref = React.useRef<HTMLElement>(container);

  // Update ref if container changes
  React.useEffect(() => {
    ref.current = container;
  }, [container]);

  const { scrollXProgress, scrollYProgress } = useScroll({
    container: ref
  });

  const scrollProgress = direction === 'vertical' ? scrollYProgress : scrollXProgress;

  const left = useTransform(scrollProgress, [0, 1], [0, 100]);

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
        className="h-20 bg-red-700 w-1 absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ left: useTransform(left, (value) => `${value}%`) }}
      >
        <div className="w-3.5 h-3.5 rounded-full shadow-sm bg-red-500 from-50% to-50% absolute top-0 left-1/2 -translate-x-1/2"></div>
      </motion.div>
    </div>
  );
};

const ScrollIndicator = ({
  scrollContainerId,
  direction
}: {
  scrollContainerId: string;
  direction: 'vertical' | 'horizontal';
}) => {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      setContainer(scrollContainer);
    }
  }, [scrollContainerId]);

  if (!container) {
    return null;
  }

  return <ScrollIndicatorBars container={container} direction={direction} />;
};

const GlowingScrollIndicator = ({
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

export default GlowingScrollIndicator;
