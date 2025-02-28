'use client';

import Image from 'next/image';
import React, { memo, useMemo, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';

// Type definitions
interface GradientBackgroundProps {
  gradientStyle: string;
  children: ReactNode;
}

interface StepTitleProps {
  children: ReactNode;
  className?: string;
}

interface AnimatedImageProps {
  src: string;
  alt: string;
  initial: Record<string, number>;
  whileInView: Record<string, number>;
  className?: string;
  borderClassName: string;
}

// Extracted reusable components
const GradientBackground = memo(({ gradientStyle, children }: GradientBackgroundProps) => (
  <div
    style={{ background: gradientStyle }}
    className="w-full h-full flex flex-col items-center gap-5 justify-center rounded-3xl relative shadow-inner shadow-white/35 overflow-hidden"
  >
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent"></div>
    <NoiseOverlay />
    {children}
  </div>
));

const NoiseOverlay = memo(() => (
  <div
    className="absolute inset-0 mix-blend-soft-light opacity-50"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1' fill='black'/%3E%3C/svg%3E")`,
      filter: 'contrast(200%) brightness(70%) grayscale(100%)'
    }}
  />
));

const StepTitle = memo(({ children, className = 'mt-16' }: StepTitleProps) => (
  <p
    className={`text-white text-3xl md:text-4xl ${className} text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 relative z-10`}
  >
    {children}
  </p>
));

const AnimatedImage = memo(
  ({ src, alt, initial, whileInView, className = '', borderClassName }: AnimatedImageProps) => (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: 'easeInOut'
      }}
      viewport={{
        once: true
      }}
      className="relative w-full max-w-[75%] group z-10"
    >
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        style={{
          boxShadow: '0 0px 20px 10px rgba(0, 0, 0, 0.4)'
        }}
        className={`relative w-full max-h-[350px] object-cover ${borderClassName} ${className}`}
        loading="lazy"
      />
    </motion.div>
  )
);

// Optimized video component with proper cleanup
const LazyVideo = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          video.play().catch((err) => console.error('Video play error:', err));
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -250 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.5,
        ease: 'easeInOut'
      }}
      viewport={{ once: true }}
      className="relative w-full max-w-[75%] group z-10"
    >
      <video
        ref={videoRef}
        src="/step3.mp4"
        playsInline
        muted
        loop
        style={{
          boxShadow: '0 0px 20px 10px rgba(0, 0, 0, 0.4)'
        }}
        className="relative w-full max-h-[350px] object-cover rounded-ee-3xl rounded-es-3xl border-2 border-t-0 border-white/20"
        preload="metadata"
      />
    </motion.div>
  );
});

// Gradient styles defined outside component to prevent recreation on each render
const GRADIENT_STYLES = {
  step1: `radial-gradient(circle at 100% 0%, #FFD700D5 0%, transparent 40%),
          radial-gradient(circle at 100% 50%, #000000D5 0%, transparent 40%),
          radial-gradient(circle at 100% 100%, #00FFFFD5 0%, transparent 40%),
          radial-gradient(circle at 50% 100%, #FF00FFD5 0%, transparent 40%),
          radial-gradient(circle at 0% 100%, #FF4500D5 0%, transparent 40%),
          radial-gradient(circle at 0% 50%, #8A2BE2D5 0%, transparent 40%),
          radial-gradient(circle at 0% 0%, #1E90FFD5 0%, transparent 40%), 
          radial-gradient(circle at 0% 50%, #32CD32D5 0%, transparent 40%)`,
  step2: `radial-gradient(circle at 100% 0%, #4A90E2D5 0%, transparent 40%),
          radial-gradient(circle at 100% 50%, #000000D5 0%, transparent 40%), 
          radial-gradient(circle at 100% 100%, #6366F1D5 0%, transparent 40%),
          radial-gradient(circle at 50% 100%, #8B5CF6D5 0%, transparent 40%),
          radial-gradient(circle at 0% 100%, #EC4899D5 0%, transparent 40%),
          radial-gradient(circle at 0% 50%, #3B82F6D5 0%, transparent 40%),
          radial-gradient(circle at 0% 0%, #10B981D5 0%, transparent 40%),
          radial-gradient(circle at 50% 0%, #6366F1D5 0%, transparent 40%)`,
  step3: `radial-gradient(circle at 100% 0%, #F43F5E 0%, transparent 50%),
          radial-gradient(circle at 100% 50%, #000000 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, #EC4899 0%, transparent 50%), 
          radial-gradient(circle at 50% 100%, #D946EF 0%, transparent 50%),
          radial-gradient(circle at 0% 100%, #A855F7 0%, transparent 50%),
          radial-gradient(circle at 0% 50%, #8B5CF6 0%, transparent 50%),
          radial-gradient(circle at 0% 0%, #6366F1 0%, transparent 50%),
          radial-gradient(circle at 50% 0%, #4F46E5 0%, transparent 60%)`
};

// Step components
const Step1 = memo(() => (
  <GradientBackground gradientStyle={GRADIENT_STYLES.step1}>
    <StepTitle>Browse ready-to-use snippets</StepTitle>
    <AnimatedImage
      src="/step1.png"
      alt="Browse ready-to-use snippets"
      initial={{ y: 250 }}
      whileInView={{ y: 70 }}
      borderClassName="rounded-ss-3xl rounded-se-3xl border-2 border-b-0 border-white/20"
    />
  </GradientBackground>
));

const Step2 = memo(() => (
  <GradientBackground gradientStyle={GRADIENT_STYLES.step2}>
    <StepTitle>Copy with a click</StepTitle>
    <div className="w-full h-full flex items-start gap-5 justify-start">
      <AnimatedImage
        src="/step2.png"
        alt="Copy with a click"
        initial={{ y: 250, x: -100 }}
        whileInView={{ y: 70, x: 0 }}
        borderClassName="rounded-se-3xl border-2 border-b-0 border-l-0 border-white/20"
      />
    </div>
  </GradientBackground>
));

const Step3 = memo(() => (
  <GradientBackground gradientStyle={GRADIENT_STYLES.step3}>
    <LazyVideo />
    <StepTitle className="mb-16 mt-10">One Paste & Limitless Possibilities</StepTitle>
  </GradientBackground>
));

// Main component
const Demo = () => {
  // Define steps using memoization to prevent recreation on each render
  const steps = useMemo(
    () => [
      {
        illustration: <Step1 />,
        className: 'col-span-12 row-span-1'
      },
      {
        illustration: <Step2 />,
        className: 'col-span-12 row-span-1'
      },
      {
        illustration: <Step3 />,
        className: 'col-span-12 row-span-1'
      }
    ],
    []
  );

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <p className="text-white text-4xl md:text-6xl lg:text-8xl font-semibold mt-10">
        How It Works.
      </p>
      <div className="w-full grid grid-cols-12 grid-flow-dense items-center justify-center mt-10 max-w-[1100px] gap-5">
        {steps.map((step, i) => (
          <div key={`step-${i}`} className={`w-full ${step.className}`}>
            {step.illustration}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Demo);
