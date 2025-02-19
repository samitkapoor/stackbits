'use client';

import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import DotBackground from './ui/dot-background';
import HeroIllustration from './hero-illustration';
import MovingBorderButton from './ui/moving-border-button';
import { ChevronsUp, CircleCheckBig, Gauge, MoveRight, Palette } from 'lucide-react';
import Link from 'next/link';
import RainbowText from './ui/rainbow-text';
import GlitchText from './ui/glitch-text';
import IconCard from './ui/icon-card';

const HeroSection = () => {
  const controls = useAnimationControls();

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

  useEffect(() => {
    setTimeout(() => {
      controls.start('explode');

      setTimeout(() => {
        controls.start('shake');
      }, 1000);
    }, 600);

    setTimeout(() => {
      controls.start('launch');

      setTimeout(() => {
        controls.start('flyRocket');
      }, 1000);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center w-full relative">
        <DotBackground className="justify-center sm:gap-10 md:gap-20 py-5 md:p-8 flex-col relative">
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
          <motion.p
            initial={{
              opacity: 0,
              y: '-800px'
            }}
            variants={{
              explode: {
                opacity: 0.2,
                y: '10px',
                transition: { ease: ['backOut'], duration: 0.7 }
              },
              shake: {
                x: [0, 1, 0, -1, 0, 1, 0, -1, 0],
                y: [10, 11, 10, 9, 10, 9, 10, 11, 10],
                scale: [1, 1, 1, 1.1, 1, 1.1, 1, 1.1, 1],
                transition: {
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  duration: 5
                }
              }
            }}
            animate={controls}
            className="text-[75px] hidden sm:block select-none lg:text-[150px] leading-none absolute opacity-40 left-[175px] z-0 top-[100px]"
          >
            💥
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              y: '-800px'
            }}
            variants={{
              launch: {
                opacity: 0.2,
                y: '0px',
                transition: { ease: ['backOut'], duration: 0.7 }
              },
              flyRocket: {
                x: [0, 1, 0, -1, 0, 1, 0, -1, 0],
                y: [0, 1, 0, -1, 0, -1, 0, 1, 0],
                scale: [1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1],
                transition: {
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  duration: 3
                }
              }
            }}
            animate={controls}
            className="text-[100px] select-none hidden sm:block lg:text-[250px] leading-none absolute opacity-40 right-[175px] z-0 top-[100px]"
          >
            🚀
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
                className="text-[14px] sm:text-[16px] lg:text-[20px] leading-6 mt-4 text-center lg:text-left px-5"
              >
                A growing library of reusable snippets to help you ship projects faster, empowering
                developers with time-saving tools and ready-to-use code for seamless integration.
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
                  <MovingBorderButton className="px-4 py-2 text-xl">
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
                  transition: { duration: 1.2, ease: 'backOut', delay: 2 }
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
