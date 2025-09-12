import OTPInput from '@/components/ui/otp-input';
import { Document } from '../main';
import { cnCode, installDependenciesCode } from '@/constants/code';
import VideoPreview from '@/components/ui/video-preview';

export const otpInputPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-0 gap-5">
    <VideoPreview videoUrl="/demos/otp-input.mp4" />
  </div>
);

export const otpInput: Document = {
  sideBar: {
    group: 'Components',
    name: 'OTP Input',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'OTP Input',
        content:
          'A six-digit OTP input component with smooth animations, auto-focus navigation, and visual feedback for verification success or errors.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
            <OTPInput />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true, lucide: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file otp-input.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, Transition, useAnimationControls } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const OTPSuccess = () => {
  return (
    <div className="flex items-center gap-4 w-full">
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.3
        }}
        className="w-9 h-10 bg-green-500 ring-4 ring-green-800 text-white flex items-center justify-center rounded-lg"
      >
        <Check size={16} strokeWidth={3} />
      </motion.div>
      <motion.p
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.4
        }}
        className="text-green-500 font-medium"
      >
        OTP Verified Successfully!
      </motion.p>
    </div>
  );
};

const OTPError = () => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 0.2
      }}
      className="text-center text-red-400 font-medium mt-2"
    >
      Invalid OTP
    </motion.div>
  );
};

const OTPInputBox = ({
  index,
  verifyOTP,
  state
}: {
  index: number;
  verifyOTP: () => boolean | null;
  state: 'idle' | 'error' | 'success';
}) => {
  const animationControls = useAnimationControls();

  const springTransition: Transition = {
    type: 'spring',
    stiffness: 700,
    damping: 20,
    delay: index * 0.05
  };

  const noDelaySpringTransition: Transition = {
    type: 'spring',
    stiffness: 700,
    damping: 20
  };

  const slowSuccessTransition: Transition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    delay: index * 0.06
  };

  useEffect(() => {
    animationControls.start({
      opacity: 1,
      y: 0,
      transition: springTransition
    });

    return () => {
      animationControls.stop();
    };
  }, []);

  useEffect(() => {
    if (state === 'success') {
      const transitionX = index * 44;
      animationControls.start({
        x: -transitionX,
        transition: slowSuccessTransition
      });
    }
  }, [state]);

  const onFocus = () => {
    animationControls.start({
      y: -5,
      transition: noDelaySpringTransition
    });
  };

  const onBlur = () => {
    animationControls.start({
      scale: 1,
      y: 0,
      transition: noDelaySpringTransition
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === 'Backspace' && value) {
      (e.target as HTMLInputElement).value = '';
    } else if (e.key === 'Backspace' && !value && index > 0) {
      const prevInput = document.getElementById('input-' + (index - 1));
      if (prevInput) {
        prevInput.focus();
      }
    } else if (index > 0 && e.key === 'ArrowLeft') {
      const prevInput = document.getElementById('input-' + (index - 1));
      if (prevInput) {
        prevInput.focus();
        setTimeout(() => {
          (prevInput as HTMLInputElement).setSelectionRange(1, 1);
        }, 0);
      }
    } else if (index < 5 && e.key === 'ArrowRight') {
      const nextInput = document.getElementById('input-' + (index + 1));
      if (nextInput) {
        nextInput.focus();
        setTimeout(() => {
          (nextInput as HTMLInputElement).setSelectionRange(1, 1);
        }, 0);
      }
    }
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lastDigit = e.target.value[e.target.value.length - 1];

    if (lastDigit) {
      e.target.value = lastDigit;
    }

    if (e.target.value.length === 1 && index < 5) {
      const nextInput = document.getElementById('input-' + (index + 1));
      if (nextInput) {
        nextInput.focus();
      }
    }

    const verified = verifyOTP();

    if (verified === null) return;
    if (verified === true) e.target.blur();
  };

  const onPaste = async (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    const digits = text
      .trim()
      .split('')
      .filter((char) => ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(char.trim()));

    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i];
      const input = document.getElementById('input-' + i);
      if (input) {
        input.focus();
        (input as HTMLInputElement).value = digit;
        await new Promise((resolve) => setTimeout(resolve, 75));
        input.blur();
      }

      if (i === digits.length - 1) {
        verifyOTP();
      }
    }
  };

  return (
    <motion.div
      className={cn(
        'w-9 h-10 bg-background/50 rounded-lg ring-2 ring-transparent focus-within:shadow-inner overflow-hidden',
        state === 'error'
          ? 'ring-red-400'
          : state === 'success'
          ? 'ring-green-500'
          : 'focus-within:ring-blue-500'
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={animationControls}
    >
      <motion.input
        id={'input-' + index}
        onInput={onInput}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="0"
        className="border-none outline-none w-9 h-10 text-center bg-white/10 placeholder:text-white/15 caret-transparent"
        disabled={state === 'success'}
      ></motion.input>
    </motion.div>
  );
};

const OTPInput = () => {
  const [state, setState] = useState<'idle' | 'error' | 'success'>('idle');
  const animationControls = useAnimationControls();
  const noDelaySimpleTransition: Transition = {
    duration: 0.1,
    ease: 'easeInOut'
  };

  const errorAnimation = async () => {
    setState('error');
    await animationControls.start({
      x: [0, 3, -3, 3, -3, 0],
      transition: noDelaySimpleTransition
    });
  };

  const verifyOTP = () => {
    let code = '';
    for (let i = 0; i < 6; i++) {
      const input = document.getElementById('input-' + i);
      if (input) {
        code += (input as HTMLInputElement).value;
      }
    }

    if (code.length === 6) {
      if (code === '424242') {
        setState('success');
        return true;
      } else {
        errorAnimation();
        return false;
      }
    } else {
      setState('idle');
      return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative">
        <AnimatePresence>
          {state !== 'success' && (
            <motion.p
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
              className="absolute text-center w-full bottom-full left-0 mb-4 font-medium text-lg"
            >
              OTP Verification
            </motion.p>
          )}
        </AnimatePresence>
        <motion.div animate={animationControls} className="flex items-center justify-center gap-2">
          {Array.from({ length: 6 }).map((_, index) => {
            return (
              <OTPInputBox
                key={'input-' + index}
                index={index}
                verifyOTP={verifyOTP}
                state={state}
              />
            );
          })}
        </motion.div>
        {state === 'success' && (
          <div className="absolute inset-0 top-0 left-0">
            <OTPSuccess />
          </div>
        )}
        {state === 'error' && (
          <div className="absolute inset-0 top-full left-0">
            <OTPError />
          </div>
        )}
      </div>
      <div
        onClick={() => {
          navigator.clipboard.writeText('424242');
        }}
        className="absolute flex items-center gap-1 top-4 right-4 text-sm px-2 py-1 cursor-pointer bg-white/5 hover:bg-white/10 active:bg-white/15 select-none rounded-lg"
      >
        Copy Password
      </div>
    </div>
  );
};

export default OTPInput;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<OTPInput/>`
      }
    ]
  }
};
