import { cn } from '@/lib/utils';
import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

type GlassGrid = {
  items: ReactNode[];
  columns?: number;
};

type GlassCardProps = {
  children?: ReactNode;
  className?: string;
  index: number;
};

const GlassCard = ({ children, className, index }: GlassCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={{ y: [10, 0], opacity: [0, 1] }}
      transition={{ duration: 0.2, delay: 0.1 * (index + 1) }}
      className="rounded-2xl relative min-w-[250px]"
    >
      <div
        className={cn(
          `h-full w-full transition-all overflow-hidden z-10 absolute inset-0 rounded-2xl backdrop-blur-[1px] hover:backdrop-blur-0`,
          'border-transparent border hover:border-white/25',
          className
        )}
      >
        <motion.span
          className="absolute inset-0 z-[20] w-full pointer-events-none"
          style={{
            background: 'linear-gradient(-70deg, transparent 40%, #ffffff99 50%, transparent 60%)',
            filter: 'blur(10px)'
          }}
          initial={{ x: '-100%' }}
          animate={{ x: isHovering ? '100%' : '-100%' }}
          transition={{
            type: 'spring',
            stiffNess: 300,
            damping: 40
          }}
        />
      </div>
      <motion.div
        animate={{
          rotateZ: isHovering ? -5 : 0,
          y: isHovering ? -10 : 0,
          x: isHovering ? -5 : 0
        }}
        transition={{
          type: 'spring',
          stiffNess: 100,
          damping: 10
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const GlassGrid = ({ items, columns = 3 }: GlassGrid) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '20px'
      }}
      className={`grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`}
    >
      {items.map((item, i) => {
        return (
          <GlassCard key={`glass-item-${i}`} index={i}>
            {item}
          </GlassCard>
        );
      })}
    </div>
  );
};

export default GlassGrid;
