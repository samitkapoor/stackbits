'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SectionInDocument } from '@/data/main';
import { CodeBlock } from 'react-code-block';
import { Check, Copy } from 'lucide-react';
import ShineButton from './ui/shine-button';

interface ContentTypeWiseComponentProps {
  section: SectionInDocument;
  sectionType: string;
}

/**
 * Component that renders different types of content sections based on sectionType
 * Handles code blocks, paragraphs, lists, steppers and other content types
 */
const ContentTypeWiseComponent: React.FC<ContentTypeWiseComponentProps> = ({
  section,
  sectionType
}) => {
  // State for copy button feedback
  const [copy, setCopy] = useState(false);

  // Extract commonly used props
  const { content, code } = section;

  /**
   * Copies code to clipboard and shows feedback
   */
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 500);
  };

  /**
   * Reusable code block component with copy button
   */
  const CodeBlockWithCopy = ({
    code,
    language,
    className
  }: {
    code: string;
    language: string;
    className?: string;
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const codeRef = useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
      if (codeRef.current) {
        setIsOverflowing(codeRef.current.scrollHeight > 300);
      }
    }, [code]);

    return (
      <div className="max-w-[800px] relative w-full">
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button onClick={() => handleCopy(code)}>
            {!copy ? (
              <Copy className="h-[20px] w-[20px] cursor-pointer opacity-50 hover:opacity-100" />
            ) : (
              <Check className="h-[20px] w-[20px] text-green-500 rounded-full cursor-pointer opacity-50 hover:opacity-100" />
            )}
          </button>
        </div>
        <div className="relative">
          <CodeBlock code={code} language={language}>
            <CodeBlock.Code
              ref={codeRef}
              className={`bg-[#2f2f2f6f] overflow-auto p-6 rounded-xl shadow-lg max-w-[800px] ${
                isExpanded ? 'h-auto' : 'max-h-[300px]'
              } ${className}`}
            >
              <div className="table-row">
                <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
                <CodeBlock.LineContent className="table-cell text-sm">
                  <CodeBlock.Token className={className} />
                </CodeBlock.LineContent>
              </div>
            </CodeBlock.Code>
          </CodeBlock>
          {isOverflowing && !isExpanded && (
            <div className="absolute bottom-10 right-0 left-0 z-20 w-full flex justify-center">
              <ShineButton onClick={() => setIsExpanded(!isExpanded)} className="text-sm">
                {isExpanded ? 'Show Less' : 'Show More'}
              </ShineButton>
            </div>
          )}
          {!isExpanded && isOverflowing && (
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#0c0c0c] to-transparent rounded-xl" />
          )}
        </div>
      </div>
    );
  };

  // Render different content types
  switch (sectionType) {
    case 'paragraph':
      if (typeof content === 'string') {
        return <p className="max-w-[800px] text-sm md:text-[16px]">{content}</p>;
      }
      break;

    case 'ordered-list':
      if (typeof content === 'object') {
        return (
          <div className="flex flex-col gap-8 mt-4">
            {content.map((item: { id: number; heading: string; content: string }, i: number) => (
              <div key={item.heading + i} className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-[14px] sm:gap-[20px]">
                  <div className="border-[1px] rounded-full h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-center flex items-center justify-center select-none hover:border-yellow-400 hover:text-yellow-400 transition-all text-sm md:text-[16px]">
                    {item.id}
                  </div>
                  <p className="font-semibold text-sm md:text-[16px] text-yellow-400">
                    {item.heading}
                  </p>
                </div>
                <div className="flex text-sm flex-col gap-2 ml-[33px] sm:ml-[47px]">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        );
      }
      break;

    case 'stepper':
      if (typeof content === 'object') {
        return (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-2 mt-5 w-full">
            {content.map((item, i: number) => (
              <div className="flex items-center gap-2" key={item.heading + item.content}>
                <div className="flex flex-col max-w-[200px] w-full items-center justify-center">
                  <div className="border-[1px] rounded-full h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-center flex items-center justify-center select-none hover:border-yellow-400 hover:text-yellow-400 transition-all">
                    {item.id}
                  </div>
                  <p className="font-medium text-sm sm:text-[16px] text-yellow-400 text-center">
                    {item.heading}
                  </p>
                  <p className="text-xs text-center">{item.content}</p>
                </div>
                {i < content.length - 1 && (
                  <div className="h-[1px] w-[150px] bg-white hidden md:block" />
                )}
              </div>
            ))}
          </div>
        );
      }
      break;

    case 'italic-line':
      return <p className="text-yellow-400 italic text-sm">{section.sentence}</p>;

    case 'preview':
      return (
        <div className="h-[700px] max-w-[700px] md:max-w-[90%] rounded-lg border-[2px] border-[#2f2f2fdf] flex items-start justify-start overflow-x-hidden relative">
          {code}
        </div>
      );

    case 'heading':
      return null;

    case 'styling':
      if (typeof code === 'string') {
        return (
          <div className="flex flex-col">
            <p className="text-sm md:text-[16px] mb-2">Add these styles in your .css file</p>
            <CodeBlockWithCopy code={code} language="css" />
            {section.sentence && <p className="text-sm md:text-[16px] mt-4">{section.sentence}</p>}
          </div>
        );
      }
      break;

    case 'usage':
      if (typeof code === 'string') {
        return <CodeBlockWithCopy code={code} language="javascript" />;
      }
      break;

    case 'component':
    case 'dependencies':
      if (typeof code === 'string') {
        return (
          <div className="flex flex-col">
            {section.description && (
              <p className="text-sm md:text-[16px] mb-2 max-w-[800px]">{section.description}</p>
            )}
            <CodeBlockWithCopy
              code={code}
              language="javascript"
              className={sectionType === 'dependencies' ? 'text-gray-300' : ''}
            />
            {section.sentence && <p className="text-sm md:text-[16px] mt-4">{section.sentence}</p>}
          </div>
        );
      }
      break;

    case 'custom-code':
      return code;

    case 'utility':
      if (typeof code === 'string') {
        return (
          <div className="flex flex-col">
            <CodeBlockWithCopy code={code} language="javascript" />
            {section.sentence && <p className="text-sm md:text-[16px] mt-4">{section.sentence}</p>}
            {section?.preview}
          </div>
        );
      }
      break;

    default:
      console.log({ sectionType, content });
      return <div></div>;
  }

  return null;
};

export default ContentTypeWiseComponent;
