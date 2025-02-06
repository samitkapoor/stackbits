import { getDocs } from '@/data/main';
import React from 'react';
import AddressBar from './ui/address-bar';
import ContentTypeWiseComponent from './content-type-wise-component';

const DocumentContentBox = ({ docId }: { docId: string }) => {
  // ? Get content for that docId
  const doc = getDocs(docId);

  if (!doc) {
    return (
      <div className="max-w-[1000px] overflow-y-auto w-full h-full ml-[350px]">
        Something went wrong.
      </div>
    );
  }

  const { sideBar, content } = doc;

  console.log(content);

  return (
    doc && (
      <div className="max-w-[1000px] overflow-y-auto w-full h-full ml-[350px]">
        <AddressBar sideBarGroup={sideBar.group} name={sideBar.name} />
        <div className="h-[30px]"></div>
        <div className="flex flex-col gap-[50px]">
          {content.sections.map((section, i) => {
            return (
              <div key={section.heading} className="flex flex-col gap-2">
                <p className="font-semibold text-xl">{section.heading}</p>
                <ContentTypeWiseComponent
                  content={section.content}
                  contentType={section.contentType}
                />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default DocumentContentBox;
