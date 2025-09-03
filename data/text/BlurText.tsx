import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import BlurText from '@/components/ui/blur-text';

export const blurTextPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <BlurText text="Blur Text" className="text-4xl" repeat />
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
        heading: 'Blur Text',
        content:
          'Text that starts blurry and becomes clear when it comes into view. Each letter appears with a smooth animation, starting from a blurred state and sharpening into focus.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <BlurText text="Blur Text" className="text-4xl" repeat />
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Blur Text',
        sectionType: 'component',
        description: 'Create a file blur-text.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';

type BlurTextProps = {
  text: string;
  repeat?: boolean;
  className?: string;
};

const BlurText: FC<BlurTextProps> = ({ text, repeat = false, className }) => {
  return (
    <div className={cn('flex flex-wrap overflow-visible', className)}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(10px)' }}
          whileInView={{ filter: 'blur(0px)' }}
          transition={{
            duration: 0.05,
            delay: index * 0.05,
            ease: 'backOut',
            ...(repeat && {
              repeat: Infinity,
              repeatDelay: 0.05 * text.split('').length + 1,
              repeatType: 'reverse'
            })
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
