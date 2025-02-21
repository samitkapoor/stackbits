import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  className?: string;
  icon?: React.ReactNode;
}

const NavigationButton: React.FC<ButtonProps> = ({
  children,
  href,
  target = '_self',
  className,
  icon
}) => {
  return (
    <a
      href={href}
      target={target}
      className={`w-min inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gray-900 border border-gray-700 shadow-lg transition-all duration-200 ease-in-out hover:bg-gray-800 active:scale-95 focus:outline-none ${className}`}
    >
      {children}
      {icon || <ArrowUpRight size={20} />}
    </a>
  );
};

export default NavigationButton;
