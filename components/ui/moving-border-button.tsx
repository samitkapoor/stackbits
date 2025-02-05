import React from 'react';

const MovingBorderButton = ({
  children,
  wrapperClassName,
  className
}: {
  children?: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
}) => {
  return (
    <button className={`moving-border-btn rounded-full p-[1px] ${wrapperClassName}`}>
      <div
        className={`bg-black rounded-full px-2 py-1 flex items-center justify-center relative ${className}`}
      >
        {children}
      </div>
    </button>
  );
};

export default MovingBorderButton;
