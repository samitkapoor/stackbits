'use client';

import React, { useState } from 'react';

import SideBar from '@/components/side-bar';
import MovingBorderButton from '@/components/ui/moving-border-button';
import { Menu, X } from 'lucide-react';

const DocumentationLayout = ({ children }: { children: React.ReactNode }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarIsOpen(!sideBarIsOpen);
  };

  return (
    <div className="flex flex-col w-full h-screen relative">
      <div className={`flex items-start relative h-screen bg-zinc-950`}>
        <SideBar isOpen={sideBarIsOpen} />
        <button
          onClick={toggleSideBar}
          className="lg:hidden absolute top-3 sm:top-4 md:top-6 right-3 z-[1001] rounded-md bg-black h-9 w-9 flex items-center justify-center"
        >
          {sideBarIsOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
        <div className="flex flex-col gap-52 xl:gap-0 xl:flex-row w-full h-screen overflow-y-auto scrollbar-hide relative z-10">
          {/* Side bar button */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;
