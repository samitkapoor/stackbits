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
    <div className="flex flex-col w-full h-screen relative">
      <div className={`flex items-start relative px-[20px] md:px-[50px] h-screen bg-zinc-950`}>
        <SideBar isOpen={sideBarIsOpen} />
        <MovingBorderButton
          onClick={toggleSideBar}
          wrapperClassName="block lg:hidden w-min absolute top-12 right-4 z-[200] rounded-md"
          className="rounded-md"
        >
          {sideBarIsOpen ? <X size={16} /> : <Menu size={16} />}
        </MovingBorderButton>
        <div className="flex flex-col gap-52 xl:gap-0 xl:flex-row w-full h-screen overflow-y-auto scrollbar-hide relative z-10">
          {/* Side bar button */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;
