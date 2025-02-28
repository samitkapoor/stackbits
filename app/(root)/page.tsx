'use client';

import Components from '@/components/components';
import Demo from '@/components/demo';
import HeroSection from '@/components/hero-section';
import LandingFooter from '@/components/landing-footer';
import TechStack from '@/components/tech-stack';

export default function Home() {
  // Generate more stars and constrain them to the top section
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    // Constrain stars to top 40% of the container
    top: Math.floor(Math.random() * 40),
    left: Math.floor(Math.random() * 100),
    // Vary star sizes more for visual interest
    size: Math.random() * 2.5 + 2,
    delay: Math.floor(Math.random() * 15),
    duration: Math.floor(Math.random() * 10) + 8
  }));

  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto flex flex-col gap-20 bg-black relative">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="absolute inset-0 h-full w-full">
          {/* Enhanced grid pattern with CSS animation */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Smaller grid overlay with offset animation */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:25px_25px]" />

          {/* Improved gradients with more vibrant colors */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/70 via-purple-500/20 to-transparent bg-[length:400%_400%] animate-gradient-slow" />
          <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/60 via-orange-800/30 to-transparent bg-[length:400%_400%] animate-gradient-medium" />

          {/* Additional accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-transparent bg-[length:400%_400%] animate-gradient-slower" />

          {/* Improved vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/30 via-black/70 to-black/90" />

          {/* Star field concentrated in top section - Fixed visibility */}
          <div className="absolute inset-x-0 top-0 h-[60vh] overflow-hidden z-10">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute rounded-full bg-white animate-twinkle"
                style={{
                  top: `${star.top}%`,
                  left: `${star.left}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: `${star.delay}s`,
                  animationDuration: `${star.duration}s`,
                  opacity: 0.1 // Starting opacity to make stars visible
                }}
              />
            ))}

            {/* Add a few brighter stars for visual interest */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`bright-star-${i}`}
                className="absolute rounded-full bg-white animate-twinkle-bright"
                style={{
                  top: `${Math.random() * 35}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1.5}px`,
                  height: `${Math.random() * 3 + 1.5}px`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${Math.random() * 8 + 6}s`,
                  opacity: 0.2 // Starting opacity to make stars visible
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced vignette layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-black via-black/70 to-transparent" />
        <div className="relative mt-36">
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
      <div className="mt-36">
        <LandingFooter />
      </div>
    </div>
  );
}
