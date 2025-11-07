import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import FogRevealText from '@/components/texts/fog-reveal-text';
import StackbitsLogo from '@/components/ui/stackbits-logo';

export const fogRevealTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <FogRevealText>
      <div className="flex items-center justify-center gap-4">
        <StackbitsLogo className="size-10" />
        <p style={{ fontSize: '20px' }} className="font-black">
          stackbits
        </p>
      </div>
    </FogRevealText>
  </div>
);

export const fogRevealText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Fog Reveal Text',
    order: 8
  },
  content: {
    sections: [
      {
        heading: 'Fog Reveal Text',
        content:
          'Text hidden behind a foggy blur that clears as you move your mouse. The fog follows your cursor, revealing the text underneath in a smooth, interactive way. Perfect for creating engaging reveal animations on your website.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <FogRevealText>
            <div className="flex items-center justify-center gap-4">
              <StackbitsLogo className="size-32" />
              <p style={{ fontSize: `${100 / 'stackbits'.length}vw` }} className="font-black">
                stackbits
              </p>
            </div>
          </FogRevealText>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Fog Reveal Text',
        sectionType: 'component',
        description:
          'Create a file fog-reveal-text.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FogRevealTextProps {
  children: React.ReactNode;
  className?: string;
  thresholdDistance?: number;
}

const FogRevealText = ({ children, className, thresholdDistance = 300 }: FogRevealTextProps) => {
  const mouse = useMotionValue({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ x: 0, y: 0, height: 0 });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setDimensions({ x: rect.left, y: rect.top, height: rect.height });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.set({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className={cn('relative py-32 px-20 text-center', className)}>
      {children}

      <motion.span
        style={{
          maskImage: useTransform(mouse, (mouse) => {
            const x = mouse.x > dimensions.x ? mouse.x - dimensions.x : 0;
            const y = mouse.y > dimensions.y ? mouse.y - dimensions.y : 0;
            return \`radial-gradient(circle at \${x}px \${y}px,transparent 0%, transparent 40%, black 55%)\`;
          })
        }}
        className="absolute inset-0 backdrop-blur-md bg-[#111111] z-20"
      />

      <motion.span
        style={{
          maskImage: useTransform(mouse, (mouse) => {
            if (mouse.y > dimensions.y - thresholdDistance) {
              const y = mouse.y - dimensions.y;
              const startY = Math.max(0, y + thresholdDistance);
              return \`linear-gradient(to bottom, transparent 0px, transparent \${Math.max(
                0,
                startY - thresholdDistance
              )}px, black \${startY}px)\`;
            } else {
              return \`linear-gradient(to top, black, black)\`;
            }
          })
        }}
        className="absolute inset-0 backdrop-blur-lg blur-md z-20"
      />
    </div>
  );
};

export default FogRevealText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FogRevealText>
  <div className="flex items-center justify-center gap-4">
    <StackbitsLogo className="size-32" />
    <p style={{ fontSize: \`\${140 / 'stackbits'.length}vw\` }} className="font-black">
      stackbits
    </p>
  </div>
</FogRevealText>`
      }
    ]
  }
};
