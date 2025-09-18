'use client';

import React, { ReactNode, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';

const PreviewSection = ({ code }: { code: ReactNode }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    if (!localStorage) return;
    const fullScreenValue = localStorage.getItem('fullScreen');
    if (fullScreenValue) {
      setFullScreen(fullScreenValue === 'true');
    }
    setLoading(false);
  }, []);

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

  if (loading)
    return <div className="h-full w-full flex items-center justify-center">Loading...</div>;

  return (
    <div
      className={cn(
        'w-full h-[75vh] lg:h-[calc(100vh-50px)] p-2 md:p-4 z-50',
        fullScreen && 'lg:fixed bottom-0.5 right-0 w-screen h-[calc(100vh-50px)]'
      )}
    >
      <div className="h-full w-full border border-white/5 bg-[#111111] rounded-xl flex items-center justify-center min-h-[500px] relative overflow-x-hidden overflow-y-auto">
        <motion.button
          onClick={() => buttons[`${fullScreen}`].onClick()}
          className="hidden lg:block absolute top-4 right-4 z-50 bg-black/10 p-2"
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
