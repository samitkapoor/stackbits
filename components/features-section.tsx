'use client';

import { motion } from 'framer-motion';
import React from 'react';
import DotBackground from './ui/dot-background';
import Image from 'next/image';
import MovingBorderButton from './ui/moving-border-button';
import BuiltForDevelopers from './built-for-developers';
import Link from 'next/link';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Tired of building Login APIs? 🤕',
      className: 'text-white',
      dividerClassName: 'bg-gradient-to-b from-transparent to-yellow-100'
    },
    {
      title: 'UI Buttons? 😔',
      className: 'text-yellow-100',
      dividerClassName: 'bg-gradient-to-b from-yellow-100 to-yellow-200'
    },
    {
      title: 'Or Forms? 🙂',
      className: 'text-yellow-200',
      dividerClassName: 'bg-gradient-to-b from-yellow-200 to-yellow-300'
    },
    {
      title: 'Or writing file upload and image handling utilities? 💀',
      className: 'text-yellow-300',
      dividerClassName: 'bg-gradient-to-b from-yellow-300 to-yellow-400'
    },
    {
      title: 'Well not anymore ❓',
      className: 'text-yellow-400',
      dividerClassName: 'bg-gradient-to-b from-yellow-400 to-yellow-500'
    },
    {
      title: 'because StackBits got you covered. 😎',
      className: 'text-yellow-500',
      dividerClassName: 'bg-gradient-to-b from-yellow-500 to-transparent'
    }
  ];

  return (
    <div className="flex w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center w-full mt-20 gap-10">
        <div className="flex flex-col max-w-[65%] w-full mt-20">
          {features.map((feature, index) => {
            return (
              <div key={feature.title + Date.now().toString()}>
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
                  className={`flex items-center justify-center text-center w-full text-xl md:text-2xl lg:text-4xl font-semibold ${feature.className}`}
                >
                  <p className="max-w-[500px]">{feature.title}</p>
                </motion.div>
                <div
                  className={`${
                    index === features.length - 1 ? 'h-[45vh]' : 'h-[90vh]'
                  } w-full flex items-center justify-center my-10 relative`}
                >
                  <div className={`h-full w-[1px] ${feature.dividerClassName}`} />
                </div>
              </div>
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

          <Link href={'/docs/introduction'}>
            <MovingBorderButton wrapperClassName="mt-20" className="px-2 py-2">
              Let&apos;s gooooo!
            </MovingBorderButton>
          </Link>
        </DotBackground>
        <BuiltForDevelopers />
      </div>
    </div>
  );
};

export default FeaturesSection;
