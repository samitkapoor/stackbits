import { TwitterIcon } from 'lucide-react';
import CopyTextButton from './ui/copy-text-button';

const BuiltForDevelopers = () => {
  const twitterHandle = 'x.com/samitkapoorr';

  return (
    <div>
      <h2 className="text-3xl md:text-4xl mt-40 font-bold text-center relative">
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
    </div>
  );
};

export default BuiltForDevelopers;
