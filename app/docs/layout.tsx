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
    <div className="flex items-start bg-black pt-[50px] relative px-[50px] overflow-y-auto h-screen">
      <SideBar isOpen={sideBarIsOpen} />
      <div className="flex flex-col gap-52 xl:gap-0 xl:flex-row w-full lg:pl-[350px] pb-32">
        <MovingBorderButton
          onClick={toggleSideBar}
          wrapperClassName="block lg:hidden w-min absolute top-[50px] right-[50px]"
        >
          {sideBarIsOpen ? <X /> : <Menu />}
        </MovingBorderButton>
        {children}
        <SupportPlugin />
      </div>
    </div>
  );
};

export default DocumentationLayout;
