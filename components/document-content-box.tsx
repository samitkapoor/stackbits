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

  return (
    doc && (
      <div className="h-full w-full">
        <div className="flex flex-col gap-16 mt-0 relative">
          {content.sections.map((section, index) => {
            if (index === 0) console.log(section);
            return (
              <div
                key={`${section.heading}-${index}-${Date.now().toString()}`}
                className={cn(
                  'flex flex-col gap-0 relative',
                  section.sectionType === 'name' && 'absolute top-10 left-10 z-10 pr-10'
                )}
              >
                {section.heading && <p className={'font-medium text-lg'}>{section.heading}</p>}
                <ContentTypeWiseComponent section={section} sectionType={section.sectionType} />
              </div>
            );
          })}
        </div>
        <div className="p-36"></div>
      </div>
    )
  );
};

export default DocumentContentBox;
