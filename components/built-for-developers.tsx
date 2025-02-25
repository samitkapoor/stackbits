import { TwitterIcon } from 'lucide-react';
import WavyBackground from './ui/wavy-background';
import NavigationButton from './ui/navigation-button';

const BuiltForDevelopers = () => {
  const twitterHandle = 'x.com/samitkapoorr';

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2 mt-10">
      <div className="flex items-center justify-center rounded-xl overflow-hidden">
        <WavyBackground speed={1}>
          <div className="h-[70vh] w-screen flex flex-col items-center justify-start gap-2 relative">
            <div
              style={{
                background: 'radial-gradient(circle, transparent, #000000)'
              }}
              className="h-full w-full absolute opacity-80 -z-10"
            ></div>
            <h2 className="text-3xl md:text-4xl mb-10 font-bold text-center relative mt-20">
              Built for Developers, by a{' '}
              <span className="underline text-purple-300 hover:text-purple-200 transition-all">
                <a href="https://samitkapoor.com" target="_blank">
                  Developer
                </a>
              </span>
              <br /> Who Was Just as <span className="glitch">Frustrated</span> as You.
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mt-4">
              No fluff. Just clean, reusable code.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Use it. Steal it. Make your life easier.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-gray-400">If you love it, drop a shoutout on</span>
              <NavigationButton
                target="_blank"
                href={'https://x.com/samitkapoorr'}
                icon={<TwitterIcon className="w-5 h-5" />}
                className="opacity-60 rounded-full"
              >
                {twitterHandle}
              </NavigationButton>
            </div>
          </div>
        </WavyBackground>
      </div>
    </div>
  );
};

export default BuiltForDevelopers;
