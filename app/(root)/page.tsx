import FeaturesSection from '@/components/features-section';
import HeroSection from '@/components/hero-section';
import TopBar from '@/components/top-bar';

export default function Home() {
  return (
    <div className="h-full w-screen overflow-x-hidden overflow-y-scroll flex flex-col p-0 bg-black">
      <TopBar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
