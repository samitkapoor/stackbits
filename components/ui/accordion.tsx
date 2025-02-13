import React from 'react';
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
          : 'linear-gradient(90deg, rgba(38, 38, 66, 1) 59%, rgba(69, 67, 89, 1) 100%)'
      }}
      className="shadow-lg rounded-xl overflow-hidden border border-gray-300 w-full relative"
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
