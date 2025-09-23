import { comments } from '@/data/comments';
import React from 'react';
import SpaceTravel from './backgrounds/space-travel';
import TestimonialCardItem from './components/testimonial-card';

type SpaceTravelItemType = {
  id: number;
  image?: string;
  href: string;
  special?: boolean;
  name?: string;
  comment?: string;
  pfp?: string;
  platform?: 'x' | 'peerlist' | 'reddit';
};

const Comments = () => {
  return (
    <div className="w-full h-full flex-col items-center justify-center absolute top-0 left-0 lg:flex hidden">
      <div className="z-0 w-full h-full">
        <SpaceTravel<SpaceTravelItemType>
          items={comments}
          renderChild={(item: SpaceTravelItemType) => <TestimonialCardItem item={item} />}
        />
      </div>
    </div>
  );
};

export default Comments;
