'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import DocumentContentBox from '@/components/document-content-box';
import CategoryPage from '@/components/category-page';
import { categories } from '@/data/main';

const Page = () => {
  const params = useParams();

  return (
    <div id="parent-container" className="h-full w-full px-10">
      {params &&
        params.id &&
        typeof params.id === 'string' &&
        (categories.includes(params.id.toLowerCase()) ? (
          <CategoryPage docId={params.id} />
        ) : (
          <DocumentContentBox docId={params.id} />
        ))}
    </div>
  );
};

export default Page;
