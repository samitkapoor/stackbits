import ButtonsDemo from '@/components/buttons-demo';
import { Document } from '../main';
import AnimatedGradientButton from '@/components/ui/animated-gradient-button';
import { cnCode } from '@/constants/code';
import ExpandableIconButton from '@/components/ui/expandable-icon-button';
import { Copy, Moon, Sun, TwitterIcon } from 'lucide-react';
import CopyTextButton from '@/components/ui/copy-text-button';
import GlassButton from '@/components/ui/glass-button';
import ToggleButton from '@/components/ui/toggle-button';
import { Rocket } from 'lucide-react';
import MovingBorderButton from '@/components/ui/moving-border-button';
import NavigationButton from '@/components/ui/navigation-button';
import ShineButton from '@/components/ui/shine-button';
import Image from 'next/image';

export const buttonsPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden bg-black relative gap-5">
    <Image
      src="/buttons.png"
      alt="buttons"
      width={800}
      height={800}
      className="w-full h-full object-contain bg-black"
    />
  </div>
);

export const buttons: Document = {
  sideBar: {
    group: 'Components',
    name: 'Buttons',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Buttons',
        content: 'A collection of all the buttons provided by stackbits.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <ButtonsDemo />
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion tailwindcss-animate tailwindcss clsx tailwind-merge`
      },
      cnCode,
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <ExpandableIconButton icon={<TwitterIcon size={18} />} text={'samitkapoorr'} />
      },
      {
        heading: 'Expandable Icon Button',
        sectionType: 'component',
        description:
          'Create a file expandable-icon-button.tsx in your components folder and paste this code',
        code: `'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MouseEventHandler, useRef, useState, useLayoutEffect } from 'react';

type ExpandableIconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
  text: string;
  className?: string;
};

const ExpandableIconButton = ({ onClick, icon, text, className }: ExpandableIconButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth);
    }
  }, [text]);

  const collapsedWidth = 52;
  const expandedWidth = collapsedWidth + textWidth + 8; // 8px for gap

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      className="outline-none"
    >
      <motion.div
        animate={{
          width: isHovering ? expandedWidth : collapsedWidth
        }}
        transition={{
          duration: 0.25,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        className={cn(
          'h-[42px] rounded-full border flex gap-2 px-4 py-3 items-center justify-center overflow-hidden',
          className
        )}
      >
        <div className="shrink-0 whitespace-nowrap">{icon}</div>
        {isHovering && (
          <motion.span
            ref={textRef}
            initial={{
              opacity: 0,
              scale: 0.8,
              x: -10
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x: -10
            }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.05
            }}
            className="whitespace-nowrap"
          >
            {text}
          </motion.span>
        )}
      </motion.div>

      {/* Hidden text element for measuring width */}
      <span ref={textRef} className="absolute invisible whitespace-nowrap" aria-hidden="true">
        {text}
      </span>
    </button>
  );
};

export default ExpandableIconButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ExpandableIconButton icon={<TwitterIcon size={18} />} text={'samitkapoorr'} />`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <CopyTextButton handle="Copy some text" icon={<Copy className="w-4 h-4" />} />
      },
      {
        heading: 'Copy Text Button',
        sectionType: 'component',
        description:
          'Create a file copy-text-button.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

const CopyTextButton = ({
  handle, // * Text you want to copy
  icon = <Copy className="h-5 w-5" />, // * Icon to show on the button
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
      className={cn(
        'bg-gray-800 w-min hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition',
        variant === 'small' && 'text-xs'
      )}
      onClick={handleCopy}
    >
      {copied ? (
        <Check className={cn(variant === 'small' ? 'w-4 h-4' : 'w-5 h-5', 'text-green-400')} />
      ) : (
        icon
      )}
      <span className="whitespace-nowrap">{handle}</span>
    </button>
  );
};

export default CopyTextButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<CopyTextButton handle="Copy some text" icon={<Copy className="w-4 h-4" />} />`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <AnimatedGradientButton>Continue</AnimatedGradientButton>
      },
      {
        heading: 'Animated Gradient Button',
        sectionType: 'component',
        description:
          'Create a file animated-gradient-button.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

type AnimatedGradientButtonProps = HTMLMotionProps<'button'> & {
  children?: React.ReactNode;
  className?: string;
};

const AnimatedGradientButton = ({ children, className, ...props }: AnimatedGradientButtonProps) => {
  return (
    <motion.button
      {...props}
      initial={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)' }}
      whileHover={{
        boxShadow: '0px 0px 20px rgba(255, 255, 255, 1)',
        transition: { duration: 0.1 }
      }}
      animate={{
        background: [
          'linear-gradient(135deg, #ff6b6b, #ff8e53, #ffcc00)',
          'linear-gradient(135deg, #42a5f5, #478ed1, #7b1fa2)',
          'linear-gradient(135deg, #00c9a7, #2ecc71, #ffeb3b)',
          'linear-gradient(135deg, #ff4081, #ff80ab, #f48fb1)',
          'linear-gradient(135deg, #8e44ad, #c0392b, #e74c3c)',
          'linear-gradient(135deg, #ffcc00, #ff5733, #ff1744)',
          'linear-gradient(135deg, #009688, #26c6da, #00e5ff)',
          'linear-gradient(135deg, #e91e63, #9c27b0, #673ab7)',
          'linear-gradient(135deg, #f57c00, #ffca28, #ffeb3b)',
          'linear-gradient(135deg, #00bcd4, #03a9f4, #1de9b6)'
        ],
        transition: { duration: 15, repeat: Infinity, repeatType: 'mirror' }
      }}
      className={\`relative overflow-hidden rounded-lg border-none px-4 py-2 font-medium text-white tracking-wide shadow-md transition-all duration-300 hover:bg-opacity-90 \${className}\`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default AnimatedGradientButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<AnimatedGradientButton>Continue</AnimatedGradientButton>`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <GlassButton>Continue</GlassButton>
      },
      {
        heading: 'Glass Button',
        sectionType: 'component',
        description: 'Create a file glass-button.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

type GlassButtonProps = HTMLMotionProps<'button'> & {
  children?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
};

const GlassButton = ({ children, className, wrapperClassName, ...props }: GlassButtonProps) => {
  return (
    <motion.button
      {...props}
      className={cn(
        \`relative overflow-hidden rounded-lg px-4 py-2 text-white\`,
        \`bg-gradient-to-tr from-[#46C0F750] to-[#E3E8EA50] backdrop-blur-lg\`,
        \`shadow-inner shadow-white/20 transition-all duration-300\`,
        \`hover:shadow-lg hover:shadow-cyan-200/30\`,
        wrapperClassName
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Light Reflection Animation */}
      <motion.span
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-70deg, transparent 45%, #ffffff21 50%, transparent 55%)',
          filter: 'blur(2px)'
        }}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeatDelay: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Button Content */}
      <div className={cn('relative', className)}>{children}</div>
    </motion.button>
  );
};

export default GlassButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GlassButton>Contact me</GlassButton>`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <ToggleButton
            options={[
              {
                label: <Sun size={18} />,
                value: 'Sun'
              },
              {
                label: <Moon size={18} />,
                value: 'Moon'
              },
              {
                label: <Rocket size={18} />,
                value: 'Rocket'
              }
            ]}
            defaultValue="Sun"
          />
        )
      },
      {
        heading: 'Toggle Button',
        sectionType: 'component',
        description:
          'Create a file toggle-button.tsx in your components folder and paste this code',
        code: `'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

type ToggleButtonProps = {
  options: Array<{
    label: React.ReactNode;
    value: string;
  }>;
  defaultValue?: string;
  className?: string;
  onClick?: (value: string) => void;
};

const ToggleButton = ({
  options,
  defaultValue,
  onClick,
  className,
  ...props
}: ToggleButtonProps) => {
  const [activeValue, setActiveValue] = useState(defaultValue || options[0].value);

  const handleClick = (value: string) => {
    const currentIndex = options.findIndex((option) => option.value === value);
    const nextIndex = (currentIndex + 1) % options.length;
    const newValue = options[nextIndex].value;
    setActiveValue(newValue);

    if (onClick) onClick(newValue);
  };

  return (
    <button
      onClick={() => handleClick(activeValue)}
      className={cn(
        'relative border flex items-center justify-center h-[45px] w-[45px] rounded-full overflow-hidden',
        className
      )}
    >
      <motion.div
        whileHover={{
          x: [0, 2, -2, 2, -2, 2, -2, 0]
        }}
        transition={{
          duration: 0.1
        }}
        className="relative overflow-hidden h-full w-full flex items-center justify-center"
      >
        <AnimatePresence mode="popLayout">
          {options.map((option) => {
            if (option.value !== activeValue) return null;

            return (
              <motion.div
                key={option.value}
                className="absolute flex items-center justify-center"
                initial={{
                  y: 40
                }}
                animate={{
                  y: 0
                }}
                exit={{
                  y: -40
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
              >
                {option.label}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ToggleButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ToggleButton
  options={[
    {
      label: <Sun size={18} />,
      value: 'Sun'
    },
    {
      label: <Moon size={18} />,
      value: 'Moon'
    },
    {
      label: <Rocket size={18} />,
      value: 'Rocket'
    }
  ]}
  defaultValue="Sun"
/>`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <MovingBorderButton>Continue</MovingBorderButton>
      },
      {
        heading: 'Moving Border Button',
        sectionType: 'component',
        description:
          'Create a file moving-border-button.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const MovingBorderButton = ({
  children,
  wrapperClassName,
  className,
  onClick,
  type = 'button'
}: {
  children?: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset';
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={cn(\`rounded-full overflow-hidden relative p-[1.5px]\`, wrapperClassName)}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type={type}
    >
      <span
        className={cn(
          'absolute transition-all inset-[-200%] animate-[spin_2.5s_linear_infinite] bg-[conic-gradient(from_90deg,transparent_30%,#00FFFF_100%)] blur-md',
          isHovered && 'bg-[conic-gradient(from_90deg,transparent_30%,#FFFFFF_100%)] '
        )}
      />
      <span
        className={cn(
          \`bg-black transition-all hover:bg-neutral-900 rounded-full px-4 py-2 flex items-center justify-center relative\`,
          className
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default MovingBorderButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<MovingBorderButton>Continue</MovingBorderButton>`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <NavigationButton href="https://twitter.com/samitkapoorr" text="Open twitter" />
      },
      {
        heading: 'Navigation Button',
        sectionType: 'component',
        description:
          'Create a file navigation-button.tsx in your components folder and paste this code',
        code: `'use client';

import { ArrowUpRight, Eye } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  text: string;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
  icon?: React.ReactNode;
}

const NavigationButton = ({
  href,
  text = 'Open',
  icon = undefined,
  target = '_blank',
  className = ''
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex items-start">
      <Link href={href} target={target}>
        <AnimatePresence mode="popLayout">
          <button
            className={cn(
              'flex items-center gap-1 outline-none cursor-pointer text-blue-500 font-semibold bg-slate-900 shadow-sm py-2 px-4 hover:brightness-125 active:brightness-105 transition-opacity duration-100 rounded-md',
              className
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {!hovered && (
              <motion.div
                key={'eye-btn' + href}
                initial={{
                  x: -10,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                exit={{
                  x: -10,
                  opacity: 0
                }}
                transition={{
                  ease: 'linear',
                  duration: 0.1
                }}
              >
                {icon ? icon : <Eye size={14} />}
              </motion.div>
            )}
            <motion.p
              layout
              transition={{ duration: 0.1, ease: 'linear' }}
              className="text-xs sm:text-sm whitespace-nowrap"
            >
              {text}
            </motion.p>
            {hovered && (
              <motion.div
                key={'arrow-btn' + href}
                initial={{
                  x: 10,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                exit={{
                  x: 10,
                  opacity: 0
                }}
                transition={{
                  ease: 'linear',
                  duration: 0.1
                }}
              >
                <ArrowUpRight size={14} />
              </motion.div>
            )}
          </button>
        </AnimatePresence>
      </Link>
    </div>
  );
};

export default NavigationButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<NavigationButton href="https://twitter.com/samitkapoorr" text="Open twitter" />`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <ShineButton>Continue</ShineButton>
      },
      {
        heading: 'Shine Button',
        sectionType: 'component',
        description: 'Create a file shine-button.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';
import React, { ButtonHTMLAttributes } from 'react';

type ShineButtonProps = {
  className?: string;
  children: React.ReactNode;
} & MotionProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const ShineButton: React.FC<ShineButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        \`relative overflow-hidden rounded-lg border border-neutral-700 px-4 py-2 text-white transition-all duration-300 hover:border-neutral-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]\`,
        \`hover:shadow-lg hover:shadow-white/30\`,
        className
      )}
    >
      <motion.span
        className="absolute -left-full top-0 h-full w-[150%] blur-[6px] opacity-50 hover:opacity-100"
        initial={{ x: '-150%' }}
        animate={{ x: '150%' }}
        style={{
          background: 'linear-gradient(-55deg, transparent 40%, #ffffffbb 50%, transparent 60%)'
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="relative z-10 flex items-center">{children}</div>
    </button>
  );
};

export default ShineButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ShineButton>Continue</ShineButton>`
      }
    ]
  }
};
