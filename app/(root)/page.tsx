'use client';

import Comments from '@/components/comments';
import Components from '@/components/components';
import Demo from '@/components/demo';
import HeroSection from '@/components/hero-section';
import LandingFooter from '@/components/landing-footer';
import TechStack from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto flex flex-col gap-20 bg-black relative">
      <div className="relative mx-auto w-full">
        {/* <div className="absolute inset-0 h-full w-full"> */}
        {/* Enhanced grid pattern with CSS animation */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:50px_50px]" /> */}

        {/* Smaller grid overlay with offset animation */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:25px_25px]" /> */}

        {/* Improved gradients with more vibrant colors */}
        {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/70 via-purple-500/20 to-transparent bg-[length:400%_400%] animate-gradient-slow" />
          <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/60 via-orange-800/30 to-transparent bg-[length:400%_400%] animate-gradient-medium" /> */}

        {/* Additional accent gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-transparent bg-[length:400%_400%] animate-gradient-slower" /> */}

        {/* Improved vignette effect */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.8)_100%)]" /> */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/30 via-black/70 to-black/90" /> */}
        {/* </div> */}

        {/* Enhanced vignette layers */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" /> */}
        {/* <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-black via-black/70 to-transparent" /> */}
        <div className="relative">
          <HeroSection />
          <TechStack />
        </div>
      </div>
      {/* Removed background behind Demo component */}
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative">
          <Demo />
        </div>
      </div>
      <Components />
      <Comments />
      <LandingFooter />
    </div>
  );
}
