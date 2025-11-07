'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FogRevealTextProps {
  children: React.ReactNode;
  className?: string;
  thresholdDistance?: number;
}

const FogRevealText = ({ children, className, thresholdDistance = 200 }: FogRevealTextProps) => {
  const mouse = useMotionValue({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ x: 0, y: 0, height: 0 });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setDimensions({ x: rect.left, y: rect.top, height: rect.height });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.set({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className={cn('relative py-32 px-20 text-center', className)}>
      {children}

      <motion.span
        style={{
          maskImage: useTransform(mouse, (mouse) => {
            const x = mouse.x > dimensions.x ? mouse.x - dimensions.x : 0;
            const y = mouse.y > dimensions.y ? mouse.y - dimensions.y : 0;
            return `radial-gradient(circle at ${x}px ${y}px,transparent 0%, transparent 30%, black 45%)`;
          })
        }}
        className="absolute inset-0 backdrop-blur-md bg-[#111111] z-20"
      />

      <motion.span
        style={{
          maskImage: useTransform(mouse, (mouse) => {
            if (mouse.y > dimensions.y - thresholdDistance) {
              const y = mouse.y - dimensions.y;
              const startY = Math.max(0, y + thresholdDistance);
              return `linear-gradient(to bottom, transparent 0px, transparent ${Math.max(
                0,
                startY - thresholdDistance
              )}px, black ${startY}px)`;
            } else {
              return `linear-gradient(to top, black, black)`;
            }
          })
        }}
        className="absolute inset-0 backdrop-blur-lg blur-md z-20"
      />
    </div>
  );
};

export default FogRevealText;
