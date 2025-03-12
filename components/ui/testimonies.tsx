import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Comment = {
  id: number;
  image: string;
  href: string;
  special?: boolean;
};

const Testimonies = ({ items }: { items: Comment[] }) => {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});

  return (
    <div
      className={`columns-1 sm:columns-2 md:columns-3 gap-10 p-3 w-full hide-scrollbar overflow-y-auto space-y-10`}
    >
      {items.map((item, index) => {
        const getColumnCount = () => {
          if (typeof window === 'undefined') return 1;
          const width = window.innerWidth;
          if (width >= 1024) return 4; // lg
          if (width >= 768) return 3; // md
          if (width >= 640) return 2; // sm
          return 1;
        };

        const columnCount = getColumnCount();
        const rowIndex = Math.floor(index / columnCount);

        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateZ:
                Math.random() < 0.5
                  ? Math.floor(Math.random() * 2)
                  : -Math.floor(Math.random() * 2),
              transition: {
                duration: 0.5,
                delay: rowIndex * 0.1,
                ease: 'easeOut'
              }
            }}
            whileHover={{
              scale: 1.03,
              rotateZ:
                Math.random() < 0.5 ? Math.floor(Math.random() * 2) : -Math.floor(Math.random() * 2)
            }}
            style={{
              boxShadow: item.special ? '0px 0px 10px 0px rgba(255, 255, 255, 1)' : ''
            }}
            className="flex items-center justify-center w-full border-[1px] border-white/40 rounded-xl overflow-hidden"
            key={index}
          >
            <Link href={item.href} target="_blank" className="w-full">
              <div className="break-inside-avoid relative group overflow-hidden w-full">
                <div className="relative">
                  <div className="relative w-full flex gap-1 flex-col items-start justify-start">
                    {!imagesLoaded[item.image] && (
                      <div className="absolute inset-0 w-full h-[300px] bg-neutral-500/50 animate-pulse rounded-lg" />
                    )}
                    <Image
                      src={item.image}
                      alt={item.href}
                      width={400}
                      height={300}
                      className={`w-full h-auto transition-transform duration-300 rounded-lg ${
                        !imagesLoaded[item.image] ? 'opacity-0' : 'opacity-100'
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      onLoad={() => {
                        setImagesLoaded((prev) => ({ ...prev, [item.image]: true }));
                      }}
                      onError={() => {
                        console.error(`Error loading image: ${item.image}`);
                        setImagesLoaded((prev) => ({ ...prev, [item.image]: true }));
                      }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Testimonies;
