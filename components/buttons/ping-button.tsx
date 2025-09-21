import { cn } from '@/lib/utils';
import React from 'react';

interface PingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ping: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const PingButton = ({ ping, className, children, ...props }: PingButtonProps) => {
  return (
    <button
      className={cn(
        'bg-zinc-800 px-4 py-2 hover:gap-3 active:gap-2 text-sm sm:text-base transition-all duration-200 font-medium text-white rounded-xl flex items-center gap-2 hover:bg-zinc-700',
        className
      )}
      {...props}
    >
      <span className="relative h-3 w-3">
        <div className="absolute inset-0 h-3 w-3">{ping}</div>
        <div className="absolute inset-0 h-3 w-3 animate-ping">{ping}</div>
      </span>
      {children}
    </button>
  );
};

export default PingButton;
