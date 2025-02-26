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
      transition={{ duration: 0.2 }}
      className={`
        relative p-6 rounded-2xl bg-gradient-to-tr from-[#46C0F770] to-[#E3E8EA70] 
        backdrop-blur-lg shadow-lg shadow-white/20 transition-all overflow-hidden 
        hover:border-white/30 ${className}
      `}
    >
      {/* Light Reflection Animation */}
      <motion.span
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-70deg, transparent 40%, #ffffffaa 50%, transparent 60%)',
          filter: 'blur(3px)'
        }}
        initial={{ x: '-120%' }}
        animate={{ x: '120%' }}
        transition={{
          duration: 2.5,
          repeatDelay: 1.2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Card Content */}
      <div className="relative">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
