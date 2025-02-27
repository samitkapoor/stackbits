'use client';

import { motion } from 'framer-motion';
import React from 'react';
import IconWheel from './ui/icon-wheel';
import Image from 'next/image';
import { ClipboardPaste, Copy } from 'lucide-react';
import BarricadeTape from './ui/barricade-tape';
import TradingCard from './ui/trading-card';
import WavyText from './ui/wavy-text';
import MasonryGrid from './ui/masonry-grid';
import { dataArray } from '@/data/constants';
import GlowingDotsBackground from './ui/glowing-dots-background';
import RainbowText from './ui/rainbow-text';
import GlitchText from './ui/glitch-text';

const FeaturesSection = () => {
  const features = [
    {
      illustration: (
        <div className="w-full p-4 xl:p-10">
          <p className="text-[24px] sm:text-[35px] md:text-[45px] lg:text-[55px] text-center lg:text-center font-medium w-full">
            Why reinvent the wheel with every project?
          </p>
        </div>
      ),
      className: 'col-span-12 row-span-1'
    },
    {
      illustration: (
        <div className="h-[600px] w-full flex items-center justify-center">
          <IconWheel
            size={500}
            iconSize={64}
            icons={[
              '/css.png',
              '/framermotion.png',
              '/javascript.png',
              '/nextjs.png',
              '/nodejs.png',
              '/reactjs.png',
              '/tailwindcss.png',
              '/typescript.png'
            ]}
          />
        </div>
      ),
      className: 'col-span-5 row-span-2'
    },
    {
      illustration: (
        <div className="flex flex-col items-start justify-start h-full w-full">
          <div className="w-full h-full bg-white flex flex-col items-start justify-start rounded rounded-se-lg">
            <Image
              src="/debounce-code.png"
              className="w-full rounded-lg md:rounded-ee-none md:rounded-ss-none md:rounded-es-none md:rounded-se-lg"
              alt="debounce-code-preview"
              width={1000}
              height={1000}
            />
          </div>
          {/* <p className="text-center text-xl md:text-2xl lg:text-4xl font-semibold">
            Your time is valuable—why waste it on boilerplate?
          </p> */}
        </div>
      ),
      className: 'col-span-7 row-span-1'
    },
    {
      illustration: (
        <div className="w-full p-4 xl:p-10">
          <RainbowText className="lg:text-3xl xl:text-5xl opacity-1 flex gap-2 items-center justify-center">
            Skip the Setup. Start Building.
          </RainbowText>
        </div>
      ),
      className: 'col-span-7 row-span-1'
    },
    {
      illustration: (
        <div className="h-[500px] w-full bg-black">
          <GlowingDotsBackground dotSize={167} />
        </div>
      ),
      className: 'col-span-12 row-span-1'
    },
    {
      illustration: (
        <div className="relative">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
            <source src="/demo.mp4" type="video/mp4" />
          </video>
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="relative">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
            <source src="/demo2.mp4" type="video/mp4" />
          </video>
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="w-full p-4 xl:p-10">
          <div className="lg:text-3xl xl:text-5xl opacity-1 flex gap-2 items-center justify-center">
            <Copy className="h-10 w-10 font-bold" />
            <GlitchText>Ctrl + C</GlitchText>
          </div>
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="w-full p-4 xl:p-10">
          <div className="lg:text-3xl xl:text-5xl opacity-1 flex gap-2 items-center justify-center">
            <ClipboardPaste className="h-10 w-10 font-bold" />
            <GlitchText>Ctrl + V</GlitchText>
          </div>
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="relative w-full h-[800px] overflow-y-auto scrollbar-hide">
          <MasonryGrid items={dataArray.slice(0, 5)}></MasonryGrid>
        </div>
      ),
      className: 'col-span-12 row-span-2'
    },
    {
      illustration: (
        <div className="w-full p-4 xl:p-10 lg:text-3xl xl:text-5xl text-center flex items-center justify-center">
          <WavyText
            text="Yes. It's that easy."
            className="text-[24px] sm:text-[35px] md:text-[45px] lg:text-[55px] font-medium"
          />
        </div>
      ),
      className: 'col-span-12 row-span-1'
    }
  ];

  return (
    <div className="flex flex-col w-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center w-full relative">
        <div className="grid grid-cols-12 gap-[4px] w-[calc(100%-200px)] border-[1px] border-white/30 rounded-xl p-[4px]">
          {features.map((feature) => {
            return (
              <motion.div
                key={Date.now().toString()}
                className={feature.className + ''}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.3, delay: 0.2 } }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-full flex items-center justify-center relative h-full border-[1px] border-white/30 rounded-lg overflow-hidden`}
                >
                  {feature.illustration}
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* <div className="flex flex-col max-w-[65%] w-full mt-20 gap-10">
          {features.map((feature) => {
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
                  className={`flex items-center justify-center text-center w-full text-xl md:text-2xl lg:text-4xl font-semibold`}
                >
                  <p className="max-w-[500px]">{feature.title}</p>
                </motion.div>
                <div className={`w-full flex items-center justify-center my-10 relative`}>
                  {feature.illustration}
                </div>
              </div>
            );
          })}
        </div> */}

        {/* <Link href="/docs/introduction">
          <MovingBorderButton className="text-lg md:text-xl lg:text-3xl font-medium !px-5 sm:!px-10 py-4">
            Join the speedforce
          </MovingBorderButton>
        </Link> */}
      </div>

      {/* <BuiltForDevelopers /> */}
    </div>
  );
};

export default FeaturesSection;
