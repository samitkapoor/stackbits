import React from 'react';

import SideBar from '@/components/side-bar';
import SupportPlugin from '@/components/support-plugin';

const DocumentationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start pt-[50px] relative px-[50px] overflow-hidden h-screen">
      <SideBar />
      <div className="flex flex-col w-full lg:flex-row">
        {children}
        <SupportPlugin />
      </div>
    </div>
  );
};

export default DocumentationLayout;
