import { Document } from '../main';
import DialogFormDemo from '@/components/demos/dialog-form-demo';
import VideoPreview from '@/components/ui/video-preview';
import { cnCode, installDependenciesCode } from '@/constants/code';

export const dialogFormPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative gap-5">
    <VideoPreview videoUrl="/demos/dialog-form.mp4" />
  </div>
);

export const dialogForm: Document = {
  sideBar: {
    group: 'Components',
    name: 'Dialog Form',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Dialog Form',
        content:
          'An interactive form component that transforms from a button into a modal dialog with smooth animations. Features form validation, loading states, and success feedback with beautiful visual effects.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div
            style={{
              background: 'url(/component-gradient.png) no-repeat center center'
            }}
            className="h-full w-full flex flex-col items-center justify-center gap-2 relative"
          >
            <DialogFormDemo />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true, lucide: true, useHooks: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file dialog-form.tsx in your components folder and paste this code',
        code: `'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { LoaderCircle, X } from 'lucide-react';
import React, { RefObject, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface SubmitDialogFormButtonProps {
  onClick?: () =>
    | Promise<{ success: boolean; message: string }>
    | { success: boolean; message: string };
  state?: 'idle' | 'loading' | 'success' | 'error';
}

export const SubmitDialogFormButton = ({
  onClick,
  state = 'idle'
}: SubmitDialogFormButtonProps) => {
  const handleClick = async () => {
    if (onClick) {
      return await onClick();
    }
  };

  const buttonVariants = {
    idle: {
      label: 'Submit',
      icon: null,
      animate: {
        backgroundColor: '#3b82f6',
        color: '#ffffff'
      }
    },
    loading: {
      label: null,
      icon: <LoaderCircle className="animate-spin" size={20} />,
      animate: {
        backgroundColor: '#1e40af',
        color: '#ffffff'
      }
    },
    success: {
      label: 'Submitted',
      icon: null,
      animate: {
        backgroundColor: '#059669',
        color: '#ffffff'
      }
    },
    error: {
      label: 'Try Again',
      icon: null,
      animate: {
        x: [0, 2, -2, 0, -2, 2, 0, -2, 2, 0, -2, 2, 0],
        backgroundColor: '#dc2626',
        color: '#ffffff'
      }
    }
  };

  const entryExitAnimation = {
    initial: {
      opacity: 0,
      y: '-100%'
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: '100%'
    },
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 30
    }
  };

  return (
    <button
      type="button"
      disabled={state === 'loading' || state === 'success'}
      className="disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] disabled:active:scale-100"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          animate={buttonVariants[state].animate}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          onClick={handleClick}
          className="text-sm px-3 py-1.5 rounded-md flex items-center gap-1 min-w-[100px] justify-center overflow-hidden text-white bg-blue-600 hover:shadow-lg transition-shadow cursor-pointer"
        >
          {buttonVariants[state].label && (
            <motion.span key={\`label-\${state}\`} {...entryExitAnimation}>
              {buttonVariants[state].label}
            </motion.span>
          )}
          {buttonVariants[state].icon && (
            <motion.span key={\`icon-\${state}\`} {...entryExitAnimation}>
              {buttonVariants[state].icon}
            </motion.span>
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

interface DialogFormProps {
  label: string;
  successText: string;
  successIcon: React.ReactNode;
  icon?: React.ReactNode;
  buttonClassName?: string;
  containerClassName?: string;
  childComponent?: React.ReactNode;
  onSubmit?: () =>
    | Promise<{ success: boolean; message: string }>
    | { success: boolean; message: string };
  onClose?: () => void;
}

const DialogForm = ({
  label,
  successText,
  successIcon,
  icon,
  buttonClassName,
  containerClassName,
  childComponent = null,
  onSubmit,
  onClose
}: DialogFormProps) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    if (formState === 'loading') return;

    onClose?.();
    setOpen(false);
    setError(null);
    setFormState('idle');
  };

  const dialogRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dialogRef as RefObject<HTMLDivElement>, () => handleClose());

  const handleSubmit = async () => {
    let res = { success: false, message: 'Something went wrong.' };
    setFormState('loading');
    setError(null);

    if (onSubmit) {
      try {
        res = await onSubmit();

        if (res.success === true) {
          setFormState('success');
          setTimeout(() => {
            handleClose();
          }, 1500);
        } else {
          setFormState('error');
          setError((res as { message: string }).message);
        }
      } catch (error) {
        console.error(error);
        setFormState('error');
        setError('Something went wrong.');
      }
    } else {
      setFormState('idle');
    }

    return res;
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            layout
            layoutId="form-container"
            transition={{
              type: 'spring',
              duration: 0.3,
              bounce: 0.05
            }}
            whileTap={{
              scale: 0.97
            }}
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              'border border-white/10 hover:border-white/20 bg-black px-4 py-2.5 rounded-xl',
              buttonClassName
            )}
          >
            <motion.p layout layoutId="form-label" className="flex items-center gap-2 text-sm">
              {icon} {label}
            </motion.p>
          </motion.button>
        ) : (
          <motion.div
            ref={dialogRef}
            layout
            layoutId="form-container"
            transition={{
              layout: {
                type: 'spring',
                duration: 0.4,
                bounce: 0.05
              }
            }}
            key="form-container"
            className={cn(
              'shadow-md rounded-2xl flex flex-col min-w-[400px] bg-[#111111] overflow-hidden relative',
              containerClassName
            )}
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
                <motion.p
                  layout
                  layoutId="form-label"
                  transition={{
                    layout: {
                      type: 'spring',
                      duration: 0.6,
                      bounce: 0.05
                    }
                  }}
                  className="flex items-center gap-2 text-sm"
                >
                  {icon} {label}
                </motion.p>
                <button
                  type="button"
                  onClick={() => handleClose()}
                  className="p-1 hover:bg-white/5"
                >
                  <X size={16} />
                </button>
              </div>
              <AnimatePresence mode="popLayout">
                {childComponent && (
                  <motion.div
                    key="child-component"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4"
                  >
                    {childComponent}
                  </motion.div>
                )}
                <motion.div
                  key="submit-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-between mt-3"
                >
                  <p className="text-sm text-red-500">{error}</p>
                  <SubmitDialogFormButton onClick={handleSubmit} state={formState} />
                </motion.div>
              </AnimatePresence>
              {open && formState === 'success' && (
                <>
                  <motion.div
                    key="shine-effect"
                    initial={{
                      x: '-100%'
                    }}
                    animate={{
                      x: '100%'
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.1
                    }}
                    className="absolute inset-0 z-30 pointer-events-none"
                  >
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12" />
                  </motion.div>

                  <motion.div
                    key="secondary-shine"
                    initial={{
                      x: '-100%'
                    }}
                    animate={{
                      x: '100%'
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.3
                    }}
                    className="absolute inset-0 z-30 pointer-events-none"
                  >
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent -skew-x-12" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.1,
                      ease: 'easeOut'
                    }}
                    key="blur-effect"
                    className="backdrop-blur-sm absolute inset-0 z-10 rounded-3xl"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.1
                    }}
                    key="success-content"
                    className="p-4 flex flex-col items-center justify-center absolute inset-0 z-20"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                        delay: 0.4
                      }}
                    >
                      {successIcon}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: 0.6
                      }}
                      className="mt-2 font-medium"
                    >
                      {successText}
                    </motion.p>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DialogForm;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DialogForm from '../ui/dialog-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BadgeCheck, Bug } from 'lucide-react';

const DialogFormDemo = () => {
  const [shouldSucceed, setShouldSucceed] = useState(true);
  const { register, watch, reset } = useForm({
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        details: yup.string().required('Details are required')
      })
    )
  });

  const ChildComponent = () => {
    return (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Name"
            autoComplete="off"
            className="border-white/10 hover:border-white/15 bg-black"
            {...register('name')}
          />
          <Input
            placeholder="Email"
            autoComplete="off"
            className="border-white/10 hover:border-white/15 bg-black"
            {...register('email')}
          />
        </div>
        <Textarea
          placeholder="Provide details about the issue..."
          autoComplete="off"
          className="border-white/10 hover:border-white/15 bg-black"
          rows={5}
          style={{
            resize: 'none'
          }}
          {...register('details')}
        />
      </div>
    );
  };

  const onCloseCb = () => {
    reset();
  };

  const handleSubmit = async () => {
    const formData = watch();
    console.log(formData);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setShouldSucceed(!shouldSucceed);

    const response = shouldSucceed
      ? { success: true, message: 'Form submitted successfully' }
      : { success: false, message: 'Something went wrong' };

    return response;
  };

  return (
    <div>
      <DialogForm
        icon={<Bug size={16} />}
        label="Report a Bug"
        successIcon={<BadgeCheck size={40} />}
        successText="Reported Successfully"
        childComponent={<ChildComponent />}
        onSubmit={handleSubmit}
        onClose={onCloseCb}
      />
    </div>
  );
};

export default DialogFormDemo;
`
      }
    ]
  }
};
