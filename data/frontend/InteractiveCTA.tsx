import { Document } from '../main';
import InteractiveCTA from '@/components/components/interactive-cta';
import VideoPreview from '@/components/ui/video-preview';
import { cnCode, installDependenciesCode } from '@/constants/code';

export const interactiveCTAPreview = (
  <div className="h-full w-full flex items-center justify-center relative">
    <VideoPreview videoUrl="/demos/interactive-cta.mp4" />
  </div>
);

export const interactiveCTA: Document = {
  sideBar: {
    group: 'Components',
    name: 'Interactive CTA',
    order: 4
  },
  content: {
    sections: [
      {
        heading: 'Interactive CTA',
        content:
          'A floating call-to-action component that expands from a compact icon to reveal contact information and navigation links. Features smooth animations, customizable positioning, and dynamic content.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center relative">
            <div className="w-[300px] h-[200px] relative">
              <InteractiveCTA className="!absolute bottom-0 right-0" initialOpen={false} />
            </div>
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true, tablerIcons: true, lucide: true }),
      cnCode,
      {
        heading: 'Navigation Button Component',
        sectionType: 'component',
        description:
          'First, create a file navigation-button.tsx in your components folder and paste this code',
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
              'flex items-center gap-1 outline-none cursor-pointer text-zinc-400 hover:text-blue-400 font-semibold shadow-sm py-2 px-4 hover:brightness-125 active:brightness-105 transition-opacity duration-100 rounded-lg',
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

export default NavigationButton;`
      },
      {
        heading: 'Interactive CTA Component',
        sectionType: 'component',
        description:
          'Create a file interactive-cta.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconBrandX, IconMail } from '@tabler/icons-react';
import { MessageCircle, X } from 'lucide-react';
import NavigationButton from '../buttons/navigation-button';
import { cn } from '@/lib/utils';

export interface NavigationLink {
  href: string;
  text: string;
  icon?: React.ReactNode;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
}

export interface InteractiveCTAProps {
  heading?: string;
  subheading?: string;
  avatar?: React.ReactNode;
  navigationLinks?: NavigationLink[];
  initialOpen?: boolean;
  className?: string;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  openWidth?: string;
  closeWidth?: string;
  openHeight?: string;
  closeHeight?: string;
}

const DEFAULT_NAVIGATION_LINKS: NavigationLink[] = [
  {
    href: 'https://twitter.com/samitkapoorr',
    text: 'DM me on X',
    className: 'px-2 py-1 text-white hover:text-blue-500',
    icon: <IconBrandX size={14} />
  },
  {
    href: 'mailto:samitkapoor77@gmail.com',
    text: 'Send me an email',
    className: 'px-2 py-1 text-white hover:text-red-500',
    icon: <IconMail size={14} />
  }
];

const InteractiveCTA = ({
  heading = 'Want something custom made?',
  subheading = "Let's talk",
  avatar,
  navigationLinks = DEFAULT_NAVIGATION_LINKS,
  initialOpen = true,
  className,
  openIcon,
  closeIcon,
  openWidth = '310px',
  closeWidth = '50px',
  openHeight = '155px',
  closeHeight = '50px'
}: InteractiveCTAProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  return (
    <div className={cn('fixed z-50 bottom-4 right-4 overflow-hidden', className)}>
      <AnimatePresence mode="popLayout">
        <motion.div
          animate={{
            width: isOpen ? openWidth : closeWidth,
            height: isOpen ? openHeight : closeHeight,
            borderColor: !isOpen ? '#3F3F46' : '#888888'
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 27
          }}
          className="flex-col border-[2px] rounded-xl border-white/5 bg-zinc-900 flex items-center justify-center relative"
        >
          {!isOpen && (
            <motion.button
              key="open-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center hover:bg-white/5 rounded-xl justify-center absolute -bottom-0.5 -right-0.5"
              style={{ width: closeWidth, height: closeHeight }}
            >
              {openIcon || <MessageCircle size={20} />}
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
                  className="rounded-full h-[42px] w-[42px] bg-gradient-to-b from-yellow-400 to-purple-500 flex items-center justify-center overflow-hidden"
                >
                  {avatar}
                </motion.div>
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
                  {heading}
                  <br />
                  <span className="text-white">{subheading}</span>
                </motion.p>
              </div>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{
                  duration: 0.1,
                  ease: 'linear',
                  delay: 0.1,
                  staggerChildren: 0.1
                }}
                key="navigation-buttons"
                className="flex flex-col mt-4"
              >
                {navigationLinks.map((link, index) => (
                  <NavigationButton
                    key={\`\${link.href}-\${index}\`}
                    href={link.href}
                    text={link.text}
                    className={link.className}
                    icon={link.icon}
                    target={link.target}
                  />
                ))}
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
                  {closeIcon || <X size={20} />}
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InteractiveCTA;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `// Basic usage
<InteractiveCTA />

// With custom content
<InteractiveCTA 
  heading="Need help?"
  subheading="Get in touch!"
  avatar={<User size={24} className="text-white" />}
  position="top-left"
  initialOpen={false}
/>

// With custom navigation links
<InteractiveCTA 
  navigationLinks={[
    {
      href: "https://github.com/yourusername",
      text: "View GitHub",
      icon: <IconBrandGithub size={14} />,
      className: "px-2 py-1 text-white hover:text-green-500"
    },
    {
      href: "/contact",
      text: "Contact Form",
      target: "_self",
      className: "px-2 py-1 text-white hover:text-purple-500"
    }
  ]}
/>

// With custom dimensions
<InteractiveCTA 
  openWidth="400px"
  openHeight="200px"
  closeWidth="80px"
  closeHeight="80px"
/>`
      }
    ]
  }
};
