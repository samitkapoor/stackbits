import React from 'react';

const MovingBorderCard = ({
  children,
  wrapperClassName,
  className
}: {
  children?: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
}) => {
  return (
    <div className={`moving-border-card p-[3px] ${wrapperClassName}`}>
      <div className={`flex items-center justify-center relative ${className}`}>{children}</div>
    </div>
  );
};

export default MovingBorderCard;
