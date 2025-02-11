import React from 'react';

const StoryAvatar = ({
  children,
  spin = false, // * true value would make the background gradient spin
  flicker = false, // * true value would add a neon glowing shadow flicker effect
  backgroundClassName,
  wrapperClassName,
  className
}: {
  // * Remove these data types for javascript
  children?: React.ReactNode;
  spin?: boolean;
  flicker?: boolean;
  backgroundClassName?: string;
  wrapperClassName?: string;
  className?: string;
  // * ----
}) => {
  return (
    // * wrapper div
    <div
      className={`rounded-full overflow-hidden p-[5px] flex items-center justify-center relative ${wrapperClassName} ${
        flicker && 'flicker'
      }`}
    >
      {/* background gradient div */}
      <div
        className={`rounded-full ${
          spin && 'spin'
        } overflow-hidden bg-gradient-to-br from-orange-400 to-pink-800 h-full w-full absolute z-0 ${backgroundClassName}`}
      />
      {/* your component wrapper div */}
      <div className={`rounded-full overflow-hidden border-[1px] border-black z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default StoryAvatar;
