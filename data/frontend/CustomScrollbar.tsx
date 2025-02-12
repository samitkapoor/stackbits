import CustomScrollbarDemo from '@/components/custom-scrollbar-demo';
import { Document } from '../main';

export const customScrollbar: Document = {
  sideBar: {
    group: 'Components',
    name: 'CustomScrollbar',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'CustomScrollbar',
        content:
          'Let’s be honest—default scrollbars are boring. They’re clunky, uninspiring, and look like they belong in the early 2000s. But don’t worry, we’ve got just the fix! Introducing Custom Scrollbar, a sleek, minimal, and aesthetically pleasing scrollbar that actually feels good to use.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <CustomScrollbarDemo />
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Styling',
        sectionType: 'styling',
        code: `.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f2f2f2;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #66bb6a;
  border-radius: 10px;
  transition: background 0.3s;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #4caf50;
}',`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file custom-scrollbar.tsx in your components folder and paste this code',
        code: `import React, { ReactNode } from 'react';
        
type CustomScrollbarProps = {
  children?: ReactNode;
  className?: string;
};

const CustomScrollbar = ({ children, className }: CustomScrollbarProps) => {
  return <div className={\`custom-scrollbar \${className} overflow-y-auto\`}>{children}</div>;
};

export default CustomScrollbar;
        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<CustomScrollbar>
  {...}
</CustomScrollbar>`
      }
    ]
  }
};
