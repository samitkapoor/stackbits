import React from 'react';

type BrowserWindowProps = {
  children: React.ReactNode;
  url?: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
} & React.HTMLAttributes<HTMLDivElement>;

const BrowserWindow: React.FC<BrowserWindowProps> = ({
  children,
  url,
  className,
  ref,
  ...props
}) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-between rounded-lg overflow-hidden border border-neutral-700 shadow-lg bg-neutral-900/60 h-full w-full relative mx-2 ${className}`}
      style={{ minWidth: '350px', minHeight: '600px' }}
      {...props}
    >
      {/* Browser Header */}
      <div className="flex items-center px-4 py-2 bg-neutral-800 border-b border-neutral-700 w-full">
        {/* Traffic Light Buttons */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* URL Bar (optional, for decoration) */}
        <div className="flex-1 mx-4">
          <div className="h-6 bg-neutral-600 rounded-md w-full flex items-center justify-center">
            <p className="text-xs text-neutral-300">{url}</p>
          </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="w-full flex-1 p-2 flex items-center justify-center">{children}</div>
    </div>
  );
};

export default BrowserWindow;
