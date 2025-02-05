'use client';

import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion, useAnimationControls } from 'framer-motion';

import DotBackground from './ui/dot-background';
import heroAnimation1 from '../public/hero-animation1.json';
import heroAnimation2 from '../public/hero-animation2.json';
import heroAnimation3 from '../public/hero-animation3.json';
import HeroIllustration from './hero-illustration';

const HeroSection = () => {
  const controls = useAnimationControls();

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
      controls.start('visibileDescription');
    }, 1400 + 1500);

    setTimeout(() => {
      controls.start('heroAnimation1');
    }, 1800 - 400);

    setTimeout(() => {
      controls.start('heroAnimation3');
    }, 2000 - 400);

    setTimeout(() => {
      controls.start('heroAnimation2');
    }, 2200 - 400);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full h-screen relative">
        <DotBackground className="justify-center gap-20 h-full p-20">
          <div className="inline-flex flex-col items-start justify-start relative">
            <div className="relative inline-flex items-start justify-start">
              <motion.p
                initial={{
                  opacity: 0,
                  y: '-800px'
                }}
                variants={{
                  explode: {
                    opacity: 0.4,
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
                className="text-[150px] leading-none absolute opacity-40 -left-10 z-0 -top-20"
              >
                💥
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  scale: 3
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.5, ease: 'backOut' }
                }}
                className="text-[55px] font-medium leading-none z-30"
              >
                Accelerate Your
                <br />
                Development. Build at
                <br />
                <span className="font-extrabold text-yellow-500 text-[60px] leading-tight">
                  Lightning Speed.
                </span>
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  y: '-800px'
                }}
                variants={{
                  launch: {
                    opacity: 0.4,
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
                className="text-[250px] leading-none absolute opacity-40 -right-20 z-0"
              >
                🚀
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              variants={{
                visibileDescription: {
                  opacity: 1,
                  transition: { ease: ['backOut'], duration: 4 }
                }
              }}
              animate={controls}
              className="text-[20px] leading-none mt-10 max-w-[700px]"
            >
              A growing library of reusable snippets to help you ship projects faster, empowering
              developers with time-saving tools and ready-to-use code for seamless integration.
            </motion.p>
          </div>
          <HeroIllustration />
          {/* <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <motion.div
                initial={{
                  scale: 0,
                  rotateZ: '-180deg'
                }}
                variants={{
                  heroAnimation1: {
                    scale: 1,
                    rotateZ: '0deg',
                    transition: { ease: ['backOut'], duration: 0.6 }
                  }
                }}
                animate={controls}
                className="rounded-xl h-[250px] w-[250px] relative overflow-hidden"
              >
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
              </motion.div>
              <motion.div
                initial={{
                  scale: 0,
                  rotateZ: '180deg'
                }}
                variants={{
                  heroAnimation3: {
                    scale: 1,
                    rotateZ: '0deg',
                    transition: { ease: ['backOut'], duration: 0.6 }
                  }
                }}
                animate={controls}
                className="rounded-full h-[250px] bg-transparent w-[250px] relative overflow-hidden border-[1px] border-white p-5"
              >
                <Lottie
                  animationData={heroAnimation3}
                  loop={true}
                  autoPlay={true}
                  className="h-full w-full"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0
              }}
              variants={{
                heroAnimation2: {
                  scale: 1,
                  opacity: 0.8,
                  transition: { ease: ['backOut'], duration: 0.6 }
                }
              }}
              animate={controls}
              className="rounded-md bg-transparent h-[250px] w-[520px] relative overflow-hidden flex items-center justify-center"
            >
              <Lottie
                animationData={heroAnimation2}
                loop={true}
                autoPlay={true}
                className="h-[1000px] w-[1000px]"
              />
            </motion.div>
          </div> */}
        </DotBackground>
      </div>
    </div>
  );
};

export default HeroSection;
