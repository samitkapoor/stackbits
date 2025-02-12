import React from 'react';
import CustomScrollbar from './ui/custom-scrollbar';

const CustomScrollbarDemo = () => {
  return (
    <CustomScrollbar className="flex flex-col w-full h-[1500px]">
      <div className="h-[500px] w-full bg-red-500 flex items-center justify-center  ">
        Scroll Down
      </div>
      <div className="h-[500px] w-full bg-green-500" />
      <div className="h-[500px] w-full bg-blue-500" />
    </CustomScrollbar>
  );
};

export default CustomScrollbarDemo;
