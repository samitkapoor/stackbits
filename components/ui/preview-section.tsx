'use client';

import React, { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';

const PreviewSection = ({ code }: { code: ReactNode }) => {
  const [fullScreen, setFullScreen] = useState(localStorage.getItem('fullScreen') === 'true');

  const buttons = {
    false: {
      icon: <Maximize />,
      onClick: () => {
        setFullScreen(true);
        localStorage.setItem('fullScreen', 'true');
      }
    },
    true: {
      icon: <Minimize />,
      onClick: () => {
        setFullScreen(false);
        localStorage.setItem('fullScreen', 'false');
      }
    }
  };

  return (
    <div
      className={cn(
        'w-full h-[calc(100vh-50px)] p-9 lg:p-4 z-50',
        fullScreen && 'fixed bottom-0.5 right-0 w-screen h-[calc(100vh-50px)]'
      )}
    >
      <div className="h-full w-full border border-white/5 bg-[#111111] rounded-xl flex items-center justify-center min-h-[500px] relative overflow-x-hidden overflow-y-auto">
        <motion.button
          onClick={() => buttons[`${fullScreen}`].onClick()}
          className="absolute top-4 right-4 z-50 bg-black/10 p-2"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={`${fullScreen}-icon`}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut'
              }}
            >
              {buttons[`${fullScreen}`].icon}
            </motion.div>
          </AnimatePresence>
        </motion.button>
        {code}
      </div>
    </div>
  );
};

export default PreviewSection;
