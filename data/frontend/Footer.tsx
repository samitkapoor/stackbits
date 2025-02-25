import Image from 'next/image';
import { Document } from '../main';
import Footer from '@/components/ui/footer';

export const footerPreview = (
  <div className="gap-2 scale-10 h-full w-full">
    <Image
      src="/footer.png"
      alt="footer"
      width={500}
      height={500}
      className="w-full h-full object-cover"
    />
  </div>
);

export const footer: Document = {
  sideBar: {
    group: 'Components',
    name: 'Footer',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'Footer',
        content:
          'A Footer is like the trusty sidekick of your website—it’s always there at the bottom, ready to help! Packed with important links, handy info, and quick navigation, it’s the go-to spot for users to find what they need. Think of it as the backstage pass to your site’s essentials! 🚀',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <Footer />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file footer.tsx in your components folder and paste this code',
        code: `import React from 'react';
import Image from 'next/image';

/**
 * Footer component containing site navigation, email subscription, and company information
 * Displays a responsive grid layout with multiple sections that adapts to different screen sizes
 */
const Footer = () => {
  // Navigation items organized by category
  const productLinks = [
    'UI Components',
    'Backend Utilities',
    'Authentication Snippets',
    'Database Helpers',
    'API Endpoints'
  ];

  const helpLinks = ['How to Use StackBits', 'Report an Issue', 'Request a Feature', 'FAQs'];

  const companyLinks = ['About StackBits', 'News', 'Careers', 'Contact Us', 'Terms & Conditions'];

  // Helper function to render navigation lists
  const renderNavList = (title: string, items: string[]) => (
    <div className="w-full sm:w-auto">
      <h3 className="font-medium text-base sm:text-lg mb-3 sm:mb-4">{title}</h3>
      <ul className="flex flex-col gap-2 text-gray-400">
        {items.map((item) => (
          <li
            key={item}
            className="cursor-pointer hover:text-white transition-colors text-sm sm:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between">
        {/* Logo and email subscription section */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-auto lg:max-w-sm">
          <Image
            src="/stackbits-logo.png"
            alt="boAt"
            width={120}
            height={40}
            priority // Logo should load first
            className="w-24 sm:w-28 lg:w-32"
          />
          <p className="text-gray-400 text-sm sm:text-base">
            Subscribe to email alerts. We promise not to spam your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/10 px-4 py-2 rounded-lg w-full sm:w-auto"
              aria-label="Email subscription input"
            />
            <button
              className="bg-red-500 px-6 py-2 rounded-lg font-medium whitespace-nowrap"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Navigation grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
          {renderNavList('Products', productLinks)}
          {renderNavList('Help', helpLinks)}
          {renderNavList('Company', companyLinks)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<Footer />`
      }
    ]
  }
};
