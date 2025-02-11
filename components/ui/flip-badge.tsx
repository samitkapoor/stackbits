import React from 'react';

const FlipBadge = ({
  frontContent,
  backContent
}: {
  // * Remove these data types for javascript
  frontContent?: string | React.ReactNode;
  backContent?: string | React.ReactNode;
  // * ----
}) => {
  return (
    <div className="relative h-[200px] w-[200px] rounded-full" style={{ perspective: '1000px' }}>
      <div className="flip h-full w-full rounded-full relative">
        {/* Front Side */}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-neutral-100 rounded-full"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          {frontContent}
        </div>

        {/* Back Side*/}
        <div
          className="h-full w-full absolute top-0 left-0 flex items-center justify-center bg-neutral-700 rounded-full flip-back"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipBadge;
