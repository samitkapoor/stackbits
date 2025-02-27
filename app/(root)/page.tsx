import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden overflow-y-scroll flex flex-col p-0 bg-black">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
