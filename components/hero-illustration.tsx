'use client';

import React, { MouseEvent, useRef, useState } from 'react';

const HeroIllustration = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const onMouseMove = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 5;
    const y = (e.clientY - rect.top - rect.height / 2) / 5;

    divRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const onMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovering(true);
    if (!buttonRef.current) return;
    buttonRef.current.style.transform =
      'translateZ(-1000px) translateX(0px) translateY(-30px) scale(1.1)';
  };

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    setIsHovering(false);
    if (!divRef.current || !buttonRef.current) return;
    divRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    buttonRef.current.style.transform = 'translateZ(0px) translateX(0px) translateY(0px)';
  };

  return (
    <div
      ref={divRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        background:
          'linear-gradient(135deg, transparent 0%, #cbcbcb25 50%, transparent 100%), linear-gradient(45deg, transparent 0%, #cbcbcb25 50%, transparent 100%)'
      }}
      className="flex flex-col items-center justify-center border-2 rounded-xl h-[500px] w-[380px] relative transition-all duration-200 ease-linear"
    >
      <button
        ref={buttonRef}
        onMouseMove={onMouseMove}
        style={{
          background:
            'linear-gradient(61deg, rgba(255,106,0,1) 0%, rgba(255,210,0,1) 20%, rgba(224,255,0,1) 40%, rgba(70,255,0,1) 60%, rgba(0,255,175,1) 80%, rgba(0,245,255,1) 100%)'
        }}
        type="button"
        className="px-4 py-2 rounded-xl text-black text-xl border-[2px] border-white transition-all duration-1000"
      >
        Hover over me!
      </button>
    </div>
  );
};

export default HeroIllustration;
