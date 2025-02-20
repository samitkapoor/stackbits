'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import DocumentContentBox from '@/components/document-content-box';
import CategoryPage from '@/components/category-page';
import { categories } from '@/data/main';

const Page = () => {
  const params = useParams();

  if (
    params &&
    params.id &&
    typeof params.id === 'string' &&
    categories.includes(params.id.toLowerCase())
  ) {
    return <CategoryPage docId={params.id} />;
  } else if (params && params.id && typeof params.id === 'string') {
    return <DocumentContentBox docId={params.id} />;
  }
};

export default Page;
