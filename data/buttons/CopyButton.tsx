import CopyTextButton from '@/components/ui/copy-text-button';
import { Document } from '../main';
import { cnCode } from '@/constants/code';
import { Copy } from 'lucide-react';

export const copyButtonPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <CopyTextButton label="Copy some text" icon={<Copy className="w-4 h-4" />} />
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
        code: (
          <div className="flex flex-col gap-4 items-center justify-center">
            <CopyTextButton
              label="Copy some text"
              textToCopy="pAsSwOrD"
              icon={<Copy className="w-4 h-4" />}
            />
            <CopyTextButton
              label="Small Variant"
              textToCopy="pAsSwOrD"
              icon={<Copy className="w-4 h-4" />}
              variant="small"
            />
          </div>
        )
      },
      cnCode,
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion`
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
import { AnimatePresence, motion } from 'framer-motion';

const CopyTextButton = ({
  label,
  icon = <Copy className="h-5 w-5" />, // * Icon to show on the button
  variant = 'default',
  className = '',
  onCopy,
  textToCopy // * Text you want to copy
}: {
  label: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'small';
  className?: string;
  onCopy?: () => void;
  textToCopy?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (onCopy) onCopy();
    else navigator.clipboard.writeText(textToCopy || label);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      className={cn(
        'bg-zinc-800 w-min hover:bg-zinc-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition',
        variant === 'small' && 'text-xs',
        className
      )}
      onClick={handleCopy}
    >
      <AnimatePresence mode="popLayout">
        {copied ? (
          <motion.div
            key="copied"
            initial={{ opacity: 0, transform: 'blur(10px)' }}
            animate={{ opacity: 1, transform: 'blur(0px)' }}
            exit={{ opacity: 0, transform: 'blur(10px)' }}
            transition={{
              duration: 0.1
            }}
          >
            <Check className={cn(variant === 'small' ? 'w-4 h-4' : 'w-4 h-4', 'text-green-400')} />
          </motion.div>
        ) : (
          <motion.div
            key="icon"
            initial={{ opacity: 0, transform: 'blur(10px)' }}
            animate={{ opacity: 1, transform: 'blur(0px)' }}
            exit={{ opacity: 0, transform: 'blur(10px)' }}
            transition={{
              duration: 0.1
            }}
          >
            {icon}
          </motion.div>
        )}
      </AnimatePresence>
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};

export default CopyTextButton;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="flex flex-col gap-4 items-center justify-center">
  <CopyTextButton
    label="Copy some text"
    textToCopy="pAsSwOrD"
    icon={<Copy className="w-4 h-4" />}
  />
  <CopyTextButton
    label="Small Variant"
    textToCopy="pAsSwOrD"
    icon={<Copy className="w-4 h-4" />}
    variant="small"
  />
</div>`
      }
    ]
  }
};
