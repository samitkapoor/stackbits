import type { Metadata } from 'next';
import Clarity from '@microsoft/clarity';
import './globals.css';
import ContactMe from '@/components/contact-me';
import TopBar from '@/components/top-bar';
import SchemaOrgWrapper from '@/components/schema-org-wrapper';

Clarity.init('qrkwcfhjk3');

export const metadata: Metadata = {
  title: 'StackBits - React UI & Full-Stack Code Library',
  description:
    'Ready-to-use React components, Tailwind UI elements, and full-stack code snippets to accelerate your web development. Build modern apps faster with StackBits.',
  keywords: [
    'React components',
    'Tailwind CSS',
    'Next.js UI library',
    'full-stack snippets',
    'frontend components',
    'backend snippets',
    'Node.js utilities',
    'authentication snippets',
    'React UI kit',
    'web development',
    'StackBits',
    'best React components'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'StackBits - React UI & Full-Stack Code Library',
    description:
      'Ready-to-use React components, Tailwind UI elements, and full-stack code snippets to accelerate your web development. Build modern apps faster with StackBits.',
    url: 'https://stackbits.dev',
    siteName: 'StackBits',
    images: [
      {
        url: 'https://stackbits.dev/stackbits-logo.png',
        width: 1200,
        height: 630,
        alt: 'StackBits - Full-Stack Code & UI Components'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@samitkapoorr',
    title: 'StackBits - React UI & Full-Stack Code Library',
    description:
      'Ready-to-use React components, Tailwind UI elements, and full-stack code snippets to accelerate your web development. Build modern apps faster with StackBits.',
    images: ['https://pbs.twimg.com/profile_images/1891031509236109312/-m7SP1ag_400x400.jpg']
  },
  alternates: {
    canonical: 'https://stackbits.dev'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/stackbits-favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://script.refix.ai/script.min.js"
          type="text/javascript"
          data-refix-token="21e99321-89fd-4286-9d23-1d9c70fabbd8"
          defer
        ></script>

        <SchemaOrgWrapper />
      </head>
      <body
        className={`font-poppins antialiased text-white bg-black overflow-x-hidden relative scrollbar-hide`}
      >
        <TopBar />
        {children}
        <ContactMe />
      </body>
    </html>
  );
}
