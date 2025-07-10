'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Icon = ({
  className,
  size = 24,
  color
}: {
  className?: string;
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      className={className}
      height={size}
      viewBox="0 0 576 512"
    >
      <path
        fill={color}
        d="M151.17 167.35L177.1 176h4.67l5.22-26.12c.72-3.58 1.8-7.58 3.21-11.79l-20.29-40.58l23.8-71.39c2.79-8.38-1.73-17.44-10.12-20.24L168.42.82c-8.38-2.8-17.45 1.73-20.24 10.12l-25.89 77.68a32.04 32.04 0 0 0 1.73 24.43l27.15 54.3zm422.14 182.03l-52.75-79.12a32.002 32.002 0 0 0-26.62-14.25H416l68.99-24.36a32.03 32.03 0 0 0 16.51-12.61l53.6-80.41c4.9-7.35 2.91-17.29-4.44-22.19l-13.31-8.88c-7.35-4.9-17.29-2.91-22.19 4.44l-50.56 75.83L404.1 208H368l-10.37-51.85C355.44 145.18 340.26 96 288 96c-52.26 0-67.44 49.18-69.63 60.15L208 208h-36.1l-60.49-20.17L60.84 112c-4.9-7.35-14.83-9.34-22.19-4.44l-13.31 8.88c-7.35 4.9-9.34 14.83-4.44 22.19l53.6 80.41a32.03 32.03 0 0 0 16.51 12.61L160 256H82.06a32.02 32.02 0 0 0-26.63 14.25L2.69 349.38c-4.9 7.35-2.92 17.29 4.44 22.19l13.31 8.88c7.35 4.9 17.29 2.91 22.19-4.44l48-72h47.06l-60.83 97.33A31.988 31.988 0 0 0 72 418.3V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-73.11l74.08-118.53c-1.01 14.05-2.08 28.11-2.08 42.21C192 399.64 232.76 448 288 448s96-48.36 96-101.43c0-14.1-1.08-28.16-2.08-42.21L456 422.89V496c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-77.71c0-6-1.69-11.88-4.86-16.96L438.31 304h47.06l48 72c4.9 7.35 14.84 9.34 22.19 4.44l13.31-8.88c7.36-4.9 9.34-14.83 4.44-22.18zM406.09 97.51l-20.29 40.58c1.41 4.21 2.49 8.21 3.21 11.79l5.22 26.12h4.67l25.93-8.65l27.15-54.3a31.995 31.995 0 0 0 1.73-24.43l-25.89-77.68C425.03 2.56 415.96-1.98 407.58.82l-15.17 5.06c-8.38 2.8-12.91 11.86-10.12 20.24l23.8 71.39z"
      />
    </svg>
  );
};

const SpiderLoader = ({ spiderCount = 15 }: { spiderCount?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  const [spiderData, setSpiderData] = useState<
    Array<{
      gradient: string;
      color: string;
      duration: number;
      delay: number;
    }>
  >([]);
  const [containerHeight, setContainerHeight] = useState(0);

  const colorPalettes = [
    '#dc2626',
    '#1e40af',
    '#1f2937',
    '#b91c1c',
    '#374151',
    '#1d4ed8',
    '#7c2d12',
    '#4b5563'
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        const iconWidth = width / spiderCount;
        setSize(iconWidth);
        setContainerHeight(height);
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    const newSpiderData = Array.from({ length: spiderCount }, (_, i) => ({
      gradient: `spider-gradient-${i}`,
      color: colorPalettes[i % colorPalettes.length],
      duration: 5.5 + Math.random() * 2,
      delay: Math.random() * 6
    }));

    setSpiderData(newSpiderData);

    return () => {
      resizeObserver.disconnect();
    };
  }, [spiderCount]);

  return (
    <div
      ref={ref}
      className={
        'h-full relative flex items-start w-full overflow-hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]'
      }
      style={{
        backgroundSize: `${size / 2}px ${size / 2}px`
      }}
    >
      {spiderData.map((spider, index) => {
        return (
          <div key={`spider-${index}`} className="h-full">
            <motion.div
              key={containerHeight}
              initial={{
                y: containerHeight + size,
                opacity: 0
              }}
              animate={{
                y: '-120%',
                opacity: 1
              }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 30,
                duration: spider.duration,
                delay: spider.delay,
                repeat: Infinity,
                repeatDelay: 1 + Math.random() * 3,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block relative"
              style={{ width: size }}
            >
              <motion.div
                animate={{
                  rotateZ: [0, 2, -2, 2, -2, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.1,
                  ease: 'easeInOut'
                }}
                className="relative z-10"
                style={{
                  height: size * 2
                }}
              >
                <div
                  style={{ width: size - 2, height: size - 2 }}
                  className="flex items-start justify-start flex-col"
                >
                  <div style={{ width: size - 2, height: size - 2 }}>
                    <Icon className={`h-full w-full p-2 drop-shadow-sm`} color={spider.color} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        );
      })}

      <div className="h-full w-full absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-black/30 via-transparent via-30% to-black/50" />
      </div>
    </div>
  );
};

export default SpiderLoader;
