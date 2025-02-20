import { useState } from 'react';
import { motion } from 'framer-motion';

type ExpandableCardProps = {
  title?: string;
  paragraph?: string;
  image?: string;
  className?: string;
};

const ExpandableCard = ({ title, paragraph, image, className }: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`relative w-full h-[200px] max-w-[250px] sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-lg cursor-pointer ${className}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      initial={{ scale: 1 }}
      animate={{ scale: isExpanded ? 1.1 : 1 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.8, ease: 'backOut' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <h2 className="text-white sm:text-lg md:text-2xl font-bold">{title}</h2>
        <motion.p
          className="text-white text-xs sm:text-sm opacity-80 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
          transition={{ duration: 0.4 }}
        >
          {paragraph}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ExpandableCard;
