import { Document } from '../main';
import CountUp from '@/components/ui/count-up';

export const countUpPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <CountUp target={777} className="text-4xl font-bold"></CountUp>
  </div>
);

export const countUp: Document = {
  sideBar: {
    group: 'Text',
    name: 'Count Up',
    order: 4
  },
  content: {
    sections: [
      {
        heading: 'Count Up',
        content:
          'A number that counts up from zero to a target value with a smooth animation. When it reaches the target, it shows confetti and scales up for a celebration effect.',
        sectionType: 'paragraph'
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
      }
    ]
  }
};
