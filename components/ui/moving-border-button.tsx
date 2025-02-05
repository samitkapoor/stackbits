import React from 'react';

const MovingBorderButton = ({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button className="moving-border-btn rounded-full p-[1px]">
      <div
        className={`bg-black rounded-full px-2 py-1 flex items-center justify-center relative ${className}`}
      >
        {children}
      </div>
    </button>
  );
};

export default MovingBorderButton;
