import React from 'react';

const StoryAvatar = ({
  children,
  spin = false,
  flicker = false,
  backgroundClassName,
  wrapperClassName,
  className
}: {
  children?: React.ReactNode;
  spin?: boolean;
  flicker?: boolean;
  backgroundClassName?: string;
  wrapperClassName?: string;
  className?: string;
}) => {
  return (
    <div
      className={`rounded-full overflow-hidden p-[5px] flex items-center justify-center relative ${wrapperClassName} ${
        flicker && 'flicker'
      }`}
    >
      <div
        className={`rounded-full ${
          spin && 'spin'
        } overflow-hidden bg-gradient-to-br from-orange-400 to-pink-800 h-full w-full absolute z-0 ${backgroundClassName}`}
      />
      <div className={`rounded-full overflow-hidden border-[1px] border-black z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default StoryAvatar;
