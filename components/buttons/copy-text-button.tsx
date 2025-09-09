'use client';

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
