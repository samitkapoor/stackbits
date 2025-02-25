import { Document } from '../main';
import GlassCardDemo from '@/components/glass-card-demo';

export const glassCardPreview = (
  <div className="h-full w-full flex items-center justify-center scale-90">
    <GlassCardDemo />
  </div>
);

export const glassCard: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Glass Card',
    order: 2
  },
  content: {
    sections: [
      {
        heading: '🥶 Glass Card',
        content:
          'Catch the light with GlassCard! A sleek, frosted preview component that brings a touch of elegance and modern flair to any interface. With its smooth, glass-like finish and soft gradient, it seamlessly blends into your design, offering a stylish yet functional element for showcasing content.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <GlassCardDemo />
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
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file glass-card.tsx in your components folder and paste this code',
        code: `import { motion } from 'framer-motion';
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
      className={\`relative bg-gradient-to-tr from-[#46C0F75f] to-[#E3E8EA5f] p-6 rounded-2xl bg-white/10 shadow-md hover:border-white/40 transition-all overflow-hidden \${className}\`}
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
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GlassCard className="flex flex-col">
  ...
</GlassCard>`
      }
    ]
  }
};
