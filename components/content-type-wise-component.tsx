'use client';

import React, { useState } from 'react';

import { SectionInDocument } from '@/data/main';
import { CodeBlock } from 'react-code-block';
import { Check, Copy } from 'lucide-react';

const ContentTypeWiseComponent = ({
  section,
  sectionType
}: {
  section: SectionInDocument;
  sectionType: string;
}) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 500);
  };

  const { content, code } = section;

  if (sectionType === 'paragraph' && typeof content === 'string') {
    return <p className="max-w-[800px] text-sm md:text-[16px]">{content}</p>;
  } else if (sectionType === 'ordered-list' && typeof content === 'object') {
    return (
      <div className="flex flex-col gap-8 mt-4">
        {content.map((item: { id: number; heading: string; content: string }, i: number) => {
          const { id, heading, content } = item;
          return (
            <div key={item.heading + i} className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-[14px] sm:gap-[20px]">
                <div className="border-[1px] rounded-full h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-center flex items-center justify-center select-none hover:border-yellow-400 hover:text-yellow-400 transition-all text-sm md:text-[16px]">
                  {id}
                </div>
                <p className="font-semibold text-sm md:text-[16px] text-yellow-400">{heading}</p>
              </div>
              <div className="flex text-sm flex-col gap-2 ml-[33px] sm:ml-[47px]">
                <p>{content}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (sectionType === 'stepper' && typeof content === 'object') {
    return (
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-2 mt-5 w-full">
        {content.map((item, i: number) => {
          const { id, heading, content: itemContent } = item;

          return (
            <div className="flex items-center gap-2" key={heading + itemContent}>
              <div className="flex flex-col max-w-[200px] w-full items-center justify-center">
                <div className="border-[1px] rounded-full h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-center flex items-center justify-center select-none hover:border-yellow-400 hover:text-yellow-400 transition-all">
                  {id}
                </div>
                <p className="font-medium text-sm sm:text-[16px] text-yellow-400 text-center">
                  {heading}
                </p>
                <p className="text-xs text-center">{itemContent}</p>
              </div>
              {i < content.length - 1 && (
                <div className="h-[1px] w-[150px] bg-white hidden md:block" />
              )}
            </div>
          );
        })}
      </div>
    );
  } else if (sectionType === 'italic-line' && typeof content === 'object') {
    const { sentence } = section;

    return <p className="text-yellow-400 italic text-sm">{sentence}</p>;
  } else if (sectionType === 'preview') {
    return (
      <div className="h-[500px] max-w-[700px] rounded-lg border-[2px] border-[#2f2f2fdf] flex items-start justify-start overflow-x-hidden relative">
        {code}
      </div>
    );
  } else if (sectionType === 'heading') {
    return null;
  } else if (sectionType === 'styling' && typeof code === 'string') {
    return (
      <div className="flex flex-col">
        <p className="text-sm md:text-[16px] mb-2">Add these styles in your .css file</p>
        <div className="max-w-[800px] relative w-full">
          <button onClick={() => handleCopy(code)} className="absolute top-4 right-4">
            {!copy ? (
              <Copy className="h-[20px] w-[20px] cursor-pointer opacity-50 hover:opacity-100" />
            ) : (
              <Check className="h-[20px] w-[20px] text-green-500 rounded-full cursor-pointer opacity-50 hover:opacity-100" />
            )}
          </button>
          <CodeBlock code={code} language={'css'}>
            <CodeBlock.Code className="bg-[#2f2f2f6f] overflow-auto p-6 rounded-xl shadow-lg max-w-[800px]">
              <div className="table-row">
                <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                <CodeBlock.LineContent className="table-cell text-sm">
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </div>
            </CodeBlock.Code>
          </CodeBlock>
        </div>
        {section.sentence && <p className="text-sm md:text-[16px] mt-4">{section.sentence}</p>}
      </div>
    );
  } else if (sectionType === 'usage' && typeof code === 'string') {
    return (
      <div className="max-w-[800px] relative w-full">
        <button
          onClick={() => handleCopy(code)}
          className="absolute top-4 right-4 outline-none border-none"
        >
          {!copy ? (
            <Copy className="h-[20px] w-[20px] cursor-pointer opacity-50 hover:opacity-100" />
          ) : (
            <Check className="h-[20px] w-[20px] text-green-500 rounded-full cursor-pointer opacity-50 hover:opacity-100" />
          )}
        </button>
        <CodeBlock code={code} language={'javascript'}>
          <CodeBlock.Code className="bg-[#2f2f2f6f] overflow-auto p-6 rounded-xl shadow-lg max-w-[800px]">
            <div className="table-row">
              <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
              <CodeBlock.LineContent className="table-cell text-sm !text-green-400">
                <CodeBlock.Token />
              </CodeBlock.LineContent>
            </div>
          </CodeBlock.Code>
        </CodeBlock>
      </div>
    );
  } else if (sectionType === 'component' && typeof code === 'string') {
    return (
      <div className="flex flex-col">
        <p className="text-sm md:text-[16px] mb-2 max-w-[800px]">{section.description}</p>
        <div className="max-w-[800px] relative w-full">
          <button onClick={() => handleCopy(code)} className="absolute top-4 right-4">
            {!copy ? (
              <Copy className="h-[20px] w-[20px] cursor-pointer opacity-50 hover:opacity-100" />
            ) : (
              <Check className="h-[20px] w-[20px] text-green-500 rounded-full cursor-pointer opacity-50 hover:opacity-100" />
            )}
          </button>
          <CodeBlock code={code} language={'javascript'}>
            <CodeBlock.Code className="bg-[#2f2f2f6f] overflow-auto p-6 rounded-xl shadow-lg max-w-[800px]">
              <div className="table-row">
                <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                <CodeBlock.LineContent className="table-cell text-sm">
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </div>
            </CodeBlock.Code>
          </CodeBlock>
        </div>
        {section.sentence && <p className="text-sm md:text-[16px] mt-4">{section.sentence}</p>}
      </div>
    );
  } else if (sectionType === 'custom-code') {
    return code;
  } else if (sectionType === 'utility' && typeof code === 'string') {
    return (
      <div className="flex flex-col">
        <div className="max-w-[800px] relative w-full">
          <button onClick={() => handleCopy(code)} className="absolute top-4 right-4">
            {!copy ? (
              <Copy className="h-[20px] w-[20px] cursor-pointer opacity-50 hover:opacity-100" />
            ) : (
              <Check className="h-[20px] w-[20px] text-green-500 rounded-full cursor-pointer opacity-50 hover:opacity-100" />
            )}
          </button>
          <CodeBlock code={code} language={'javascript'}>
            <CodeBlock.Code className="bg-[#2f2f2f6f] overflow-auto p-6 rounded-xl shadow-lg max-w-[800px]">
              <div className="table-row">
                <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                <CodeBlock.LineContent className="table-cell text-sm">
                  <CodeBlock.Token />
                </CodeBlock.LineContent>
              </div>
            </CodeBlock.Code>
          </CodeBlock>
        </div>
        {section.sentence && <p className="text-sm md:text-[16px] mt-4">{section.sentence}</p>}
        {section?.preview}
      </div>
    );
  } else {
    console.log({ sectionType, content });
    return <div></div>;
  }
};

export default ContentTypeWiseComponent;
