import { Document } from '../main';
import { installDependenciesCode } from '@/constants/code';
import VideoPreview from '@/components/ui/video-preview';
import DominoesListScroll from '@/components/list-scroll/dominoes-scroll-indicator';

export const dominoesListScrollPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <VideoPreview videoUrl="/demos/dominoes-list-scroll.mp4" />
  </div>
);

const images = [
  { image: '/dummy/1.png' },
  { image: '/dummy/2.png' },
  { image: '/dummy/3.png' },
  { image: '/dummy/4.png' },
  { image: '/dummy/5.png' },
  { image: '/dummy/6.png' },
  { image: '/dummy/7.png' },
  { image: '/dummy/8.png' },
  { image: '/dummy/9.png' },
  { image: '/dummy/10.png' }
];

export const dominoesListScroll: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Dominoes List Scroll',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Dominoes List Scroll',
        content:
          'A scrollable component that displays images with domino-like falling animations as you scroll. Each image rotates and falls like a domino piece, creating a smooth cascading effect that responds to your scroll position with realistic 3D shadows.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-start gap-2">
            <DominoesListScroll items={[...images, ...images]} enableShadow />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file dominoes-scroll.tsx in your components folder and paste this code',
        code: `import { motion, MotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const DominoesItem = ({
  image,
  index,
  scrollYProgress,
  totalItems,
  height,
  width,
  enableShadow
}: {
  image: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
  height: number;
  width: number;
  enableShadow: boolean;
}) => {
  const thisDominoePosition = index / totalItems;
  const preStep = Math.max(0, thisDominoePosition - 0.04);
  const postStep = Math.min(1, thisDominoePosition + 0.04);

  const rotateX = useTransform(
    scrollYProgress,
    [0, preStep, thisDominoePosition, postStep, 1],
    [0, 0, 0, 90, 90]
  );
  const antiRotateX = useTransform(
    scrollYProgress,
    [0, preStep, thisDominoePosition, postStep, 1],
    [90, 90, 90, 0, 0]
  );

  const translateZ = useTransform(
    scrollYProgress,
    [0, preStep, thisDominoePosition, postStep, 1],
    [-height * index, -height, 0, height, height * (totalItems - index)]
  );
  const antiSkewX = useTransform(
    scrollYProgress,
    [0, preStep, thisDominoePosition, postStep, 1],
    [30, 30, 30, 0, 0]
  );
  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, preStep, thisDominoePosition, postStep, postStep, 1],
    [0.6, 0.6, 0.6, 0.6, 0, 0]
  );

  return (
    <motion.div
      style={{
        rotateX,
        translateZ,
        zIndex: totalItems - index,
        transformOrigin: 'bottom',
        transformStyle: 'preserve-3d',
        height,
        width,
        transition: '100ms ease-out'
      }}
      className="absolute"
    >
      {/* shadow */}
      {enableShadow && (
        <motion.span
          style={{
            rotateX: antiRotateX,
            transformOrigin: 'bottom',
            skewX: antiSkewX,
            opacity: shadowOpacity,
            transition: '100ms ease-out'
          }}
          className="absolute inset-0 bg-black z-0 opacity-0 rounded"
        />
      )}
      <Image
        src={image}
        alt={image}
        width={width}
        height={height}
        className="w-full h-full object-cover rounded z-[1]"
      />
    </motion.div>
  );
};

const DominoesListScroll = ({
  items,
  height = 500,
  width = 384,
  enableShadow = false
}: {
  items: { image: string }[];
  height?: number;
  width?: number;
  enableShadow?: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef
  });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log({ latest });
  });

  return (
    <div className="h-full w-full relative overflow-hidden">
      <div className="sticky top-0 left-0 h-screen w-full flex items-center justify-center z-10 pointer-events-none">
        <div
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
          className="flex flex-col items-center justify-center w-full"
        >
          {items.map((item, index) => (
            <DominoesItem
              key={\`dominoe-\${index}\`}
              image={item.image}
              index={index}
              scrollYProgress={scrollYProgress}
              totalItems={items.length}
              height={height}
              width={width}
              enableShadow={enableShadow}
            />
          ))}
        </div>
      </div>
      <div
        ref={scrollRef}
        className=" w-full overflow-y-auto h-full bg-white absolute top-0 left-0"
      >
        <div
          style={{
            height: items.length * 500
          }}
          className="w-full bg-white"
        ></div>
      </div>
    </div>
  );
};

export default DominoesListScroll;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="h-full w-full flex flex-col items-center justify-start gap-2">
    <DominoesListScroll items={[...images, ...images]} enableShadow height={500} width={384} />
</div>
`
      }
    ]
  }
};
