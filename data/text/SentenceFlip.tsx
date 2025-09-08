import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import SentenceFlip from '@/components/ui/sentence-flip';

export const sentenceFlipPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-0 gap-5">
    <div className="w-full h-full flex items-center justify-center relative">
      <SentenceFlip
        className="!text-2xl text-center"
        wrapperClassName="justify-center"
        sentences={[
          { sentence: 'The home for your AI assistants', highlight: [1, 4, 5] },
          { sentence: 'Build personal AI assistants your way', highlight: [1, 2, 3] },
          { sentence: 'Build smarter assistants, your unique way', highlight: [1, 2] },
          { sentence: 'Create custom AI with custom prompts', highlight: [2, 4, 5] },
          { sentence: 'Break free from Generic AI', highlight: [3, 4] }
        ]}
      />
    </div>
  </div>
);

export const sentenceFlip: Document = {
  sideBar: {
    group: 'Components',
    name: 'Sentence Flip',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Sentence Flip',
        content:
          'Text that cycles through different sentences with smooth word-by-word transitions. Each word flips individually with blur effects, and you can highlight specific words with custom styling.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative px-10">
            <SentenceFlip
              sentences={[
                { sentence: 'The home for your AI assistants', highlight: [1, 4, 5] },
                { sentence: 'Build personal AI assistants your way', highlight: [1, 2, 3] },
                { sentence: 'Build smarter assistants, your unique way', highlight: [1, 2] },
                { sentence: 'Create custom AI with custom prompts', highlight: [2, 4, 5] },
                { sentence: 'Break free from Generic AI', highlight: [3, 4] }
              ]}
            />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file sentence-flip.tsx in your components folder and paste this code',
        code: `'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Raleway } from 'next/font/google';
import React, { useEffect, useRef, useState } from 'react';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});

const WordFlipper = ({
  words,
  wordIndex
}: {
  words: { word: string; isHighlighted: boolean }[];
  wordIndex: number;
}) => {
  const wordRef = useRef<HTMLDivElement>(null);
  const [wordHeight, setWordHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!wordRef.current) return;
    setWordHeight(wordRef.current.clientHeight);

    window.addEventListener('resize', () => {
      if (!wordRef.current) return;
      setWordHeight(wordRef.current.clientHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {
        if (!wordRef.current) return;
        setWordHeight(wordRef.current.clientHeight);
      });
    };
  }, [wordRef]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <motion.div layout="position" className="text-3xl md:text-4xl lg:text-5xl relative">
      <p ref={wordRef} className="text-transparent opacity-0 select-none absolute">
        sample
      </p>
      <div
        style={{
          height: wordHeight
        }}
        className="overflow-hidden"
      >
        <AnimatePresence mode="popLayout">
          {words.map((word, index) => {
            if (index === currentIndex) {
              return (
                <motion.p
                  key={'word' + index}
                  initial={{ opacity: 0, filter: 'blur(10px)', y: wordHeight / 2 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(10px)', y: -wordHeight / 2 }}
                  transition={{
                    duration: 0.1,
                    ease: 'easeInOut',
                    delay: wordIndex * 0.1
                  }}
                  className={cn(
                    'py-0.5',
                    word.isHighlighted
                      ? \`\${raleway.className} font-semibold text-blue-500\`
                      : \`\${raleway.className} font-light\`
                  )}
                >
                  {word.word}
                </motion.p>
              );
            } else return null;
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const SentenceFlip = ({
  sentences
}: {
  sentences: { sentence: string; highlight: number[] }[];
}) => {
  // contains the words length of the sentence that is longest
  const [words, setWords] = useState(0);

  useEffect(() => {
    const longestSentence = sentences.reduce((longest, { sentence }) => {
      return sentence.length > longest.length ? sentence : longest;
    }, '');
    setWords(longestSentence.split(' ').length);
  }, [sentences]);

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="max-w-3xl place-self-center w-full">
        <div className="flex flex-wrap gap-x-2 justify-start">
          {Array.from({ length: words }).map((_, index) => {
            const wordsToFlip = sentences.map((sentence) => {
              const splits = sentence.sentence.split(' ');
              const isHighlighted = sentence.highlight.includes(index);
              if (splits.length > index) {
                return { word: splits[index], isHighlighted };
              }
              return { word: '', isHighlighted: false };
            });

            return (
              <React.Fragment key={'sentence' + index}>
                <WordFlipper words={wordsToFlip} wordIndex={index} />
                {(index + 1) % 4 === 0 && <div className="w-full" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SentenceFlip;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<SentenceFlip
  sentences={[
    { sentence: 'The home for your AI assistants', highlight: [1, 4, 5] },
    { sentence: 'Build personal AI assistants your way', highlight: [1, 2, 3] },
    { sentence: 'Build smarter assistants, your unique way', highlight: [1, 2] },
    { sentence: 'Create custom AI with custom prompts', highlight: [2, 4, 5] },
    { sentence: 'Break free from Generic AI', highlight: [3, 4] }
  ]}
/>`
      }
    ]
  }
};
