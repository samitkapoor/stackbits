import { Document } from '../main';
import WavyText from '@/components/ui/wavy-text';

export const wavyTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <WavyText
      text="Mahaul poora wavy"
      className="text-blue-500 text-xl sm:text-2xl md:text-3xl font-extrabold uppercase"
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
        heading: '🌊 Wavy Text',
        content:
          "Make your text come alive with WavyText! ✨ This React component creates a smooth, flowing wave animation, making each letter bounce and ripple dynamically. Perfect for playful headings, animated logos, fun UI elements, and engaging website designs, this Framer Motion-powered effect adds a lively and eye-catching motion to your typography. Whether you're aiming for a fun, creative, or interactive feel, WavyText makes your words stand out with style! 🚀",
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
        sectionType: 'dependencies',
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
