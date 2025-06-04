import React from 'react';
import BarricadeTape from './ui/barricade-tape';

const BarricadeTapeDemo = () => {
  return (
    <div className="w-full relative h-[500px]">
      <div className="overflow-y-auto overflow-x-hidden w-full flex flex-col gap-5 items-center justify-start h-[1200px]">
        <div className="h-[500px] flex items-center justify-center text-5xl font-bold">
          Scroll to see the tape
        </div>
        <BarricadeTape
          text={['CRIME SCENE', 'DO NOT CROSS']}
          delimiter={'•'}
          rotation={2}
          delay={0.5}
        />
        <BarricadeTape
          text={['BUILD QUICK', 'COPY PASTE']}
          delimiter={'•'}
          entryFrom="right"
          rotation={-2}
          className="bg-green-400"
          delay={0.5}
        />
        <BarricadeTape
          text={['Stackbits']}
          delimiter={'•'}
          entryFrom="right"
          rotation={2}
          className="bg-orange-400 mt-10"
        />
        <BarricadeTape
          text={['GET IT NOW 👇🏻']}
          delimiter={'•'}
          entryFrom="left"
          rotation={-5}
          className="bg-white mt-10"
        />
        <div className="h-[150px] mt-10 w-full"></div>
      </div>
    </div>
  );
};

export default BarricadeTapeDemo;
