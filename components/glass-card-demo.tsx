import React from 'react';
import GlassCard from './ui/glass-card';

const weatherData = [
  { temp: '15°C', condition: '☁️ Cloudy', bg: 'from-[#64748B50] to-[#94A3B850]' },
  { temp: '22°C', condition: '☀️ Sunny', bg: 'from-[#FACC1550] to-[#FDE04750]' },
  { temp: '18°C', condition: '🌧️ Rainy', bg: 'from-[#3B82F650] to-[#60A5FA50]' },
  { temp: '1°C', condition: '❄️ Snowy', bg: 'from-[#93C5FD50] to-[#E0F2FE50]' }
];

const GlassCardDemo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full max-w-lg mx-auto">
      {weatherData.map((weather, index) => (
        <GlassCard
          key={index}
          className={`flex flex-col items-center justify-center p-6 text-white text-xl font-semibold tracking-wider bg-gradient-to-tr ${weather.bg} transition-transform duration-300 hover:scale-105`}
        >
          <span className="text-2xl">{weather.condition}</span>
          <span className="ml-2 mt-2 text-lg">{weather.temp}</span>
        </GlassCard>
      ))}
    </div>
  );
};

export default GlassCardDemo;
