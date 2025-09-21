import React from 'react';
import { cn } from '@/lib/utils';

const StackbitsLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('h-4 w-4 relative', className)}>
      <span
        className={cn(
          'rounded-full h-full w-full bg-gradient-to-b from-orange-400 to-white flex items-center justify-center overflow-hidden'
        )}
      />
      <span
        style={{
          background: 'radial-gradient(circle at bottom right, #0000ff57 40%, transparent)'
        }}
        className={cn(
          'rounded-full h-full w-full flex items-center justify-center overflow-hidden absolute top-0 left-0 z-10'
        )}
      />
    </div>
  );
};

export default StackbitsLogo;
