import { Document } from '../main';
import EagleVision from '@/components/ui/eagle-vision';
import VideoPreview from '@/components/ui/video-preview';
import { cnCode, installDependenciesCode } from '@/constants/code';

export const eagleVisionPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative gap-5">
    <VideoPreview videoUrl="/demos/eagle-vision.mp4" />
  </div>
);

export const eagleVision: Document = {
  sideBar: {
    group: 'Components',
    name: 'Eagle Vision',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Eagle Vision',
        content:
          "A visual effect inspired by Assassin's Creed that shows rotating rings following your mouse cursor. The rings get smaller and turn green when you hover over target elements, creating an immersive gaming-style interface.",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 relative">
            <EagleVision />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true, lucide: true, useHooks: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file dialog-form.tsx in your components folder and paste this code',
        code: `import { useSpring, useTransform, MotionValue, motion, useMotionValue } from 'framer-motion';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface RingProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  size: MotionValue<number>;
  borderWidth: MotionValue<number>;
}

const MAX_DISTANCE = 1440;
const MIN_DISTANCE = 100;
const CORRECT_DISTANCE = 76;

const Ring = ({ x, y, size, borderWidth }: RingProps) => {
  console.log(size);
  return (
    <motion.span
      className="fixed z-10"
      style={{
        transform: useTransform([x, y], ([x, y]: number[]) => \`translate(\${x}px, \${y}px)\`),
        height: size,
        width: size
      }}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        <motion.span
          style={{
            width: size,
            height: useTransform(size, (value) => value - 50),
            borderColor: useTransform(size, (value) =>
              value < CORRECT_DISTANCE ? '#00ff00' : 'white'
            ),
            borderWidth: borderWidth
          }}
          className="absolute rounded-[120px] border-white ring"
        ></motion.span>
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <motion.span
          style={{
            width: size,
            height: useTransform(size, (value) => value - 50),
            borderColor: useTransform(size, (value) =>
              value < CORRECT_DISTANCE ? '#00ff00' : 'white'
            ),
            borderWidth: borderWidth
          }}
          className="absolute rounded-[120px] border-white ring ring-reverse"
        ></motion.span>
      </span>
    </motion.span>
  );
};

const EagleVision = () => {
  const mouseX = useSpring(0, { duration: 0.1 });
  const mouseY = useSpring(0, { duration: 0.1 });

  const distanceFromTarget = useMotionValue(MAX_DISTANCE);
  const size = useTransform(distanceFromTarget, [MIN_DISTANCE, MAX_DISTANCE], [75, 400]);
  const borderWidth = useTransform(distanceFromTarget, [MIN_DISTANCE, MAX_DISTANCE], [3, 2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = document.getElementById('eagle-vision-target');
      if (target) {
        const targetRect = target?.getBoundingClientRect();
        const calculatedDistance = Math.sqrt(
          (e.clientX - targetRect.left - targetRect.width / 2) ** 2 +
            (e.clientY - targetRect.top - targetRect.height / 2) ** 2
        );
        distanceFromTarget.set(calculatedDistance);
      }

      mouseX.set(e.clientX - size.get() / 2);
      mouseY.set(e.clientY - size.get() / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, size]);

  return createPortal(
    <div className="fixed z-[99999] top-0 left-0 inset-0 pointer-events-none">
      <style>
        {\`
            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            .ring {
                animation: rotate 2s linear infinite;
            }
            .ring-reverse {
                animation-direction: reverse;
            }
        \`}
      </style>
      <Ring x={mouseX} y={mouseY} size={size} borderWidth={borderWidth} />
    </div>,
    document.body
  );
};

const Target = ({ children }: { children: React.ReactNode }) => {
  return <div id="eagle-vision-target">{children}</div>;
};

export default EagleVision;
export { Target };
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `// put this inside your main component
<EagleVision />

// then wrap your content in the Target component
<Target>
  <YourContent />
</Target>`
      }
    ]
  }
};
