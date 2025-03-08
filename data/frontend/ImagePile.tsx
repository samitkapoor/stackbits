import { Document } from '../main';
import ImagePile from '@/components/ui/image-pile';

export const imagePilePreview = (
  <div className="flex flex-wrap items-center gap-10 p-5 justify-center w-full h-full scale-75">
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
);

export const imagePile: Document = {
  sideBar: {
    group: 'Components',
    name: 'Image Pile',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'Image Pile',
        content:
          'ImagePile shuffles and layers images dynamically, creating a stylish, ever-changing visual effect. Built with React, Next.js, Framer Motion, and Tailwind CSS, it’s perfect for portfolios, galleries, and landing pages. Add motion and personality to your UI effortlessly! 🚀🎨',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-wrap items-center gap-10 justify-center w-[600px]">
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
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file image-pile.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImagePile = ({ images, speed = 2 }: { images: string[]; speed?: number }) => {
  const [topIndex, setTopIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTopIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, speed * 1000);

    return () => {
      clearInterval(id);
    };
  }, [images.length]);

  return (
    <div className="relative h-[200px] sm:h-[260px] md:h-[390px] lg:h-[450px] xl:h-[500px] w-[310px] sm:w-[500px] md:w-[725px] lg:w-[900px] xl:w-[1200px] overflow-visible">
      {images.map((image, i) => {
        const key = \`stacked-card-\${i}\`;
        const isTop = topIndex === i;
        const secondTopIndex = (topIndex + 2) % images.length;
        const zIndex = isTop ? 100 : secondTopIndex ? 99 : images.length - i;
        const y: number = Math.random() * 20;
        const x: number = Math.random() * 20;
        const rotation = i * (Math.random() * 1 + 2) - 2;

        return (
          <motion.div
            key={key}
            className="absolute w-full h-full"
            style={{
              zIndex,
              transformOrigin: 'center center'
            }}
            animate={{
              rotateZ: isTop ? 0 : rotation,
              translateX: Math.random() < 0.5 ? x : -x,
              opacity: isTop ? [0, 1] : 0.8,
              translateY: isTop ? [30, Math.random() < 0.5 ? y : -y] : Math.random() < 0.5 ? y : -y,
              transition: {
                duration: 0.5
              }
            }}
            initial={isTop ? { rotateZ: 0 } : { rotateZ: rotation }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={\`stacked-card-\${i}\`}
                height={1080}
                width={1920}
                className="h-full w-full object-cover"
                priority={isTop}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImagePile;
        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ImagePile
  images={[
    'https://images.unsplash.com/photo-1731770241468-8337b047749f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1728993559783-f657d4177c6b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1638392436949-3e584046314a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1726880066148-fdc1ceba7343?q=80&w=3876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]}
/>`
      }
    ]
  }
};
