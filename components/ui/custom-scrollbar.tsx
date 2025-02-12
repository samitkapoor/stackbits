import React, { ReactNode } from 'react';

type CustomScrollbarProps = {
  children?: ReactNode;
  className?: string;
};

const CustomScrollbar = ({ children, className }: CustomScrollbarProps) => {
  return <div className={`custom-scrollbar ${className} overflow-y-auto`}>{children}</div>;
};

export default CustomScrollbar;
