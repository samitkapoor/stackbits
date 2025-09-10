import { useState, useEffect } from 'react';
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
        className={`text-white text-center z-10 ${className}`}
      >
        {roundedCount}
      </motion.span>
    </div>
  );
};

export default CountUp;
