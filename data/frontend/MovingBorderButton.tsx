import MovingBorderButton from '@/components/ui/moving-border-button';
import { Document } from '../main';

export const movingBorderButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <MovingBorderButton className="text-lg md:text-xl font-medium !px-5 sm:!px-10 py-4">
      Continue
    </MovingBorderButton>
  </div>
);

export const movingBorderButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Moving Border Button',
    order: 6
  },
  content: {
    sections: [
      {
        heading: 'Moving Border Button',
        content:
          'A visually appealing button with an animated border that moves continuously, adding a dynamic touch to your UI. Ideal for modern designs, this effect is achieved using CSS keyframes for smooth transitions. Enhance user interaction with this stylish component!',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: movingBorderButtonPreview
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file moving-border-button.tsx in your components folder and paste this code',
        code: `import React from 'react';
        
const MovingBorderButton = ({
    children,
    wrapperClassName,
    className,
    onClick,
    type = 'button'
}: {
    children?: React.ReactNode;
    wrapperClassName?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    type?: 'button' | 'submit' | 'reset';
}) => {
    return (
    <button
        className={\`moving-border-btn rounded-full p-[1px] \${wrapperClassName}\`}
        onClick={onClick}
        type={type}
    >
        <div
        className={\`bg-black rounded-full px-2 py-1 flex items-center justify-center relative \${className}\`}
        >
        {children}
        </div>
    </button>
    );
};

export default MovingBorderButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<MovingBorderButton className="text-lg md:text-xl lg:text-3xl font-medium !px-5 sm:!px-10 py-4">
    Join the speedforce
</MovingBorderButton>`
      }
    ]
  }
};
