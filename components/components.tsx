'use client';

import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRouter } from 'next/navigation';
import WavyText from './ui/wavy-text';
import PrismaticHazeBackground from './ui/prismatic-haze';
import TradingCardDemo from './trading-card-demo';
import FileStack from './ui/file-stack';
import { dataArray } from '@/data/constants';
import GlassCardDemo from './glass-card-demo';
import AnimatedGradientButton from './ui/animated-gradient-button';
import ImagePile from './ui/image-pile';

const Components = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const components = [
    {
      name: 'Trading Card',
      link: '/docs/tradingcard',
      live: <TradingCardDemo />
    },
    {
      name: 'Prismatic Haze Background',
      link: '/docs/prismatichaze',
      live: (
        <PrismaticHazeBackground className="flex items-center justify-center">
          <p className="text-black font-extrabold text-xl">Prismatic Haze Background</p>
        </PrismaticHazeBackground>
      )
    },
    {
      name: 'File Stack',
      link: '/docs/filestack',
      live: <FileStack items={dataArray.slice(21, dataArray.length - 1)}></FileStack>
    },
    {
      name: 'Image Pile',
      link: '/docs/imagepile',
      live: (
        <div className="w-full h-full flex items-center justify-center">
          <ImagePile
            images={[
              'https://images.unsplash.com/photo-1728993559783-f657d4177c6b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1501389446297-06c4c50b5ee8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D',
              'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2NlcnxlbnwwfHwwfHx8MA%3D%3D',
              'https://images.unsplash.com/photo-1555979864-7a8f9b4fddf8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHZpZXRuYW18ZW58MHx8MHx8fDA%3D',
              'https://images.unsplash.com/photo-1528569449293-fdc35b48952d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0ZXIlMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D'
            ]}
          />
        </div>
      )
    },
    {
      name: 'Glass Card',
      link: '/docs/glasscard',
      live: <GlassCardDemo />
    },
    {
      name: 'Wavy Text',
      link: '/docs/wavytext',
      live: (
        <WavyText
          text="Wavy Text"
          className="text-blue-500 text-xl sm:text-2xl md:text-3xl font-extrabold"
        />
      )
    }
  ];

  const { scrollXProgress } = useScroll({ container: containerRef });

  // Create a parallax effect for the title
  const titleX = useTransform(scrollXProgress, [0, 1], [0, -20]);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8">
      <motion.p
        style={{ x: titleX }}
        className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-semibold text-center mb-6 sm:mb-8 md:mb-10"
      >
        Explore Our Components.
      </motion.p>

      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className="w-full overflow-x-scroll overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div
          className="flex space-x-4 sm:space-x-6 md:space-x-8 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8"
          style={{
            width: `${
              components.length *
              (typeof window !== 'undefined'
                ? window.innerWidth < 640
                  ? 300
                  : window.innerWidth < 768
                  ? 450
                  : 650
                : 650)
            }px`
          }}
        >
          {components.map((component, index) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index < 3 ? index * 0.1 : 0.1 }
              }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              onClick={() => router.push(component.link)}
              className="group h-[500px] w-[600px] flex-shrink-0 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center overflow-hidden cursor-pointer relative"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent rounded-2xl sm:rounded-3xl p-[1px]">
                <div className="absolute inset-0 bg-black/50 rounded-2xl sm:rounded-3xl" />
              </div>

              {/* Inner shadow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl shadow-inner shadow-white/5" />

              {/* Content */}
              <div className="relative h-full w-full flex items-center justify-center z-10">
                {component.live}
              </div>

              {/* Title bar with gradient */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-5 md:pb-6 px-4 sm:px-5 md:px-6 z-20 pointer-events-none">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
                  {component.name}
                </h3>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="w-full max-w-[300px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] h-1 bg-white/10 rounded-full mt-4 sm:mt-6 md:mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-yellow-500 rounded-full"
          style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
        />
      </div>

      <div className="flex flex-col">
        <p className="text-white/80 text-xl sm:text-3xl lg:text-5xl mt-5 sm:mt-10 md:mt-20 text-center">
          Get the good stuff without the grunt work!
        </p>
        <AnimatedGradientButton
          onClick={() => router.push('/docs')}
          className="text-lg md:text-xl font-medium !px-5 sm:!px-10 py-4 rounded-lg mt-10"
        >
          Join Stackbits For Free
        </AnimatedGradientButton>
      </div>
    </div>
  );
};

export default Components;
