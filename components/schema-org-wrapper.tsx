'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the client component with no SSR
const SchemaOrg = dynamic(() => import('./schema-org'), { ssr: false });

export default function SchemaOrgWrapper() {
  return (
    <SchemaOrg
      title="StackBits - React UI & Full-Stack Code Library"
      description="Ready-to-use React components, Tailwind UI elements, and full-stack code snippets to accelerate your web development. Build modern apps faster with StackBits."
      canonicalUrl="https://stackbits.dev"
      imageUrl="https://stackbits.dev/stackbits-logo.png"
      logoUrl="https://stackbits.dev/stackbits-favicon.png"
      organizationName="StackBits"
      siteUrl="https://stackbits.dev"
    />
  );
}
