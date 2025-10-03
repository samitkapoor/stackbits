'use client';

import React, { useState } from 'react';
import { circleMenuPreview } from '@/data/frontend/CircleMenu';
import { dialogFormPreview } from '@/data/frontend/DialogForm';
import { fileInputPreview } from '@/data/frontend/FileInput';
import { flipScrollPreview } from '@/data/list-scroll/FlipScroll';
import { horizontalScrollPreview } from '@/data/list-scroll/HorizontalScroll';
import { imagePilePreview } from '@/data/frontend/ImagePile';
import { interestPickerPreview } from '@/data/frontend/InterestPicker';
import { interactiveFolderPreview } from '@/data/frontend/InteractiveFolder';
import { otpInputPreview } from '@/data/frontend/OTPInput';
import { photoGalleryPreview } from '@/data/frontend/PhotoGallery';
import { rubikCubePreview } from '@/data/frontend/RubikCube';
import { pixelatedCarouselPreview } from '@/data/frontend/PixelatedCarousel';
import { AnimatePresence, motion } from 'framer-motion';
import BounceInText from './texts/bounce-in-text';
import PaginationButton from './buttons/pagination-button';
import { sineWavePreview } from '@/data/frontend/SineWave';
import { dottedTextPreview } from '@/data/text/DottedText';
import { gooeyWordsPreview } from '@/data/text/GooeyWords';
import { sentenceFlipPreview } from '@/data/text/SentenceFlip';
import { pixelatedTextPreview } from '@/data/text/PixelatedText';
import Link from 'next/link';
import TechStack from './tech-stack';
import RandomButton from './buttons/random-button';
import StackbitsLogo from './ui/stackbits-logo';
import { useRouter } from 'next/navigation';
import PingButton from './buttons/ping-button';
import { interactiveCTAPreview } from '@/data/frontend/InteractiveCTA';
import { maskCursorEffectPreview } from '@/data/frontend/MaskCursorEffect';
import { magnetTabsPreview } from '@/data/frontend/MagnetTabs';
import { masonryGridPreview } from '@/data/frontend/MasonryGrid';
import { randomButtonPreview } from '@/data/buttons/RandomButton';

const components = [
  { component: circleMenuPreview, link: '/docs/circleMenu' },
  { component: dialogFormPreview, link: '/docs/dialogForm' },
  { component: fileInputPreview, link: '/docs/fileInput' },
  { component: flipScrollPreview, link: '/docs/flipScroll' },
  { component: horizontalScrollPreview, link: '/docs/horizontalScroll' },
  { component: imagePilePreview, link: '/docs/imagePile' },
  { component: interactiveCTAPreview, link: '/docs/interactiveCTA' },
  { component: interactiveFolderPreview, link: '/docs/interactiveFolder' },
  { component: interestPickerPreview, link: '/docs/interestPicker' },
  { component: maskCursorEffectPreview, link: '/docs/maskCursorEffect' },
  { component: magnetTabsPreview, link: '/docs/magnetTabs' },
  { component: masonryGridPreview, link: '/docs/masonryGrid' },
  { component: otpInputPreview, link: '/docs/otpInput' },
  { component: photoGalleryPreview, link: '/docs/photoGallery' },
  { component: pixelatedCarouselPreview, link: '/docs/pixelatedCarousel' },
  { component: rubikCubePreview, link: '/docs/rubikCube' },
  { component: sineWavePreview, link: '/docs/sineWave' },
  { component: dottedTextPreview, link: '/docs/dottedText' },
  { component: gooeyWordsPreview, link: '/docs/gooeyWords' },
  { component: sentenceFlipPreview, link: '/docs/sentenceFlip' },
  { component: pixelatedTextPreview, link: '/docs/pixelatedText' },
  { component: randomButtonPreview, link: '/docs/randomButton' }
];

const TextInformation = () => {
  const router = useRouter();

  return (
    <div
      style={{
        background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.2) 20%, transparent )'
      }}
      className="flex flex-col items-center justify-center z-0 h-full w-full pt-20"
    >
      <a
        href="https://peerlist.io/samitkapoor/project/stackbits-v2"
        target="_blank"
        rel="noreferrer"
        className="mb-12"
      >
        <img
          src="https://peerlist.io/api/v1/projects/embed/PRJH6A7JL79ELL6K8CGMJJOPG6OAO7?showUpvote=true&theme=dark"
          alt="StackBits V2"
          style={{ width: 'auto', height: '54px' }}
        />
      </a>

      <TechStack />
      <BounceInText
        className="text-white text-2xl sm:text-4xl md:text-7xl font-semibold mt-8"
        text="Components You'll Love"
        letterClassName="tracking-tight"
      />
      <motion.p
        initial={{ opacity: 0, filter: 'blur(4px)', y: 15 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="text-zinc-300 text-sm sm:text-base md:text-xl my-3"
      >
        Clean, reusable building blocks for modern apps. UI components, utilities, and backend
        snippets all in one place.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, filter: 'blur(4px)', y: 15 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="flex items-center flex-col sm:flex-row justify-center gap-4 mt-8 mb-8"
      >
        <div className="w-full flex items-center justify-center">
          <Link href="/docs/components">
            <PingButton ping={<StackbitsLogo className="h-full w-full" />}>
              Explore Components
            </PingButton>
          </Link>
        </div>

        <RandomButton
          onClick={() => {
            const index = Math.floor(Math.random() * components.length);
            router.push(components[index].link);
          }}
          className="shrink-0 z-10 font-medium text-sm sm:text-base"
          iconClassName="h-9 w-9"
        >
          I&apos;m Feeling Lucky
        </RandomButton>
      </motion.div>
    </div>
  );
};

const ComponentViewer = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1 | 0>(1);

  const currentComponent = components[currentComponentIndex];

  const variants = {
    initial: (direction: 1 | -1) => ({
      opacity: 0,
      scale: 0.8,
      x: `${100 * direction}%`,
      filter: 'blur(4px)'
    }),
    animate: { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' },
    exit: (direction: 1 | -1) => ({
      opacity: 0,
      scale: 0.8,
      x: `${-100 * direction}%`,
      filter: 'blur(4px)'
    })
  };

  return (
    <div className="h-[50vh] md:h-[700px] w-full flex flex-col gap-4 items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 rounded-xl opacity-75"
        style={{
          background: 'url(/hero-bg2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 85%)'
        }}
      />
      <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] relative">
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.8, type: 'spring', bounce: 0 }}
            key={`component-viewer-${currentComponentIndex}`}
            className="h-full w-full rounded-3xl overflow-hidden bg-black relative"
          >
            {currentComponent.component}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-4 max-w-[500px] w-full z-10">
        <PaginationButton
          onClick={() => {
            setDirection(-1);
            setCurrentComponentIndex((prev) => (prev - 1 + components.length) % components.length);
          }}
          variant="previous"
        >
          Previous
        </PaginationButton>
        <PaginationButton
          onClick={() => {
            setDirection(1);
            setCurrentComponentIndex((prev) => (prev + 1) % components.length);
          }}
          variant="next"
        >
          Next
        </PaginationButton>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center text-center relative overflow-hidden z-10 md:px-0 px-6">
      <TextInformation />
      <motion.div
        initial={{ opacity: 0, filter: 'blur(4px)', y: 15 }}
        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="w-[95vw] md:w-[70vw] h-full flex items-center justify-center"
      >
        <ComponentViewer />
      </motion.div>
    </div>
  );
};

export default HeroSection;
