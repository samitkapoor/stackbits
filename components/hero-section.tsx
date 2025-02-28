'use client';

import React from 'react';
import HeroIllustration from './hero-illustration';
import MovingBorderButton from './ui/moving-border-button';
import ShineButton from './ui/shine-button';
import Link from 'next/link';
import { Command, MoveRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center text-center">
      <p className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold mt-10">
        The Faster Way To Build.
      </p>
      <p className="text-white/60 text-xl md:text-2xl my-5">
        Why Start from Scratch When the Code You Need Is Already Here?
      </p>
      <div className="flex justify-center items-center gap-5 mt-5">
        <Link href={'/docs/introduction'}>
          <MovingBorderButton
            wrapperClassName="hover:scale-110 transition-all duration-300 hover:p-[2px]"
            className="px-4 py-3 text-xl"
          >
            Get Started&nbsp;
            <MoveRight />
          </MovingBorderButton>
        </Link>
        <p>or, check out our</p>
        <Link href={'/docs/fileStack'}>
          <ShineButton className="px-4 py-3 text-xl !rounded-full border-2 bg-neutral-900">
            <Command />
            &nbsp; Latest Component
          </ShineButton>
        </Link>
      </div>
      <div className="max-w-[1100px] w-full mt-12">
        <HeroIllustration />
      </div>
    </div>
  );
};

export default HeroSection;
