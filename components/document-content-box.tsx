import { getDocs } from '@/data/main';
import React from 'react';
import AddressBar from './ui/address-bar';
import ContentTypeWiseComponent from './content-type-wise-component';

const DocumentContentBox = ({ docId }: { docId: string }) => {
  // ? Get content for that docId
  const doc = getDocs(docId);

  if (!doc) {
    return <div className="max-w-[1000px] w-full">Something went wrong.</div>;
  }

  const { sideBar, content } = doc;

  return (
    doc && (
      <div className="h-full w-full">
        <AddressBar sideBarGroup={sideBar.group} name={sideBar.name} />
        <div className="flex flex-col gap-[50px] mt-[30px]">
          {content.sections.map((section) => {
            return (
              <div key={section.heading + Date.now().toString()} className="flex flex-col gap-2">
                <p className={'font-semibold text-2xl'}>{section.heading}</p>
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
