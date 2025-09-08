import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import WavyText from '@/components/ui/wavy-text';

export const wavyTextPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <WavyText text="Wavy Text" className="text-4xl" />
  </div>
);

export const wavyText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Wavy Text',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Wavy Text',
        content:
          'Text where each letter moves up and down like a wave. Creates a flowing, ocean-like animation effect.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: <WavyText text="Wavy Text" className="text-4xl" />
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Wavy Text',
        sectionType: 'component',
        description: 'Create a file wavy-text.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';

type WavyTextProps = {
  text: string;
  className?: string;
};

const WavyText: FC<WavyTextProps> = ({ text, className }) => {
  return (
    <div className={cn('flex flex-wrap overflow-visible p-4', className)}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%' }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: index * 0.1,
            repeatDelay: (text.split('').length / 2) * 0.1,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

export default WavyText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<WavyText text="Wavy Text" className="text-xl" />`
      }
    ]
  }
};
