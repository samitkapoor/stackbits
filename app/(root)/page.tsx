import Demo from '@/components/demo';
import HeroSection from '@/components/hero-section';
import LandingFooter from '@/components/landing-footer';
import TechStack from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto flex flex-col gap-44 bg-black relative">
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="absolute inset-0 h-full w-full">
          {/* Grid pattern with increased opacity and contrast */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Smaller grid overlay for more detail */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:25px_25px]" />

          {/* Base gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/70 via-purple-500/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500 via-orange-900/20 to-transparent" />

          {/* Vignette effect using radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/20 via-black/60 to-black/90" />
        </div>

        {/* Additional vignette layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-black via-black/80 to-transparent" />
        <div className="relative mt-36">
          <HeroSection />
          <TechStack />
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Demo />
      </div>
      <LandingFooter />
    </div>
  );
}
