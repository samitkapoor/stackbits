import { Document } from '../main';
import { cnCode } from '@/constants/code';
import Image from 'next/image';
import TextsDemo from '@/components/texts-demo';
import GlitchText from '@/components/ui/glitch-text';
import RainbowText from '@/components/ui/rainbow-text';
import SkewedText from '@/components/ui/skewed-text';
import CountUp from '@/components/ui/count-up';
import FadeInText from '@/components/ui/fade-in-text';
import WavyText from '@/components/ui/wavy-text';
import BlurText from '@/components/ui/blur-text';
import DottedText from '@/components/ui/dotted-text';
import HiddenText from '@/components/ui/hidden-text';

export const textsPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden bg-black relative gap-5">
    <Image
      src="/texts.png"
      alt="texts"
      width={800}
      height={800}
      className="w-full h-full object-contain bg-black"
    />
  </div>
);

export const texts: Document = {
  sideBar: {
    group: 'Components',
    name: 'Texts',
    order: 1
  },
  content: {
    sections: [
      {
        heading: 'Texts',
        content: 'A collection of all the text components provided by stackbits.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <TextsDemo />
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion tailwindcss-animate tailwindcss clsx tailwind-merge`
      },
      cnCode,
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <GlitchText className="text-4xl">Glitch Text</GlitchText>
      },
      {
        heading: 'Glitch Text',
        sectionType: 'component',
        description: 'Create a file glitch-text.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      animate={{
        x: [0, 0, 0, 2, 0, 2, 2],
        y: [2, -2, -2, 0, 0, 2, 0],
        filter: [
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(2px)',
          'blur(4px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(0px)',
          'blur(4px)',
          'blur(0px)'
        ],
        textShadow: [
          '3px 3px 0 #ff0d00, -3px -3px 0 #00ffff',
          '-3px -3px 0 #ff00ff, 3px 3px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px -0px 0 #0400ff, -0px 0px 0 #00ffff',
          '-0px 0px 0 #00ff00, 0px -0px 0 #00ffff',
          '0px 0px 0 #ff0d00, -3px -3px 0 #00ffff'
        ],
        transition: {
          repeat: Infinity,
          duration: 0.5
        }
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

export default GlitchText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<GlitchText className="text-4xl">Glitch Text</GlitchText>`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <RainbowText className="text-4xl">Rainbow Text</RainbowText>
      },
      {
        heading: 'Rainbow Text',
        sectionType: 'component',
        description: 'Create a file rainbow-text.tsx in your components folder and paste this code',
        code: `import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type RainbowTextProps = {
  colors?: string[];
  className?: string;
  duration?: number;
  children?: ReactNode;
};

const RainbowText = ({
  colors = [
    '#FF4D4D',
    '#FF944D',
    '#FFC14D',
    '#E8FF4D',
    '#6DFF4D',
    '#4DFFA1',
    '#4DFFFF',
    '#4DAAFF',
    '#4D6DFF',
    '#6D4DFF',
    '#A14DFF',
    '#D14DFF',
    '#FF4DAA',
    '#FF4D6D',
    '#FF4D4D',
    '#FF944D'
  ],
  className = '',
  duration = 2,
  children
}: RainbowTextProps) => {
  const linearGradients = [];
  for (let i = 0; i < colors.length - 1; i++) {
    linearGradients.push(\`linear-gradient(90deg, \${colors[i]} 0%, \${colors[i + 1]} 100%)\`);
  }

  return (
    <motion.span
      initial={{ backgroundImage: linearGradients[0] }}
      animate={{ backgroundImage: linearGradients }}
      transition={{
        duration: duration,
        ease: 'linear',
        repeat: Infinity
      }}
      className={className}
      style={{
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {children}
    </motion.span>
  );
};

export default RainbowText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<RainbowText className="text-4xl">Rainbow Text</RainbowText>`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <SkewedText className="text-4xl">Skewed Text</SkewedText>
      },
      {
        heading: 'Skewed Text',
        sectionType: 'component',
        description: 'Create a file skewed-text.tsx in your components folder and paste this code',
        code: `import { motion } from 'framer-motion';
import React, { useRef } from 'react';

const SkewedText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const pRef = useRef<HTMLParagraphElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!pRef.current) return;

    const rect = pRef.current.getBoundingClientRect();

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;

    const xd = (mx - width / 2) / 8;
    const yd = (height / 2 - my) / 8;

    pRef.current.style.transform = \`perspective(1000px) rotateY(\${xd + 15}deg) rotateX(\${yd}deg)\`;
  };

  return (
    <div
      onMouseMove={onMouseMove}
      style={{
        transform: \`perspective(300px) rotateX(20deg) rotateY(3deg)\`
      }}
      className="w-full flex items-center justify-center p-10"
    >
      <motion.p
        ref={pRef}
        style={{
          transform: 'perspective(300px) rotateX(10deg) rotateY(3deg)',
          textShadow: '0 0 10px #00ffa39a, 0 0 30px #00ffa39a'
        }}
        initial={{
          y: 300,
          rotateX: 0,
          opacity: 0
        }}
        animate={{
          y: 0,
          rotateX: 20,
          opacity: 1,
          transition: { ease: 'backOut', duration: 1.2 }
        }}
        className={\`font-bold transition-all duration-75 opacity-0 text-center w-[75%] italic \${className}\`}
      >
        {children}
      </motion.p>
    </div>
  );
};

export default SkewedText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<SkewedText className="text-4xl">Skewed Text</SkewedText>`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <CountUp target={777} className="text-4xl font-bold"></CountUp>
      },
      {
        heading: 'Count Up',
        sectionType: 'component',
        description: 'Create a file count-up.tsx in your components folder and paste this code',
        code: `import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useAnimationControls } from 'framer-motion';
import Confetti from 'react-confetti';

const CountUp = ({
  target, // ? The final number to reach
  start = 0, // ? The number to start from
  duration = 1, // ? The duration of the animation
  confettiDuration = 10, // ? The duration of the confetti animation
  className = '' // ? Additional class names
}: {
  target: number;
  start?: number;
  duration?: number;
  confettiDuration?: number;
  className?: string;
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const count = useMotionValue(start);
  const roundedCount = useTransform(count, (latest) => Math.floor(latest));
  const numberControls = useAnimationControls();

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      ease: 'easeOut'
    });

    controls.then(() => {
      setShowConfetti(true);
      numberControls.start('end');
      setTimeout(() => setShowConfetti(false), confettiDuration * 1000);
    });

    return () => controls.stop();
  }, [target, count]);

  return (
    <div className="relative flex items-center justify-center p-4">
      {showConfetti && (
        <div className="absolute h-full w-full">
          <Confetti width={350} height={350} className="rounded-full h-full w-full" />
        </div>
      )}

      <motion.span
        variants={{
          end: {
            scale: [1, 1.1, 1],
            transition: {
              duration: 0.4,
              ease: 'easeOut'
            }
          }
        }}
        animate={numberControls}
        className={\`text-white text-center z-10 \${className}\`}
      >
        {roundedCount}
      </motion.span>
    </div>
  );
};

export default CountUp;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<CountUp target={777} className="text-xl font-bold"></CountUp>`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="max-w-[300px] max-h-[300px]">
            <FadeInText text="Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll" />
          </div>
        )
      },
      {
        heading: 'Fade In Text',
        sectionType: 'component',
        description: 'Create a file fade-in-text.tsx in your components folder and paste this code',
        code: `'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

type FadeInTextProps = {
  text: string;
  className?: string;
};

const FadeInText: React.FC<FadeInTextProps> = ({ text, className }) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className={\`flex flex-wrap h-full w-full gap-2 \${className}\`}>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default FadeInText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FadeInText text="Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll" />`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <WavyText text="Wavy Text" className="text-4xl" />
      },
      {
        heading: 'Wavy Text',
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
    <div className={\`flex flex-wrap overflow-visible p-4 \${className}\`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%' }}
          animate={{ y: [0, -15] }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: index * 0.1,
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
      },
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
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <DottedText text="LIONEL MESSI" />
      },
      {
        heading: 'Dotted Text',
        sectionType: 'component',
        description: 'Create a file dotted-text.tsx in your components folder and paste this code',
        code: `'use client';

import { motion } from 'framer-motion';

// Define the dot matrix for each character
const charMatrix: Record<string, number[][]> = {
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1]
  ],
  B: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0]
  ],
  C: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ],
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0]
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1]
  ],
  F: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0]
  ],
  G: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 1, 1]
  ],
  H: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1]
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1]
  ],
  J: [
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ],
  K: [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1]
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1]
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1]
  ],
  N: [
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1]
  ],
  O: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ],
  P: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0]
  ],
  Q: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1]
  ],
  R: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1]
  ],
  S: [
    [0, 1, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0]
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ],
  V: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0]
  ],
  W: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1]
  ],
  X: [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1]
  ],
  Y: [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]
  ],
  Z: [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
  ],
  '0': [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ],
  '1': [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1]
  ],
  '2': [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
  ],
  '3': [
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0]
  ],
  '4': [
    [0, 0, 1, 1],
    [0, 1, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1]
  ],
  '5': [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0]
  ],
  '6': [
    [0, 1, 1, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ],
  '7': [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
  ],
  '8': [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
  ],
  '9': [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 0]
  ],
  '.': [[0], [0], [0], [0], [1]],
  ',': [[0], [0], [0], [1], [1]],
  '!': [[1], [1], [1], [0], [1]],
  '?': [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0]
  ],
  '+': [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]
  ],
  '-': [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]
  ],
  '*': [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
    [0, 0, 0]
  ],
  '/': [
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  '=': [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  ' ': [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ]
};

// Default matrix for unknown characters
const defaultMatrix = [
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1]
];

interface DottedTextProps {
  text: string;
  color?: string;
  backgroundColor?: string;
  size?: number;
  spacing?: number;
  animationDelay?: number;
  animationColors?: string[];
  animationDuration?: number;
  shadowIntensity?: number;
}

const DottedText: React.FC<DottedTextProps> = ({
  text,
  size = 10,
  spacing = 2,
  animationDelay = 0.3,
  animationColors = [
    '#1A0B33', // Deeper purple (twilight)
    '#5D2E8C', // Purple
    '#F25C54', // Coral/orange
    '#F7B267', // Golden orange
    '#FFD166', // Amber/gold
    '#FFEDDF', // Soft light
    '#F7B267', // Golden orange
    '#F25C54', // Coral/orange
    '#5D2E8C', // Purple
    '#1A0B33' // Deeper purple (twilight)
  ],
  animationDuration = 4,
  shadowIntensity = 15
}) => {
  const renderDot = (
    filled: boolean,
    x: number,
    y: number,
    animationIndex: number,
    repeatDelay: number
  ) => {
    const dotSize = \`\${size}px\`;

    if (!filled) {
      return (
        <div
          key={\`\${x}-\${y}\`}
          style={{
            width: dotSize,
            height: dotSize,
            margin: \`\${spacing}px\`,
            display: 'inline-block'
          }}
        />
      );
    }

    return (
      <motion.div
        key={\`\${x}-\${y}\`}
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          border: '1px solid #FFFFFF47',
          margin: \`\${spacing}px\`,
          display: 'inline-block',
          backgroundColor: animationColors[0]
        }}
        initial={{
          backgroundColor: animationColors[0],
          boxShadow: 'none'
        }}
        animate={{
          backgroundColor: animationColors,
          boxShadow: [
            'none',
            'none',
            \`0 0 \${shadowIntensity / 2.1}px 0 \${animationColors[2]}\`,
            \`0 0 \${shadowIntensity / 2}px 0 \${animationColors[3]}\`,
            \`0 0 \${shadowIntensity}px 0 \${animationColors[4]}\`,
            \`0 0 \${shadowIntensity}px 0 \${animationColors[5]}\`,
            \`0 0 \${shadowIntensity / 2}px 0 \${animationColors[6]}\`,
            \`0 0 \${shadowIntensity / 2.1}px 0 \${animationColors[7]}\`,
            'none',
            'none'
          ]
        }}
        transition={{
          duration: animationDuration,
          delay: animationIndex * animationDelay,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: repeatDelay,
          ease: 'easeInOut'
        }}
      />
    );
  };

  const renderCharacter = (char: string, charIndex: number, totalChars: number) => {
    const upperChar = char.toUpperCase();
    const matrix = charMatrix[upperChar] || defaultMatrix;

    return (
      <div
        key={charIndex}
        style={{
          display: 'inline-block',
          marginRight: \`\${spacing * 3}px\`,
          verticalAlign: 'top'
        }}
      >
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((dot, dotColIndex) =>
              renderDot(
                dot === 1,
                charIndex * (matrix[0].length + 2) + dotColIndex,
                rowIndex,
                charIndex * 4 + dotColIndex,
                totalChars * 0.8
              )
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-2 relative">
      {text.split('').map((char, index) => renderCharacter(char, index, text.length))}
    </div>
  );
};

export default DottedText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<DottedText text="LIONEL MESSI" />`
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <HiddenText text="hidden text" className="text-4xl" />
      },
      {
        heading: 'Hidden Text',
        sectionType: 'component',
        description: 'Create a file hidden-text.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const HiddenText = ({
  text,
  symbol = '*',
  delaySpeed = 0.025,
  className = ''
}: {
  text: string;
  symbol?: string;
  delaySpeed?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [displayValue] = useState(text);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
    }
  }, [firstTime]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ul
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCopy}
      className={cn(
        'group flex gap-1 overflow-hidden items-center p-0 m-0 cursor-pointer',
        className
      )}
    >
      {displayValue.split(' ').map((word, i) => {
        return (
          <div key={'word-' + i} className="flex items-center">
            {word.split('').map((char, j) => {
              const delay =
                (displayValue.split(' ').slice(0, i).join('').length + i + j) * delaySpeed;

              return (
                <AnimatePresence key={'char-' + j} mode="popLayout">
                  {isHovered ? (
                    <motion.li
                      key="char"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 700,
                        damping: 30,
                        delay: delay
                      }}
                    >
                      {char}
                    </motion.li>
                  ) : (
                    <motion.li
                      key="symbol"
                      initial={{ y: firstTime ? 0 : -10, opacity: firstTime ? 1 : 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 700,
                        damping: 30,
                        delay: delay
                      }}
                    >
                      {symbol}
                    </motion.li>
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        );
      })}
    </ul>
  );
};

export default HiddenText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<HiddenText text="hidden text" />`
      }
    ]
  }
};
