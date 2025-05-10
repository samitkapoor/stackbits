'use client';

import { motion } from 'framer-motion';
import { FolderKanban, Mail, Newspaper, Skull, User } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const NavBar = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const navItems = [
    {
      name: 'About',
      icon: <User className="w-4 h-4" />
    },
    {
      name: 'Projects',
      icon: <FolderKanban className="w-4 h-4" />
    },
    {
      name: 'Skills',
      icon: <Skull className="w-4 h-4" />
    },
    {
      name: 'Articles',
      icon: <Newspaper className="w-4 h-4" />
    },
    {
      name: 'Contact',
      icon: <Mail className="w-4 h-4" />
    }
  ];

  return (
    <div className="fixed top-12  left-1/2 -translate-x-1/2 w-full max-w-2xl rounded-full z-50 px-1">
      <div
        style={{
          background:
            'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet, red)'
        }}
        className="absolute top-0 left-0 w-full h-full rounded-full z-0 blur-xl opacity-90"
      />
      <div className="relative p-1 w-full">
        <div className="absolute top-0 left-0 w-full h-full rounded-full blur-xl backdrop-blur-xl bg-white/5 z-0" />
        <div className="px-6 rounded-full bg-black z-10 relative flex items-center justify-between h-full">
          <div className="w-[100px] sm:w-[120px] absolute left-6 h-full">
            <Image
              src="/stackbits-logo.png"
              alt="logo"
              fill
              className="h-full w-full object-contain"
            />
          </div>
          <ul className="flex py-4 items-center w-full justify-end">
            {navItems.map((item) => {
              return (
                <li
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                  key={`nav-item-${item.name}`}
                  className="flex items-center gap-1 p-2 opacity-50 hover:opacity-100 transition-all duration-150 cursor-pointer relative"
                  onClick={() => {}}
                >
                  <div className="relative z-10">{item.icon}</div>
                  <p className="text-sm hidden sm:block z-10 relative">{item.name}</p>

                  {hovered === item.name && (
                    <motion.div
                      layout
                      layoutId="nav-bar-highlight"
                      transition={{
                        duration: 0.2
                      }}
                      className="absolute top-0 left-0 w-full h-full bg-white/10 z-0 rounded-lg"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
