import React from 'react';

import SideBar from '@/components/side-bar';
import SupportPlugin from '@/components/support-plugin';

const DocumentationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start pt-[50px] relative px-[50px] overflow-y-hidden">
      <SideBar />
      <div className="flex flex-col gap-52 xl:gap-0 xl:flex-row w-full pl-[350px] overflow-y-auto overflow-x-hidden pb-32">
        {children}
        <SupportPlugin />
      </div>
    </div>
  );
};

export default DocumentationLayout;
