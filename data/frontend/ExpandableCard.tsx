import FlickerBox from '@/components/ui/flicker-box';
import { Document } from '../main';
import ExpandableCard from '@/components/ui/expandable-card';

export const expandableCard: Document = {
  sideBar: {
    group: 'Components',
    name: 'ExpandableCard',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'ExpandableCard',
        content:
          'Think of an Expandable Card like a mystery box—compact, stylish, and hiding something exciting inside! Click, tap, or hover, and boom—it expands to reveal extra details, cool insights, or even a secret travel tip.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <ExpandableCard
            title="Explore Beyond Borders"
            paragraph="The world is full of hidden gems waiting to be discovered. Where will your next adventure take you?"
            image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file expandable-card.tsx in your components folder and paste this code',
        code: `'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type ExpandableCardProps = {
  title?: string;
  paragraph?: string;
  image?: string;
};

const ExpandableCard = ({ title, paragraph, image }: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative h-[200px] w-full max-w-[250px] sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      initial={{ scale: 1 }}
      animate={{ transform: isExpanded ? 'scaleX(1.1) scaleY(1.2)' : 'scaleX(1) scaleY(1)' }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.8, ease: 'backOut' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: \`url(\${image})\` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <h2 className="text-white sm:text-lg md:text-2xl font-bold">{title}</h2>
        <motion.p
          className="text-white text-xs sm:text-sm opacity-80 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          {paragraph}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ExpandableCard;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ExpandableCard
    title="Explore Beyond Borders"
    paragraph="The world is full of hidden gems waiting to be discovered. Where will your next adventure take you?"
    image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>`
      }
    ]
  }
};
