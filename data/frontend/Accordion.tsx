import { Document } from '../main';
import AccordionDemo from '@/components/accordion-demo';

export const accordionPreview = (
  <div className="h-full w-full flex items-center justify-center scale-75">
    <AccordionDemo />
  </div>
);

export const accordion: Document = {
  sideBar: {
    group: 'Components',
    name: 'Accordion',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Accordion',
        content:
          'Why dump all your content on the screen when you can hide it in style? Our accordion lets you tuck away details neatly until they’re needed—like a treasure chest waiting to be opened! Perfect for FAQs, docs, or any content that deserves a dramatic reveal.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="w-full h-full flex items-center justify-center">
            <AccordionDemo />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion lucide-react tailwindcss`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file accordion.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

type AccordionProps = {
  isOpen: boolean;
  selectAccordion: (index: number) => void;
  item: {
    title: string;
    content: string;
  };
  index: number;
  toggleIcon?: React.ReactNode;
};

const Accordion = ({
  isOpen = false,
  selectAccordion,
  item,
  index,
  toggleIcon
}: AccordionProps) => {
  return (
    <motion.div
      initial={{
        height: '60px',
        background: 'linear-gradient(90deg, rgba(38, 38, 66, 1) 59%, rgba(69, 67, 89, 1) 100%)'
      }}
      animate={{
        height: isOpen ? 'auto' : '60px', // ? height of the accordion increases when it is open
        background: isOpen
          ? 'linear-gradient(90deg, rgba(255, 99, 71, 1) 50%, rgba(255, 165, 0, 0.8) 100%)'
          : 'linear-gradient(90deg, rgba(38, 38, 66, 0.4) 59%, rgba(69, 67, 89, 0.4) 100%)'
      }}
      className="shadow-lg rounded-xl border border-white/15 overflow-hidden w-full relative"
    >
      <button
        className="text-sm sm:text-[16px] w-full flex justify-between items-center p-5 h-[60px] text-left font-semibold text-white"
        onClick={() => selectAccordion(index)}
      >
        {item.title}
        {toggleIcon || (
          <motion.div animate={{ rotate: isOpen ? 135 : 0 }}>
            <Plus className="text-white h-4 w-4" />
          </motion.div>
        )}
      </button>

      <div className="px-5 pb-5 text-white overflow-hidden text-xs sm:text-[16px]">
        {item.content}
      </div>
    </motion.div>
  );
};

export default Accordion;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `import { useState } from 'react';

import Accordion from './ui/accordion';

// ? Content of the accordions
const accordionItems = [
  {
    title: '📜 No Boring Documentation',
    content:
      'Our docs are actually *fun* to read. No 10,000-word essays—just quick, clear explanations so you can get back to building cool stuff.'
  },
  {
    title: '⚡ Copy. Paste. Ship.',
    content:
      'Other devs *write* code. You? You *assemble* greatness. With StackBits, you get copy-paste-ready snippets that actually work (yes, really).'
  },
  {
    title: '🛠️ Backend Included',
    content:
      'Think we just give you UI components? Nah. We also include backend logic, so you don’t have to keep Googling “how to hash a password securely.”'
  }
];

const AccordionDemo = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  // ? Toggles the accordion
  const toggleAccordion = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 space-y-4">
      <p>Why use stackbits?</p>
      {accordionItems.map((item, index) => (
        <Accordion
          key={index}
          isOpen={expanded === index}
          selectAccordion={toggleAccordion}
          item={item}
          index={index}
          // toggleIcon={<ChevronDown className="text-white h-4 w-4" />} // ? Optional icon to toggle the accordion
        />
      ))}
    </div>
  );
};

export default AccordionDemo;
`
      }
    ]
  }
};
