import HoldButton from '@/components/buttons/hold-button';
import { Document } from '../main';
import { BadgeDollarSign } from 'lucide-react';

export const holdButtonPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <HoldButton>Hold to Confirm</HoldButton>
  </div>
);

export const holdButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Hold Button',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Hold Button',
        content:
          'A button that requires users to hold it down for a specified duration before triggering an action. Perfect for preventing accidental clicks on important operations like payments or deletions.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="flex flex-col gap-4 items-center justify-center">
            <HoldButton
              variant="default"
              onClick={() => {
                console.log('Confirmed');
              }}
            >
              Hold to Confirm
            </HoldButton>
            <HoldButton
              variant="success"
              successText="Success"
              icon={<BadgeDollarSign size={18} />}
            >
              Hold to Pay Now
            </HoldButton>
            <HoldButton variant="destructive" successText="Deleted" holdDuration={2000}>
              Hold to Delete
            </HoldButton>
          </div>
        )
      },
      {
        heading: 'Hold Button',
        sectionType: 'component',
        description: 'Create a file hold-button.tsx in your components folder and paste this code',
        code: `'use client';

import { Check, Trash } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const HoldButton = ({
  children,
  variant = 'default',
  icon = null,
  onClick,
  holdDuration = 1000,
  successText = 'Confirmed'
}: {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'destructive';
  icon?: React.ReactNode;
  onClick?: () => void;
  holdDuration?: number;
  successText?: string;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    setIntervalId(
      setTimeout(() => {
        setIsSuccess(true);
        if (onClick) {
          onClick();
        }
        setTimeout(() => setIsSuccess(false), 600);
      }, holdDuration)
    );
  };

  const handleMouseUp = () => {
    if (intervalId) {
      clearTimeout(intervalId);
      setIntervalId(null);
    }
  };

  const variants = {
    default: {
      color: '#007BFF',
      backgroundColor: '#CCE5FF',
      icon: <Check size={18} />
    },
    success: {
      color: '#4CAF50',
      backgroundColor: '#C8E6C9',
      icon: <Check size={18} />
    },
    destructive: {
      color: '#E5484D',
      backgroundColor: '#FFDBDC',
      icon: <Trash size={18} />
    }
  };

  return (
    <>
      <style>
        {\`
          .button {
            position: relative;
            display: flex;
            height: 40px;
            align-items: center;
            gap: 8px;
            border-radius: 9999px;
            padding-inline: 24px;
          }

          .overlay-btn {
            position: absolute;
            top: 0px;
            clip-path: inset(0% 100% 0% 0%);
          }

          .wrapper {
            transition: 0.15s ease-out;
          }

          .wrapper:active .overlay-btn {
            clip-path: inset(0% 0% 0% 0%);
            transition: 1000ms ease-in-out;
          }

          .wrapper:active {
            scale: 0.97;
          }
        \`}
      </style>
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="relative wrapper">
        <button className="button trigger-btn hover:bg-zinc-800 bg-zinc-700 text-white">
          {icon || variants[variant].icon}
          {children}
        </button>
        <button
          style={{
            color: variants[variant].color,
            backgroundColor: variants[variant].backgroundColor,
            transition: intervalId ? \`\${holdDuration}ms ease-out\` : '0.2s ease-out'
          }}
          className="button overlay-btn w-full"
        >
          <div className="shrink-0">{icon || variants[variant].icon}</div>
          <div className="relative w-full">
            <AnimatePresence mode="popLayout">
              {!isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="whitespace-nowrap h-full"
                >
                  {children}
                </motion.div>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="whitespace-nowrap h-full text-left"
                >
                  {successText}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>
    </>
  );
};

export default HoldButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: ` <div className="flex flex-col gap-4 items-center justify-center">
    <HoldButton
        variant="default"
        onClick={() => {
        console.log('Confirmed');
        }}
    >
        Hold to Confirm
    </HoldButton>
    <HoldButton
        variant="success"
        successText="Success"
        icon={<BadgeDollarSign size={18} />}
    >
        Hold to Pay Now
    </HoldButton>
    <HoldButton variant="destructive" successText="Deleted" holdDuration={2000}>
        Hold to Delete
    </HoldButton>
</div>`
      }
    ]
  }
};
