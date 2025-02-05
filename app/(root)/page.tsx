import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="h-full w-full overflow-y-scroll flex flex-col pb-96 bg-black">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
