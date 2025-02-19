'use client';

import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

import DotBackground from './ui/dot-background';
import HeroIllustration from './hero-illustration';
import MovingBorderButton from './ui/moving-border-button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import RainbowText from './ui/rainbow-text';
import GlitchText from './ui/glitch-text';

const HeroSection = () => {
  const controls = useAnimationControls();

  const features = [
    { icon: '✅', text: 'Pre-built React & Next.js components' },
    { icon: '⚡', text: 'Optimized for TypeScript & JavaScript' },
    { icon: '🎨', text: 'Styled with Tailwind CSS' },
    { icon: '🚀', text: 'Boost development speed' }
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

    setTimeout(() => {
      controls.start('cta');
    }, 2100);
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex items-center w-full relative">
        <DotBackground className="justify-center gap-20 lg:h-[80vh] p-20 flex-col relative">
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
            className="text-[16px] sm:text-[25px] md:text-[45px] lg:text-[55px] text-center lg:text-left font-medium leading-none z-30"
          >
            Ready to use <RainbowText duration={5}>components</RainbowText> for{' '}
            <GlitchText className="font-extrabold text-black text-[20px] sm:text-[35px] md:text-[50px] lg:text-[60px] leading-tight">
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
            className="text-[75px] select-none lg:text-[150px] leading-none absolute opacity-40 left-[175px] z-0 top-[100px]"
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
            className="text-[100px] select-none lg:text-[250px] leading-none absolute opacity-40 right-[175px] z-0 top-[100px]"
          >
            🚀
          </motion.p>
          <div className="flex items-start gap-10 relative">
            <div className="inline-flex flex-col items-start justify-center lg:justify-start relative lg:max-w-[650px] lg:w-auto">
              <motion.p
                initial={{
                  opacity: 0,
                  scale: 1.1
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.2, ease: 'backOut', delay: 0.2 }
                }}
                className="text-xs sm:text-[16px] lg:text-[20px] leading-6 mt-4 text-center lg:text-left"
              >
                A growing library of reusable snippets to help you ship projects faster, empowering
                developers with time-saving tools and ready-to-use code for seamless integration.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: '500px' }}
                variants={{
                  cta: {
                    opacity: 1,
                    y: '0px',
                    transition: { ease: ['backOut'], duration: 0.7 }
                  }
                }}
                animate={controls}
                className="mt-5 flex items-center justify-center w-full lg:justify-start"
              >
                <Link href={'/docs/introduction'}>
                  <MovingBorderButton className="px-4 py-2 text-xl">
                    Get Started&nbsp;
                    <MoveRight />
                  </MovingBorderButton>
                </Link>
              </motion.div>
            </div>
            <HeroIllustration />
          </div>
        </DotBackground>
      </div>
    </div>
  );
};

export default HeroSection;
