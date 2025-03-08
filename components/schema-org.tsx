'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

interface SchemaOrgProps {
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl: string;
  logoUrl: string;
  organizationName: string;
  siteUrl: string;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({
  title,
  description,
  imageUrl,
  logoUrl,
  organizationName,
  siteUrl
}) => {
  const pathname = usePathname();
  const pageUrl = `${siteUrl}${pathname}`;

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: title,
    description: description,
    publisher: {
      '@id': `${siteUrl}/#organization`
    }
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: organizationName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 112,
      height: 112
    },
    sameAs: [
      'https://twitter.com/samitkapoorr',
      'https://github.com/samitkapoor',
      'https://www.linkedin.com/in/samit-kapoor/'
    ]
  };

  // WebPage Schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description: description,
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630
    }
  };

  // SoftwareApplication Schema (for your code library)
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'StackBits',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    description:
      'A library of React UI components and full-stack code snippets for web development',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '125'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  );
};

export default SchemaOrg;
