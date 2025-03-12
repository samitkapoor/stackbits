import { comments } from '@/data/comments';
import React from 'react';
import Testimonies from './ui/testimonies';

const Comments = () => {
  return (
    <div
      style={{
        background: 'url(/comments/grainy-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className="w-full flex flex-col items-center justify-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative"
    >
      <div
        style={{
          background: 'radial-gradient(circle at center, transparent, #000000)'
        }}
        className="h-full w-full absolute top-0 left-0"
      />
      <p className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold text-center mb-10 z-10">
        What are they saying.
      </p>
      <div className="z-10 w-full">
        <Testimonies items={comments} />
      </div>
    </div>
  );
};

export default Comments;
