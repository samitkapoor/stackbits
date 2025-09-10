'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import PrismaticHazeBackground from './prismatic-haze';

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
          x: `-${width}px`,
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
          x: `-${width}px`,
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
          x: `${width}px`,
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
      className={`h-full w-full flex flex-col flex-nowrap whitespace-nowrap overflow-hidden items-center justify-center relative`}
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
        <p className={`!text-[150px] font-extrabold ${className}`}>{name}</p>
      </motion.div>
      <motion.div
        initial={{
          y: '-100%',
          x: `-2360px`
        }}
        variants={{
          exit2: {
            display: 'none'
          }
        }}
        animate={designationControls}
        className="h-full w-full flex flex-col items-center justify-between absolute z-30 py-[50px]"
      >
        <p ref={designationRef} className={`!text-[150px] font-extrabold ${designationClassName}`}>
          {Array(2).fill(designation).join(' ')}
        </p>
        <p className={`!text-[150px] font-extrabold ${designationClassName}`}>
          {Array(2).fill(designation).join(' ')}
        </p>
      </motion.div>

      {/* For the background just like in the preview,
       you have to go to https://stackbits.dev/docs/prismaticHaze 
      and get that background in your project and then uncomment the code below */}
      <motion.div
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
      </motion.div>

      <div
        className={`h-full absolute top-0 left-0 z-10 w-full flex flex-col flex-nowrap whitespace-nowrap overflow-hidden items-center justify-center`}
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
          className={`text-xl ${designationClassName}`}
        >
          {designation}
        </motion.p>
      </div>
    </div>
  );
};

export default EpicNameDrop;
