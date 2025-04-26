import { Document } from '../main';
import ClothButton from '@/components/ui/cloth-button';

export const clothButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <ClothButton>
      <p>Cloth Button</p>
    </ClothButton>
  </div>
);

export const clothButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Cloth Button',
    order: 2
  },
  content: {
    sections: [
      {
        heading: '🔍 Cloth Button',
        content:
          "Elevate your interface with the Cloth Button, a texture-inspired React component designed for a tactile user experience. Ideal for primary actions, form submissions, or interactive elements, this button enhances visual appeal with its fabric-like appearance—whether it's used for navigation, confirmations, or key user interactions. The subtle textile styling adds dimension and uniqueness to your application.",
        sectionType: 'paragraph'
      },
      {
        heading: 'Meet the Designer',
        sectionType: 'credits',
        description: 'All the design credits goes to',
        designer: [{ name: 'Wow Rakibul', link: 'https://dribbble.com/wowrakibul' }]
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: clothButtonPreview
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i clsx tailwind-merge`
      },
      {
        heading: 'Utils',
        sectionType: 'component',
        description: 'Create a lib/utils.ts file and paste this code',
        code: `import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file cloth-button.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';

type ClothButtonProps = {
  children: React.ReactNode;
  className?: ClassValue;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ClothButton = ({ children, className, ...props }: ClothButtonProps) => {
  return (
    <button
      {...props}
      className={cn('bg-slate-100/95 rounded-full overflow-hidden relative', className)}
    >
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:3px_3px]',
          '[background-image:linear-gradient(45deg,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(135deg,rgba(255,255,255,0.4)_1px,transparent_1px)]'
        )}
        style={{
          transformOrigin: 'center center'
        }}
      />

      <div
        className={cn(
          'absolute inset-0',
          '[background-size:3px_3px]',
          '[background-image:linear-gradient(45deg,transparent_45%,rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.1)_55%,transparent_55%),linear-gradient(135deg,transparent_45%,rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.1)_55%,transparent_55%)]'
        )}
        style={{
          transformOrigin: 'center center'
        }}
      />

      <div
        className={cn(
          'absolute inset-0',
          '[background-size:6px_6px]',
          '[background-image:radial-gradient(circle,rgba(255,255,255,1)_0.3px,transparent_0.2px)]'
        )}
      />

      <div
        className={cn(
          'absolute inset-0',
          '[background-size:3px_3px]',
          '[background-image:radial-gradient(circle,rgba(0,0,0,0.3)_0.3px,transparent_0.2px)]'
        )}
      />

      <div
        style={{
          boxShadow: 'inset 0px 0px 4px 1px rgba(0, 0, 0, 1)'
        }}
        className="absolute inset-0 rounded-full"
      />

      <div
        className={cn(
          'm-0.5 px-6 py-3 rounded-full relative overflow-hidden',
          'group hover:shadow-black/50 hover:shadow-md transition-all duration-200'
        )}
      >
        <div
          className={cn(
            'absolute inset-0',
            '[background-size:3px_3px]',
            '[background-image:linear-gradient(45deg,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(135deg,rgba(255,255,255,0.4)_1px,transparent_1px)]'
          )}
          style={{
            transformOrigin: 'center center'
          }}
        />

        <div
          className={cn(
            'absolute inset-0',
            '[background-size:3px_3px]',
            '[background-image:linear-gradient(45deg,transparent_45%,rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.1)_55%,transparent_55%),linear-gradient(135deg,transparent_45%,rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.1)_55%,transparent_55%)]'
          )}
          style={{
            transformOrigin: 'center center'
          }}
        />

        <div
          className={cn(
            'absolute inset-0',
            '[background-size:6px_6px]',
            '[background-image:radial-gradient(circle,rgba(255,255,255,1)_0.3px,transparent_0.2px)]'
          )}
        />

        <div
          className={cn(
            'absolute inset-0',
            '[background-size:3px_3px]',
            '[background-image:radial-gradient(circle,rgba(0,0,0,0.3)_0.3px,transparent_0.2px)]'
          )}
        />

        <div className="absolute inset-0 rounded-full shadow-inner shadow-black/30 border-[1px] border-transparent border-dashed group-hover:border-white/10 group-hover:shadow-white/40 group-active:shadow-black transition-all duration-200 bg-gradient-to-r from-[#111e29]/60 to-[#041624]/60" />

        <div className="absolute inset-0 rounded-full border-[1px] border-dashed border-white/10" />

        <div className="relative inline-block ">
          <div
            style={{
              textShadow: '0px 0.5px 1px rgba(0, 0, 0, 1)',
              color: 'rgba(50, 50, 50, 0.9)',
              position: 'absolute',
              filter: 'blur(0.5px)',
              top: '1px',
              left: '0px',
              zIndex: 1
            }}
            className="font-semibold"
          >
            {children}
          </div>

          <div
            style={{
              position: 'absolute',
              top: '-0.5px',
              left: '0.1px',
              zIndex: 2
            }}
            className="text-white/50 font-semibold whitespace-nowrap"
          >
            {children}
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 3
            }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-[#d7e3ef] via-[#6E818F] to-[#4e606e] font-semibold"
          >
            {children}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ClothButton;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ClothButton>
  <p>Cloth Button</p>
</ClothButton>`
      }
    ]
  }
};
