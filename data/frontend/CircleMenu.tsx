import BrowserWindow from '@/components/ui/browser-window';
import { Document } from '../main';
import CircleMenu from '@/components/ui/circle-menu';
import { BookOpen, DollarSign, FlaskConical, Home, Mail, Projector, User } from 'lucide-react';
import { cnCode, installDependenciesCode } from '@/constants/code';

export const circleMenuPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <BrowserWindow url="stackbits.dev" childrenClassName="py-20">
      <div>This is a browser window.</div>
    </BrowserWindow>
  </div>
);

export const circleMenu: Document = {
  sideBar: {
    group: 'Components',
    name: 'Circle Menu',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Circle Menu',
        content:
          'A circular navigation menu that expands items in a circle around a central button with smooth animations and hover effects.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="w-full h-full flex items-center justify-center">
            <CircleMenu
              items={[
                { label: 'Home', icon: <Home size={16} />, href: '/lab' },
                { label: 'Projects', icon: <Projector size={16} />, href: '/lab' },
                { label: 'Skills', icon: <DollarSign size={16} />, href: '/lab' },
                { label: 'Articles', icon: <BookOpen size={16} />, href: '/lab' },
                { label: 'Lab', icon: <FlaskConical size={16} />, href: '/lab' },
                { label: 'About', icon: <User size={16} />, href: '/lab' },
                { label: 'Contact', icon: <Mail size={16} />, href: '/lab' }
              ]}
            />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file circle-menu.tsx in your components folder and paste this code',
        code: `'use client';

import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const CONSTANTS = {
  itemSize: 48,
  containerSize: 250,
  openStagger: 0.02,
  closeStagger: 0.07
};

const STYLES: Record<string, Record<string, string>> = {
  trigger: {
    container:
      'rounded-full flex items-center bg-[#27272A] justify-center border border-white/10 cursor-pointer outline-none ring-0 hover:brightness-125 transition-all duration-100 z-50',
    active: 'bg-[#27272A]'
  },
  item: {
    container:
      'rounded-full flex items-center justify-center absolute bg-zinc-100 text-black hover:bg-white cursor-pointer',
    label: 'text-xs text-black absolute top-full left-1/2 -translate-x-1/2 text-white mt-1'
  }
};

const pointOnCircle = (i: number, n: number, r: number, cx = 0, cy = 0) => {
  const theta = (2 * Math.PI * i) / n - Math.PI / 2;
  const x = cx + r * Math.cos(theta);
  const y = cy + r * Math.sin(theta) + 0;
  return { x, y };
};

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  index: number;
  totalItems: number;
  isOpen: boolean;
}

const MenuItem = ({ icon, label, href, index, totalItems, isOpen }: MenuItemProps) => {
  const { x, y } = pointOnCircle(index, totalItems, CONSTANTS.containerSize / 2);
  const [hovering, setHovering] = useState(false);

  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push(href)}
      animate={{
        x: isOpen ? x : 0,
        y: isOpen ? y : 0
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.1,
          delay: 0
        }
      }}
      transition={{
        delay: isOpen ? index * CONSTANTS.openStagger : index * CONSTANTS.closeStagger,
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
      style={{
        height: CONSTANTS.itemSize - 2,
        width: CONSTANTS.itemSize - 2
      }}
      className={STYLES.item.container}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {icon}
      {hovering && <p className={STYLES.item.label}>{label}</p>}
    </motion.button>
  );
};

interface MenuTriggerProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  itemsLength: number;
  closeAnimationCallback: () => void;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}

const MenuTrigger = ({
  setIsOpen,
  isOpen,
  itemsLength,
  closeAnimationCallback,
  openIcon,
  closeIcon
}: MenuTriggerProps) => {
  const animate = useAnimationControls();
  const shakeAnimation = useAnimationControls();

  const scaleTransition = Array.from({ length: itemsLength - 1 })
    .map((_, index) => index + 1)
    .reduce((acc, _, index) => {
      const increasedValue = index * 0.15;
      acc.push(1 + increasedValue);
      return acc;
    }, [] as number[]);

  const closeAnimation = async () => {
    shakeAnimation.start({
      translateX: [0, 2, -2, 0, 2, -2, 0],
      transition: {
        duration: CONSTANTS.closeStagger,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop'
      }
    });
    for (let i = 0; i < scaleTransition.length; i++) {
      await animate.start({
        height: Math.min(
          CONSTANTS.itemSize * scaleTransition[i],
          CONSTANTS.itemSize + CONSTANTS.itemSize / 2
        ),
        width: Math.min(
          CONSTANTS.itemSize * scaleTransition[i],
          CONSTANTS.itemSize + CONSTANTS.itemSize / 2
        ),
        backgroundColor: \`color-mix(in srgb, #27272A \${Math.max(100 - i * 10, 40)}%, white)\`,
        transition: {
          duration: CONSTANTS.closeStagger / 2,
          ease: 'linear'
        }
      });
      if (i !== scaleTransition.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, CONSTANTS.closeStagger * 1000));
      }
    }

    shakeAnimation.stop();
    shakeAnimation.start({
      translateX: 0,
      transition: {
        duration: 0
      }
    });

    animate.start({
      height: CONSTANTS.itemSize,
      width: CONSTANTS.itemSize,
      backgroundColor: '#27272A',
      transition: {
        duration: 0.1,
        ease: 'backInOut'
      }
    });
  };

  return (
    <motion.div animate={shakeAnimation} className="z-50">
      <motion.button
        animate={animate}
        style={{
          height: CONSTANTS.itemSize,
          width: CONSTANTS.itemSize
        }}
        className={cn(STYLES.trigger.container, isOpen && STYLES.trigger.active)}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
            closeAnimationCallback();
            closeAnimation();
          } else {
            setIsOpen(true);
          }
        }}
      >
        <AnimatePresence mode="popLayout">
          {isOpen ? (
            <motion.span
              key="menu-close"
              initial={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)'
              }}
              exit={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              transition={{
                duration: 0.2
              }}
            >
              {closeIcon}
            </motion.span>
          ) : (
            <motion.span
              key="menu-open"
              initial={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)'
              }}
              exit={{
                opacity: 0,
                filter: 'blur(10px)'
              }}
              transition={{
                duration: 0.2
              }}
            >
              {openIcon}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

const CircleMenu = ({
  items,
  openIcon = <Menu size={18} className="text-white" />,
  closeIcon = <X size={18} className="text-white" />
}: {
  items: Array<{ label: string; icon: React.ReactNode; href: string }>;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const animate = useAnimationControls();

  const closeAnimationCallback = async () => {
    await animate.start({
      rotate: -360,
      filter: 'blur(1px)',
      transition: {
        duration: CONSTANTS.closeStagger * (items.length + 2),
        ease: 'linear'
      }
    });
    await animate.start({
      rotate: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0
      }
    });
  };

  return (
    <div
      style={{
        width: CONSTANTS.containerSize,
        height: CONSTANTS.containerSize
      }}
      className="relative flex items-center justify-center place-self-center"
    >
      <MenuTrigger
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        itemsLength={items.length}
        closeAnimationCallback={closeAnimationCallback}
        openIcon={openIcon}
        closeIcon={closeIcon}
      />
      <motion.div
        animate={animate}
        className={cn('absolute inset-0 z-0 flex items-center justify-center')}
      >
        {items.map((item, index) => {
          return (
            <MenuItem
              key={\`menu-item-\${index}\`}
              icon={item.icon}
              label={item.label}
              href={item.href}
              index={index}
              totalItems={items.length}
              isOpen={isOpen}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircleMenu;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="w-full h-full flex items-center justify-center">
    <CircleMenu
        items={[
        { label: 'Home', icon: <Home size={16} />, href: '/lab' },
        { label: 'Projects', icon: <Projector size={16} />, href: '/lab' },
        { label: 'Skills', icon: <DollarSign size={16} />, href: '/lab' },
        { label: 'Articles', icon: <BookOpen size={16} />, href: '/lab' },
        { label: 'Lab', icon: <FlaskConical size={16} />, href: '/lab' },
        { label: 'About', icon: <User size={16} />, href: '/lab' },
        { label: 'Contact', icon: <Mail size={16} />, href: '/lab' }
        ]}
    />
</div>`
      }
    ]
  }
};
