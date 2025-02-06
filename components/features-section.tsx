'use client';

import { useScroll, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import DotBackground from './ui/dot-background';
import Image from 'next/image';
import MovingBorderButton from './ui/moving-border-button';
import BuiltForDevelopers from './built-for-developers';

const FeaturesSection = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  const features = [
    {
      title: 'Tired of building Login APIs?',
      className: 'text-white'
    },
    {
      title: 'UI Buttons?',
      className: 'text-yellow-100'
    },
    {
      title: 'Forms?',
      className: 'text-yellow-200'
    },
    {
      title: 'Or writing file upload and image handling utilities?',
      className: 'text-yellow-300'
    },
    {
      title: 'Well not anymore',
      className: 'text-yellow-400'
    },
    {
      title: 'because StackBits got you covered.',
      className: 'text-yellow-500'
    }
  ];

  return (
    <div className="flex w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center w-full mt-20 gap-10">
        <div className="flex flex-col max-w-[65%] w-full mt-20 gap-[90vh]">
          {features.map((feature, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 0.5
                  }
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.5
                  }
                }}
                key={feature.title}
                className={`flex items-center justify-center text-center w-full text-xl md:text-2xl lg:text-4xl font-semibold ${feature.className}`}
              >
                <p className="max-w-[500px]">{feature.title}</p>
              </motion.div>
            );
          })}
        </div>
        <DotBackground className="mt-50 lg:mt-0 py-60 px-10 lg:p-60 flex flex-col">
          <p className="font-semibold text-center text-yellow-400 text-3xl leading-normal">
            <span className="text-white font-bold text-lg lg:text-2xl">All that redundancy 🤢</span>
          </p>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-center text-yellow-400 text-xl lg:text-3xl leading-normal">
              Now just a Copy-Paste away
            </p>
            <motion.img
              initial={{
                opacity: 0,
                rotate: -270,
                scale: 0
              }}
              whileInView={{
                opacity: 1,
                rotate: 0,
                scale: 1
              }}
              transition={{
                ease: 'backOut',
                duration: 1,
                delay: 0.5
              }}
              src="/smiley-thumbsup.png"
              alt="smile"
              height={60}
              width={60}
              className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]"
            />
          </div>

          <Image
            src="/hero-meme.png"
            alt="hero-meme"
            height={400}
            width={400}
            className="rounded-xl flicker mt-10 h-[350px] w-[350px] lg:h-[400px] lg:w-[400px]"
          />

          <MovingBorderButton wrapperClassName="mt-10" className="px-2 py-2">
            Coming Soon
          </MovingBorderButton>
        </DotBackground>
        <BuiltForDevelopers />
      </div>
    </div>
  );
};

export default FeaturesSection;
