'use client';

import { Cloud, Folder, Home, Menu, PanelLeftClose, PanelsTopLeft, Star } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const HomeChildren = () => {
  return (
    <div className="w-full h-full bg-zinc-900 p-6">
      <div className="mb-8">
        <div className="h-8 bg-zinc-700 rounded w-24 animate-pulse"></div>
      </div>

      <div className="space-y-3 mb-8">
        <div className="w-full bg-gray-600 px-4 py-3 rounded-lg flex items-center gap-3">
          <div className="h-4 bg-gray-500 rounded w-4 animate-pulse"></div>
          <div className="h-4 bg-gray-500 rounded w-36 animate-pulse"></div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="h-4 bg-zinc-700 rounded w-12 animate-pulse"></div>
          <div className="h-4 bg-gray-500 rounded w-4 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="w-full bg-purple-800 px-4 py-3 rounded-lg flex items-center gap-3">
            <div className="h-4 bg-purple-600 rounded w-4 animate-pulse"></div>
            <div className="h-4 bg-purple-600 rounded w-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="h-4 bg-zinc-700 rounded w-16 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="w-full hover:bg-zinc-800 py-3 rounded-lg flex items-center gap-3">
            <div className="h-4 bg-zinc-600 rounded w-4 animate-pulse"></div>
            <div className="h-4 bg-zinc-600 rounded w-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsChildren = () => {
  return (
    <div className="w-full h-full bg-zinc-800 p-6">
      <div className="mb-8">
        <div className="h-6 bg-blue-600 rounded w-32 animate-pulse mb-2"></div>
        <div className="h-4 bg-zinc-700 rounded w-48 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-zinc-900 rounded-lg p-4 border-zinc-700">
          <div className="h-4 bg-zinc-600 rounded w-20 animate-pulse mb-2"></div>
          <div className="h-3 bg-zinc-700 rounded w-16 animate-pulse"></div>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 border-zinc-700">
          <div className="h-4 bg-zinc-600 rounded w-24 animate-pulse mb-2"></div>
          <div className="h-3 bg-zinc-700 rounded w-20 animate-pulse"></div>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 border-zinc-700">
          <div className="h-4 bg-zinc-600 rounded w-18 animate-pulse mb-2"></div>
          <div className="h-3 bg-zinc-700 rounded w-14 animate-pulse"></div>
        </div>
        <div className="bg-zinc-900 rounded-lg p-4 border-zinc-700">
          <div className="h-4 bg-zinc-600 rounded w-22 animate-pulse mb-2"></div>
          <div className="h-3 bg-zinc-700 rounded w-18 animate-pulse"></div>
        </div>
      </div>

      <div>
        <div className="h-4 bg-zinc-700 rounded w-24 animate-pulse mb-3"></div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded">
            <div className="h-3 bg-zinc-600 rounded-full w-3 animate-pulse"></div>
            <div className="h-3 bg-zinc-600 rounded w-32 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded">
            <div className="h-3 bg-zinc-600 rounded-full w-3 animate-pulse"></div>
            <div className="h-3 bg-zinc-600 rounded w-28 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded">
            <div className="h-3 bg-zinc-600 rounded-full w-3 animate-pulse"></div>
            <div className="h-3 bg-zinc-600 rounded w-36 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TemplatesChildren = () => {
  return (
    <div className="w-full h-full bg-zinc-900 p-6">
      <div className="mb-8">
        <div className="h-6 bg-green-600 rounded w-28 animate-pulse mb-2"></div>
        <div className="h-4 bg-zinc-700 rounded w-40 animate-pulse"></div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
          <div className="h-4 bg-zinc-600 rounded-full w-4 animate-pulse"></div>
          <div className="h-4 bg-zinc-600 rounded w-24 animate-pulse"></div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg">
          <div className="h-4 bg-zinc-600 rounded-full w-4 animate-pulse"></div>
          <div className="h-4 bg-zinc-600 rounded w-20 animate-pulse"></div>
        </div>
      </div>

      <div>
        <div className="h-4 bg-zinc-700 rounded w-32 animate-pulse mb-3"></div>
        <div className="space-y-2">
          <div className="h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg animate-pulse"></div>
          <div className="h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg animate-pulse"></div>
          <div className="h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const AIChildren = () => {
  return (
    <div className="w-full h-full bg-zinc-800 p-6">
      <div className="mb-8">
        <div className="h-6 bg-purple-600 rounded w-20 animate-pulse mb-2"></div>
        <div className="h-4 bg-zinc-700 rounded w-36 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-4">
          <div className="h-5 bg-purple-500/50 rounded w-5 animate-pulse mb-2"></div>
          <div className="h-3 bg-purple-500/50 rounded w-16 animate-pulse"></div>
        </div>
        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg p-4">
          <div className="h-5 bg-blue-500/50 rounded w-5 animate-pulse mb-2"></div>
          <div className="h-3 bg-blue-500/50 rounded w-20 animate-pulse"></div>
        </div>
        <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-lg p-4 ">
          <div className="h-5 bg-green-500/50 rounded w-5 animate-pulse mb-2"></div>
          <div className="h-3 bg-green-500/50 rounded w-18 animate-pulse"></div>
        </div>
        <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-lg p-4">
          <div className="h-5 bg-orange-500/50 rounded w-5 animate-pulse mb-2"></div>
          <div className="h-3 bg-orange-500/50 rounded w-22 animate-pulse"></div>
        </div>
      </div>

      <div>
        <div className="h-4 bg-zinc-700 rounded w-28 animate-pulse mb-3"></div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 bg-zinc-900 rounded">
            <div className="h-3 bg-zinc-600 rounded w-40 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-3 p-2 bg-zinc-900 rounded">
            <div className="h-3 bg-zinc-600 rounded w-36 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CloudChildren = () => {
  return (
    <div className="w-full h-full bg-zinc-900 p-6">
      <div className="mb-8">
        <div className="h-6 bg-cyan-600 rounded w-24 animate-pulse mb-2"></div>
        <div className="h-4 bg-zinc-700 rounded w-32 animate-pulse"></div>
      </div>

      <div className="bg-zinc-800 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="h-4 bg-zinc-600 rounded w-20 animate-pulse"></div>
          <div className="h-4 bg-zinc-600 rounded w-16 animate-pulse"></div>
        </div>
        <div className="w-full bg-zinc-700 rounded-full h-2 mb-2">
          <div className="bg-cyan-500 h-2 rounded-full w-3/4 animate-pulse"></div>
        </div>
        <div className="h-3 bg-zinc-600 rounded w-24 animate-pulse"></div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
          <div className="h-4 bg-green-500/50 rounded w-4 animate-pulse"></div>
          <div className="h-4 bg-zinc-600 rounded w-20 animate-pulse"></div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
          <div className="h-4 bg-blue-500/50 rounded w-4 animate-pulse"></div>
          <div className="h-4 bg-zinc-600 rounded w-24 animate-pulse"></div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
          <div className="h-4 bg-purple-500/50 rounded w-4 animate-pulse"></div>
          <div className="h-4 bg-zinc-600 rounded w-28 animate-pulse"></div>
        </div>
      </div>

      <div>
        <div className="h-4 bg-zinc-700 rounded w-24 animate-pulse mb-3"></div>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded">
            <div className="h-4 bg-cyan-500/50 rounded w-4 animate-pulse"></div>
            <div className="h-3 bg-zinc-600 rounded w-32 animate-pulse"></div>
          </div>
          <div className="flex items-center gap-3 p-2 hover:bg-zinc-800 rounded">
            <div className="h-4 bg-gray-500/50 rounded w-4 animate-pulse"></div>
            <div className="h-3 bg-zinc-600 rounded w-28 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarToggle = ({
  isOpen,
  setIsOpen
}: {
  isOpen: string | false;
  setIsOpen: (isOpen: string | false) => void;
}) => {
  const renderIcon = () => {
    switch (isOpen !== false) {
      case true:
        return <PanelLeftClose size={24} />;
      case false:
        return <Menu size={24} />;
    }
  };
  return (
    <li
      onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        } else {
          setIsOpen('Home');
        }
      }}
      className="flex flex-col items-center justify-center gap-1 mb-2 cursor-pointer hover:bg-zinc-800 my-3 py-2.5 mx-4 rounded-md m-1.5"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          initial={{ opacity: 0.3, scale: 0.5, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0.3, scale: 0.5, filter: 'blur(4px)' }}
          key={`sidebar-toggle-${isOpen ? true : false}`}
        >
          {renderIcon()}
        </motion.span>
      </AnimatePresence>
    </li>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<string | false>(false);
  const [hovering, setHovering] = useState<string | null>(null);

  const options = [
    {
      name: 'Home',
      icon: <Home size={24} />,
      children: <HomeChildren />
    },
    {
      name: 'Projects',
      icon: <Folder size={24} />,
      children: <ProjectsChildren />
    },
    {
      name: 'Templates',
      icon: <PanelsTopLeft size={24} />,
      children: <TemplatesChildren />
    },
    {
      name: 'AI',
      icon: <Star size={24} />,
      children: <AIChildren />
    },
    {
      name: 'Cloud',
      icon: <Cloud size={24} />,
      children: <CloudChildren />
    }
  ];

  return (
    <div className="h-full flex items-start">
      <ul className="h-full w-20 bg-zinc-900 flex flex-col gap-1 border-r border-zinc-800">
        <SidebarToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        {options.map((option) => {
          const isActive = isOpen === option.name;

          return (
            <li
              key={option.name}
              onMouseEnter={() => {
                if (!isOpen) setHovering(option.name);
              }}
              onMouseLeave={() => {
                if (!isOpen) {
                  setHovering(null);
                }
              }}
              onClick={() => {
                setIsOpen(option.name);
              }}
              className="group px-1.5 gap-1 py-1 flex flex-col items-center justify-center cursor-pointer select-none"
            >
              <div
                className={cn(
                  'flex flex-col items-center justify-center gap-1 group-hover:bg-zinc-800 p-2.5 rounded-md text-white/90',
                  isActive && 'bg-zinc-800 text-blue-400'
                )}
              >
                {option.icon}
              </div>
              <p className="text-xs">{option.name}</p>
            </li>
          );
        })}
      </ul>
      <AnimatePresence mode="popLayout" initial={false}>
        {(hovering || isOpen) && (
          <motion.section
            id="sidebar-children"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0 0 0 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)', transition: { delay: 0.06 } }}
            transition={{
              duration: 0.2,
              type: 'spring',
              bounce: 0
            }}
            onMouseEnter={() => {
              if (!isOpen) setHovering(isOpen || hovering);
            }}
            onMouseLeave={() => {
              if (!isOpen) setHovering(null);
            }}
            key={isOpen ? isOpen : hovering}
            className="h-full bg-zinc-900"
          >
            <div className="w-[300px] h-full">
              {(isOpen || hovering) &&
                options.find((opt) => opt.name === (isOpen || hovering))?.children}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
