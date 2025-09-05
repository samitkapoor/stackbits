'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconBrandX, IconMail } from '@tabler/icons-react';
import { MessageCircle, X } from 'lucide-react';
import NavigationButton from './navigation-button';

const CTAComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence mode="popLayout">
        <motion.div
          animate={{
            width: isOpen ? '310px' : '64px',
            height: isOpen ? '155px' : '64px',
            borderColor: !isOpen ? '#3F3F46' : '#888888'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 27
          }}
          className="flex-col border-[2px] rounded-xl border-white/5 bg-zinc-900 flex items-center justify-center"
        >
          {!isOpen && (
            <motion.button
              key="open-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(true)}
              className="h-[64px] w-[64px] flex items-center hover:bg-white/5 rounded-xl justify-center absolute bottom-0 right-0"
            >
              <MessageCircle size={20} />
            </motion.button>
          )}
          {isOpen && (
            <div className="flex flex-col p-4 h-full w-full">
              <div className="flex items-center justify-center gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.1,
                    ease: 'linear',
                    delay: 0.1
                  }}
                  key="image-container"
                  className="rounded-full h-[42px] w-[42px] bg-gradient-to-b from-yellow-400 to-purple-500"
                ></motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.1,
                    ease: 'linear',
                    delay: 0.1
                  }}
                  key="text-container"
                  className="text-sm truncate text-white/70 font-medium"
                >
                  Want something custom made?
                  <br />
                  <span className="text-white">Let&apos;s talk</span>
                </motion.p>
              </div>
              <motion.div
                initial={{ x: 10 }}
                animate={{ x: 0 }}
                exit={{ x: -10 }}
                transition={{
                  duration: 0.1,
                  ease: 'linear',
                  delay: 0.2,
                  staggerChildren: 0.1
                }}
                key="navigation-buttons"
                className="flex flex-col mt-4"
              >
                <NavigationButton
                  href="https://twitter.com/samitkapoorr"
                  text="DM me on X"
                  className="px-2 py-1 text-white hover:text-blue-500"
                  icon={<IconBrandX size={14} />}
                />
                <NavigationButton
                  href="mailto:samitkapoor77@gmail.com"
                  text="Send me an email"
                  className="px-2 py-1 text-white hover:text-red-500"
                  icon={<IconMail size={14} />}
                />
              </motion.div>
              <div className="absolute bottom-4 right-4">
                <motion.button
                  key="close-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center hover:bg-white/10 place-self-end h-[32px] w-[32px] rounded-md"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CTAComponent;
