import MovingBorderCard from '@/components/ui/moving-border-card';
import { Document } from '../main';
import { RefreshCcw } from 'lucide-react';
import React from 'react';

export const movingBorderCardPreview = () => {
  return (
    <div className="h-full w-full flex items-center justify-center scale-90">
      <MovingBorderCard
        wrapperClassName="rounded-xl"
        className="h-[250px] w-[300px] bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white shadow-xl rounded-lg p-6"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-semibold mb-2">Premium Card</h2>
          <p className="text-center mb-4 text-gray-300">
            The dynamic moving border adds a touch of elegance and modernity.
          </p>
          <button className="mt-auto bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors">
            Learn More
          </button>
        </div>
      </MovingBorderCard>
    </div>
  );
};

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
            <MovingBorderCard
              wrapperClassName="rounded-xl"
              className="h-[250px] w-[300px] bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white shadow-xl rounded-lg p-6"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-semibold mb-2">Premium Card</h2>
                <p className="text-center mb-4 text-gray-300">
                  The dynamic moving border adds a touch of elegance and modernity.
                </p>
                <button className="mt-auto bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors">
                  Learn More
                </button>
              </div>
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
        code: `<MovingBorderCard
  wrapperClassName="rounded-xl"
  className="h-[250px] w-[300px] bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white shadow-xl rounded-lg p-6"
>
  <div className="flex flex-col items-center justify-center h-full">
    <h2 className="text-2xl font-semibold mb-2">Premium Card</h2>
    <p className="text-center mb-4 text-gray-300">
      The dynamic moving border adds a touch of elegance and modernity.
    </p>
    <button className="mt-auto bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors">
      Learn More
    </button>
  </div>
</MovingBorderCard>`
      }
    ]
  }
};
