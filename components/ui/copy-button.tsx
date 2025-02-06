'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';

const CopyButton = ({
  handle,
  icon,
  variant = 'default'
}: {
  handle: string;
  icon: React.ReactNode;
  variant?: 'default' | 'small';
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(handle);
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
      {handle}
    </button>
  );
};

export default CopyButton;
