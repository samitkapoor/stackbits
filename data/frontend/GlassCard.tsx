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
          'Shine bright with GlassCard! ✨ A sleek, frosted-glass component that adds a modern, aesthetic touch to any UI. With its soft gradients, subtle transparency, and smooth hover effects, it creates a realistic glassmorphism look that blends effortlessly into any design. Perfect for elevating your cards, dashboards, and previews with style! 💎🚀',
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
        sectionType: 'dependencies',
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
      transition={{ duration: 0.2 }}
      className={\`
        relative p-6 rounded-2xl bg-gradient-to-tr from-[#46C0F770] to-[#E3E8EA70] 
        backdrop-blur-lg shadow-lg shadow-white/20 transition-all overflow-hidden 
        hover:border-white/30 \${className}
      \`}
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
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GlassCard
  key={index}
  className={\`flex flex-col items-center justify-center p-6 text-white text-xl font-semibold tracking-wider bg-gradient-to-tr transition-transform duration-300 hover:scale-105\`}
>
  <span className="text-2xl">☁️ Cloudy</span>
  <span className="ml-2 mt-2 text-lg">15°C</span>
</GlassCard>`
      }
    ]
  }
};
