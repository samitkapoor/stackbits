import CopyTextButton from '@/components/ui/copy-text-button';
import { Document } from '../main';
import { Rocket } from 'lucide-react';

export const copyTextButton: Document = {
  sideBar: {
    group: 'Components',
    name: 'ExpandableIconButton',
    order: 11
  },
  content: {
    sections: [
      {
        heading: 'ExpandableIconButton',
        content:
          'Think of this as the Clark Kent of buttons—small, subtle, and all business at first. But the moment you hover, BOOM! It expands, revealing its secret identity (a text label!).',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <p className="text-center text-xs sm:text-base">Click the button below to copy the text</p>
            <CopyTextButton handle={'Stackbits is awesome'} icon={<Rocket className="h-5 w-5" />} />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i lucide-react`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file copy-text-button.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CopyTextButton = ({
  handle, // * Text you want the user to copy
  icon = <Copy className="h-5 w-5"/>, // * Icon to show on the button
  variant = 'default',
  onCopy
}: {
  handle: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'small';
  onCopy?: () => void;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (onCopy) onCopy();
    else navigator.clipboard.writeText(handle);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      className={\`bg-gray-800 w-min hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition \${
        variant === 'small' && 'text-xs'
      }\`}
      onClick={handleCopy}
    >
      {copied ? (
        <Check className={\`\${variant === 'small' ? 'w-4 h-4' : 'w-5 h-5'} text-green-400\`} />
      ) : (
        icon
      )}
      <span className="whitespace-nowrap">{handle}</span>
    </button>
  );
};

export default CopyTextButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<CopyTextButton handle={'Stackbits is awesome'} icon={<Rocket className="h-5 w-5" />} />`
      }
    ]
  }
};
