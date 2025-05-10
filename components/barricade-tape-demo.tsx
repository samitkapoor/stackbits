import React from 'react';
import EndToEndBanner from './ui/barricade-tape';

const BarricadeTapeDemo = () => {
  return (
    <div className="w-full h-full relative">
      <div className="overflow-y-auto overflow-x-hidden w-full h-full flex flex-col items-center justify-center">
        <div className="h-[50px]"></div>
        <EndToEndBanner text={'STACKBITS TRICK'} delimiter={'•'} />
        <EndToEndBanner
          text={['BUILD QUICK', 'COPY PASTE']}
          delimiter={'•'}
          entryFrom="right"
          rotation={2}
          className="bg-yellow-400 mt-2"
        />
        <div className="h-[150px] mt-10 w-full"></div>
      </div>
    </div>
  );
};

export default BarricadeTapeDemo;
