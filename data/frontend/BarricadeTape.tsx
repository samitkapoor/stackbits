import BarricadeTapeDemo from '@/components/barricade-tape-demo';
import { Document } from '../main';
import BarricadeTape from '@/components/ui/barricade-tape';

export const barricadeTapePreview = (
  <div className="flex items-center justify-center = h-[300px]">
    <div>
      <BarricadeTape
        text={['WELCOME TO THE FUTURE']}
        delimiter={'🚀'}
        rotation={3}
        delay={0.2}
        className="bg-blue-500"
      />
      <BarricadeTape
        text={['INNOVATE TODAY']}
        delimiter={'✨'}
        rotation={-3}
        entryFrom="right"
        delay={0.2}
        className="bg-purple-500"
      />
    </div>
  </div>
);

export const barricadeTape: Document = {
  sideBar: {
    group: 'Components',
    name: 'Barricade Tape',
    order: 10
  },
  content: {
    sections: [
      {
        heading: 'Barricade Tape',
        content:
          'BarricadeTape is a bold, no-nonsense banner that slides in like crime scene tape, making sure your message can’t be ignored. Whether it’s a warning, an alert, or just some dev humor, this tape grabs attention and doesn’t let go. It swoops in smoothly when in view—because important messages deserve a grand entrance.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="w-full h-full flex items-center justify-center">
            <BarricadeTapeDemo />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion tailwindcss tailwind-merge clsx`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file lib/utils.ts and paste this code',
        code: `import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file barricade-tape.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const BarricadeTape = ({
  text,
  delimiter,
  rotation = -4,
  entryFrom = 'left',
  delay = 0,
  duration = 2,
  ease = 'backOut',
  className
}: {
  text: string | Array<string>;
  delimiter: string;
  rotation?: number;
  entryFrom?: 'left' | 'right';
  delay?: number;
  duration?: number;
  ease?: string;
  className?: string;
}) => {
  let sentence = '';
  if (typeof text === 'string') {
    sentence = Array(10)
      .fill(text)
      .map((item) => \` \${item} \`)
      .join(delimiter);
  } else {
    sentence = Array(10)
      .fill(text.map((item) => \` \${item} \`).join(delimiter))
      .join(delimiter);
  }

  return (
    <motion.div
      initial={{
        transform: \`translateX(\${
          entryFrom === 'left' ? '-100vw' : '100vw'
        }) rotateZ(\${rotation}deg)\`,
        scale: 1,
        y: -5
      }}
      whileInView={{
        transform: \`translateX(0) rotateZ(\${rotation}deg)\`,
        y: 0,
        scale: [1.1, 1],
        transition: { duration, ease, delay }
      }}
      viewport={{ once: true }}
      className={cn(
        'text-black font-bold text-3xl md:text-5xl w-[100vw+100vw] flex items-center justify-center gap-5 h-[50px] md:h-[80px] bg-yellow-500 overflow-hidden whitespace-nowrap border-[5px] md:border-[10px] border-black border-dashed',
        className
      )}
    >
      {sentence}
    </motion.div>
  );
};

export default BarricadeTape;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="w-full relative h-[500px]">
<div className="overflow-y-auto overflow-x-hidden w-full flex flex-col gap-5 items-center justify-start h-[1200px]">
  <div className="h-[500px] flex items-center justify-center text-5xl font-bold">
    Scroll to see the tape
  </div>
  <BarricadeTape
    text={['CRIME SCENE', 'DO NOT CROSS']}
    delimiter={'•'}
    rotation={2}
    delay={0.5}
  />
  <BarricadeTape
    text={['BUILD QUICK', 'COPY PASTE']}
    delimiter={'•'}
    entryFrom="right"
    rotation={-2}
    className="bg-green-400"
    delay={0.5}
  />
  <BarricadeTape
    text={['Stackbits']}
    delimiter={'•'}
    entryFrom="right"
    rotation={2}
    className="bg-orange-400 mt-10"
  />
  <BarricadeTape
    text={['GET IT NOW 👇🏻']}
    delimiter={'•'}
    entryFrom="left"
    rotation={-5}
    className="bg-white mt-10"
  />
  <div className="h-[150px] mt-10 w-full"></div>
</div>
</div>`
      }
    ]
  }
};
