'use client';

import React, { useState } from 'react';

import SideBar from '@/components/nav/side-bar';
import TopBar from '@/components/nav/top-bar';

const DocumentationLayout = ({ children }: { children: React.ReactNode }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen relative">
      <TopBar sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />
      <div className={`flex items-start relative h-screen bg-zinc-950`}>
        <SideBar isOpen={sideBarIsOpen} setIsOpen={setSideBarIsOpen} />
        <div className="flex flex-col gap-52 xl:gap-0 xl:flex-row w-full h-screen overflow-y-auto scrollbar-hide relative z-10">
          {/* Side bar button */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;
