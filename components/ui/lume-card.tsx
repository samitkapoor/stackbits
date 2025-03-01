import { useState } from 'react';
import { motion } from 'framer-motion';

type LumeCardProps = {
  title?: string;
  paragraph?: string;
  image?: string;
  className?: string;
};

const LumeCard = ({ title, paragraph, image, className }: LumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`w-full max-w-[250px] sm:max-w-sm md:max-w-md ${className}`}>
      {/* Card */}
      <motion.div
        className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        initial={{ scale: 1 }}
        animate={{ scale: isExpanded ? 1.05 : 1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ scale: 1 }}
          animate={{ scale: isExpanded ? 1.15 : 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        {/* Subtle Overlay */}
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isExpanded ? 0 : 0.5 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </motion.div>

      <motion.h2
        className="mt-2 text-white sm:text-lg md:text-2xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h2>

      {/* Paragraph Below the Card */}
      <motion.div
        className="text-white/60 text-sm sm:text-base opacity-90"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {paragraph}
      </motion.div>
    </div>
  );
};

export default LumeCard;
