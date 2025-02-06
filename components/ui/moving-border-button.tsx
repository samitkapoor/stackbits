import React from 'react';

const MovingBorderButton = ({
  children,
  wrapperClassName,
  className,
  onClick
}: {
  children?: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      className={`moving-border-btn rounded-full p-[1px] ${wrapperClassName}`}
      onClick={onClick}
    >
      <div
        className={`bg-black rounded-full px-2 py-1 flex items-center justify-center relative ${className}`}
      >
        {children}
      </div>
    </button>
  );
};

export default MovingBorderButton;
