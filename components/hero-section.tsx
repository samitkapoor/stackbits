'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import DotBackground from './ui/dot-background';
import heroAnimation1 from '../public/hero-animation1.json';
import heroAnimation2 from '../public/hero-animation2.json';
import heroAnimation3 from '../public/hero-animation3.json';
import DecryptedText from './ui/decrypted-text';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center w-full h-screen relative">
        <DotBackground className="justify-center gap-20 h-full p-20">
          <div className="inline-flex flex-col items-start justify-start relative">
            <div className="relative inline-flex items-start justify-start">
              <motion.p
                initial={{
                  scale: 3
                }}
                animate={{
                  scale: 1,
                  transition: { ease: ['backOut'], duration: 0.3 }
                }}
                className="text-[150px] leading-none absolute opacity-40 -left-10 z-0 -top-10"
              >
                💥
              </motion.p>
              <p className="text-[55px] font-medium leading-none z-30">
                Accelerate Your
                <br />
                Development. Build at
                <br />
                <DecryptedText
                  className="font-extrabold text-yellow-500 text-[60px] leading-tight"
                  encryptedClassName="font-semibold text-neutral-100 text-[60px] leading-tight"
                  sequential={true}
                  speed={50}
                  text="Lightning Speed."
                  animateOn="view"
                />
              </p>
              <motion.p
                initial={{
                  opacity: 0,
                  y: '-200px'
                }}
                animate={{
                  opacity: 0.4,
                  y: '10px',
                  transition: { ease: ['backOut'], duration: 1.2 }
                }}
                className="text-[250px] leading-none absolute opacity-40 -right-20 z-0"
              >
                🚀
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: '500px' }}
              animate={{
                opacity: 1,
                y: '0px',
                transition: { ease: ['linear'], duration: 0.4 }
              }}
              className="text-[20px] leading-none mt-10 max-w-[700px]"
            >
              A growing library of reusable snippets to help you ship projects faster, empowering
              developers with time-saving tools and ready-to-use code for seamless integration.
            </motion.p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <motion.div
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1,
                  transition: { ease: ['backOut'], duration: 0.6 }
                }}
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
                  left: '-250px',
                  scale: 0
                }}
                animate={{
                  left: '0px',
                  scale: 1,
                  transition: { ease: ['backOut'], duration: 1.2 }
                }}
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
                y: '-260px',
                x: '-200px',
                opacity: 0,
                scale: 0
              }}
              animate={{
                y: '0px',
                scale: 1,
                opacity: 0.8,
                x: '0px',
                transition: { duration: 0.7 }
              }}
              className="rounded-md bg-transparent h-[250px] w-[520px] relative overflow-hidden flex items-center justify-center"
            >
              <Lottie
                animationData={heroAnimation2}
                loop={true}
                autoPlay={true}
                className="h-[1000px] w-[1000px]"
              />
            </motion.div>
          </div>
        </DotBackground>
      </div>
    </div>
  );
};

export default HeroSection;
