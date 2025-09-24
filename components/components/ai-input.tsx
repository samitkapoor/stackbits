'use client';

import { cn } from '@/lib/utils';
import { ArrowUp, LoaderCircle, Paperclip, X } from 'lucide-react';
import React, { DetailedHTMLProps, ButtonHTMLAttributes, useRef, useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';

type ActionButtonProps = {
  className?: string;
  children?: React.ReactNode;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        'p-2 bg-orange-500 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm rounded-lg',
        className
      )}
    >
      {children}
    </button>
  );
};

const Placeholder = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex items-center justify-start gap-0">
      {placeholder.split('').map((word, i) => {
        if (word === ' ')
          return <span key={`placeholder-text-${i}-${word}`} className="w-1"></span>;
        return (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25,
              delay: i * 0.01,
              type: 'spring'
            }}
            key={`placeholder-text-${i}-${word}`}
            className="text-white/60 font-extralight"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

type AiInputProps = {
  width?: string;
  className?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  rows?: number;
  mainColor?: string;
  backgroundColor?: string;
  onSubmit?: (value: string, file: File | null) => void | Promise<void>;
  animationStyle?: 'orbit' | 'pulse';
} & Omit<React.ComponentProps<'textarea'>, 'onSubmit'>;

const AiInput = ({
  width = '400px',
  className,
  placeholder = 'Ask me anything...',
  style,
  mainColor = '#FFDC00',
  backgroundColor = '#111111',
  rows = 2,
  onSubmit,
  animationStyle = 'orbit',
  ...props
}: AiInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  });
  const [value, setValue] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clipPath, setClipPath] = useState<string>('');

  const leftBlob = useAnimationControls();
  const rightBlob = useAnimationControls();

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const updateContainerSize = () => {
      if (!containerRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      setContainerSize({ width: containerRect.width, height: containerRect.height });
    };

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(() => {
        updateContainerSize();
      });
    });

    resizeObserver.observe(containerRef.current);
    updateContainerSize();
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef.current, rows]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const updateClipPath = () => {
      setClipPath(
        `polygon(evenodd, 86.5px 78.5px, 78.5px 86.5px, 78.5px 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 78.5px 100%, 78.5px ${
          73.5 + containerSize.height
        }px, 86.5px ${82 + containerSize.height}px, ${73.5 + containerSize.width}px ${
          82 + containerSize.height
        }px, ${82 + containerSize.width}px ${73.5 + containerSize.height}px, ${
          82 + containerSize.width
        }px  86.5px, ${73.5 + containerSize.width}px  78.5px)`
      );
    };

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(() => {
        updateClipPath();
      });
    });

    resizeObserver.observe(containerRef.current);
    updateClipPath();
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerSize, rows]);

  const startAnimation = async () => {
    leftBlob.stop();
    rightBlob.stop();
    Promise.all([
      leftBlob.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      }),
      rightBlob.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      })
    ]);
    await Promise.all([
      leftBlob.start({
        top: animationStyle === 'orbit' ? '0%' : '50%',
        left: animationStyle === 'orbit' ? '50%' : '0%',
        translateY: '-50%',
        translateX: '-50%',
        transition: {
          duration: 0.2,
          ease: 'linear'
        }
      }),
      rightBlob.start({
        top: animationStyle === 'orbit' ? '100%' : '50%',
        left: animationStyle === 'orbit' ? '50%' : '0%',
        translateY: '-50%',
        translateX: '-50%',
        transition: {
          duration: 0.2,
          ease: 'linear'
        }
      })
    ]);
  };

  const thinkingAnimation = async () => {
    Promise.all([
      leftBlob.start({
        left:
          animationStyle === 'orbit'
            ? ['50%', '100%', '100%', '0%', '0%', '50%']
            : ['0%', '0%', '100%', '100%'],
        top:
          animationStyle === 'orbit'
            ? ['0%', '0%', '100%', '100%', '0%', '0%']
            : ['50%', '0%', '0%', '50%'],
        width: animationStyle === 'orbit' ? '80px' : ['80px', '80px', '150px', '20px'],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: animationStyle === 'orbit' ? 1 : 0.8,
          ease: 'linear'
        }
      }),
      rightBlob.start({
        left:
          animationStyle === 'orbit'
            ? ['50%', '0%', '0%', '100%', '100%', '50%']
            : ['0%', '0%', '100%', '100%'],
        top:
          animationStyle === 'orbit'
            ? ['100%', '100%', '0%', '0%', '100%', '100%']
            : ['50%', '100%', '100%', '50%'],
        width: animationStyle === 'orbit' ? '80px' : ['80px', '80px', '150px', '20px'],
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: animationStyle === 'orbit' ? 1 : 0.8,
          ease: 'linear'
        }
      })
    ]);
  };

  const exitAnimation = async () => {
    await Promise.all([
      leftBlob.start({
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      }),
      rightBlob.start({
        opacity: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut'
        }
      })
    ]);
    Promise.all([leftBlob.stop(), rightBlob.stop()]);
    await Promise.all([
      leftBlob.set({
        top: '0%',
        left: '0%',
        translateY: '-50%',
        translateX: '-40%',
        transition: {
          duration: 0.1,
          ease: 'linear'
        }
      }),
      rightBlob.set({
        top: '100%',
        left: '100%',
        translateY: '-50%',
        translateX: '-60%',
        transition: {
          duration: 0.1,
          ease: 'linear'
        }
      })
    ]);
  };

  const loadingAnimation = async () => {
    await startAnimation();
    await thinkingAnimation();
  };

  const handleOnClickOutsideTextArea = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    e.stopPropagation();
    e.preventDefault();
    textareaRef.current?.focus();
  };

  // ? Update this function to handle form submissions
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    textareaRef.current?.blur();
    const temp = value;
    const tempFile = file;
    setValue('');
    setFile(null);
    setIsLoading(true);
    await loadingAnimation();
    try {
      await onSubmit?.(temp, tempFile);
    } catch (error) {
      console.error(error);
    }
    await exitAnimation();
    setIsLoading(false);
  };

  const handleFileInputClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitButtonRef.current?.click();
    }
  };

  // ? Update this function to handle file uploads
  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
    }
  };

  const handleFileInputRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setFile(null);
  };

  return (
    <div style={{ width }} className="w-full relative flex items-center justify-center">
      <span
        style={{
          clipPath: clipPath,
          backgroundColor: `${backgroundColor}a5`
        }}
        className="absolute inset-[-80px] z-[1]"
      ></span>

      <motion.span
        initial={{
          top: animationStyle === 'orbit' ? '0%' : '50%',
          left: '0%',
          translateY: '-50%',
          translateX: '-40%',
          height: '80px',
          width: '80px'
        }}
        animate={leftBlob}
        style={{
          background: `radial-gradient(ellipse,color-mix(in srgb,${mainColor},30% white),transparent 50%)`
        }}
        className={cn('inline-block absolute opacity-0 z-[0]')}
      />
      <motion.span
        initial={{
          top: animationStyle === 'orbit' ? '100%' : '50%',
          left: animationStyle === 'orbit' ? '100%' : '0%',
          translateY: '-50%',
          translateX: '-60%',
          height: '80px',
          width: '80px'
        }}
        animate={rightBlob}
        style={{
          background: `radial-gradient(ellipse,color-mix(in srgb,${mainColor},30% white),transparent 50%)`
        }}
        className={cn('inline-block absolute top-full opacity-0 z-[0]')}
      />

      <div
        style={{ width }}
        ref={containerRef}
        className={cn(
          'border-2 border-white/10 hover:border-white/15 focus-within:hover:border-white/20 focus-within:border-white/20',
          'rounded-xl bg-black relative z-20 transition-all duration-200',
          isLoading && '!border-transparent'
        )}
      >
        {!value && (
          <div className="absolute inset-0 px-3 py-2 pointer-events-none">
            <Placeholder placeholder={placeholder} />
          </div>
        )}

        <textarea
          onClick={handleOnClickOutsideTextArea}
          style={{
            resize: 'none',
            ...style
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className={cn(
            'w-full px-3 py-2 placeholder:text-white/40 text-white/80 bg-transparent outline-none',
            className
          )}
          rows={rows}
          ref={textareaRef}
          {...props}
        />
        <div
          onClick={() => {
            textareaRef.current?.focus();
          }}
          className="flex items-center justify-end p-1 gap-1"
        >
          {file && (
            <button
              onClick={handleFileInputRemove}
              className="flex items-center gap-1 px-2 py-2 hover:bg-zinc-900 rounded-full cursor-pointer"
            >
              <p className="text-xs text-white/80">{file.name}</p>
              <X size={16} className="text-white/80" />
            </button>
          )}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileInputChange}
          />
          <ActionButton onClick={handleFileInputClick} className="bg-zinc-800 shadow-sm rounded-lg">
            <Paperclip size={16} />
          </ActionButton>
          <ActionButton
            ref={submitButtonRef}
            onClick={handleSubmit}
            disabled={isLoading || value.length === 0}
            style={{
              backgroundColor: mainColor
            }}
            className="shadow-sm rounded-lg text-black"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {isLoading ? (
                <motion.span
                  initial={{ opacity: 0, filter: 'blur(3px)', scale: 0 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, filter: 'blur(3px)', scale: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  key="loading-icon"
                  className="h-full w-full flex items-center justify-center"
                >
                  <LoaderCircle size={16} className="animate-spin" />
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0, filter: 'blur(3px)', scale: 0 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, filter: 'blur(3px)', scale: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  key="arrow-up-icon"
                  className="h-full w-full flex items-center justify-center"
                >
                  <ArrowUp size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default AiInput;
