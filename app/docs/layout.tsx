'use client';

import React, { useState } from 'react';

import SideBar from '@/components/side-bar';
import SupportPlugin from '@/components/support-plugin';
import MovingBorderButton from '@/components/ui/moving-border-button';
import { Menu, X } from 'lucide-react';

const DocumentationLayout = ({ children }: { children: React.ReactNode }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <div className="flex flex-col w-full h-screen relative pt-[100px]">
      <div className={`flex items-start bg-black relative px-[20px] md:px-[50px] h-screen`}>
        <SideBar isOpen={sideBarIsOpen} />
        <div className="flex flex-col gap-52 xl:gap-0 xl:flex-row w-full h-screen overflow-y-auto scrollbar-hide">
          {/* Side bar button */}
          <MovingBorderButton
            onClick={toggleSideBar}
            wrapperClassName="block lg:hidden w-min absolute top-[10px] right-[20px] z-50"
          >
            {sideBarIsOpen ? <X /> : <Menu />}
          </MovingBorderButton>
          {children}
          <SupportPlugin />
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;
