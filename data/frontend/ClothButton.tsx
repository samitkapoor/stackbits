import { Document } from '../main';
import ClothButton from '@/components/ui/cloth-button';

export const clothButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <ClothButton>
      <p>Cloth Button</p>
    </ClothButton>
  </div>
);

export const clothButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Cloth Button',
    order: 2
  },
  content: {
    sections: [
      {
        heading: '🔍 Cloth Button',
        content:
          "Make copying text effortless with the Copy Button, a simple yet powerful React component designed for quick text duplication. Ideal for sharing links, copying tags, or grabbing reusable content, this button enhances user experience with instant feedback—whether it's a tooltip, icon change, or subtle animation.",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: clothButtonPreview
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
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
