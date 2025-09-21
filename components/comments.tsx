import { comments } from '@/data/comments';
import React from 'react';
import Testimonies from './ui/testimonies';

const Comments = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center absolute top-0 left-0">
      <div className="z-0 w-full h-full">
        <Testimonies items={comments} />
      </div>
    </div>
  );
};

export default Comments;
