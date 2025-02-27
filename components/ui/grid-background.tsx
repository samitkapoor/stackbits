import React from 'react';

const GridBackground = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="bg-black flex items-center justify-center flex-col text-white w-full md:px-12 p-0 text-center relative ">
      <div className="absolute inset-0 bg-grid-white/10 pointer-events-none">
        <div
          style={{
            background: 'radial-gradient(circle, transparent, #000000 99%)'
          }}
          className="h-full w-full"
        ></div>
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
};

export default GridBackground;
