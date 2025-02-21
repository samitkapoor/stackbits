import { Document } from '../main';
import WavyText from '@/components/ui/wavy-text';

export const wavyTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <WavyText
      text="Mahaul poora wavy"
      className="text-blue-500 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase"
    ></WavyText>
  </div>
);

export const wavyText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Wavy Text',
    order: 6
  },
  content: {
    sections: [
      {
        heading: 'Wavy Text',
        content:
          'Make your text dance with WavyText! 🌊✨ Each letter bounces in a smooth wave, adding a fun, eye-catching motion to your UI. Perfect for playful headings, animated logos, or just making words a little more exciting! 🚀',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <WavyText
              text="Mahaul poora wavy!"
              className="text-blue-500 text-xl sm:text-3xl md:text-4xl font-extrabold uppercase"
            ></WavyText>
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
        description: 'Create a file wavy-text.tsx in your components folder and paste this code',
        code: `import { motion } from 'framer-motion';
import { FC } from 'react';

type WavyTextProps = {
  text: string;
  className?: string;
};

const WavyText: FC<WavyTextProps> = ({ text, className }) => {
  return (
    <div className={\`flex flex-wrap overflow-visible \${className}\`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%' }}
          animate={{ y: [0, -15] }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'backIn',
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
        code: `<WavyText
  text="Mahaul poora wavy!"
  className="text-blue-500 text-xl sm:text-3xl md:text-4xl font-extrabold"
></WavyText>`
      }
    ]
  }
};
