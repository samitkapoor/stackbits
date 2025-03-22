import GaugeChart from '@/components/ui/gauge-chart';
import { Document } from '../main';

export const gaugeChartPreview = (
  <div className="h-full w-full flex items-center justify-center scale-50">
    <GaugeChart score={3.1} min={1.5} max={4} />
  </div>
);

export const gaugeChart: Document = {
  sideBar: {
    group: 'Components',
    name: 'Gauge Chart',
    order: 3
  },
  content: {
    sections: [
      {
        heading: '🕹️ Gauge Chart',
        content:
          "The Gauge Chart is a sleek and interactive data visualization tool designed to showcase progress, performance, or ratings in a visually engaging way. With a smooth animated arc, vibrant gradient colors, and dynamic tick marks, this semi-circular chart makes tracking key metrics both intuitive and fun. Whether you're measuring customer satisfaction, performance scores, or financial health, the Gauge Chart provides a quick, at-a-glance overview with a modern and responsive design.",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <GaugeChart score={3.2} min={1.2} max={4} />
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
        description: 'Create a file gauge-chart.tsx in your components folder and paste this code',
        code: `'use client';

import { motion } from 'framer-motion';
import React from 'react';

const GaugeChart = ({ score, min, max }: { score: number; min: number; max: number }) => {
  // Ensure score is within bounds
  const boundedScore = Math.max(min, Math.min(max, score));

  // Calculate the angle (0 to 180 degrees)
  const angle = ((boundedScore - min) / (max - min)) * 180;

  // Arc length calculation
  const RADIUS = 80;
  const arcLength = (180 / 360) * (2 * Math.PI * RADIUS);

  // Calculate score thresholds dynamically
  const range = max - min;
  const lowThreshold = min + range * 0.33;
  const highThreshold = min + range * 0.66;

  // Generate tick marks
  const numTicks = 8;
  const ticks = Array.from({ length: numTicks + 1 }, (_, i) => {
    const tickAngle = (i * 180) / numTicks;
    const tickRadians = (tickAngle * Math.PI) / 180;
    const x1 = 100 + (RADIUS - 5) * Math.cos(tickRadians - Math.PI);
    const y1 = 100 + (RADIUS - 5) * Math.sin(tickRadians - Math.PI);
    const x2 = 100 + (RADIUS + 5) * Math.cos(tickRadians - Math.PI);
    const y2 = 100 + (RADIUS + 5) * Math.sin(tickRadians - Math.PI);
    const labelX = 100 + (RADIUS + 15) * Math.cos(tickRadians - Math.PI);
    const labelY = 100 + (RADIUS + 15) * Math.sin(tickRadians - Math.PI);
    const value = min + (i * (max - min)) / numTicks;
    return { x1, y1, x2, y2, labelX, labelY, value };
  });

  // Helper function to get score status and its corresponding style
  const getScoreStatus = () => {
    if (boundedScore > highThreshold) {
      return {
        text: 'Excellent',
        className:
          'bg-gradient-to-r from-green-500/20 to-green-400/20 text-green-500 ring-1 ring-green-500/30 shadow-lg shadow-green-500/10'
      };
    }
    if (boundedScore > lowThreshold) {
      return {
        text: 'Good',
        className:
          'bg-gradient-to-r from-orange-500/20 to-orange-400/20 text-orange-500 ring-1 ring-orange-500/30 shadow-lg shadow-orange-500/10'
      };
    }
    return {
      text: 'Poor',
      className:
        'bg-gradient-to-r from-red-500/20 to-red-400/20 text-red-500 ring-1 ring-red-500/30 shadow-lg shadow-red-500/10'
    };
  };

  const scoreStatus = getScoreStatus();

  return (
    <div className="relative w-72 h-72 border-[4px] border-slate-600/20 rounded-full p-4 flex flex-col">
      {/* SVG Gauge */}
      <svg className="relative top-0 overflow-visible" viewBox="0 0 200 120">
        <defs>
          {/* Enhanced Gradient Definition */}
          <linearGradient
            id="gaugeGradient"
            gradientUnits="userSpaceOnUse"
            x1="20"
            y1="100"
            x2="180"
            y2="100"
          >
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="25%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="75%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          {/* Glow Filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background Arc with shadow */}
        <path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke="rgba(30, 41, 59, 0.2)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke="#1e293b"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Tick marks and labels */}
        {ticks.map((tick, i) => (
          <g key={i} className="text-slate-500">
            <line
              x1={tick.x1}
              y1={tick.y1}
              x2={tick.x2}
              y2={tick.y2}
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.5"
            />
            <text
              x={tick.labelX}
              y={tick.labelY}
              textAnchor="middle"
              fontSize="8"
              fill="currentColor"
              opacity="0.8"
            >
              {tick.value.toFixed(1)}
            </text>
          </g>
        ))}

        {/* Progress Arc with glow */}
        <motion.path
          d="M20,100 A80,80 0 0,1 180,100"
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="3"
          strokeDasharray={arcLength}
          strokeDashoffset={arcLength * (1 - angle / 180)}
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ strokeDashoffset: arcLength }}
          animate={{ strokeDashoffset: arcLength * (1 - angle / 180) }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>

      {/* Enhanced Needle with glow */}
      <div className="absolute inset-0 h-full w-full top-0 flex items-center justify-center">
        <motion.div
          className="w-1.5 h-20 bg-white/40 origin-bottom rounded-full mb-16"
          style={{
            transformOrigin: 'bottom center',
            clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
            background:
              'radial-gradient(circle at bottom, rgba(240,240,240,0.8) 0%, rgba(240,240,240,0.2))'
          }}
          initial={{ rotate: -90 }}
          animate={{ rotate: -90 + angle }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>

      {/* Enhanced Score Display */}
      <div className="absolute inset-0 text-center flex flex-col items-center justify-end h-full gap-1 w-full pb-10">
        <p className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
          {boundedScore.toFixed(1)}
        </p>
        <span
          className={\`px-4 py-1 rounded-full text-xs font-medium backdrop-blur-sm \${scoreStatus.className}\`}
        >
          {scoreStatus.text}
        </span>
      </div>
    </div>
  );
};

export default GaugeChart;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GaugeChart score={3.1} min={1.5} max={4} />`
      }
    ]
  }
};
