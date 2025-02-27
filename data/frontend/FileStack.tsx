import FileStack from '@/components/ui/file-stack';
import { dataArray } from '../constants';
import { Document } from '../main';
import Image from 'next/image';

export const fileStackPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden bg-black relative p-10 gap-5">
    <Image
      src="/filestack.png"
      alt="footer"
      width={500}
      height={500}
      className="w-full h-full object-contain bg-black"
    />
  </div>
);

export const fileStack: Document = {
  sideBar: {
    group: 'Components',
    name: 'File Stack',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'File Stack',
        content:
          "FileStack is a modern, animated component designed to display files, images, or media in an interactive, stacked layout. With smooth hover effects, subtle floating animations, and a 3D perspective, FileStack brings a dynamic feel to your UI. Perfect for portfolios, media galleries, or product showcases, it enhances engagement by revealing file details on hover. Built with Next.js, Tailwind CSS, and Framer Motion, FileStack ensures seamless performance while keeping your design sleek and intuitive. Whether you're displaying documents, images, or featured content, FileStack makes it visually stunning and user-friendly. 🚀",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
            <FileStack items={dataArray.slice(21, dataArray.length - 1)}></FileStack>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion tailwindcss-animate`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file file-stack.tsx in your components folder and paste this code',
        code: `'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FileStackItem = {
  title: string;
  image: string;
  description: string;
  link?: string; // Optional link for clickable items
};

interface FileStackProps {
  items: FileStackItem[];
  spacing?: number; // Customizable spacing between items
}

const FileStack = ({ items, spacing = 10 }: FileStackProps) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({});

  // Subtle floating animation
  const floatingAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  // Calculate consistent spacing value for each card
  const getCardSpacing = (index: number) => {
    if (index === 0) return 0;
    return \`-\${spacing}rem\`;
  };

  return (
    <div className="h-full w-full relative group">
      {/* Gradient Overlay with Text */}
      <div className="h-full w-full bg-gradient-to-b from-[#000000da] pointer-events-none to-transparent rounded-lg absolute z-10 flex flex-col">
        <AnimatePresence>
          {isHovered !== null && (
            <motion.div
              key={isHovered + 'text'}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center mt-2 p-4"
            >
              <motion.h2
                className="text-center font-bold text-2xl mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {items[isHovered].title}
              </motion.h2>
              <p className="text-center text-neutral-300 max-w-[500px] line-clamp-2">
                {items[isHovered].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main FileStack Content */}
      <div
        style={{ perspective: '1000px' }}
        className="flex flex-col h-full w-full items-center overflow-y-auto relative pt-[30%]"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setIsHovered(i)}
            onMouseLeave={() => setIsHovered(null)}
            initial={{
              rotateX: -50,
              marginTop: getCardSpacing(i)
            }}
            animate={!isHovered ? floatingAnimation : undefined}
            whileHover={{
              rotateX: 0,
              marginBottom: '7rem',
              scale: 1.02,
              boxShadow:
                '0 0 30px 5px rgba(255, 255, 255, 0.2), inset 0 0 15px rgba(255, 255, 255, 0.1)',
              transition: { duration: 0.3 }
            }}
            className={\`
              flex relative rounded-md flex-col items-center 
              max-w-[500px] justify-center bg-neutral-800 p-2
              \${item.link ? 'cursor-pointer' : ''}
              transition-shadow duration-300
              hover:shadow-xl hover:shadow-neutral-900/20
            \`}
            onClick={() => item.link && window.open(item.link, '_blank')}
          >
            {/* FileStack Edge Detail */}
            <div className="h-4 w-20 bg-neutral-800 rounded-ss-md rounded-se-md absolute -top-2" />

            {/* Loading State */}
            {isLoading[item.image] && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-800/50">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white" />
              </div>
            )}

            {/* Image */}
            <div className="relative w-full overflow-hidden rounded-sm">
              <Image
                src={item.image}
                alt={item.title}
                height={400}
                width={400}
                className="object-cover h-full max-w-[350px] transition-all duration-300"
                onLoadingComplete={() => setIsLoading((prev) => ({ ...prev, [item.image]: false }))}
                onLoadStart={() => setIsLoading((prev) => ({ ...prev, [item.image]: true }))}
                priority={i < 2}
              />
            </div>

            {/* Hover Indicator */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/50 rounded-full"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FileStack;


`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FileStack
  items={[
    {
      title: 'Urban Skyline',
      image:
        'https://images.unsplash.com/photo-1718563552473-2d97b224e801?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
      description:
        'A breathtaking view of a modern cityscape with towering skyscrapers illuminated at dusk.'
    },
    {
      title: 'Mountain Retreat',
      image:
        'https://images.unsplash.com/photo-1735317461815-1a0ba64e9a56?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
      description:
        'A serene cabin nestled in the heart of towering mountains, perfect for a peaceful getaway.'
    },
    {
      title: 'Forest Wander',
      image:
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description:
        'A misty trail winding through a dense, enchanting forest filled with lush greenery.'
    },
    {
      title: 'Serene Lake',
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description:
        'A tranquil lake reflecting the golden hues of the sunset, surrounded by peaceful nature.'
    },
    {
      title: 'Golden Hour',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description:
        'A mesmerizing sunset casting a warm glow over the ocean, creating a dreamlike atmosphere.'
    },
    {
      title: 'Coastal Vibes',
      image:
        'https://images.unsplash.com/photo-1493558103817-58b2924bce98?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description:
        'Crystal-clear waves crashing against a sandy shore, offering a perfect beach escape.'
    },
    {
      title: 'Night Lights',
      image:
        'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D',
      description:
        'A dazzling city skyline at night, with vibrant lights illuminating the urban landscape.'
    },
    {
      title: 'Rustic Charm',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description:
        'A cozy wooden cabin with a warm, inviting atmosphere set in a countryside setting.'
    }
  ]}
></FileStack>`
      }
    ]
  }
};
