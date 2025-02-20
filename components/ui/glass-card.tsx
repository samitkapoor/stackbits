import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type GlassCardProps = {
  children?: ReactNode;
  className?: string;
};

const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, background: 'rgba(255, 255, 255, 0.1)' }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{
        y: -5,
        background: 'rgba(255, 255, 255, 0.3)'
      }}
      transition={{ duration: 0.1 }}
      className={`relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:border-white/40 transition-all overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 opacity-50 bg-gradient-to-tr from-sky-400 to-neutral-200" />
      {children}
    </motion.div>
  );
};

export default GlassCard;
