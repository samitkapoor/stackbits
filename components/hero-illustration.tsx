'use client';

import React, { MouseEvent, useRef, useState } from 'react';

const HeroIllustration = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const onMouseMove = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 8;
    const y = (e.clientY - rect.top - rect.height / 2) / 8;

    divRef.current.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
  };

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    if (!buttonRef.current || !divRef.current) return;
    buttonRef.current.style.transform =
      'translateZ(50px) translateX(0px) translateY(-100px) scale(1.1)';
  };

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovering(false);
    if (!divRef.current || !buttonRef.current) return;
    divRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    buttonRef.current.style.transform = 'translateZ(0px) translateX(0px) translateY(0px) scale(1)';
  };

  return (
    <div
      ref={divRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        background: isHovering
          ? 'linear-gradient(135deg, transparent 0%, #cbcbcb30 50%, transparent 100%), linear-gradient(45deg, transparent 0%, #cbcbcb30 50%, transparent 100%)'
          : 'linear-gradient(135deg, transparent 0%, #cbcbcb25 50%, transparent 100%), linear-gradient(45deg, transparent 0%, #cbcbcb25 50%, transparent 100%)'
      }}
      className="flex flex-col gap-2 items-center justify-center border-2 rounded-xl h-[500px] w-[380px] relative transition-all duration-200 ease-linear"
    >
      <button
        ref={buttonRef}
        onMouseMove={onMouseMove}
        style={{
          background:
            'linear-gradient(61deg, rgba(255,106,0,1) 0%, rgba(255,210,0,1) 20%, rgba(224,255,0,1) 40%, rgba(70,255,0,1) 60%, rgba(0,255,175,1) 80%, rgba(0,245,255,1) 100%)'
        }}
        type="button"
        className="px-4 py-2  flicker absolute top-1/3 z-10 rounded-xl text-black text-xl border-[2px] border-white transition-all duration-1000"
      >
        Hover over me!
      </button>
      <div
        style={{
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? 'translateZ(10px)' : '',
          top: isHovering ? '122px' : ''
        }}
        className="absolute font-medium z-0 top-1/3 transition-all duration-1000"
      >
        =
      </div>
      <button
        onMouseMove={onMouseMove}
        style={{
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? 'translateZ(10px)' : '',
          top: isHovering ? '145px' : '',
          background:
            'linear-gradient(61deg, rgba(255,106,0,1) 0%, rgba(255,210,0,1) 20%, rgba(224,255,0,1) 40%, rgba(70,255,0,1) 60%, rgba(0,255,175,1) 80%, rgba(0,245,255,1) 100%)'
        }}
        type="button"
        className="px-4 py-2 font-medium absolute z-0 top-1/3 shadow-md shadow-[#ffffff4a] opacity-0 rounded-xl text-transparent text-xl transition-all duration-1000"
      >
        Hover over me!
      </button>
      <div
        style={{
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? 'translateZ(10px)' : '',
          top: isHovering ? '193px' : ''
        }}
        className="absolute z-0 font-medium top-1/3 transition-all duration-1000"
      >
        +
      </div>
      <button
        onMouseMove={onMouseMove}
        type="button"
        style={{
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? 'translateZ(10px)' : '',
          top: isHovering ? '287px' : ''
        }}
        className="px-4 py-2 font-medium absolute z-0 top-1/3 shadow-md shadow-[#ffffff4a] opacity-0 rounded-xl text-white text-xl transition-all duration-1000"
      >
        Hover over me!
      </button>
      <div
        style={{
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? 'translateZ(10px)' : '',
          top: isHovering ? '264px' : ''
        }}
        className="absolute font-medium z-0 top-1/3 transition-all duration-1000"
      >
        +
      </div>
      <button
        onMouseMove={onMouseMove}
        type="button"
        style={{
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? 'translateZ(10px)' : '',
          top: isHovering ? '216px' : ''
        }}
        className="px-4 py-2 font-medium absolute z-0 top-1/3 shadow-md shadow-[#ffffff4a] opacity-0 rounded-xl text-transparent text-xl border-[2px] border-white transition-all duration-1000"
      >
        Hover over me!
      </button>
      <p
        style={{
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? 'translateZ(50px) scale(1.1)' : 'scale(1)'
        }}
        className="absolute bottom-10 transition-all duration-700 font-medium"
      >
        All this, just one Ctrl+C, Ctrl+V away. 😉
      </p>
    </div>
  );
};

export default HeroIllustration;
