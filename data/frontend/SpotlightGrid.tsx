import SpotlightGrid from '@/components/ui/spotlight-grid';
import { Document } from '../main';

export const spotlightGridPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-8 gap-5">
    <SpotlightGrid
      items={[
        {
          name: 'React',
          logo: '/react.svg'
        },
        {
          name: 'Next.js',
          logo: '/nextjs.svg'
        },
        {
          name: 'Tailwind',
          logo: '/tailwindcss.svg'
        },
        {
          name: 'Typescript',
          logo: '/typescript.svg'
        },
        {
          name: 'Framer',
          logo: '/framermotion.png'
        },
        {
          name: 'Node.js',
          logo: '/nodejs.svg'
        },
        {
          name: 'CSS',
          logo: '/css.svg'
        },
        {
          name: 'Three.js',
          logo: '/threejs.svg'
        }
      ]}
    />
  </div>
);

export const spotlightGrid: Document = {
  sideBar: {
    group: 'Components',
    name: 'Spotlight Grid',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Spotlight Grid',
        content:
          "The Spotlight Grid is a component that displays a grid of items with a spotlight effect. It's perfect for showcasing your projects or skills.",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 relative">
            <div className="max-w-xl">
              <SpotlightGrid
                items={[
                  {
                    name: 'React',
                    logo: '/react.svg'
                  },
                  {
                    name: 'Next.js',
                    logo: '/nextjs.svg'
                  },
                  {
                    name: 'Tailwind',
                    logo: '/tailwindcss.svg'
                  },
                  {
                    name: 'Typescript',
                    logo: '/typescript.svg'
                  },
                  {
                    name: 'Framer',
                    logo: '/framermotion.png'
                  },
                  {
                    name: 'Node.js',
                    logo: '/nodejs.svg'
                  },
                  {
                    name: 'CSS',
                    logo: '/css.svg'
                  },
                  {
                    name: 'Three.js',
                    logo: '/threejs.svg'
                  }
                ]}
              />
            </div>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file spotlight-grid.tsx in your components folder and paste this code',
        code: `'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

interface SpotlightItemType {
  name: string;
  logo: string;
}

interface SpotlightGridProps {
  items: SpotlightItemType[];
}

const SpotlightGrid = ({ items }: SpotlightGridProps) => {
  // * Randomly select an item to highlight when component mounts
  const randomIndex = Math.floor(Math.random() * items.length);
  const [hoveredItem, setHoveredItem] = useState<string>(items[randomIndex].name);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full sm:gap-0 gap-2 text-white/85">
        {items
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => {
            return (
              <div
                key={item.name}
                className="relative flex items-center justify-start group cursor-default"
              >
                <div
                  onMouseEnter={() => setHoveredItem(item.name)}
                  className="flex p-1 sm:p-2 items-center justify-center gap-1 z-10 relative"
                >
                  <div className="relative h-[12px] w-[12px] md:h-[16px] md:w-[16px]">
                    <Image src={item.logo || ''} alt={item.name} fill className="object-contain" />
                  </div>
                  <p className="truncate">{item.name}</p>
                  {hoveredItem === item.name && (
                    <motion.div
                      layout
                      layoutId="item-highlight"
                      style={{
                        boxShadow: '0px 0px 100px 10px #ffffff4c'
                      }}
                      className="absolute h-full z-0 rounded-md w-[calc(100%+30px)] pointer-events-none"
                    ></motion.div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SpotlightGrid;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: ` <SpotlightGrid
items={[
{
    name: 'React',
    logo: '/react.svg'
},
{
    name: 'Next.js',
    logo: '/nextjs.svg'
},
{
    name: 'Tailwind',
    logo: '/tailwindcss.svg'
},
{
    name: 'Typescript',
    logo: '/typescript.svg'
},
{
    name: 'Framer',
    logo: '/framermotion.png'
},
{
    name: 'Node.js',
    logo: '/nodejs.svg'
},
{
    name: 'CSS',
    logo: '/css.svg'
},
{
    name: 'Three.js',
    logo: '/threejs.svg'
}
]}
/>`
      }
    ]
  }
};
