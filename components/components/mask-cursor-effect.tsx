'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const getMaskDataUrl = () => {
  const svgString = `<svg width="526" height="526" viewBox="0 0 526 526" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="263" cy="263" r="263" fill="black" />
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

const MaskCursorEffect = ({
  children,
  hiddenComponent,
  className,
  compressedMaskSize = 40,
  expandedMaskSize = 350
}: {
  children: React.ReactNode;
  hiddenComponent?: React.ReactNode;
  className?: string;
  compressedMaskSize?: number;
  expandedMaskSize?: number;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 20, y: 20 });
  const [isHovered, setIsHovered] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const MASK_SIZE = isHovered ? expandedMaskSize : compressedMaskSize;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = wrapperRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0
      };
      setMousePosition({ x: e.clientX - left, y: e.clientY - top });
    };
    wrapperRef.current?.addEventListener('mousemove', handleMouseMove);
    return () => wrapperRef.current?.removeEventListener('mousemove', handleMouseMove);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="h-full w-full relative flex flex-col">
      <motion.div
        animate={{
          WebkitMaskPosition: `${mousePosition.x - MASK_SIZE / 2}px ${
            mousePosition.y - MASK_SIZE / 2
          }px`,
          maskSize: `${MASK_SIZE}px ${MASK_SIZE}px`
        }}
        style={{
          maskImage: `url("${getMaskDataUrl()}")`,
          WebkitMaskImage: `url("${getMaskDataUrl()}")`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EA5A47',

          color: 'black'
        }}
        transition={{
          type: 'tween',
          ease: 'backOut'
        }}
        className={cn(
          'h-[800px] w-full flex items-center justify-center absolute z-10 ',
          className
        )}
      >
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {hiddenComponent}
        </div>
      </motion.div>
      <div
        className={cn('h-[800px] w-full flex items-center justify-center text-white/70', className)}
      >
        {children}
      </div>
    </div>
  );
};

export default MaskCursorEffect;
