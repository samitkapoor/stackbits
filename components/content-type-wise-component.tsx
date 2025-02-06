import React from 'react';

const ContentTypeWiseComponent = ({
  section,
  contentType
}: {
  section: any;
  contentType: string;
}) => {
  const { content } = section;

  if (contentType === 'paragraph') {
    return <p className="max-w-[800px]">{content}</p>;
  } else if (contentType === 'ordered-list') {
    return (
      <div className="flex flex-col gap-8 mt-4">
        {content.map((item: { id: number; heading: string; content: string }, i: number) => {
          const { id, heading, content } = item;
          return (
            <div key={item.heading + i} className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-[20px]">
                <div className="border-[1px] rounded-full h-[25px] w-[25px] text-center flex items-center justify-center select-none hover:border-yellow-400 hover:text-yellow-400 transition-all">
                  {id}
                </div>
                <p className="font-semibold text-yellow-400">{heading}</p>
              </div>
              <div className="flex text-sm flex-col gap-2 ml-[47px]">
                <p>{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (contentType === 'stepper') {
    return (
      <div className="flex items-center gap-2 mt-5 w-full">
        {content.map((item: { id: string; heading: string; content: string }, i: number) => {
          const { id, heading, content: itemContent } = item;

          return (
            <div className="flex items-center gap-2" key={heading + itemContent}>
              <div className="flex flex-col max-w-[200px] w-full items-center justify-center">
                <div className="border-[1px] rounded-full h-[25px] w-[25px] text-center flex items-center justify-center select-none hover:border-yellow-400 hover:text-yellow-400 transition-all">
                  {id}
                </div>
                <p className="font-medium text-yellow-400">{heading}</p>
                <p className="text-xs text-center">{itemContent}</p>
              </div>
              {i < content.length - 1 && <div className="h-[1px] w-[150px] bg-white" />}
            </div>
          );
        })}
      </div>
    );
  } else if (contentType === 'italic-line') {
    const { sentence } = section;

    return <p className="text-yellow-400 italic text-sm">{sentence}</p>;
  } else {
    console.log({ contentType, content });
    return <div></div>;
  }
};

export default ContentTypeWiseComponent;
