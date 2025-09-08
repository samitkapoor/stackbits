import TopBar from '@/components/nav/top-bar';
import React from 'react';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};

export default PageLayout;
