'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Mail, Twitter, Instagram, LucideIcon, Code2Icon, Globe } from 'lucide-react';
import Image from 'next/image';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface NavigationLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

// Navigation link component for DRY code
const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="text-muted-foreground hover:text-foreground text-sm transition-colors hover:text-white"
  >
    {children}
  </Link>
);

// Social media link component for DRY code
const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 flex items-center justify-center rounded-full bg-muted hover:bg-muted-foreground/10 transition-colors"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{label}</span>
  </a>
);

const LandingFooter = () => {
  const navigationLinks: NavigationLink[] = [
    { href: '/docs/texts', label: 'Texts' },
    { href: '/docs/backgrounds', label: 'Backgrounds' },
    { href: '/docs/buttons', label: 'Buttons' },
    // { href: '/docs/cards', label: 'Cards' },
    { href: '/docs/components', label: 'Components' },
    { href: '/docs', label: 'Documentation' },
    { href: '/terms-of-usage', label: 'Terms of Usage' }
  ];

  const socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/samitkapoor',
      icon: <Github size={16} />,
      label: 'GitHub',
      className: 'rounded-full p-[10px] font-medium hover:bg-blue-500'
    },
    {
      href: 'mailto:samitkapoor77@gmail.com',
      icon: <Mail size={16} />,
      label: 'Email',
      className: 'rounded-full p-[10px] font-medium hover:bg-red-500'
    },
    {
      href: 'https://twitter.com/samitkapoorr',
      icon: <Twitter size={16} />,
      label: 'Twitter',
      className: 'rounded-full p-[10px] font-medium hover:bg-blue-500'
    },
    {
      href: 'https://instagram.com/im_samit',
      icon: <Instagram size={16} />,
      label: 'Instagram',
      className:
        'rounded-full p-[10px] font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500'
    },
    {
      href: 'https://samitkapoor.com',
      icon: <Globe size={16} />,
      label: 'Website',
      className:
        'rounded-full p-[10px] font-medium hover:bg-gradient-to-tr hover:from-neutral-400 hover:to-green-500'
    },
    {
      href: 'https://peerlist.io/samitkapoor',
      icon: (
        <div className="w-[16px] h-[16px]">
          <Image
            src="/peerlist.svg"
            alt="Peerlist"
            width={24}
            height={24}
            className="w-full h-full"
          />
        </div>
      ),
      label: 'Peerlist',
      className: 'rounded-full p-[10px] font-medium hover:bg-[#05AA44]'
    }
  ];

  return (
    <footer className="bg-black text-white/60">
      <div className="container px-4 md:px-6 py-8 md:py-16 w-full mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex text-white items-center gap-2">
              <Code2Icon className="w-6 h-6" />
              <h2 className="text-xl font-medium">StackBits</h2>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground my-3">
              Building beautiful interfaces with reusable components, one bit at a time.
            </p>
          </div>

          <div className="flex items-start md:justify-end gap-16 w-full flex-1'">
            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-base font-medium text-white/90">Resources</h3>
              <nav className="flex flex-col space-y-2">
                {navigationLinks.map(({ href, label }) => (
                  <NavLink key={href} href={href}>
                    {label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Contact Section */}
            <div className="space-y-2 text-white/90">
              <h3 className="text-base font-medium">Connect with me</h3>
              <div className="flex flex-wrap -translate-x-[6px]">
                {socialLinks.map(({ href, icon, label, className }) => (
                  <React.Fragment key={label}>
                    <button onClick={() => (window.location.href = href)} className={className}>
                      {icon}
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-xs text-muted-foreground text-left">
            © {new Date().getFullYear()} Samit Kapoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
