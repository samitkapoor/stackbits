import React, { useState, useEffect } from 'react';
import GlassCard from './ui/glass-card';

const GlassCardDemo = () => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GlassCard className="flex flex-col items-center justify-center p-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-widest">
      {time}
    </GlassCard>
  );
};

export default GlassCardDemo;
