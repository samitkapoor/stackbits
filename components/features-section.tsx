'use client';

import { motion } from 'framer-motion';
import React from 'react';
import IconWheel from './ui/icon-wheel';
import Image from 'next/image';
import { ClipboardPaste, Copy, Sparkles } from 'lucide-react';
import WavyText from './ui/wavy-text';
import MasonryGrid from './ui/masonry-grid';
import { dataArray } from '@/data/constants';
import GlowingDotsBackground from './ui/glowing-dots-background';
import RainbowText from './ui/rainbow-text';
import GlitchText from './ui/glitch-text';
import Link from 'next/link';
import ShineButton from './ui/shine-button';

const FeaturesSection = () => {
  const features = [
    {
      illustration: (
        <div className="w-full p-4 xl:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-sm"></div>
          <p className="text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px] text-center font-medium w-full relative z-10 text-white drop-shadow-lg">
            Why reinvent the wheel with every project?
          </p>
        </div>
      ),
      className: 'col-span-12 row-span-1'
    },
    {
      illustration: (
        <div className="w-full flex items-center justify-center relative overflow-hidden h-full">
          <div
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, transparent 0%, rgba(255,255,0,0.15) 80%)
              `,
              backgroundSize: '10px 10px, 10px 10px, 100% 100%',
              backgroundPosition: 'center center'
            }}
            className="absolute inset-0 h-full w-full"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.3))',
              backdropFilter: 'blur(0px)'
            }}
          />
          <IconWheel
            size={400}
            iconSize={48}
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
      className: 'col-span-6 row-span-2'
    },
    {
      illustration: (
        <div className="h-full w-full p-4 overflow-hidden">
          <Image
            src="/debounce-code.png"
            className="w-full rounded-xl shadow-xl"
            alt="debounce-code-preview"
            width={1000}
            height={1000}
          />
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="w-full p-4 xl:p-10 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg">
          <div className="flex flex-col">
            <RainbowText className="text-3xl opacity-1 flex gap-2 items-center justify-center">
              Skip the Setup. Start Building.
            </RainbowText>
            <p className="text-center text-white/70 text-sm md:text-base">
              Focus on what matters - creating amazing experiences
            </p>
          </div>
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="h-[375px] w-full bg-black relative overflow-hidden rounded-lg">
          <GlowingDotsBackground dotSize={125} />
        </div>
      ),
      className: 'col-span-12 row-span-1'
    },
    {
      illustration: (
        <div className="relative rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 transition-opacity duration-300"></div>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
            <source src="/demo.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 z-20">
            <h4 className="text-white text-lg font-medium">Easy Documentation</h4>
            <p className="text-white/70 text-sm">
              Effortlessly integrate components into your project
            </p>
          </div>
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="relative rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 transition-opacity duration-300"></div>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
            <source src="/demo2.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 z-20">
            <h4 className="text-white text-lg font-medium">Instant Integration</h4>
            <p className="text-white/70 text-sm">No configuration needed - just copy and paste</p>
          </div>
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="w-full p-4 xl:p-10 bg-gradient-to-br from-black/20 to-white/20 backdrop-blur-sm rounded-lg">
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
        <div className="w-full p-4 xl:p-10 bg-gradient-to-br from-white/20 to-black/20 backdrop-blur-sm rounded-lg">
          <div className="lg:text-3xl xl:text-5xl opacity-1 flex gap-2 items-center justify-center">
            <ClipboardPaste className="h-10 w-10 font-bold " />
            <GlitchText>Ctrl + V</GlitchText>
          </div>
        </div>
      ),
      className: 'col-span-6 row-span-1'
    },
    {
      illustration: (
        <div className="relative w-full h-[500px] rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 pointer-events-none"></div>
          <MasonryGrid items={dataArray.slice(0, 12)}></MasonryGrid>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex justify-center">
            <Link href="/docs/components">
              <ShineButton className="px-6 py-3 bg-black/50 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20 hover:scale-105">
                Explore All Components
              </ShineButton>
            </Link>
          </div>
        </div>
      ),
      className: 'col-span-12 row-span-2'
    },
    {
      illustration: (
        <div className="w-full p-4 xl:p-10 lg:text-3xl xl:text-5xl text-center flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-white/10 to-black/20 backdrop-blur-sm rounded-lg">
          <WavyText
            text="Yes. It's that easy."
            className="text-[24px] sm:text-[35px] md:text-[45px] lg:text-[55px] font-medium"
          />
          <Link href="/docs/introduction">
            <button className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 hover:scale-105">
              Get Started Now
            </button>
          </Link>
        </div>
      ),
      className: 'col-span-12 row-span-1'
    }
  ];

  return (
    <div className="flex flex-col w-screen items-center justify-center bg-black relative py-20">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full relative z-10">
        <div className="grid grid-cols-12 gap-1 w-[calc(100%-200px)] border-[1px] border-white/30 p-[4px]">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={`feature-${index}`}
                className={feature.className + ''}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-full flex items-center justify-center relative h-full border-[1px] border-white/20 rounded-lg overflow-hidden shadow-lg hover:border-white/40 hover:shadow-[inset_0_-20px_30px_rgba(239,68,68,0.2),inset_20px_0_30px_rgba(34,197,94,0.2),inset_-20px_0_30px_rgba(234,179,8,0.2),inset_0_20px_30px_rgba(249,115,22,0.2)] transition-all duration-300`}
                >
                  {feature.illustration}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
