import BarricadeTapeDemo from '@/components/barricade-tape-demo';
import { Document } from '../main';

export const barricadeTape: Document = {
  sideBar: {
    group: 'Components',
    name: 'BarricadeTape',
    order: 10
  },
  content: {
    sections: [
      {
        heading: 'BarricadeTape',
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
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file barricade-tape.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';

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
  if (typeof text === 'string') sentence = Array(10).fill(text).join(delimiter);
  else sentence = Array(10).fill(text.join(delimiter)).join(delimiter);

  return (
    <motion.div
      initial={{
        transform: \`translateX(\${entryFrom === 'left' ? '-50vw' : '50vw'}) rotateZ(\${rotation}deg)\`,
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
      className={\`text-black font-bold text-5xl w-screen flex items-center justify-center gap-5 h-[80px] bg-yellow-500 overflow-hidden whitespace-nowrap border-[10px] border-black border-dashed \${className}\`}
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
        code: `<EndToEndBanner
  text={['BUILD QUICK', 'COPY PASTE']}
  delimiter={'•'}
  entryFrom="right"
  rotation={10}
  className="bg-yellow-400 mt-2"
/>
`
      }
    ]
  }
};
