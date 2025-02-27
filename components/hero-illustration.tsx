'use client';

import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import BrowserWindow from './ui/browser-window';

const HeroIllustration = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!parentRef.current) return;
      parentRef.current.style.opacity = '1';
    }, 200);
  }, [divRef]);

  const onMouseMove = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;

    const xd = (mx - width / 2) / 10;
    const yd = (height / 2 - my) / 10;

    divRef.current.style.transform = `perspective(1000px) rotateY(${xd}deg) rotateX(${yd}deg)`;
  };

  const onMouseEnter = () => {
    setIsHovering(true);
    if (!buttonRef.current || !divRef.current) return;
    buttonRef.current.style.transform =
      'translateZ(50px) translateX(0px) translateY(-100px) scale(1.1)';
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    if (!divRef.current || !buttonRef.current) return;
    divRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    buttonRef.current.style.transform = 'translateZ(0px) translateX(0px) translateY(0px) scale(1)';
  };

  return (
    <BrowserWindow
      ref={parentRef}
      url="https://stackbits.dev/"
      className="opacity-0 transition-all"
    >
      <div
        ref={divRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        style={{
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
          background: isHovering
            ? 'linear-gradient(135deg, transparent 0%, #cbcbcb10 50%, transparent 100%), linear-gradient(45deg, transparent 0%, #cbcbcb10 50%, transparent 100%)'
            : 'linear-gradient(135deg, transparent 0%, #cbcbcb08 50%, transparent 100%), linear-gradient(45deg, transparent 0%, #cbcbcb08 50%, transparent 100%)'
        }}
        className="flex flex-col gap-2 items-center justify-center border-2 border-neutral-400 hover:border-neutral-300 rounded-xl h-[500px] w-[320px] lg:w-[380px] relative transition-all duration-300 ease-linear scale-90"
      >
        <button
          ref={buttonRef}
          onMouseMove={onMouseMove}
          style={{
            background:
              'linear-gradient(61deg, rgba(255,106,0,1) 0%, rgba(255,210,0,1) 20%, rgba(224,255,0,1) 40%, rgba(70,255,0,1) 60%, rgba(0,255,175,1) 80%, rgba(0,245,255,1) 100%)'
          }}
          type="button"
          className="px-4 py-2  flicker absolute top-1/3 z-10 rounded-xl text-black sm:text-xl border-[2px] border-white transition-all duration-1000"
        >
          Hover over me!
        </button>
        <div
          style={{
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? 'translateZ(10px)' : '',
            top: isHovering ? '122px' : ''
          }}
          className="absolute font-medium z-0 top-1/3 transition-all duration-1000 select-none"
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
          className="px-4 py-2 font-medium absolute z-0 top-1/3 shadow-md shadow-[#ffffff4a] opacity-0 rounded-xl text-transparent sm:text-xl transition-all duration-1000"
        >
          Hover over me!
        </button>
        <div
          style={{
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? 'translateZ(10px)' : '',
            top: isHovering ? '193px' : ''
          }}
          className="absolute z-0 font-medium top-1/3 transition-all duration-1000 select-none"
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
          className="px-4 py-2 font-medium absolute z-0 top-1/3 shadow-md shadow-[#ffffff4a] opacity-0 rounded-xl text-white sm:text-xl transition-all duration-1000"
        >
          Hover over me!
        </button>
        <div
          style={{
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? 'translateZ(10px)' : '',
            top: isHovering ? '264px' : ''
          }}
          className="absolute font-medium z-0 top-1/3 transition-all duration-1000 select-none"
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
          className="px-4 py-2 font-medium absolute z-0 top-1/3 shadow-md shadow-[#ffffff4a] opacity-0 rounded-xl text-transparent sm:text-xl border-[2px] border-white transition-all duration-1000"
        >
          Hover over me!
        </button>
        <p
          style={{
            opacity: isHovering ? 1 : 0,
            transform: isHovering ? 'translateZ(50px) scale(1.1)' : 'scale(1)'
          }}
          className="absolute bottom-10 transition-all text-xs sm:text-sm duration-700 font-medium"
        >
          All this, just one Ctrl+C, Ctrl+V away. 😉
        </p>
      </div>
    </BrowserWindow>
  );
};

export default HeroIllustration;
