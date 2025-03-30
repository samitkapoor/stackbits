'use client';

import React from 'react';
import HeroIllustration from './hero-illustration';
import MovingBorderButton from './ui/moving-border-button';
import ShineButton from './ui/shine-button';
import Link from 'next/link';
import { Command, MoveRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center px-0 sm:px-6 md:px-8">
      <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mt-6 sm:mt-8 md:mt-10">
        The Faster Way To Build.
      </h1>
      <p className="text-white/60 text-base sm:text-lg md:text-xl lg:text-2xl my-3 sm:my-4 md:my-5">
        Why Start from Scratch When the Code You Need Is Already Here?
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4 md:gap-5 mt-4 sm:mt-5">
        <Link href={'/docs/introduction'}>
          <MovingBorderButton
            wrapperClassName="hover:scale-105 sm:hover:scale-110 transition-all duration-300 hover:p-[2px]"
            className="px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg md:text-xl bg-neutral-900"
          >
            Get Started&nbsp;
            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </MovingBorderButton>
        </Link>
        <p className="my-2 sm:my-0">or, check out our</p>
        <Link href={'/docs/browserwindow'}>
          <ShineButton className="px-3 py-2 sm:px-4 sm:py-3 text-base sm:text-lg md:text-xl !rounded-full border-2 bg-neutral-900">
            <Command className="w-4 h-4 sm:w-5 sm:h-5" />
            &nbsp; Latest Component
          </ShineButton>
        </Link>
      </div>
      <div className="w-full max-w-[1100px] mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <HeroIllustration />
      </div>
    </div>
  );
};

export default HeroSection;
