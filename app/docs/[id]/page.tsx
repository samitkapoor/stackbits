'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import DocumentContentBox from '@/components/document-content-box';
import CategoryPage from '@/components/category-page';
import { categories } from '@/data/main';

const Page = () => {
  const params = useParams();

  return (
    <div className=" w-full px-4 pt-[50px] flex flex-col">
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
