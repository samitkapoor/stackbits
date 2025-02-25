'use client';

import React from 'react';
import { motion } from 'framer-motion';

import DotBackground from './ui/dot-background';
import HeroIllustration from './hero-illustration';
import MovingBorderButton from './ui/moving-border-button';
import { ChevronsUp, CircleCheckBig, Gauge, MoveRight, Palette } from 'lucide-react';
import Link from 'next/link';
import RainbowText from './ui/rainbow-text';
import GlitchText from './ui/glitch-text';
import IconCard from './ui/icon-card';

const HeroSection = () => {
  const features = [
    {
      icon: <CircleCheckBig className="sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] text-green-400" />,
      text: 'Pre-built React & Next.js components'
    },
    {
      icon: <ChevronsUp className="sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] text-rose-400" />,
      text: 'Optimized for TypeScript & JavaScript'
    },
    {
      icon: <Palette className="sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] text-blue-400" />,
      text: 'Styled with Tailwind CSS for rapid design'
    },
    {
      icon: <Gauge className="sm:h-[40px] sm:w-[40px] h-[30px] w-[30px] text-yellow-400" />,
      text: 'Boost development speed with reusable snippets'
    }
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center w-full relative">
        <DotBackground className="sm:gap-10 md:gap-20 py-5 md:p-8 lg:px-32 flex-col relative">
          <motion.p
            initial={{
              opacity: 0,
              scale: 1.1
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1.2, ease: 'backOut' }
            }}
            className="text-[24px] sm:text-[35px] md:text-[45px] lg:text-[55px] text-center lg:text-center font-medium leading-none z-30"
          >
            Ready to use <RainbowText duration={5}>components</RainbowText> for{' '}
            <GlitchText className="font-extrabold text-black text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight">
              React.js
            </GlitchText>
          </motion.p>

          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-start gap-10 relative">
            <div className="inline-flex flex-col items-start justify-center lg:justify-start relative lg:max-w-[650px] lg:w-auto">
              <motion.p
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1.2, ease: 'backOut', delay: 0.2 }
                }}
                className="text-[14px] sm:text-[16px] lg:text-[20px] leading-7 mt-4 text-center lg:text-left px-5"
              >
                Save time with a library of pre-built components, utility functions, and code
                snippets, along with templates for quick and efficient development.
              </motion.p>
              <div className="grid grid-cols-2 gap-2 mt-10 px-5">
                {features.map((feature) => {
                  return <IconCard key={feature.text} icon={feature.icon} text={feature.text} />;
                })}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1.2, delay: 0.2 }
                }}
                className="mt-10 flex items-center justify-center xl:justify-start px-5"
              >
                <Link href={'/docs/introduction'}>
                  <MovingBorderButton wrapperClassName="p-[2px]" className="px-4 py-2 text-xl">
                    Get Started&nbsp;
                    <MoveRight />
                  </MovingBorderButton>
                </Link>
              </motion.div>
              <motion.p
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1.2, ease: 'backOut', delay: 1.5 }
                }}
                className="text-[14px] sm:text-[16px] lg:text-[14px] leading-6 mt-10 md:mt-10 text-center lg:text-left px-5"
              >
                Other devs *write* code. You? You *assemble* greatness.{' '}
                <br className="hidden sm:block" />
                With StackBits, you get copy-paste-ready snippets that actually work (yes, really).
              </motion.p>
            </div>
            <HeroIllustration />
          </div>
        </DotBackground>
      </div>
    </div>
  );
};

export default HeroSection;
