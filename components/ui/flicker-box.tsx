import React from 'react';

const FlickerBox = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      style={{
        background: 'radial-gradient(circle at left, #1a1a2e, #2f2f2f)'
      }}
      className="flicker w-[250px] h-[130px] sm:w-[300px] sm:h-[180px] text-white flex justify-center items-center text-[20px] font-bold rounded-[12px] text-center relative duration-200 hover:scale-105"
    >
      {children}
    </div>
  );
};

export default FlickerBox;
