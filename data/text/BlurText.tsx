import { Document } from '../main';
import BlurText from '@/components/ui/blur-text';

export const blurTextPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <BlurText text="Blur Text" className="text-4xl" />
  </div>
);

export const blurText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Blur Text',
    order: 6
  },
  content: {
    sections: [
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <BlurText text="Blur Text" className="text-4xl" />
      },
      {
        heading: 'Blur Text',
        sectionType: 'component',
        description: 'Create a file blur-text.tsx in your components folder and paste this code',
        code: `import { motion } from 'framer-motion';
import { FC } from 'react';

type BlurTextProps = {
  text: string;
  className?: string;
};

const BlurText: FC<BlurTextProps> = ({ text, className }) => {
  return (
    <div className={\`flex flex-wrap overflow-visible \${className}\`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 10, filter: 'blur(10px)' }}
          whileInView={{ y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.2,
            delay: index * 0.1,
            ease: 'backOut'
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<BlurText text="Blur Text" className="text-xl" />`
      }
    ]
  }
};
