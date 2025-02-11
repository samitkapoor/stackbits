import FlickerBox from '@/components/ui/flicker-box';
import { Document } from '../main';

export const flicker: Document = {
  sideBar: {
    group: 'Frontend',
    name: 'FlickerBox',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'FlickerBox',
        content:
          'Ever wanted your components to have that mysterious glow? Maybe a soft flickering neon effect for a cyberpunk vibe? Or a subtle shimmer that catches the eye? Flicker wraps around any component and gives it a dynamic, flickering shadow—because static UI is just too predictable!',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <FlickerBox>Watch me glow</FlickerBox>
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
}`,
        sentence: '💡 Change #00ffa3 to any color you want!'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file flicker-box.tsx in your components folder and paste this code',
        code: `import React from 'react';
        
const FlickerBox = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flicker px-10 py-10 rounded-xl bg-[#1A1A2E]">
    {children} 
  </div>;
};

export default FlickerBox;
        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FlickerBox>Watch me glow</FlickerBox>`
      }
    ]
  }
};
