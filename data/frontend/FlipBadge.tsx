import FlipBadge from '@/components/ui/flip-badge';
import { Document } from '../main';

export const flipBadge: Document = {
  sideBar: {
    group: 'Components',
    name: 'FlipBadge',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'FlipBadge',
        content:
          'Ever wanted a badge that stands out—literally? This component adds a dynamic flipping effect to your badges, making them feel interactive and eye-catching. Perfect for status indicators, achievement badges, or call-to-action elements. Fully customizable with different colors, and content on each side.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <FlipBadge
              frontContent={<p className="font-medium text-black">"Should be an easy fix"</p>}
              backContent={<p className="font-medium text-white">*Spends 6 hours*</p>}
            />
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
        code: `@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(-180deg); 
  }
  100% {
    transform: rotateY(-360deg); 
  }
}

/* Apply animation to the entire container */
.flip {
  animation: flip 2.4s linear infinite;
  transform-style: preserve-3d;
  position: relative;
}

/* Ensure back side is rotated initially */
.flip-back {
  transform: rotateY(180deg);
}`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file flip-badge.tsx in your components folder and paste this code',
        code: `import React from 'react';
        
const FlipBadge = ({
  frontContent,
  backContent
}: {
  // * Remove these data types for javascript
  frontContent?: string | React.ReactNode;
  backContent?: string | React.ReactNode;
  // * ----
}) => {
  return (
    <div className="relative h-[200px] w-[200px] rounded-full" style={{ perspective: '1000px' }}>
      <div className="flip h-full w-full rounded-full relative">
        {/* Front Side */}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-neutral-100 rounded-full"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          {frontContent}
        </div>

        {/* Back Side*/}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-neutral-700 rounded-full flip-back"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipBadge;
        `,
        sentence:
          '💡 Customize the background colors to anything you like—make it as wild or as classy as you want!'
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FlipBadge
  frontContent={<p className="font-medium text-black">"Should be an easy fix"</p>}
  backContent={<p className="font-medium text-white">*Spends 6 hours*</p>}
/>`
      }
    ]
  }
};
