'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import DocumentContentBox from '@/components/document-content-box';

const Page = () => {
  const params = useParams();
  const { id: docId } = params;

  if (docId && typeof docId === 'string') return <DocumentContentBox docId={docId} />;
};

export default Page;
