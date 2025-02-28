import Demo from '@/components/demo';
import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import TechStack from '@/components/tech-stack';

export default function Home() {
  return (
    <div className="h-full w-screen overflow-x-hidden overflow-y-scroll flex flex-col bg-black">
      <HeroSection />
      <TechStack />
      <Demo />
      {/* <FeaturesSection /> */}
      <div className="w-full h-96"></div>
    </div>
  );
}
