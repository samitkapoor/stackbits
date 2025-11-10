import { Document } from '../main';
import VideoPreview from '@/components/ui/video-preview';
import { cnCode, installDependenciesCode } from '@/constants/code';
import AppleSpotlightDemo from '@/components/demos/apple-spotlight-demo';

export const appleSpotlightPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <VideoPreview videoUrl="/demos/apple-spotlight.mp4" />
  </div>
);

export const appleSpotlight: Document = {
  sideBar: {
    group: 'Components',
    name: 'Apple Spotlight',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Apple Spotlight',
        content: 'A beautiful search component inspired by macOS Spotlight.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="w-full h-full flex flex-col gap-32 items-center justify-center bg-neutral-300">
            <AppleSpotlightDemo />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true, lucide: true, tailwindcss: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file apple-spotlight.tsx in your components folder and paste this code',
        code: `'use client';

import { cn } from '@/lib/utils';

import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  Calendar,
  ChevronRight,
  Files,
  Folder,
  Globe,
  Image,
  LayoutGrid,
  Mail,
  MessageSquare,
  Music,
  Search,
  Settings,
  StickyNote,
  Terminal,
  Twitter
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Shortcut {
  label: string;
  icon: React.ReactNode;
  link: string;
}

interface SearchResult {
  icon: React.ReactNode;
  label: string;
  description: string;
  link: string;
}

const SVGFilter = () => {
  return (
    <svg width="0" height="0">
      <filter id="blob">
        <feGaussianBlur stdDeviation="10" in="SourceGraphic" />
        <feColorMatrix
          values="
      1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      0 0 0 18 -9
    "
          result="blob"
        />
        <feBlend in="SourceGraphic" in2="blob" />
      </filter>
    </svg>
  );
};

interface ShortcutButtonProps {
  icon: React.ReactNode;
  link: string;
}

const ShortcutButton = ({ icon, link }: ShortcutButtonProps) => {
  return (
    <a href={link} target="_blank">
      <div className="rounded-full cursor-pointer hover:shadow-lg opacity-30 hover:opacity-100 transition-[opacity,shadow] duration-200">
        <div className="size-16 aspect-square flex items-center justify-center">{icon}</div>
      </div>
    </a>
  );
};

interface SpotlightPlaceholderProps {
  text: string;
  className?: string;
}

const SpotlightPlaceholder = ({ text, className }: SpotlightPlaceholderProps) => {
  return (
    <motion.div
      layout
      className={cn('absolute text-gray-500 flex items-center pointer-events-none z-10', className)}
    >
      <AnimatePresence mode="popLayout">
        <motion.p
          layoutId={\`placeholder-\${text}\`}
          key={\`placeholder-\${text}\`}
          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {text}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

interface SpotlightInputProps {
  placeholder: string;
  hidePlaceholder: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholderClassName?: string;
}

const SpotlightInput = ({
  placeholder,
  hidePlaceholder,
  value,
  onChange,
  placeholderClassName
}: SpotlightInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when the component mounts
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center w-full justify-start gap-2 px-6 h-16">
      <motion.div layoutId="search-icon">
        <Search />
      </motion.div>
      <div className="flex-1 relative text-2xl">
        {!hidePlaceholder && (
          <SpotlightPlaceholder text={placeholder} className={placeholderClassName} />
        )}

        <motion.input
          ref={inputRef}
          layout="position"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent outline-none ring-none"
        />
      </div>
    </div>
  );
};

interface SearchResultCardProps extends SearchResult {
  isLast: boolean;
}

const SearchResultCard = ({ icon, label, description, link, isLast }: SearchResultCardProps) => {
  return (
    <a href={link} target="_blank" className="overflow-hidden w-full group/card">
      <div
        className={cn(
          'flex items-center text-black justify-start hover:bg-white gap-3 py-2 px-2 rounded-xl hover:shadow-md w-full',
          isLast && 'rounded-b-3xl'
        )}
      >
        <div className="size-8 [&_svg]:stroke-[1.5] [&_svg]:size-6 aspect-square flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="font-medium">{label}</p>
          <p className="text-xs opacity-50">{description}</p>
        </div>
        <div className="flex-1 flex items-center justify-end opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
          <ChevronRight className="size-6" />
        </div>
      </div>
    </a>
  );
};

interface SearchResultsContainerProps {
  searchResults: SearchResult[];
  onHover: (index: number | null) => void;
}

const SearchResultsContainer = ({ searchResults, onHover }: SearchResultsContainerProps) => {
  return (
    <motion.div
      layout
      onMouseLeave={() => onHover(null)}
      className="px-2 border-t flex flex-col bg-neutral-100 max-h-96 overflow-y-auto w-full py-2"
    >
      {searchResults.map((result, index) => {
        return (
          <motion.div
            key={\`search-result-\${index}\`}
            onMouseEnter={() => onHover(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.2,
              ease: 'easeOut'
            }}
          >
            <SearchResultCard
              icon={result.icon}
              label={result.label}
              description={result.description}
              link={result.link}
              isLast={index === searchResults.length - 1}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

interface AppleSpotlightProps {
  shortcuts?: Shortcut[];
  isOpen?: boolean;
  handleClose?: () => void;
}

const AppleSpotlight = ({
  shortcuts = [
    {
      label: 'Apps',
      icon: <LayoutGrid />,
      link: '/docs/components'
    },
    {
      label: 'Files',
      icon: <Folder />,
      link: '/docs/texts'
    },
    {
      label: 'Actions',
      icon: <Activity />,
      link: '/docs/buttons'
    },
    {
      label: 'Clipboard',
      icon: <Files />,
      link: '/docs/backgrounds'
    }
  ],
  isOpen = true,
  handleClose = () => {}
}: AppleSpotlightProps) => {
  const [hovered, setHovered] = useState(false);
  const [hoveredSearchResult, setHoveredSearchResult] = useState<number | null>(null);
  const [hoveredShortcut, setHoveredShortcut] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  const searchResults: SearchResult[] = [
    {
      icon: <Twitter />,
      label: 'Twitter',
      description: 'Follow me on Twitter',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <Globe />,
      label: 'Safari',
      description: 'Open Safari web browser',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <Mail />,
      label: 'Mail',
      description: 'Open Mail application',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <Calendar />,
      label: 'Calendar',
      description: 'View your calendar events',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <StickyNote />,
      label: 'Notes',
      description: 'Open Notes application',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <Image />,
      label: 'Photos',
      description: 'Browse your photo library',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <Settings />,
      label: 'System Settings',
      description: 'Open System Preferences',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <Terminal />,
      label: 'Terminal',
      description: 'Open Terminal application',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <Folder />,
      label: 'Finder',
      description: 'Open Finder file manager',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <MessageSquare />,
      label: 'Messages',
      description: 'Open Messages application',
      link: 'https://x.com/samitkapoorr'
    },
    {
      icon: <Music />,
      label: 'Music',
      description: 'Open Music application',
      link: 'https://x.com/samitkapoorr'
    }
  ];

  return (
    <AnimatePresence mode="popLayout">
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          onClick={handleClose}
        >
          <SVGFilter />

          <div
            className="w-full flex flex-col max-w-3xl gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{
                opacity: 0,
                filter: 'blur(20px) url(#blob)',
                scaleX: 1.3,
                scaleY: 1.1,
                y: -10
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px) url(#blob)',
                scaleX: 1,
                scaleY: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                filter: 'blur(20px) url(#blob)',
                scaleX: 1.3,
                scaleY: 1.1,
                y: 10
              }}
              transition={{
                stiffness: 550,
                damping: 50,
                type: 'spring'
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false);
                setHoveredShortcut(null);
              }}
              style={{ filter: 'url(#blob)' }}
              className={cn(
                'w-full flex items-center justify-end gap-4 z-20 group',
                '[&>div]:bg-neutral-100 [&>div]:text-black [&>div]:rounded-full [&>div]:backdrop-blur-xl',
                '[&_svg]:size-7 [&_svg]:stroke-[1.4]'
              )}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  layoutId="search-input-container"
                  transition={{
                    layout: {
                      duration: 0.5,
                      type: 'spring',
                      bounce: 0.2
                    }
                  }}
                  style={{
                    borderRadius: '30px'
                  }}
                  className="h-full w-full flex flex-col items-center justify-start z-10 relative shadow-lg overflow-hidden border"
                >
                  <SpotlightInput
                    placeholder={
                      hoveredShortcut !== null
                        ? shortcuts[hoveredShortcut].label
                        : hoveredSearchResult !== null
                        ? searchResults[hoveredSearchResult].label
                        : 'Search'
                    }
                    placeholderClassName={
                      hoveredSearchResult !== null ? 'text-black bg-white' : 'text-gray-500'
                    }
                    hidePlaceholder={!(hoveredSearchResult !== null || !searchValue)}
                    value={searchValue}
                    onChange={handleSearchValueChange}
                  />

                  {searchValue && (
                    <SearchResultsContainer
                      searchResults={searchResults}
                      onHover={setHoveredSearchResult}
                    />
                  )}
                </motion.div>
                {hovered &&
                  !searchValue &&
                  shortcuts.map((shortcut, index) => (
                    <motion.div
                      key={\`shortcut-\${index}\`}
                      onMouseEnter={() => setHoveredShortcut(index)}
                      layout
                      initial={{ scale: 0.7, x: -1 * (64 * (index + 1)) }}
                      animate={{ scale: 1, x: 0 }}
                      exit={{
                        scale: 0.7,
                        x:
                          1 *
                          (16 * (shortcuts.length - index - 1) +
                            64 * (shortcuts.length - index - 1))
                      }}
                      transition={{
                        duration: 0.8,
                        type: 'spring',
                        bounce: 0.2,
                        delay: index * 0.05
                      }}
                      className="rounded-full cursor-pointer"
                    >
                      <ShortcutButton icon={shortcut.icon} link={shortcut.link} />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppleSpotlight;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `import React, { useState } from 'react';
import AppleSpotlight from '../components/apple-spotlight';
import { Button } from '../ui/button';

const AppleSpotlightDemo = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex items-start justify-center h-full w-full p-10">
      <Button
        variant="secondary"
        className="bg-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        onClick={toggleOpen}
      >
        Toggle Spotlight
      </Button>
      <AppleSpotlight isOpen={open} handleClose={toggleOpen} />
    </div>
  );
};

export default AppleSpotlightDemo;
`
      }
    ]
  }
};
