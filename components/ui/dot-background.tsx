import React from 'react';

const DotBackground = ({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full relative bg-black  bg-dot-white/[0.3]  flex items-center justify-center ${className}`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};

export default DotBackground;
