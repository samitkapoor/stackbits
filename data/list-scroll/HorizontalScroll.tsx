import { installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import VideoPreview from '@/components/ui/video-preview';
import HorizontalScroll from '@/components/list-scroll/horizontal-scroll';

export const horizontalScrollPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-white/10">
    <VideoPreview videoUrl="/demos/horizontal-scroll.mp4" />
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

export const horizontalScroll: Document = {
  sideBar: {
    group: 'Components',
    name: 'Horizontal Scroll',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'Horizontal Scroll',
        content:
          'A scrollable component that displays images in a horizontal carousel layout with 3D rotation effects. As you scroll vertically, the images animate with smooth horizontal movement, perspective transforms, and dynamic blur effects to create an immersive visual experience.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-black">
            <HorizontalScroll items={[...images, ...images]} />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file stack-scroll.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';

const HorizontalScrollItem = ({
  image,
  index,
  isLeft,
  scrollYProgress,
  totalItems
}: {
  image: string;
  index: number;
  isLeft: boolean;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
}) => {
  const direction = isLeft ? -1 : 1;
  const position = index / totalItems;
  const isLast = index === totalItems - 1;

  const translateX = useTransform(
    scrollYProgress,
    [0, position, 1],
    [-index * 500 * direction, 0, (totalItems - index) * 500 * direction]
  );
  const rotateY = useTransform(
    scrollYProgress,
    [0, position, 1],
    [index * 35 * direction, 0, (totalItems - index) * -35 * direction]
  );
  const blur = useTransform(
    scrollYProgress,
    [0, position, 1],
    [index * 2, 0, (totalItems - index) * 2]
  );
  const contrast = useTransform(
    scrollYProgress,
    [0, position, 1],
    [index * 0.5, 1, (totalItems - index) * 0.5]
  );

  const translateY = useTransform(
    scrollYProgress,
    [0, position, 1],
    [(totalItems - index) * 20, totalItems * 20, index * 20]
  );

  const filter = useTransform(
    [blur, contrast],
    ([blur, contrast]) => \`blur(\${blur}px) contrast(\${contrast})\`
  );

  return (
    <motion.div
      style={{
        translateX,
        filter,
        translateY: useTransform(translateY, (value) => \`\${value - 400}px\`),
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      className="h-[300px] max-w-sm w-full absolute rounded-xl overflow-visible text-black"
    >
      <motion.div style={{ rotateY }}>
        <Image
          src={image}
          alt={image}
          width={1000}
          height={1000}
          className="object-cover h-[300px] w-full rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

const HorizontalScroll = ({ items }: { items: { image: string }[] }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end end']
  });

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-y-auto relative"
      style={{ minHeight: '400px' }}
    >
      <div className="h-full w-full absolute top-0 left-0">
        <div
          className="w-full"
          style={{
            height: (items.length - 3) * 300
          }}
        />
      </div>
      <div className="grid grid-cols-1 gap-12 h-full w-full sticky top-0 left-0">
        <div className="flex flex-col h-full justify-center w-full items-center relative">
          {items.map((image, index) => (
            <HorizontalScrollItem
              key={\`left-column-image-\${index}\`}
              image={image.image}
              index={index}
              isLeft={true}
              scrollYProgress={scrollYProgress}
              totalItems={items.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: ` <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-black">
    <HorizontalScroll items={images} />
</div>`
      }
    ]
  }
};
