'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import DocumentContentBox from '@/components/document-content-box';

const Page = () => {
  const params = useParams();

  if (params && params.id && typeof params.id === 'string')
    return <DocumentContentBox docId={params.id} />;
};

export default Page;
