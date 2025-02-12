import Image from 'next/image';
import { Document } from '../main';
import StoryAvatar from '@/components/ui/story-avatar';

export const storyAvatar: Document = {
  sideBar: {
    group: 'Components',
    name: 'StoryAvatar',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'StoryAvatar',
        content:
          'Ever wanted to create an avatar like the ones you see on Instagram Stories? This component gives you a sleek, rounded profile avatar with a gradient border effect, perfect for highlighting user stories or statuses. Easily customizable with different border styles and hover effects to match your design needs.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="flex flex-wrap items-center gap-10 p-5 justify-center w-full h-full">
            <StoryAvatar>
              <Image alt="nft-monkey" src="/nft-monkey.svg" width={100} height={100} />
            </StoryAvatar>
            <StoryAvatar
              spin
              backgroundClassName="!bg-gradient-to-br !from-blue-500 !to-transparent"
            >
              <Image alt="nft-monkey" src="/nft-monkey.svg" width={100} height={100} />
            </StoryAvatar>
            <StoryAvatar
              flicker
              backgroundClassName="!bg-gradient-to-r !from-green-200 !to-green-100"
            >
              <Image alt="nft-monkey" src="/nft-monkey.svg" width={100} height={100} />
            </StoryAvatar>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Styles',
        sectionType: 'styling',
        code: `@keyframes neon-flicker {
  0%,
  100% {
    opacity: 1;
    box-shadow: 0 0 10px #00ffa3, 0 0 30px #00ffa3;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 15px #00ffa3, 0 0 40px #00ffa3;
  }
}

.flicker {
  animation: neon-flicker 0.8s infinite alternate;
}
  
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spin {
  animation: spin 1.5s linear infinite;
}
`,
        sentence:
          '💡 Want to increase the speed of the animation? Change the duration in the animation.'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file story-avatar.tsx in your components folder and paste this code',
        code: `import React from 'react';
        
const StoryAvatar = ({
  children,
  spin = false, // * true value would make the background gradient spin
  flicker = false, // * true value would add a neon glowing shadow flicker effect
  backgroundClassName,
  wrapperClassName,
  className
}: {
  // * Remove these data types for javascript
  children?: React.ReactNode;
  spin?: boolean;
  flicker?: boolean;
  backgroundClassName?: string;
  wrapperClassName?: string;
  className?: string;
  // * ----
}) => {
  return (
    // * wrapper div
    <div className={\`rounded-full overflow-hidden p-[5px] flex items-center justify-center relative \${wrapperClassName} \${flicker && 'flicker'}\`} >
      {/* background gradient div */}
      <div className={\`rounded-full \${spin && 'spin'} overflow-hidden bg-gradient-to-br from-orange-400 to-pink-800 h-full w-full absolute z-0 \${backgroundClassName}\`} />
      {/* your component wrapper div */}
      <div className={\`rounded-full overflow-hidden border-[1px] border-black z-10 \${className}\`}>
        {children}
      </div>
    </div>
  );
};

export default StoryAvatar;
        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<StoryAvatar spin={true} flicker={false}>
    <Image alt="nft-monkey" src="/nft-monkey.svg" width={100} height={100} />
</StoryAvatar>`
      }
    ]
  }
};
