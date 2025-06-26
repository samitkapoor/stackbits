import MaskCursorEffect from '@/components/ui/mask-cursor-effect';
import { Document } from '../main';

export const maskCursorEffectPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-10 gap-5">
    <MaskCursorEffect
      compressedMaskSize={40}
      expandedMaskSize={150}
      className="h-[200px]"
      hiddenComponent={<div className="max-w-2xl text-2xl font-bold">You can&apos;t see me</div>}
    >
      <div className="max-w-2xl text-2xl font-bold">John Cena</div>
    </MaskCursorEffect>
  </div>
);

export const maskCursorEffect: Document = {
  sideBar: {
    group: 'Components',
    name: 'Mask Cursor Effect',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Mask Cursor Effect',
        content:
          'A dynamic and interactive React component that creates an engaging cursor-following mask effect using Framer Motion animations. This TypeScript component reveals hidden content through a smooth circular mask that tracks mouse movement, expanding on hover to create stunning reveal animations. Perfect for modern web applications seeking to enhance user engagement with creative UI interactions, spotlight effects, or content reveals. Built with performance in mind using CSS masks and optimized animations.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Meet the Designer',
        sectionType: 'credits',
        description: 'All the design credits goes to',
        designer: [{ name: 'Minh Pham', link: 'https://minhpham.design' }]
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
            <MaskCursorEffect
              hiddenComponent={
                <div className="max-w-4xl text-7xl font-bold">
                  I'm a "full-stack developer" powered by Stack Overflow and prayer. My code is 10%
                  genius, 90% duct tape.
                </div>
              }
            >
              <div className="max-w-4xl text-7xl font-bold">
                I'm a software engineer specializing in React, Next.js, and TypeScript. I build
                creative interfaces with solid backend logic.
              </div>
            </MaskCursorEffect>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file mask-cursor-effect.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const getMaskDataUrl = () => {
  const svgString = \`<svg width="526" height="526" viewBox="0 0 526 526" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="263" cy="263" r="263" fill="black" />
  </svg>\`;
  return \`data:image/svg+xml;base64,\${btoa(svgString)}\`;
};

const MaskCursorEffect = ({
  children,
  hiddenComponent,
  className,
  compressedMaskSize = 40,
  expandedMaskSize = 350
}: {
  children: React.ReactNode;
  hiddenComponent?: React.ReactNode;
  className?: string;
  compressedMaskSize?: number;
  expandedMaskSize?: number;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 20, y: 20 });
  const [isHovered, setIsHovered] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const MASK_SIZE = isHovered ? expandedMaskSize : compressedMaskSize;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = wrapperRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0
      };
      setMousePosition({ x: e.clientX - left, y: e.clientY - top });
    };
    wrapperRef.current?.addEventListener('mousemove', handleMouseMove);
    return () => wrapperRef.current?.removeEventListener('mousemove', handleMouseMove);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="h-full w-full relative flex flex-col">
      <motion.div
        animate={{
          WebkitMaskPosition: \`\${mousePosition.x - MASK_SIZE / 2}px \${
            mousePosition.y - MASK_SIZE / 2
          }px\`,
          maskSize: \`\${MASK_SIZE}px \${MASK_SIZE}px\`
        }}
        style={{
          maskImage: \`url("\${getMaskDataUrl()}")\`,
          WebkitMaskImage: \`url("\${getMaskDataUrl()}")\`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#EA5A47',

          color: 'black'
        }}
        transition={{
          type: 'tween',
          ease: 'backOut'
        }}
        className={cn(
          'h-[800px] w-full flex items-center justify-center absolute z-10 ',
          className
        )}
      >
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {hiddenComponent}
        </div>
      </motion.div>
      <div
        className={cn('h-[800px] w-full flex items-center justify-center text-white/70', className)}
      >
        {children}
      </div>
    </div>
  );
};

export default MaskCursorEffect;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: ` <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
  <MaskCursorEffect
    hiddenComponent={
      <div className="max-w-4xl text-7xl font-bold">
        I'm a "full-stack developer" powered by Stack Overflow and prayer. My code is 10%
        genius, 90% duct tape.
      </div>
    }
  >
    <div className="max-w-4xl text-7xl font-bold">
      I'm a software engineer specializing in React, Next.js, and TypeScript. I build
      creative interfaces with solid backend logic.
    </div>
  </MaskCursorEffect>
</div>`
      }
    ]
  }
};
