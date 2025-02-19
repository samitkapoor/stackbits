import { TwitterIcon } from 'lucide-react';
import CopyTextButton from './ui/copy-text-button';

const BuiltForDevelopers = () => {
  const twitterHandle = 'x.com/samitkapoorr';

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 text-center relative mt-44">
      <div className="absolute inset-0 bg-grid-white/20 pointer-events-none"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-center relative">
        Built for Developers, by a{' '}
        <span className="underline text-purple-300 hover:text-purple-200 transition-all">
          <a href="https://samitkapoor.com" target="_blank">
            Developer
          </a>
        </span>
        <br /> Who Was Just as <span className="glitch">Frustrated</span> as You.
      </h2>

      <p className="text-lg md:text-xl text-gray-300 mt-4">No fluff. Just clean, reusable code.</p>
      <p className="text-lg md:text-xl text-gray-300">Use it. Steal it. Make your life easier.</p>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="text-gray-400">If you love it, drop a shoutout on</span>
        <CopyTextButton handle={twitterHandle} icon={<TwitterIcon className="w-5 h-5" />} />
      </div>
    </section>
  );
};

export default BuiltForDevelopers;
