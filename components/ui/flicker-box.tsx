import React from 'react';

const FlickerBox = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flicker px-10 py-10 rounded-xl bg-[#1A1A2E]">{children} </div>;
};

export default FlickerBox;
