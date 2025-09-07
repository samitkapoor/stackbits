import ProximityBackground from '@/components/ui/proximity-background';
import { Document } from '../main';
import { cnCode, installDependenciesCode } from '@/constants/code';

export const proximityBackgroundPreview = (
  <div className="flex flex-wrap items-center gap-10 p-5 justify-center w-full h-full scale-75">
    <ProximityBackground circles={40} columns={8} diameter={50} />
  </div>
);

export const proximityBackground: Document = {
  sideBar: {
    group: 'Components',
    name: 'Proximity Background',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'Proximity Background',
        content:
          'A background with colorful circles that respond to your mouse movement. The circles change size and color based on how close your cursor is.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="w-full h-full flex items-center justify-center">
            <ProximityBackground circles={150} columns={15} diameter={70} />
            <div className="h-full w-full flex items-center justify-center absolute inset-0">
              <p className="text-white font-extrabold text-5xl">Proximity Background</p>
            </div>
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file proximity-background.tsx in your components folder and paste this code',
        code: `'use client';

import { cn } from '@/lib/utils';
import { motion, useTransform } from 'framer-motion';
import { useMotionValue } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const DEFAULT_DIAMETER = 50;
const DEFAULT_CIRCLES = 90;
const DEFAULT_COLUMNS = 15;
const MAX_DISTANCE = 100;

const getRandomColor = () => {
  const colors = ['#E91E63', '#9C27B0', '#3F51B5', '#03A9F4', '#4CAF50', '#FFEB3B', '#FF5722'];
  return \`\${colors[Math.floor(Math.random() * colors.length)]}\`;
};

const Dot = ({ className, style }: { className?: string; style?: React.CSSProperties }) => {
  const distance = useMotionValue(100);
  const scale = useTransform(distance, [0, MAX_DISTANCE], [1.5, 1]);
  const grayScale = useTransform(distance, [0, MAX_DISTANCE], [0, 1]);
  const opacity = useTransform(distance, [0, MAX_DISTANCE], [0.8, 0.2]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, right, bottom } = ref.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };

      const distanceFromLeft = left - clientX;
      const distanceFromRight = clientX - right;
      const distanceFromTop = top - clientY;
      const distanceFromBottom = clientY - bottom;

      let dist = 0;
      const positiveDistances = [];
      if (distanceFromLeft > 0) positiveDistances.push(distanceFromLeft);
      if (distanceFromRight > 0) positiveDistances.push(distanceFromRight);
      if (distanceFromTop > 0) positiveDistances.push(distanceFromTop);
      if (distanceFromBottom > 0) positiveDistances.push(distanceFromBottom);

      dist = positiveDistances.length > 0 ? Math.max(...positiveDistances) : 0;

      const clampedDistance = Math.min(Math.max(dist, 0), MAX_DISTANCE);

      distance.set(clampedDistance);
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);

  return (
    <motion.span
      ref={ref}
      className={cn(\`rounded-full\`, className)}
      style={{
        ...style,
        background: getRandomColor(),
        scale,
        filter: useTransform(
          grayScale,
          (value) => \`grayscale(\${value}) blur(\${Math.min(value, 2)}px)\`
        ),
        opacity
      }}
    />
  );
};

const ProximityBackground = ({
  circles = DEFAULT_CIRCLES,
  columns = DEFAULT_COLUMNS,
  diameter = DEFAULT_DIAMETER
}: {
  circles?: number;
  columns?: number;
  diameter?: number;
}) => {
  return (
    <section className="relative overflow-visible flex items-center justify-center">
      <span
        style={{
          display: 'grid',
          gridTemplateColumns: \`repeat(\${columns}, \${diameter}px)\`
        }}
        className="gap-4"
      >
        {Array.from({ length: circles }).map((_, index) => (
          <Dot
            key={'dot' + index}
            style={{
              width: \`\${diameter}px\`,
              height: \`\${diameter}px\`
            }}
          />
        ))}
      </span>
    </section>
  );
};

export default ProximityBackground;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ProximityBackground circles={90} columns={15} diameter={50} />`
      }
    ]
  }
};
