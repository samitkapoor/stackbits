import { getDocs } from '@/data/main';
import React from 'react';
import ContentTypeWiseComponent from './content-type-wise-component';
import { cn } from '@/lib/utils';

const DocumentContentBox = ({ docId }: { docId: string }) => {
  // ? Get content for that docId
  const doc = getDocs(docId);

  if (!doc) {
    return (
      <div className="max-w-[1000px] w-full">
        Couldn&apos;t find the page you&apos;re looking for.
      </div>
    );
  }

  const { content } = doc;

  const previewSection = content.sections.find((section) => section.sectionType === 'preview');

  return (
    doc && (
      <div className="h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 bg-background overflow-hidden">
        <div className="flex flex-col gap-16 mt-0 relative col-span-1 overflow-y-auto pt-12 pb-32 h-[calc(100vh-50px)]">
          {content.sections.map((section, index) => {
            if (section.sectionType === 'preview') return null;
            return (
              <div
                key={`${section.heading}-${index}-${Date.now().toString()}`}
                className={cn(
                  'flex flex-col gap-0 relative px-9 lg:pl-20 lg:pr-0',
                  'place-self-center w-full'
                )}
              >
                {section.heading && <p className={'font-medium text-lg'}>{section.heading}</p>}
                <ContentTypeWiseComponent section={section} sectionType={section.sectionType} />
              </div>
            );
          })}
        </div>
        <div className="w-full h-[calc(100vh-50px)] p-9 lg:p-4">
          <div className="h-full w-full border border-white/5 bg-[#111111] rounded-xl flex items-center justify-center min-h-[500px] relative overflow-x-hidden">
            {previewSection?.code}
          </div>
        </div>
      </div>
    )
  );
};

export default DocumentContentBox;
