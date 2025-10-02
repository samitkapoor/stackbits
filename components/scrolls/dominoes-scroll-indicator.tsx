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

const DominoesScrollBars = ({
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

  const { scrollYProgress, scrollXProgress } = useScroll({
    container: ref
  });

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

const DominoesScroll = ({
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

  return <DominoesScrollBars container={container} direction={direction} />;
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
