import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface RandomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const Icon = ({
  children,
  keyId,
  className
}: {
  children: React.ReactNode;
  keyId: string;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: '100%', filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: '-100%', filter: 'blur(4px)' }}
      key={keyId}
      className={cn('h-full w-full flex items-center justify-center', className)}
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.2
      }}
    >
      {children}
    </motion.span>
  );
};

const RandomButton = ({ children, className, iconClassName, ...props }: RandomButtonProps) => {
  const [hovering, setHovering] = useState(false);

  const randomEmojis = [
    '🎲',
    '🎯',
    '🎨',
    '🎭',
    '🎸',
    '🎵',
    '🎶',
    '😀',
    '😃',
    '😄',
    '🤣',
    '😂',
    '😊',
    '🚀',
    '⭐',
    '✨',
    '🔥',
    '💎',
    '🎉',
    '🍕',
    '🍰',
    '🍭',
    '🍫'
  ];

  return (
    <button
      className={cn(
        'bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] text-white pl-3.5 pr-0.5 py-0.5 rounded-full flex items-center justify-center gap-2 group hover:gap-3 active:scale-x-100 active:gap-2 transition-all duration-200',
        className
      )}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      {...props}
    >
      {children}
      <span
        className={cn(
          'w-9 h-9 flex items-start justify-start rounded-full bg-white text-black overflow-hidden border-[1.5px] border-[#93c5fd]',
          iconClassName
        )}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {!hovering ? (
            <Icon keyId="main-icon">?</Icon>
          ) : (
            <Icon keyId="random-icon-scroll" className="items-start">
              <motion.span
                className="flex flex-col items-start justify-start w-full"
                style={{
                  filter: 'blur(1px)'
                }}
                initial={{ y: '0%' }}
                animate={{
                  y: '-100%',
                  transition: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 2,
                    ease: 'linear'
                  }
                }}
                exit={{ opacity: 0, y: '-100%' }}
                transition={{
                  duration: 0.3
                }}
              >
                {randomEmojis.map((emoji, index) => (
                  <span
                    className="h-8 w-full flex items-center justify-center"
                    key={`random-icon-${emoji}-${index}`}
                  >
                    {emoji}
                  </span>
                ))}
              </motion.span>
            </Icon>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
};

export default RandomButton;
