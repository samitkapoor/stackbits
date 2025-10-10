import React from 'react';

const PlanetLoader = () => {
  return (
    <div id="planetLoader" className="h-[400px] w-[400px] border">
      <svg viewBox="0 0 100 150">
        <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" fill="gray" />
        <circle cx="10" cy="50" r="10" stroke="white" strokeWidth="1" fill="blue">
          <animate
            attributeName="cx"
            to="90"
            dur="1s"
            id="circle1start"
            begin="planetLoyader.mouseenter"
            fill="freeze"
          />
          <animate
            attributeName="cx"
            to="10"
            dur="1s"
            begin="circle1start.endEvent"
            fill="freeze"
          />
          <animateTransform attributeName="transform" to="0 0 -50" dur="1s" />
        </circle>
        <circle cx="90" cy="50" r="10" stroke="white" strokeWidth="1" fill="red" />
      </svg>
    </div>
  );
};

export default PlanetLoader;
