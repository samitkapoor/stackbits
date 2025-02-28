import React from 'react';
import HeroIllustration from './hero-illustration';

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center">
      <p className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold mt-10">
        The Faster Way To Build.
      </p>
      <p className="text-white/60 text-xl md:text-2xl mt-5 mb-12">
        Why Start from Scratch When the Code You Need Is Already Here?
      </p>
      <div className="max-w-[1100px] w-full">
        <HeroIllustration />
      </div>
    </div>
  );
};

export default HeroSection;
