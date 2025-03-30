import BrowserWindow from '@/components/ui/browser-window';
import { Document } from '../main';
import HeroIllustration from '@/components/hero-illustration';

export const browserWindowPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <BrowserWindow url="stackbits.dev" childrenClassName="py-20">
      <div>This is a browser window.</div>
    </BrowserWindow>
  </div>
);

export const browserWindow: Document = {
  sideBar: {
    group: 'Components',
    name: 'Browser Window',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Browser Window',
        content:
          'The BrowserWindow component is a sleek and customizable React UI component that mimics a browser window, perfect for showcasing website previews, code snippets, or application demos. Designed with Tailwind CSS, it features a modern dark-themed UI, a decorative URL bar, and traffic light buttons for an authentic look.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="w-full h-full flex items-center justify-center">
            <HeroIllustration />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },

      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file browser-window.tsx in your components folder and paste this code',
        code: `import React from 'react';

type BrowserWindowProps = {
  children: React.ReactNode;
  url?: string;
  className?: string;
  childrenClassName?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
} & React.HTMLAttributes<HTMLDivElement>;

const BrowserWindow: React.FC<BrowserWindowProps> = ({
  children,
  url,
  className,
  childrenClassName,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      className={\`flex flex-col items-center justify-between rounded-lg overflow-hidden border border-neutral-700 shadow-lg bg-neutral-900/60 h-full w-full relative \${className}\`}
      style={{ minWidth: '150px', minHeight: '200px' }}
      {...props}
    >
      {/* Browser Header */}
      <div className="flex items-center px-4 py-2 bg-neutral-800 border-b border-neutral-700 w-full">
        {/* Traffic Light Buttons */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* URL Bar (optional, for decoration) */}
        <div className="flex-1 mx-4">
          <div className="h-6 bg-neutral-600 rounded-md w-full flex items-center justify-center">
            <p className="text-xs text-neutral-300">{url}</p>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className={\`w-full flex-1 p-2 flex items-center justify-center \${childrenClassName}\`}>
        {children}
      </div>
    </div>
  );
};

export default BrowserWindow;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: ` <BrowserWindow url="stackbits.dev" childrenClassName="py-20">
    <div>This is a browser window.</div>
</BrowserWindow>`
      }
    ]
  }
};
