import React from 'react';
import { motion } from 'framer-motion';

type IconCardProps = {
  text: string;
  icon: React.ReactNode;
};

const IconCard = ({ text, icon }: IconCardProps) => {
  return (
    <motion.div
      style={{
        background: 'linear-gradient(160deg, transparent 0%, #cbcbcb25 50%, transparent 100%)'
      }}
      initial={{
        opacity: 0,
        rotateZ: 0
      }}
      animate={{
        opacity: 1,
        transition: { duration: 1, ease: 'backOut', delay: 0.2 }
      }}
      whileHover={{
        background: 'linear-gradient(160deg, transparent 0%, #cbcbcb55 50%, transparent 100%)',
        rotateZ: -2,
        transition: { duration: 0.5, ease: 'backOut' }
      }}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-center border-[1px] border-neutral-600 p-2 sm:p-4 rounded-lg gap-1 sm:gap-5"
      key={text}
    >
      {icon}
      <p className="text-xs sm:text-sm md:text-base w-full">{text}</p>
    </motion.div>
  );
};

export default IconCard;
