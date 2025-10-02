'use client';

import { installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import DominoesScrollIndicator from '@/components/scrolls/dominoes-scroll-indicator';
import { images } from '../constants';
import Image from 'next/image';
import VideoPreview from '@/components/ui/video-preview';

export const dominoesScrollIndicatorPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <VideoPreview videoUrl="/demos/dominoes-scroll-indicator.mp4" />
  </div>
);

export const dominoesScrollIndicator: Document = {
  sideBar: {
    group: 'Text',
    name: 'Dominoes Scroll Indicator',
    order: 6
  },
  content: {
    sections: [
      {
        heading: 'Dominoes Scroll Indicator',
        content:
          'A scroll indicator that shows domino-like bars that rotate as you scroll through content. Each bar rotates at different positions to create a cascading effect.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-start justify-center gap-2 relative overflow-hidden">
            <div
              id="dominoes-scroll-target"
              className="h-full w-full overflow-y-scroll absolute top-0 left-0"
            >
              <div className="flex flex-col items-center justify-start gap-2 pb-14 absolute top-0 left-1/2 -translate-x-1/2">
                {images.map((image, i) => {
                  return (
                    <Image key={i} src={image.image} alt={image.image} width={512} height={512} />
                  );
                })}
              </div>
            </div>

            <div className="absolute bottom-4 right-4 z-[999] bg-black/50 p-2 rounded">
              <DominoesScrollIndicator
                scrollContainerId="dominoes-scroll-target"
                direction="vertical"
              />
            </div>
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      {
        heading: 'Dominoes Scroll Indicator',
        sectionType: 'component',
        description:
          'Create a file dominoes-scroll-indicator.tsx in your components folder and paste this code',
        code: `'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

const BARS = 40;

const ScrollBar = ({
  index,
  scrollProgress
}: {
  index: number;
  scrollProgress: MotionValue<number>;
}) => {
  const thisBarPosition = index / BARS;

  const rotateZ = useTransform(scrollProgress, [0, thisBarPosition, 1], [0, 0, 90]);

  return (
    <motion.div
      className="w-1 bg-zinc-200 h-10"
      style={{
        rotateZ: useTransform(rotateZ, (value) => \`\${value}deg\`),
        transformOrigin: 'bottom'
      }}
    />
  );
};

const DominoesScroll = ({
  scrollContainerId,
  direction
}: {
  scrollContainerId: string;
  direction: 'vertical' | 'horizontal';
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      ref.current = scrollContainer;
    }
  }, [scrollContainerId]);

  const { scrollYProgress, scrollXProgress } = useScroll({
    container: ref
  });

  return (
    <div className="flex items-end justify-center gap-1 relative">
      {Array.from({ length: BARS }).map((_, index) => {
        return (
          <ScrollBar
            key={\`scroll-bar-\${index}\`}
            index={index}
            scrollProgress={direction === 'vertical' ? scrollYProgress : scrollXProgress}
          />
        );
      })}
    </div>
  );
};

const DominoesScrollIndicator = ({
  scrollContainerId = 'scroll-target',
  direction = 'vertical'
}: {
  scrollContainerId?: string;
  direction?: 'vertical' | 'horizontal';
}) => {
  const pathname = usePathname();

  return (
    <DominoesScroll key={pathname} scrollContainerId={scrollContainerId} direction={direction} />
  );
};

export default DominoesScrollIndicator;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="h-full w-full flex items-start justify-center gap-2 relative">
  <div
    id="scroll-target"
    className="h-full w-full overflow-y-scroll absolute top-0 left-0"
  >
    <div className="flex flex-col items-center justify-start gap-2 pb-14">
      {images.map((image, i) => {
        return (
          <Image key={i} src={image.image} alt={image.image} width={512} height={512} />
        );
      })}
    </div>
  </div>
  <div className="absolute bottom-4 right-4 z-[999] bg-black/50 p-2 rounded">
    <DominoesScrollIndicator scrollContainerId="scroll-target" direction="vertical" />
  </div>
</div>`
      }
    ]
  }
};
