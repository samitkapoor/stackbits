'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SectionInDocument } from '@/data/main';
import { Check, Copy } from 'lucide-react';
import ShineButton from './ui/shine-button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { cn } from '@/lib/utils';

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
  // Extract commonly used props
  const { content, code, designer, description } = section;

  /**
   * Reusable code block component with copy button
   */
  const CodeBlockWithCopy = ({ code, language }: { code: string; language: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const codeRef = useRef<HTMLDivElement>(null);

    const handleCopy = (code: string) => {
      navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 500);
    };

    useEffect(() => {
      if (codeRef.current) {
        setIsOverflowing(codeRef.current.scrollHeight > 300);
      }
    }, [code]);

    return (
      <div className="relative w-full">
        <div className="absolute top-8 right-6 flex gap-2 z-10">
          <button
            onClick={() => {
              handleCopy(code);
            }}
          >
            {!isCopied ? (
              <Copy className="h-[20px] w-[20px] cursor-pointer opacity-50 hover:opacity-100" />
            ) : (
              <Check className="h-[20px] w-[20px] text-green-500 rounded-full cursor-pointer opacity-50 hover:opacity-100" />
            )}
          </button>
        </div>
        <div className="relative">
          <div
            ref={codeRef}
            className={cn('relative overflow-hidden', isExpanded ? 'h-auto' : 'max-h-[400px]')}
          >
            <SyntaxHighlighter
              style={oneDark}
              language={language}
              PreTag="div"
              customStyle={{
                background: '#ffffff11',
                border: '1px solid #ffffff22',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                fontSize: '0.875rem',
                lineHeight: '1.5',
                fontFamily:
                  "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              codeTagProps={{
                style: {
                  background: 'transparent',
                  padding: '0',
                  fontSize: '0.875rem',
                  fontFamily:
                    "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace"
                }
              }}
            >
              {String(code).replace(/\n$/, '')}
            </SyntaxHighlighter>
          </div>
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
        return <p className="w-full text-sm md:text-[16px] text-white/80">{content}</p>;
      }
      break;

    case 'credits':
      return (
        <div className="flex gap-1">
          {description}
          {designer?.map((item) => {
            return (
              <div key={item.name}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 underline"
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      );

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
                <div className="flex flex-col w-full items-center justify-center">
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
        <div className="w-full backdrop-blur-lg bg-black/30 rounded-lg border-[2px] border-[#2f2f2fdf] flex items-center justify-center overflow-x-hidden relative min-h-[500px]">
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
              <p className="text-sm text-white/80 md:text-[16px] mb-2 w-full">
                {section.description}
              </p>
            )}
            <CodeBlockWithCopy code={code} language="javascript" />
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
