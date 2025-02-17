'use client';

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
      className={`bg-gray-800 w-min hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition ${
        variant === 'small' && 'text-xs'
      }`}
      onClick={handleCopy}
    >
      {copied ? (
        <Check className={`${variant === 'small' ? 'w-4 h-4' : 'w-5 h-5'} text-green-400`} />
      ) : (
        icon
      )}
      <span className="whitespace-nowrap">{handle}</span>
    </button>
  );
};

export default CopyTextButton;
