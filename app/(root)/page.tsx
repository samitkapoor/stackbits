import Demo from '@/components/demo';
import HeroSection from '@/components/hero-section';
import LandingFooter from '@/components/landing-footer';
import TechStack from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-auto flex flex-col gap-44 bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <HeroSection />
        <TechStack />
        <Demo />
      </div>
      <LandingFooter />
    </div>
  );
}
