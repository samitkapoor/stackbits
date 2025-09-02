'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import DocumentContentBox from '@/components/document-content-box';
import CategoryPage from '@/components/category-page';
import { categories } from '@/data/main';

const Page = () => {
  const params = useParams();

  return (
    <div className="w-full px-4 pt-4 flex flex-col mt-14">
      {params &&
        params.id &&
        typeof params.id === 'string' &&
        (categories.includes(params.id.toLowerCase()) ? (
          <CategoryPage docId={params.id} />
        ) : (
          <div className="max-w-3xl place-self-start h-full flex flex-col">
            <DocumentContentBox docId={params.id} />
          </div>
        ))}
    </div>
  );
};

export default Page;
