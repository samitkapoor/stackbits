import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="h-full w-screen overflow-x-hidden overflow-y-scroll flex flex-col bg-black">
      <HeroSection />
      {/* <FeaturesSection /> */}
      <div className="w-full h-96"></div>
    </div>
  );
}
