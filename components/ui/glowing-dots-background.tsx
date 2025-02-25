'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const GRID_SIZE = 30;
const FADE_DELAY = 1000;

type GlowingDotsBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

const getRandomColor = () => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFD700', '#00FFFF'];
  return `${colors[Math.floor(Math.random() * colors.length)]}77`;
};

const GlowingDotsBackground = ({ children, className }: GlowingDotsBackgroundProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const activeCells = useRef<Set<number>>(new Set());
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });
  const [hoveredCells, setHoveredCells] = useState<number[]>([]);

  useEffect(() => {
    if (!divRef.current) return;

    const updateGridSize = () => {
      const height = divRef.current!.offsetHeight;
      const width = divRef.current!.offsetWidth;
      setGridSize({
        rows: Math.ceil(height / GRID_SIZE),
        cols: Math.ceil(width / GRID_SIZE)
      });
    };

    updateGridSize();
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (activeCells.current.has(index)) return;

    activeCells.current.add(index);
    setHoveredCells((prev) => [...prev, index]);

    setTimeout(() => {
      activeCells.current.delete(index);
      setHoveredCells((prev) => prev.filter((i) => i !== index));
    }, FADE_DELAY);
  };

  return (
    <div ref={divRef} className="h-full w-full flex items-center justify-center relative">
      <div
        id="glowing-dots-background"
        style={{
          gridTemplateColumns: `repeat(${gridSize.cols}, ${GRID_SIZE}px)`
        }}
        className="grid overflow-hidden h-full w-full"
      >
        {Array(gridSize.rows * gridSize.cols)
          .fill(null)
          .map((_, i) => (
            <motion.div
              key={'box' + i}
              onMouseEnter={() => handleMouseEnter(i)}
              animate={{
                boxShadow: hoveredCells.includes(i) ? `1px 1px 20px 2px ${getRandomColor()}` : ''
              }}
              transition={{ duration: 0.3 }}
              className={`h-[${GRID_SIZE}px] w-[${GRID_SIZE}px] border-[1px] rounded-full border-neutral-800`}
            />
          ))}
      </div>

      <div
        style={{ background: 'radial-gradient(circle at center, transparent, #000000)' }}
        className="h-full w-full absolute pointer-events-none"
      />

      <div
        className={`h-full w-full flex items-center pointer-events-none justify-center absolute top-0 left-0 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowingDotsBackground;
