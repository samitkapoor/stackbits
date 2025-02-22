import PrismaticHazeBackground from '@/components/ui/prismatic-haze';
import { Document } from '../main';
import EpicNameDrop from '@/components/ui/epic-name-drop';

export const epicNameDropPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center relative">
    <div className="h-full w-full absolute top-0 left-0 opacity-50">
      <PrismaticHazeBackground></PrismaticHazeBackground>
    </div>
    <div className="z-10">
      <p className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
        StackBits
      </p>
      <p className={`text-xl text-white text-center`}>Best Snippets</p>
    </div>
  </div>
);

export const epicNameDrop: Document = {
  sideBar: {
    group: 'Components',
    name: 'Epic Name Drop',
    order: 12
  },
  content: {
    sections: [
      {
        heading: 'Epic Name Drop',
        content:
          "Meet EpicNameDrop, the ultimate Framer Motion-powered name reveal component for your portfolio. This sleek animation makes a bold statement—your name enters dramatically from the top, shifts left to reveal your last name, and then seamlessly scales down into position. Perfect for personal branding, it captivates visitors with smooth, eye-catching motion. Whether you're a developer, designer, or creative professional, EpicNameDrop ensures your name stands out—literally. 🚀",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <EpicNameDrop
              designation="Best Snippets"
              designationClassName="text-white opacity-10"
              name="StackBits"
              className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-extrabold"
            ></EpicNameDrop>
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
          'Create a file epic-name-drop.tsx in your components folder and paste this code',
        code: `'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

type EpicNameDropProps = {
  name: string;
  className?: string;
  designationClassName?: string;
  designation?: string;
};

const EpicNameDrop = ({
  name,
  designation,
  designationClassName,
  className
}: EpicNameDropProps) => {
  const controls = useAnimationControls();
  const designationControls = useAnimationControls();
  const designationRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    (async () => {
      if (!designationRef.current) return;

      const width = designationRef.current?.offsetWidth;

      await Promise.all([
        controls.start('start'),
        designationControls.start({
          y: '-100%',
          x: \`-\${width}px\`,
          transition: {
            duration: 1,
            ease: 'backOut'
          }
        })
      ]);
      await Promise.all([
        controls.start('enter'),
        designationControls.start({
          y: 0,
          x: \`-\${width}px\`,
          transition: {
            duration: 1,
            ease: 'backOut'
          }
        })
      ]);
      await Promise.all([
        controls.start('slide'),
        designationControls.start({
          y: 0,
          x: \`\${width}px\`,
          transition: {
            duration: 2,
            ease: 'linear'
          }
        })
      ]);
      await Promise.all([controls.start('exit'), designationControls.start('exit2')]);
      controls.start('textEntry');

      return () => controls.stop();
    })();
  }, [designationRef]);

  return (
    <div
      className={\`h-full w-full flex flex-col flex-nowrap whitespace-nowrap overflow-hidden items-center justify-center relative\`}
    >
      <motion.div
        initial={{
          y: '-100%',
          x: '70%'
        }}
        variants={{
          start: {
            y: '-100%',
            x: '70%',
            transition: {
              duration: 1,
              ease: 'backOut'
            }
          },
          enter: {
            y: 0,
            x: '70%',
            transition: {
              duration: 1,
              ease: 'backOut'
            }
          },
          slide: {
            y: 0,
            x: '-150%',
            transition: {
              duration: 1.4,
              ease: 'linear'
            }
          },
          exit: {
            display: 'none'
          }
        }}
        animate={controls}
        className="h-full w-full flex items-center justify-start absolute z-30"
      >
        <p className={\`!text-[150px] font-extrabold \${className}\`}>{name}</p>
      </motion.div>
      <motion.div
        initial={{
          y: '-100%',
          x: \`-2360px\`
        }}
        variants={{
          exit2: {
            display: 'none'
          }
        }}
        animate={designationControls}
        className="h-full w-full flex flex-col items-center justify-between absolute z-30 py-[50px]"
      >
        <p ref={designationRef} className={\`!text-[150px] font-extrabold \${designationClassName}\`}>
          {Array(2).fill(designation).join(' ')}
        </p>
        <p className={\`!text-[150px] font-extrabold \${designationClassName}\`}>
          {Array(2).fill(designation).join(' ')}
        </p>
      </motion.div>

      {/* For the background just like in the preview,
       you have to go to https://stackbits.dev/docs/prismaticHaze 
      and get that background in your project and then uncomment the code below */}
      {/* <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 0.5,
          transition: {
            duration: 1,
            delay: 5
          }
        }}
        className="h-full w-full absolute"
      >
        <PrismaticHazeBackground>
          <div className="h-full w-full"></div>
        </PrismaticHazeBackground>
      </motion.div> */}

      <div
        className={\`h-full absolute top-0 left-0 z-10 w-full flex flex-col flex-nowrap whitespace-nowrap overflow-hidden items-center justify-center\`}
      >
        <motion.p
          initial={{
            opacity: 0,
            y: '50px'
          }}
          variants={{
            textEntry: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: 'backOut'
              }
            }
          }}
          animate={controls}
          className={className}
        >
          {name}
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: '50px'
          }}
          variants={{
            textEntry: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: 'backOut',
                delay: 0.5
              }
            }
          }}
          animate={controls}
          className={\`text-xl \${designationClassName}\`}
        >
          {designation}
        </motion.p>
      </div>
    </div>
  );
};

export default EpicNameDrop;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<EpicNameDrop
  designation="Web Developer"
  designationClassName="text-white opacity-10"
  name="Samit Kapoor"
  className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl font-extrabold"
></EpicNameDrop>`
      }
    ]
  }
};
