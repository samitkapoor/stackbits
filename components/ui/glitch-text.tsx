import React from 'react';

const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <span className={`glitch ${className}`}>{children}</span>;
};

export default GlitchText;
