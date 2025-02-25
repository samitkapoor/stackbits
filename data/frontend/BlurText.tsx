import BlurText from '@/components/ui/blur-text';
import { Document } from '../main';

export const blurTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <BlurText
      text="Now you see me"
      className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-extrabold"
    ></BlurText>
  </div>
);

export const blurText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Blur Text',
    order: 12
  },
  content: {
    sections: [
      {
        heading: '🌫️ Blur Text',
        content:
          'Make your text animation stand out with BlurText! ✨ Watch as each letter smoothly sharpens into focus as it comes into view, creating a stunning blur-to-clear effect. Perfect for dramatic reveals, mysterious aesthetics, interactive UI elements, and engaging landing pages, this React component uses Framer Motion to add a sleek and modern touch to your website. 👀🔮',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <BlurText
              text="Now you see me"
              className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-extrabold"
            ></BlurText>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
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
        code: `<BlurText
    text="Now you see me"
    className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-extrabold"
></BlurText>`
      }
    ]
  }
};
