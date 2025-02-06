import { getDocs } from '@/data/main';
import React from 'react';

const DocumentContentBox = ({ docId }: { docId: string }) => {
  // ? Get content for that docId
  const doc = getDocs(docId);

  console.log(doc);

  return (
    <div className="max-w-[1000px] overflow-y-auto w-full border-2 h-full ml-[350px]">{docId} </div>
  );
};

export default DocumentContentBox;
