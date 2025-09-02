import CopyTextButton from '@/components/ui/copy-text-button';
import { Document } from '../main';
import { cnCode } from '@/constants/code';
import { Copy } from 'lucide-react';

export const copyButtonPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <CopyTextButton handle="Copy some text" icon={<Copy className="w-4 h-4" />} />
  </div>
);

export const copyButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Copy Button',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <CopyTextButton handle="Copy some text" icon={<Copy className="w-4 h-4" />} />
      },
      {
        heading: 'Copy Text Button',
        sectionType: 'component',
        description:
          'Create a file copy-text-button.tsx in your components folder and paste this code',
        code: `'use client';
    
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

const CopyTextButton = ({
  handle, // * Text you want to copy
  icon = <Copy className="h-5 w-5" />, // * Icon to show on the button
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
      className={cn(
        'bg-gray-800 w-min hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition',
        variant === 'small' && 'text-xs'
      )}
      onClick={handleCopy}
    >
      {copied ? (
        <Check className={cn(variant === 'small' ? 'w-4 h-4' : 'w-5 h-5', 'text-green-400')} />
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
        code: `<CopyTextButton handle="Copy some text" icon={<Copy className="w-4 h-4" />} />`
      }
    ]
  }
};
