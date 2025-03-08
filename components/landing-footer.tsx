'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Mail, Twitter, Instagram, LucideIcon, Code2Icon, Globe } from 'lucide-react';
import ExpandableIconButton from './ui/expandable-icon-button';

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
    className="text-muted-foreground hover:text-foreground transition-colors hover:text-yellow-500"
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
    { href: '/docs/cards', label: 'Cards' },
    { href: '/docs/components', label: 'Components' },
    { href: '/docs', label: 'Documentation' }
  ];

  const socialLinks: SocialLink[] = [
    {
      href: 'https://github.com/samitkapoor',
      icon: <Github />,
      label: 'GitHub',
      className: 'rounded-full p-[16px] text-lg md:text-xl font-medium hover:bg-blue-500'
    },
    {
      href: 'mailto:samitkapoor77@gmail.com',
      icon: <Mail />,
      label: 'Email',
      className: 'rounded-full p-[16px] text-lg md:text-xl font-medium hover:bg-red-500'
    },
    {
      href: 'https://twitter.com/samitkapoorr',
      icon: <Twitter />,
      label: 'Twitter',
      className: 'rounded-full p-[16px] text-lg md:text-xl font-medium hover:bg-blue-500'
    },
    {
      href: 'https://instagram.com/im_samit',
      icon: <Instagram />,
      label: 'Instagram',
      className:
        'rounded-full p-[16px] text-lg md:text-xl font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500'
    },
    {
      href: 'https://samitkapoor.com',
      icon: <Globe />,
      label: 'Website',
      className:
        'rounded-full p-[16px] text-lg md:text-xl font-medium hover:bg-gradient-to-tr hover:from-neutral-400 hover:to-green-500'
    }
  ];

  return (
    <footer className="border-t bg-background text-white/60">
      <div className="container px-4 md:px-6 py-8 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex text-white items-center gap-2">
              <Code2Icon className="w-6 h-6 md:w-8 md:h-8" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">stackbits</h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-xs mb-5">
              Building beautiful interfaces with reusable components, one bit at a time.
            </p>
            <a
              href="https://www.producthunt.com/products/stackbits/reviews?utm_source=badge-product_review&utm_medium=badge&utm_souce=badge-stackbits"
              target="_blank"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1043693&theme=dark"
                alt="StackBits - Full&#0045;stack&#0032;code&#0032;&#0038;&#0032;UI&#0032;components&#0032;for&#0032;react&#0032;&#0038;&#0032;tailwind | Product Hunt"
                style={{ width: '250px', height: '54px' }}
                width="250"
                height="54"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-white">Resources</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map(({ href, label }) => (
                <NavLink key={href} href={href}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 text-white">
            <h3 className="text-base md:text-lg font-semibold">Connect with me</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ href, icon, label, className }, i) => (
                <React.Fragment key={label}>
                  {i === 3 && <div key={`divider-${label}`} className="w-full" />}
                  <ExpandableIconButton
                    onClick={() => (window.location.href = href)}
                    icon={icon}
                    text={label}
                    className={className}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Samit Kapoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
