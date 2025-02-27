'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="flex flex-col w-screen items-center justify-center relative pt-[80px] px-2 sm:px-14">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, #2e2e2e 0%, transparent 50%), radial-gradient(circle at 100% 0%, #eab30855 20%, transparent 50%), radial-gradient(circle at 100% 100%, #1e1e1e 0%, transparent 50%), radial-gradient(circle at 0% 100%, #2a1f3d 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, #1e1e1e 0%, transparent 50%), radial-gradient(circle at 100% 0%, #ec489955 20%, transparent 50%), radial-gradient(circle at 100% 100%, #1e1e1e 0%, transparent 50%), radial-gradient(circle at 0% 100%, #331f2d 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, #2e2e2e 0%, transparent 50%), radial-gradient(circle at 100% 0%, #3b82f655 20%, transparent 50%), radial-gradient(circle at 100% 100%, #1e1e1e 0%, transparent 50%), radial-gradient(circle at 0% 100%, #2a1f3d 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          opacity: 0.5
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
      <div className="flex items-center w-full relative">
        <div className="sm:gap-10 md:gap-10 py-5 md:p-8 lg:px-14 flex-col relative w-full flex items-start justify-start gap-10">
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
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-start gap-10 relative w-full">
            <div className="inline-flex flex-col items-start justify-center lg:justify-start relative w-full lg:w-auto">
              <motion.p
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1.2, ease: 'backOut', delay: 0.2 }
                }}
                className="text-[14px] sm:text-[16px] lg:text-[20px] leading-7 mt-4 text-center lg:text-left"
              >
                Save time with a library of pre-built components, utility functions, and code
                snippets, along with templates for quick and efficient development.
              </motion.p>
              <div className="grid grid-cols-2 gap-5 mt-10">
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
                className="mt-10 flex items-center justify-center xl:justify-start"
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
                className="text-[14px] sm:text-[16px] lg:text-[14px] leading-6 mt-10 md:mt-10 text-center lg:text-left"
              >
                Other devs *write* code. You? You *assemble* greatness.{' '}
                <br className="hidden sm:block" />
                With StackBits, you get copy-paste-ready snippets that actually work (yes, really).
              </motion.p>
            </div>
            <HeroIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
