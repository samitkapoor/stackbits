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
        {/* Balanced premium background elements */}
        <div className="absolute inset-0 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-950 pointer-events-none z-0"></div>

        {/* Balanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neutral-900/30 to-neutral-950 pointer-events-none z-0"></div>

        {/* Subtle spotlight in top-left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Subtle spotlight in bottom-right for balance */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/5 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Tech-inspired grid pattern */}
        <div className="absolute inset-0 bg-[url('/mesh-pattern.svg')] bg-repeat opacity-60 mix-blend-soft-light pointer-events-none z-0"></div>

        {/* Gentle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8))] pointer-events-none z-0"></div>

        {/* Bottom gradient accent */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neutral-900/25 to-transparent pointer-events-none z-0"></div>

        <SideBar isOpen={sideBarIsOpen} />
        <div className="flex flex-col gap-52 xl:gap-0 xl:flex-row w-full h-screen overflow-y-auto scrollbar-hide relative z-10">
          {/* Side bar button */}
          <MovingBorderButton
            onClick={toggleSideBar}
            wrapperClassName="block lg:hidden w-min absolute top-32 right-[50px] z-50"
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
