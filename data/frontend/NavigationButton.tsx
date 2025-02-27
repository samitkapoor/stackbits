import { Document } from '../main';
import NavigationButton from '@/components/ui/navigation-button';

export const navigationButtonPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2">
    <NavigationButton
      href="https://x.com/intent/post?text=I%20love%20stackbits!"
      target="_blank"
      className="text-lg md:text-xl font-medium rounded-xl !px-5 sm:!px-10 py-4"
    >
      Open
    </NavigationButton>
  </div>
);

export const navigationButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Navigation Button',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'Navigation Button',
        content:
          'A navigation button is an interactive UI element that allows users to move between different sections or pages of a website or application. It enhances user experience by providing quick and intuitive access to essential features or destinations.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: navigationButtonPreview
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file navigation-button.tsx in your components folder and paste this code',
        code: `import React from 'react';
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
      className={\`w-min inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gray-900 border border-gray-700 shadow-lg transition-all duration-200 ease-in-out hover:bg-gray-800 active:scale-95 focus:outline-none \${className}\`}
    >
      {children}
      {icon || <ArrowUpRight size={20} />}
    </a>
  );
};

export default NavigationButton;

        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<NavigationButton
  href="your_link_here"
  target="_blank"
  className="text-lg md:text-xl font-medium rounded-xl !px-5 sm:!px-10 py-4"
>
  Continue
</NavigationButton>`
      }
    ]
  }
};
