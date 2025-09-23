import { comments } from '@/data/comments';
import React from 'react';
import SpaceTravel from './backgrounds/space-travel';
import SocialMediaCard, { PostType } from './components/social-media-card';

const Comments = () => {
  return (
    <div className="w-full h-full flex-col items-center justify-center absolute top-0 left-0 lg:flex hidden">
      <div className="z-0 w-full h-full">
        <SpaceTravel<PostType>
          items={comments as PostType[]}
          renderChild={(item: PostType) => <SocialMediaCard post={{ ...item, isVerified: true }} />}
        />
      </div>
    </div>
  );
};

export default Comments;
