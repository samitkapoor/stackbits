'use client';

import { useScroll, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import DotBackground from './ui/dot-background';
import Image from 'next/image';
import MovingBorderButton from './ui/moving-border-button';

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
    <div className="flex w-full items-center justify-center bg-black">
      <div className="flex flex-col max-w-[65%] w-full my-32 gap-[100vh]">
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
              className={`flex items-center justify-center text-center w-full text-2xl font-medium ${feature.className}`}
            >
              {feature.title}
            </motion.div>
          );
        })}
        <DotBackground className="h-screen flex flex-col">
          <p className="font-semibold text-center text-yellow-400 text-3xl leading-normal">
            <span className="text-white font-bold text-2xl">All that redundancy 🤢</span>
          </p>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-center text-yellow-400 text-3xl leading-normal">
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
            />
          </div>
          <MovingBorderButton
            wrapperClassName="rounded-2xl mt-2 p-[3px]"
            className="rounded-2xl px-2 py-2"
          >
            <Image
              src="/hero-meme.png"
              alt="hero-meme"
              height={400}
              width={400}
              className="rounded-xl"
            />
          </MovingBorderButton>
        </DotBackground>
      </div>
    </div>
  );
};

export default FeaturesSection;
