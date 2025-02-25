import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type GlassCardProps = {
  children?: ReactNode;
  className?: string;
};

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{
        y: -5
      }}
      transition={{ duration: 0.1 }}
      className={`relative bg-gradient-to-tr from-[#46C0F75f] to-[#E3E8EA5f] p-6 rounded-2xl bg-white/10 shadow-md hover:border-white/40 transition-all overflow-hidden ${className}`}
    >
      <motion.span
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-70deg, transparent 48%, #ffffff8f 50%, transparent 52%)'
        }}
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeatDelay: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      {children}
    </motion.div>
  );
};

export default GlassCard;
