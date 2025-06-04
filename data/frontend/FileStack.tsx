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
          'A modern, interactive 3D file stack component built with React and Framer Motion. Features smooth hover animations, customizable spacing, and a two-column layout perfect for showcasing portfolios, image galleries, or file collections. Items stack with perspective depth and rotate elegantly on hover, revealing detailed information in an adjacent panel.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full p-10 w-full flex flex-col gap-5 items-center justify-center overflow-hidden relative">
            <FileStack items={dataArray}></FileStack>
          </div>
        )
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion tailwindcss-animate tailwindcss`
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
    <div className="h-full w-full relative group grid grid-cols-2">
      <div className="overflow-y-auto h-full max-h-[500px]">
        <div
          style={{ perspective: '1000px' }}
          className="flex flex-col h-full w-full items-center overflow-y-auto relative pt-[20%]"
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
                  onLoadingComplete={() =>
                    setIsLoading((prev) => ({ ...prev, [item.image]: false }))
                  }
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

      <div className="h-full relative flex items-center justify-center w-full bg-gradient-to-b from-[#000000da] pointer-events-none to-transparent rounded-lg z-10">
        <AnimatePresence mode="popLayout">
          {isHovered !== null && (
            <motion.div
              key={isHovered + 'text'}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center mt-2 p-4"
            >
              <h2 className="text-center font-bold text-2xl mb-2">
                {items[isHovered].title}
              </h2>
              <p className="text-center text-neutral-300 max-w-[500px] line-clamp-2">
                {items[isHovered].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FileStack;`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FileStack
  items={[
  {
    title: 'Porsche 911 2002',
    image: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMdjLyAKgGqhEeqvZJgkrY5a7DO6GR9iSLoX2ux',
    description:
      'The Porsche 911 2002, a classic sports car, known for its sleek design and powerful performance.'
  },
  {
    title: 'Porsche 911 2006',
    image: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMdgxwkfk9uPKzfJUXx2s178trCpqad9inWYH0h',
    description:
      'The Porsche 911 2006, a refined model with enhanced features, offering a thrilling driving experience.'
  },
  {
    title: 'Porsche 911 2010',
    image: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMdfZWfaKSfCnAtBkxgmdb2qeojV0MJ35iYWUKs',
    description:
      'The Porsche 911 2010, a modern icon, combining luxury and speed with cutting-edge technology.'
  },
  {
    title: 'Porsche 911 2014',
    image: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMd78gyAVfu5KZwfqtoI3FbhBdTzArEGPxLSU8Q',
    description:
      'The Porsche 911 2014, a masterpiece of engineering, delivering unmatched performance and style.'
  },
  {
    title: 'Porsche 911 2018',
    image: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMd25OfuK3bHkp8iXl9yEqgCjP7chLrsd4WfKaD',
    description:
      'The Porsche 911 2018, a pinnacle of automotive excellence, offering a perfect blend of tradition and innovation.'
  }
]}
></FileStack>`
      }
    ]
  }
};
