'use client';

import React, { useState } from 'react';
import { circleMenuPreview } from '@/data/frontend/CircleMenu';
import { dialogFormPreview } from '@/data/frontend/DialogForm';
import { fileInputPreview } from '@/data/frontend/FileInput';
import { flipScrollPreview } from '@/data/frontend/FlipScroll';
import { horizontalScrollPreview } from '@/data/frontend/HorizontalScroll';
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

const TextInformation = () => {
  return (
    <div
      style={{
        background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.8) 50%, transparent )'
      }}
      className="flex flex-col items-center justify-center z-0 h-full w-full pt-20"
    >
      <BounceInText
        className="text-white text-3xl sm:text-4xl md:text-8xl font-semibold mt-6 sm:mt-8 md:mt-10"
        text="Components You'll Love"
      />
      <p className="text-white text-base sm:text-lg my-3 sm:my-4 md:my-5">
        Clean, reusable building blocks for modern apps. UI components, utilities, and backend
        snippets all in one place.
      </p>
    </div>
  );
};

const ComponentViewer = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const components = [
    circleMenuPreview,
    dialogFormPreview,
    fileInputPreview,
    flipScrollPreview,
    horizontalScrollPreview,
    imagePilePreview,
    interactiveFolderPreview,
    interestPickerPreview,
    otpInputPreview,
    photoGalleryPreview,
    pixelatedCarouselPreview,
    rubikCubePreview,
    sineWavePreview,
    dottedTextPreview,
    gooeyWordsPreview,
    sentenceFlipPreview,
    pixelatedTextPreview
  ];

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
    <div className="h-[75vh] w-full flex flex-col gap-4 items-center justify-center border-4 rounded-3xl border-[#0f0f0f] bg-[#0d0d0d] relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to top, transparent 20%, black 100%)'
        }}
      />
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          transition={{ duration: 0.8, type: 'spring', bounce: 0 }}
          key={`component-viewer-${currentComponentIndex}`}
          className="w-[500px] h-[500px] rounded-3xl overflow-hidden bg-black"
        >
          {currentComponent}
        </motion.div>
      </AnimatePresence>
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
    <div className="flex flex-col w-screen items-center justify-center text-center relative overflow-hidden gap-10">
      <TextInformation />
      <div className="w-[75vw] h-full flex items-center justify-center">
        <ComponentViewer />
      </div>
    </div>
  );
};

export default HeroSection;
