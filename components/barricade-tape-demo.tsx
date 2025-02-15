import React from 'react';
import EndToEndBanner from './ui/barricade-tape';
import RainbowText from './ui/rainbow-text';

const BarricadeTapeDemo = () => {
  return (
    <div className="w-full h-full relative">
      <div className="overflow-y-auto overflow-x-hidden w-full flex flex-col items-center justify-center p-4 ">
        <div className="h-[600px] w-full flex flex-col items-center p-4 gap-5">
          <RainbowText className="text-lg font-bold mt-40">Scroll down in this box...</RainbowText>
        </div>
        <EndToEndBanner text={'STACKBITS TRICK'} delimiter={'•'} />
        <EndToEndBanner
          text={['BUILD QUICK', 'COPY PASTE']}
          delimiter={'•'}
          entryFrom="right"
          rotation={10}
          className="bg-yellow-400 mt-2"
        />
        <div className="h-[150px] mt-10 w-full"></div>
      </div>
    </div>
  );
};

export default BarricadeTapeDemo;
