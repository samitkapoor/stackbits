import React from 'react';
import FlickerBox from './ui/flicker-box';

const FlickerBoxDemo = () => {
  const commands = [
    'ls -la',
    'cd /var/www',
    'git pull origin main',
    'npm install',
    'npm run build'
  ];
  return (
    <FlickerBox className="flex rounded-xl flex-col items-start justify-start p-5 max-w-[310px] w-full">
      <p className="text-lg">
        <span className="text-blue-500 font-bold">{'>'} Terminal</span>
      </p>
      <div className="w-full h-[2px] bg-blue-500 mt-0 mb-2"></div>
      <div className="flex flex-col gap-1">
        {commands.map((cmd, i) => {
          return (
            <div key={i} className="flex items-center gap-2">
              <span className="font-bold text-blue-400">{'>'}</span> {cmd}
            </div>
          );
        })}
      </div>
    </FlickerBox>
  );
};

export default FlickerBoxDemo;
