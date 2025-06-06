import GooeyWords from '@/components/ui/gooey-words';
import { Document } from '../main';

const words = ['SMART', 'SHINE', 'VIBES', 'TRICK', 'STACK', 'REACT'];

export const gooeyWordsPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-10 gap-5">
    <GooeyWords words={words} />
  </div>
);

export const gooeyWords: Document = {
  sideBar: {
    group: 'Text',
    name: 'Gooey Words',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Gooey Words',
        content:
          'Create stunning animated text effects with the Gooey Words component. This React component transforms ordinary text into captivating liquid-style animations using SVG paths and Framer Motion. Perfect for modern web applications, landing pages, and interactive interfaces. Features smooth word transitions, customizable speed controls, and responsive design. Enhance user engagement with eye-catching typography animations that work seamlessly across all devices.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
            <GooeyWords words={words} />
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
        description: 'Create a file gooey-words.tsx in your components folder and paste this code',
        code: `'use client';

import { animate, AnimatePresence, motion } from 'framer-motion';
import React, { memo, RefObject, useEffect, useRef, useState } from 'react';

const alphabetPaths = {
  A: 'M15,90 L50,10 L85,90 M25,60 H75',
  B: 'M20,10 V90 H60 Q85,90 85,70 Q85,60 70,50 Q85,40 85,30 Q85,10 60,10 H20',
  C: 'M85,25 Q65,10 40,10 Q15,10 15,50 Q15,90 40,90 Q65,90 85,75',
  D: 'M20,10 V90 H60 Q90,90 90,50 Q90,10 60,10 H20',
  E: 'M80,10 H20 V90 H80 M20,50 H65',
  F: 'M20,10 V90 M20,10 H80 M20,50 H65',
  G: 'M85,25 Q65,10 40,10 Q15,10 15,50 Q15,90 40,90 Q65,90 85,75 V55 H55',
  H: 'M20,10 V90 M80,10 V90 M20,50 H80',
  I: 'M30,10 H70 M50,10 V90 M30,90 H70',
  J: 'M70,10 H30 M50,10 V75 Q50,90 30,85',
  K: 'M20,10 V90 M80,10 L20,50 L80,90',
  L: 'M20,10 V90 H80',
  M: 'M15,90 V15 L50,50 L85,15 V90',
  N: 'M20,90 V15 L80,90 V15',
  O: 'M50,10 Q80,10 85,50 Q80,90 50,90 Q20,90 15,50 Q20,10 50,10',
  P: 'M20,90 V10 H65 Q85,10 85,35 Q85,60 65,60 H20',
  Q: 'M50,10 Q80,10 85,50 Q80,90 50,90 Q20,90 15,50 Q20,10 50,10 M60,70 L85,90',
  R: 'M20,90 V10 H65 Q85,10 85,35 Q85,60 65,60 H20 M50,60 L85,90',
  S: 'M80,25 Q60,10 35,10 Q15,15 15,35 Q15,50 50,55 Q85,60 85,75 Q85,90 50,90 Q25,90 15,75',
  T: 'M15,10 H85 M50,10 V90',
  U: 'M15,10 V65 Q15,90 50,90 Q85,90 85,65 V10',
  V: 'M15,10 L50,90 L85,10',
  W: 'M10,10 L30,90 L50,40 L70,90 L90,10',
  X: 'M15,10 L85,90 M15,90 L85,10',
  Y: 'M15,10 L50,50 L85,10 M50,50 V90',
  Z: 'M15,10 H85 L15,90 H85'
};

const Letter = memo(
  ({
    letterIndex,
    wordPathsRef,
    index,
    path,
    circles,
    circlesRef,
    circlesPositionsRef,
    radius
  }: {
    letterIndex: number;
    index: number;
    path: string;
    radius: number;
    wordPathsRef: RefObject<Record<number, SVGPathElement[]>>;
    circles: number;
    circlesRef: RefObject<Record<number, SVGCircleElement[][]>>;
    circlesPositionsRef: RefObject<{ x: number; y: number }[][]>;
  }) => {
    return (
      <div className="mx-1">
        <svg width="50" height="70" viewBox="0 0 100 100" style={{ filter: 'url(#gooey)' }}>
          <path
            ref={(el) => {
              if (el) {
                if (!wordPathsRef.current[index]) {
                  wordPathsRef.current[index] = [];
                }
                wordPathsRef.current[index][letterIndex] = el;
              }
            }}
            d={path}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g>
            {Array.from({ length: circles }).map((_, circleIndex) => (
              <circle
                ref={(el) => {
                  if (el) {
                    if (!circlesRef.current[index]) {
                      circlesRef.current[index] = [];
                    }
                    if (!circlesRef.current[index][letterIndex]) {
                      circlesRef.current[index][letterIndex] = [];
                    }
                    if (!circlesPositionsRef.current[letterIndex]) {
                      circlesPositionsRef.current[letterIndex] = [];
                    }
                    if (!circlesPositionsRef.current[letterIndex][circleIndex]) {
                      circlesPositionsRef.current[letterIndex][circleIndex] = {
                        x: 50,
                        y: 50
                      };
                    }

                    circlesRef.current[index][letterIndex][circleIndex] = el;
                  }
                }}
                r={radius}
                key={\`circle-\${letterIndex}-\${circleIndex}-\${index}\`}
                cx={circlesPositionsRef.current?.[letterIndex]?.[circleIndex].x || 50}
                cy={circlesPositionsRef.current?.[letterIndex]?.[circleIndex].y || 50}
                fill="white"
              />
            ))}
          </g>
        </svg>
      </div>
    );
  }
);

const GooeyWords = ({ words, speed = 2 }: { words: string[]; speed?: number }) => {
  const [index, setIndex] = useState(0);
  const wordPathsRef = useRef<Record<number, SVGPathElement[]>>({});
  const circlesRef = useRef<Record<number, SVGCircleElement[][]>>({});
  const circlesPositionsRef = useRef<{ x: number; y: number }[][]>([]);

  const circles = 25;
  const radius = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [words.length, speed, index]);

  useEffect(() => {
    if (!wordPathsRef.current[index] || wordPathsRef.current[index].length === 0) {
      return;
    }

    const currentPaths = wordPathsRef.current[index];
    const currentCirclesGroups = circlesRef.current[index] || [];

    currentPaths.forEach((path, letterIndex) => {
      if (!path) return;

      const length = path.getTotalLength();
      if (!length) return;

      const step = length / circles;
      const circlesToAnimate = currentCirclesGroups[letterIndex] || [];

      circlesToAnimate.forEach((circle, circleIndex) => {
        if (!circle) return;

        const { x, y } = path.getPointAtLength(step * circleIndex) || { x: 0, y: 0 };

        circlesPositionsRef.current[letterIndex][circleIndex] = { x, y };

        animate(
          circle,
          { cx: x, cy: y },
          {
            duration: 0.8,
            delay: 0.02 * circleIndex + letterIndex * 0.04,
            ease: 'easeOut'
          }
        );
      });
    });
  }, [index, circles]);

  return (
    <div className="relative">
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 12 -2"
              result="gooey"
            />
          </filter>
        </defs>
      </svg>

      <AnimatePresence mode="popLayout">
        <motion.div
          className="flex items-center justify-center p-8 rounded-lg"
          style={{
            minHeight: '100px'
          }}
        >
          {words[index].split('').map((letter, letterIndex) => {
            const path = alphabetPaths[letter.toUpperCase() as keyof typeof alphabetPaths];

            if (!path) {
              return <div key={\`\${letter}-\${letterIndex}-\${index}\`} className="w-8" />;
            }

            return (
              <Letter
                key={\`\${letter}-\${letterIndex}-\${index}\`}
                letterIndex={letterIndex}
                index={index}
                path={path}
                radius={radius}
                wordPathsRef={wordPathsRef}
                circles={circles}
                circlesRef={circlesRef}
                circlesPositionsRef={circlesPositionsRef}
              />
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GooeyWords;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GooeyWords words={words} />`
      }
    ]
  }
};
