import React from 'react';

import SideBar from '@/components/side-bar';
import DocumentContentBox from '@/components/document-content-box';

const DocumentationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start pt-[50px] relative px-[50px] overflow-hidden h-screen">
      <SideBar />
      {children}
    </div>
  );
};

export default DocumentationLayout;
