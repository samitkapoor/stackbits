import GlitchText from '@/components/ui/glitch-text';
import { Document } from '../main';
import CountUp from '@/components/ui/count-up';

export const countUp: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Count Up',
    order: 12
  },
  content: {
    sections: [
      {
        heading: 'Count Up',
        content:
          'The CountUp component brings numbers to life with a smooth animated climb from start to target, making stats and achievements more exciting! Watch the magic unfold as it counts up, and when it hits the goal—boom! A burst of confetti celebrates the moment.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <CountUp
              duration={1.5}
              start={500}
              target={777}
              confettiDuration={50}
              className="text-[100px] font-bold"
            />
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
        code: `npm i framer-motion react-confetti`
      },
      {
        heading: 'Component',
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
        code: `<CountUp
  duration={1.5}
  start={500}
  target={777}
  confettiDuration={50}
  className="text-[100px] font-bold"
/>`
      }
    ]
  }
};
