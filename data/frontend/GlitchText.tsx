import GlitchText from '@/components/ui/glitch-text';
import { Document } from '../main';

export const glitchText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Glitch Text',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'Glitch Text',
        content:
          'Bored of plain old text? Want your words to look like they just escaped the Matrix? Meet GlitchText—a funky, animated, cyberpunk-style text effect that adds a chaotic, digital distortion to your UI.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-xl sm:text-2xl md:text-4xl">
              Stackbits is <GlitchText className="font-semibold">Awesome</GlitchText>
            </p>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Styling',
        sectionType: 'styling',
        code: `.glitch {
  position: relative;
  display: inline-block;
  animation: glitch 1.5s infinite;
}

@keyframes glitch {
  0% {
    text-shadow: 3px 3px 0 #ff0d00, -3px -3px 0 #00ffff;
  }
  25% {
    text-shadow: -3px -3px 0 #ff00ff, 3px 3px 0 #00ffff;
  }
  50% {
    text-shadow: 3px -3px 0 #0400ff, -3px 3px 0 #00ffff;
  }
  75% {
    text-shadow: -3px 3px 0 #00ff00, 3px -3px 0 #00ffff;
  }
  100% {
    text-shadow: 3px 3px 0 #ff0d00, -3px -3px 0 #00ffff;
  }
}`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file custom-scrollbar.tsx in your components folder and paste this code',
        code: `import React from 'react';
        
const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <span className={\`glitch \${className}\`}>{children}</span>;
};

export default GlitchText;
        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<p className="text-4xl">
    Stackbits is <GlitchText className="font-semibold">Awesome</GlitchText>
</p>`
      }
    ]
  }
};
