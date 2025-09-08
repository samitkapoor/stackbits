'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import DocumentContentBox from '@/components/document-content-box';
import CategoryPage from '@/components/category-page';
import { categories } from '@/data/main';

const Page = () => {
  const params = useParams();

  return (
    <div className="w-full px-4 pt-4 flex flex-col">
      {params &&
        params.id &&
        typeof params.id === 'string' &&
        (categories.includes(params.id.toLowerCase()) ? (
          <div className="mt-14">
            <CategoryPage docId={params.id} />
          </div>
        ) : (
          <div className="place-self-center h-full flex flex-col w-full mt-8">
            <DocumentContentBox docId={params.id} />
          </div>
        ))}
    </div>
  );
};

export default Page;
