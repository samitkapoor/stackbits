'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MouseEventHandler, useRef, useState, useLayoutEffect } from 'react';

type ExpandableIconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
  text: string;
  className?: string;
};

const ExpandableIconButton = ({ onClick, icon, text, className }: ExpandableIconButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth);
    }
  }, [text]);

  const collapsedWidth = 52;
  const expandedWidth = collapsedWidth + textWidth + 8; // 8px for gap

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      className="outline-none"
    >
      <motion.div
        animate={{
          width: isHovering ? expandedWidth : collapsedWidth
        }}
        transition={{
          duration: 0.25,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        className={cn(
          'h-[42px] rounded-full border flex gap-2 px-4 py-3 items-center justify-center overflow-hidden',
          className
        )}
      >
        <div className="shrink-0 whitespace-nowrap">{icon}</div>
        {isHovering && (
          <motion.span
            ref={textRef}
            initial={{
              opacity: 0,
              scale: 0.8,
              x: -10
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x: -10
            }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.05
            }}
            className="whitespace-nowrap"
          >
            {text}
          </motion.span>
        )}
      </motion.div>

      {/* Hidden text element for measuring width */}
      <span ref={textRef} className="absolute invisible whitespace-nowrap" aria-hidden="true">
        {text}
      </span>
    </button>
  );
};

export default ExpandableIconButton;
