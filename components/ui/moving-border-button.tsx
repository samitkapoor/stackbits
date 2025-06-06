import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const MovingBorderButton = ({
  children,
  wrapperClassName,
  className,
  onClick,
  type = 'button'
}: {
  children?: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset';
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={cn(`rounded-full overflow-hidden relative p-[1.5px]`, wrapperClassName)}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type={type}
    >
      <span
        className={cn(
          'absolute transition-all inset-[-200%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_30%,#00FFFF_100%)] blur-md',
          isHovered && 'bg-[conic-gradient(from_90deg,transparent_30%,#FFFFFF_100%)] '
        )}
      />
      <span
        className={cn(
          `bg-black transition-all hover:bg-neutral-900 rounded-full px-4 py-2 flex items-center justify-center relative`,
          className
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default MovingBorderButton;
