import { cnCode } from '@/constants/code';
import { Document } from '../main';
import MovingBorderButton from '@/components/buttons/moving-border-button';

export const movingBorderButtonPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <MovingBorderButton>Continue</MovingBorderButton>
  </div>
);

export const movingBorderButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Moving Border Button',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Moving Border Button',
        content:
          'A button with a spinning border that moves around the edge. The border changes color when you hover over it.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: <MovingBorderButton>Continue</MovingBorderButton>
      },
      cnCode,
      {
        heading: 'Moving Border Button',
        sectionType: 'component',
        description:
          'Create a file moving-border-button.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import React, { useState } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={cn(\`rounded-full overflow-hidden relative p-[2px]\`, wrapperClassName)}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type={type}
    >
      <span
        className={cn(
          'absolute transition-all inset-[-200%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_30%,#444444_100%)] blur-md',
          isHovered && 'bg-[conic-gradient(from_90deg,transparent_30%,#FFFFFF_100%)] '
        )}
      />
      <span
        className={cn(
          \`bg-black transition-all hover:bg-zinc-950 rounded-full px-4 py-2 flex items-center justify-center relative\`,
          className
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default MovingBorderButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<MovingBorderButton>Continue</MovingBorderButton>`
      }
    ]
  }
};
