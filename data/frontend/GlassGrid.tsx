import GlassGridDemo from '@/components/glass-grid-demo';
import { Document } from '../main';
import { cnCode } from '@/constants/code';

export const glassGridPreview = (
  <div className="h-full w-full flex items-center justify-center scale-75">
    <GlassGridDemo isPreview />
  </div>
);

export const glassGrid: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Glass Grid',
    order: 2
  },
  content: {
    sections: [
      {
        heading: '🥶 Glass Grid',
        content:
          'The Glass Grid component is a sleek, interactive UI element that enhances user experience. Built with React and Framer Motion, it offers a responsive layout with smooth animations and a glass-like effect. Ideal for showcasing portfolios, analytics, or executive summaries, it provides a professional presentation with customizable columns and easy integration.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <GlassGridDemo />
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
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file glass-grid.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

type GlassGrid = {
  items: ReactNode[];
  columns?: number;
};

type GlassCardProps = {
  children?: ReactNode;
  className?: string;
  index: number;
};

const GlassCard = ({ children, className, index }: GlassCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      animate={{ y: [10, 0], opacity: [0, 1] }}
      transition={{ duration: 0.2, delay: 0.1 * (index + 1) }}
      className="rounded-2xl relative min-w-[250px]"
    >
      <div
        className={cn(
          \`h-full w-full transition-all overflow-hidden z-10 absolute inset-0 rounded-2xl backdrop-blur-[1px] hover:backdrop-blur-0\`,
          'border-transparent border hover:border-white/25',
          className
        )}
      >
        <motion.span
          layout
          layoutId={'glass'}
          className="absolute inset-0 z-[20] w-full pointer-events-none"
          style={{
            background: 'linear-gradient(-70deg, transparent 40%, #ffffff99 50%, transparent 60%)',
            filter: 'blur(10px)'
          }}
          initial={{ x: '-100%' }}
          animate={{ x: isHovering ? '100%' : '-100%' }}
          transition={{
            type: 'spring',
            stiffNess: 300,
            damping: 40
          }}
        />
      </div>
      <motion.div
        animate={{
          rotateZ: isHovering ? -5 : 0,
          y: isHovering ? -10 : 0,
          x: isHovering ? -5 : 0
        }}
        transition={{
          type: 'spring',
          stiffNess: 100,
          damping: 10
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const GlassGrid = ({ items, columns = 3 }: GlassGrid) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gap: '20px'
      }}
    >
      {items.map((item, i) => {
        return (
          <GlassCard key={\`glass-item-\${i}\`} index={i}>
            {item}
          </GlassCard>
        );
      })}
    </div>
  );
};

export default GlassGrid;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `import React from 'react';
import GlassGrid from './ui/glass-grid';

const PortfolioCard = () => {
  return (
    <div className="flex flex-col justify-between p-8 h-48 w-full text-white bg-gradient-to-br from-slate-900/40 to-slate-800/40 rounded-2xl border border-white/10">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-sm font-light text-gray-300 uppercase tracking-wider">
            Portfolio
          </span>
          <span className="text-2xl font-bold mt-1">$2.8M</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">Today</span>
          <span className="text-sm font-semibold text-emerald-400">+1.68%</span>
        </div>
        <div className="text-xs text-gray-500">Live</div>
      </div>
    </div>
  );
};

const AnalyticsCard = () => {
  return (
    <div className="flex flex-col justify-between p-8 h-48 w-full text-white bg-gradient-to-br from-indigo-950/50 to-purple-950/50 rounded-2xl border border-white/10">
      <div className="flex justify-between items-start">
        <span className="text-sm font-light text-gray-300 uppercase tracking-wider">Growth</span>
        <div className="px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded text-xs text-indigo-300">
          Q4
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-3xl font-bold mb-2">127%</div>
        <div className="w-full bg-white/10 rounded-full h-1">
          <div className="bg-gradient-to-r from-indigo-400 to-purple-400 h-1 rounded-full w-4/5"></div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>Target: 120%</span>
        <span>Achieved</span>
      </div>
    </div>
  );
};

const ExecutiveCard = () => {
  return (
    <div className="flex flex-col justify-center p-8 h-48 w-full text-white bg-gradient-to-br from-neutral-900/50 to-zinc-800/50 rounded-2xl border border-white/10">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border border-white/20 mr-4 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-white/80"></div>
        </div>
        <div>
          <h3 className="font-semibold text-base">Marcus Chen</h3>
          <p className="text-sm text-gray-400">CEO</p>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <div className="text-gray-400">
          <div className="text-xs text-gray-500">Dept</div>
          <div>Executive</div>
        </div>
        <div className="text-right text-gray-400">
          <div className="text-xs text-gray-500">Years</div>
          <div>12</div>
        </div>
      </div>
    </div>
  );
};

const GlassGridDemo = () => {
  const items = [<PortfolioCard />, <AnalyticsCard />, <ExecutiveCard />];

  return (
    <div className={\`gap-4 p-4 w-full max-w-4xl h-[800px] flex items-center justify-center\`}>
      <GlassGrid items={items} />
    </div>
  );
};

export default GlassGridDemo;
`
      }
    ]
  }
};
