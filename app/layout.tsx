import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/top-bar';
import SchemaOrgWrapper from '@/components/schema-org-wrapper';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

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
    images: 'https://stackbits.dev/stackbits-logo.png'
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
        <Analytics />

        <SchemaOrgWrapper />
      </head>
      <body
        className={`${inter.className} antialiased text-white bg-black overflow-x-hidden relative scrollbar-hide`}
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}
