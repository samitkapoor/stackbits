import MovingBorderCard from '@/components/ui/moving-border-card';
import { Document } from '../main';
import React from 'react';
import PlayingCards from '@/components/ui/playing-cards';

export const playingCardsPreview = (
  <div className="h-full w-full flex items-center justify-center scale-90">
    <PlayingCards
      images={[
        'https://9ygf064mjl.ufs.sh/f/CFdX3UwvlhucppBTiobPgpLht7umOSknV5ciMBWqjAavrFZw',
        'https://9ygf064mjl.ufs.sh/f/CFdX3UwvlhucdtIBCg2itR8bDoj379fGTeMzO1WcLSKqFw2E',
        'https://9ygf064mjl.ufs.sh/f/CFdX3UwvlhucsXH4v6uEYbmGZX2qF6LkRCBayrh9Wi75Icon'
      ]}
    />
  </div>
);

export const playingCards: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Playing Cards',
    order: 2
  },
  content: {
    sections: [
      {
        heading: '🥶 Playing Cards',
        content:
          'The PlayingCards component is an interactive React component that creates a stunning stacked card effect with smooth animations. Built with Framer Motion, it displays multiple images in a cascading stack that dynamically spreads out on hover. Each card features a subtle rotation and offset, creating a realistic playing card stack effect. The component includes smooth transitions, opacity gradients, and responsive design, making it perfect for showcasing image galleries, portfolios, or product displays. With its elegant hover animations and professional styling, it adds a touch of sophistication to any web application. The component is fully responsive, supports Next.js Image optimization, and can be easily integrated into any React project',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div
            style={{
              background: 'radial-gradient(circle, #2a2a2a 0%, #000000 100%)'
            }}
            className="h-full w-full flex flex-col items-center justify-center gap-5"
          >
            <div className="flex flex-col items-center justify-center gap-2 rounded-lg">
              <PlayingCards
                images={[
                  'https://images.unsplash.com/photo-1744619438376-30bfc6c4666c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                  'https://9ygf064mjl.ufs.sh/f/CFdX3UwvlhucsXH4v6uEYbmGZX2qF6LkRCBayrh9Wi75Icon',
                  'https://9ygf064mjl.ufs.sh/f/CFdX3UwvlhucppBTiobPgpLht7umOSknV5ciMBWqjAavrFZw'
                ]}
              />
              <p className="text-xl font-bold">Top travel destinations</p>
            </div>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file playing-cards.tsx in your components folder and paste this code',
        code: `
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PlayingCards = ({ images }: { images: string[] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[300px] max-w-[300px] w-full mx-auto p-5 rounded-lg transition-all duration-300 hover:translate-x-[10px]"
    >
      {images.map((image, i) => {
        return (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-full h-full border border-white/40 rounded-lg overflow-hidden"
            initial={{
              left: i * 10,
              rotate: (i - 1) * 3
            }}
            animate={{
              left: isHovered ? (i - 1) * 50 : i * 10,
              rotate: isHovered ? (i - 1) * 10 : (i - 1) * 3
            }}
            transition={{ duration: 0.3 }}
            style={{
              zIndex: images.length - i,
              transformOrigin: 'center center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              opacity: 1 - i * 0.2,
              width: 'calc(100% - 16px)',
              height: 'calc(100% - 16px)'
            }}
          >
            <Image
              src={image}
              alt={\`Stacked image \${i + 1}\`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default PlayingCards;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<PlayingCards
  images={[
    'https://images.unsplash.com/photo-1744619438376-30bfc6c4666c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://9ygf064mjl.ufs.sh/f/CFdX3UwvlhucsXH4v6uEYbmGZX2qF6LkRCBayrh9Wi75Icon',
    'https://9ygf064mjl.ufs.sh/f/CFdX3UwvlhucppBTiobPgpLht7umOSknV5ciMBWqjAavrFZw'
  ]}
/>`
      }
    ]
  }
};
