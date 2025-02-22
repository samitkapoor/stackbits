import MovingBorderCard from '@/components/ui/moving-border-card';
import { Document } from '../main';
import { RefreshCcw } from 'lucide-react';

export const movingBorderCardPreview = (
  <div className="h-full w-full flex items-center justify-center scale-90">
    <MovingBorderCard className="h-[200px] w-[250px] bg-neutral-900 flex gap-1 text-xl">
      Border <RefreshCcw />
    </MovingBorderCard>
  </div>
);

export const movingBorderCard: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Moving Border Card',
    order: 2
  },
  content: {
    sections: [
      {
        heading: '🥶 Moving Border Card',
        content:
          'The MovingBorderCard component wraps its content with a stylish animated border effect. It accepts children (content inside the card), along with optional wrapper and card-specific class names for customization. Ideal for highlighting key information with a modern, dynamic look. 🚀✨',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <MovingBorderCard className="h-[200px] w-[250px] bg-neutral-900 flex gap-1 text-xl">
              Border <RefreshCcw />
            </MovingBorderCard>
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
        code: `.moving-border-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(var(--angle), transparent 90%, #ffffff 90%);
  animation: moveGradient 4s linear infinite;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes moveGradient {
  to {
    --angle: 360deg;
  }
}`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file moving-border-card.tsx in your components folder and paste this code',
        code: `import React from 'react';
        
const MovingBorderCard = ({
    children,
    wrapperClassName,
    className
}: {
    children?: React.ReactNode;
    wrapperClassName?: string;
    className?: string;
}) => {
    return (
    <div className={\`moving-border-card p-[3px] \${wrapperClassName}\`}>
        <div className={\`flex items-center justify-center relative \${className}\`}>{children}</div>
    </div>
    );
};

export default MovingBorderCard;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GlassCard className="flex flex-col">
  ...
</GlassCard>`
      }
    ]
  }
};
