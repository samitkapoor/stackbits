'use client';

import { useState } from 'react';
import { Check, TwitterIcon } from 'lucide-react';

const BuiltForDevelopers = () => {
  const twitterHandle = 'x.com/samitkapoorr';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(twitterHandle);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 text-center relative">
      <div className="absolute inset-0 bg-grid-white/20 pointer-events-none"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-center relative">
        Built for Developers, by a Developer
        <br /> Who Was Just as <span className="glitch">Frustrated</span> as You.
      </h2>

      <p className="text-lg md:text-xl text-gray-300 mt-4">No fluff. Just clean, reusable code.</p>
      <p className="text-lg md:text-xl text-gray-300">Use it. Steal it. Make your life easier.</p>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="text-gray-400">If you love it, drop a shoutout on</span>
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <TwitterIcon className="w-5 h-5" />
          )}
          {twitterHandle}
        </button>
      </div>
    </section>
  );
};

export default BuiltForDevelopers;
