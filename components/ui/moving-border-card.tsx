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
      <div className={`${className}`}>{children}</div>
    </div>
  );
};

export default MovingBorderCard;
