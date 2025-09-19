import CopyTextButton from '@/components/buttons/copy-text-button';
import { Document } from '../main';
import { cnCode, installDependenciesCode } from '@/constants/code';
import { Copy } from 'lucide-react';
import PaginationButton from '@/components/buttons/pagination-button';

export const paginationButtonPreview = (
  <div className="h-full w-full flex items-center justify-center p-5 gap-2">
    <PaginationButton variant="previous">Previous</PaginationButton>
    <PaginationButton variant="next">Next</PaginationButton>
  </div>
);

export const paginationButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Pagination Button',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Pagination Button',
        content:
          'Animated pagination buttons with sliding arrow icons and smooth hover effects. Features previous/next variants with color-coded styling and engaging micro-interactions for enhanced user experience.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="flex gap-4 items-center justify-center">
            <PaginationButton variant="previous">Previous</PaginationButton>
            <PaginationButton variant="next">Next</PaginationButton>
          </div>
        )
      },
      installDependenciesCode({ tailwindcss: true, lucide: true, clsx: true }),
      cnCode,
      {
        heading: 'Pagination Button',
        sectionType: 'component',
        description:
          'Create a file pagination-button.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

interface PaginationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'previous' | 'next';
  children?: React.ReactNode;
  className?: string;
}

const PaginationButton = ({
  variant = 'next',
  children,
  className,
  ...props
}: PaginationButtonProps) => {
  const variantClasses: Record<string, ClassValue> = {
    previous: 'bg-orange-500 flex-row-reverse !pr-3.5',
    next: 'bg-blue-500 !pl-3.5'
  };

  const iconVariantClasses: Record<string, ClassValue> = {
    previous: 'border-orange-400',
    next: 'border-blue-400'
  };

  return (
    <button
      className={cn(
        variantClasses[variant],
        'px-1 py-1 rounded-full flex text-sm items-center gap-2 group hover:gap-2.5 hover:scale-x-105 active:scale-x-95 active:gap-2 transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
      {/* icon */}
      <span
        className={cn(
          iconVariantClasses[variant],
          'border-2 w-7 h-7 flex items-start justify-start rounded-full bg-white text-black overflow-hidden'
        )}
      >
        {variant === 'previous' ? (
          <div className="w-14 h-6 flex items-start justify-start gap-0 group-hover:-translate-x-6 transition-all duration-300 ease-in-out">
            <div className="w-6 h-6 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" strokeWidth={2} />
            </div>
          </div>
        ) : (
          <div className="w-14 h-6 flex items-start justify-start gap-0 -translate-x-6 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
            <div className="w-6 h-6 flex items-center justify-center">
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </div>
          </div>
        )}
      </span>
    </button>
  );
};

export default PaginationButton;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="flex gap-4 items-center justify-center">
    <PaginationButton variant="previous">Previous</PaginationButton>
    <PaginationButton variant="next">Next</PaginationButton>
</div>`
      }
    ]
  }
};
