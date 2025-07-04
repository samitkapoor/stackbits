import React from 'react';
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

const GlassGridDemo = ({ isPreview }: { isPreview?: boolean }) => {
  const items = [<PortfolioCard />, <AnalyticsCard />, <ExecutiveCard />];

  return (
    <div className={`gap-4 p-4 w-full max-w-4xl h-[800px] flex items-center justify-center`}>
      <GlassGrid items={items} columns={isPreview ? 1 : 3} />
    </div>
  );
};

export default GlassGridDemo;
