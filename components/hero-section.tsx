'use client';

import React from 'react';
import Lottie from 'lottie-react';

import DotBackground from './ui/dot-background';
import heroAnimation1 from '../public/hero-animation1.json';
import heroAnimation2 from '../public/hero-animation2.json';
import heroAnimation3 from '../public/hero-animation3.json';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full h-screen relative">
        <DotBackground className="justify-center gap-20 h-full p-20">
          <div className="inline-flex flex-col items-start justify-start relative">
            <div className="relative inline-flex items-start justify-start">
              <p className="text-[150px] leading-none absolute -top-10 opacity-40 -left-10 z-0">
                💥
              </p>
              <p className="text-[55px] font-medium leading-none z-30">
                Accelerate Your
                <br />
                Development. Build at
                <br />
                <span className="font-extrabold text-yellow-500 text-[60px] leading-tight">
                  Lightning Speed.
                </span>
              </p>
              <p className="text-[250px] leading-none absolute -bottom-10 opacity-40 -right-20 z-0">
                🚀
              </p>
            </div>
            <p className="text-[20px] leading-none mt-10 max-w-[700px]">
              A growing library of reusable snippets to help you ship projects faster, empowering
              developers with time-saving tools and ready-to-use code for seamless integration.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <div className="rounded-xl h-[250px] w-[250px] relative overflow-hidden">
                <div
                  style={{
                    background:
                      'radial-gradient(circle, rgba(11,255,0,1) 25%, rgba(255,0,0,0) 100%)'
                  }}
                  className="absolute top-0 left-0 h-full w-full"
                />
                <Lottie
                  animationData={heroAnimation1}
                  loop={true}
                  autoPlay={true}
                  className="z-20 h-full w-full opacity-80"
                />
              </div>
              <div className="rounded-full h-[250px] bg-transparent w-[250px] relative overflow-hidden border-[1px] border-white p-5">
                <Lottie
                  animationData={heroAnimation3}
                  loop={true}
                  autoPlay={true}
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="rounded-md bg-transparent h-[250px] w-[520px] relative overflow-hidden flex items-center justify-center">
              <Lottie
                animationData={heroAnimation2}
                loop={true}
                autoPlay={true}
                className="h-[1000px] w-[1000px]"
              />
            </div>
          </div>
        </DotBackground>
      </div>
    </div>
  );
};

export default HeroSection;
