import { Document } from '../main';
import { cnCode, installDependenciesCode } from '@/constants/code';
import LeaveRating from '@/components/components/leave-rating';
import VideoPreview from '@/components/ui/video-preview';

export const leaveRatingPreview = (
  <div className="flex flex-wrap items-center gap-10 justify-center w-full h-full">
    <VideoPreview videoUrl="/demos/leave-rating.mp4" />
  </div>
);

export const leaveRating: Document = {
  sideBar: {
    group: 'Components',
    name: 'Leave Rating',
    order: 2
  },
  content: {
    sections: [
      {
        heading: 'Leave Rating',
        content:
          'A fun and interactive rating component that lets users share their experience with a smiley face that changes based on their rating. Users can hover over star ratings to see the face transform from sad to happy, making feedback collection engaging and visually appealing.',
        sectionType: 'paragraph'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="w-full flex items-center justify-center bg-neutral-400 h-full">
            <LeaveRating
              question="How was your experience?"
              buttonText="Submit"
              onSubmit={(selected) => console.log(selected)}
            />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true, lucide: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file leave-rating.tsx in your components folder and paste this code',
        code: `'use client';

import { Star } from 'lucide-react';
import React, { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { cn } from '@/lib/utils';

const MOOD_COLORS = ['#f5f5dc', '#f0f0a0', '#f5e907', '#faf32b', '#FFFF00'];
const LABELS = ['Very Bad', 'Bad', 'Average', 'Good', 'Very Good'];

interface RatingControllerProps {
  hovered: number | false;
  setHovered: (hovered: number | false) => void;
  selected: number | false;
  setSelected: (selected: number | false) => void;
}

const RatingController = ({
  hovered,
  setHovered,
  selected,
  setSelected
}: RatingControllerProps) => {
  return (
    <div onMouseLeave={() => setHovered(false)} className="flex items-center justify-center gap-2">
      {Array.from({ length: 5 }).map((_, index) => {
        const isActive =
          (hovered !== false && hovered >= index) ||
          (hovered === false && selected !== false && selected >= index);

        return (
          <div className="group relative" key={\`star-\${index}\`}>
            <Star
              size={32}
              strokeWidth={1}
              stroke={isActive ? '#000000' : '#00000042'}
              fill={isActive ? '#FFFF00' : 'none'}
              onMouseEnter={() => setHovered(index)}
              onClick={() => setSelected(index)}
              className="cursor-pointer transition-all duration-100 ease-out"
            />
            <AnimatePresence mode="popLayout">
              {hovered !== false && hovered === index && (
                <motion.p
                  key={\`label-\${index}\`}
                  initial={{
                    opacity: 0,
                    transform: 'translateY(-7px) translateX(-50%) scale(0.7)'
                  }}
                  animate={{
                    opacity: 1,
                    transform: 'translateY(-7px) translateX(-50%) scale(1)'
                  }}
                  exit={{
                    opacity: 0,
                    transform: 'translateY(-7px) translateX(-50%) scale(0.7)'
                  }}
                  transition={{
                    duration: 0.1,
                    ease: 'easeOut'
                  }}
                  className={cn(
                    'absolute bottom-full left-1/2 -translate-x-1/2 px-2 py-0.5 text-sm bg-zinc-900 shadow-md whitespace-nowrap',
                    'rounded-md'
                  )}
                >
                  {LABELS[index]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

interface SmileSvgProps {
  hovered: number | false;
  selected: number | false;
}

const SmileSvg = ({ hovered, selected }: SmileSvgProps) => {
  const active = hovered !== false ? hovered : selected !== false ? selected : 4;

  // 🎨 Mouth shape transitions
  const smileTransition = [
    'M 34 76 Q 48 42 66 76',
    'M 35 72 Q 51 55 66 72',
    'M 35 68 Q 50 70 66 68',
    'M 34 65 Q 50 80 66 64',
    'M 33 63 Q 50 95 67 64'
  ];

  const mouthLinePoints = [
    { x1: 34, y1: 76, x2: 66, y2: 76 },
    { x1: 35, y1: 72, x2: 66, y2: 72 },
    { x1: 35, y1: 68, x2: 66, y2: 68 },
    { x1: 34, y1: 65, x2: 66, y2: 64 },
    { x1: 33, y1: 63, x2: 67, y2: 64 }
  ];

  const eyeStates = [
    { cxL: 39, cxR: 61, cy: 42, ry: 14, pupilOffsetY: 6 },
    { cxL: 39.5, cxR: 60.5, cy: 41, ry: 13, pupilOffsetY: 5.5 },
    { cxL: 40, cxR: 60, cy: 40, ry: 12, pupilOffsetY: 5 },
    { cxL: 40.5, cxR: 59.5, cy: 39, ry: 10, pupilOffsetY: 4 },
    { cxL: 41, cxR: 59, cy: 38.5, ry: 8, pupilOffsetY: 3.5 }
  ];

  const faceStates = [
    { scaleX: 1.05, scaleY: 0.95, rotate: -8 },
    { scaleX: 1.02, scaleY: 0.98, rotate: -1 },
    { scaleX: 1, scaleY: 1, rotate: 0 },
    { scaleX: 0.99, scaleY: 1.025, rotate: 1 },
    { scaleX: 0.98, scaleY: 1.05, rotate: 5 }
  ];

  const eye = eyeStates[active];
  const face = faceStates[active];

  return (
    <div className="size-[200px]">
      <MotionConfig transition={{ duration: 0.5, type: 'spring', bounce: 0.25 }}>
        <svg viewBox="0 0 100 100">
          {/* Animated face base */}
          <motion.g
            animate={{
              scaleX: face.scaleX,
              scaleY: face.scaleY,
              rotate: face.rotate,
              transformOrigin: '50% 50%'
            }}
          >
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              animate={{ fill: MOOD_COLORS[active] }}
              stroke="#000"
              strokeWidth={1}
            />

            {/* Eyes */}
            <motion.ellipse
              animate={{ cy: eye.cy, ry: eye.ry, cx: eye.cxL }}
              rx="6"
              fill="white"
              stroke="#000"
              strokeWidth={1}
            />
            <motion.ellipse
              animate={{
                cy: eye.cy + eye.pupilOffsetY,
                cx: eye.cxL,
                ry: eye.ry / 2
              }}
              rx="4"
              fill="black"
              stroke="#000"
              strokeWidth={1}
            />

            <motion.ellipse
              animate={{ cy: eye.cy, ry: eye.ry, cx: eye.cxR }}
              rx="6"
              fill="white"
              stroke="#000"
              strokeWidth={1}
            />
            <motion.ellipse
              animate={{
                cy: eye.cy + eye.pupilOffsetY,
                cx: eye.cxR,
                ry: eye.ry / 2
              }}
              rx="4"
              fill="black"
              stroke="#000"
              strokeWidth={1}
            />

            {/* Mouth curve */}
            <motion.path
              initial={{ d: smileTransition[4] }}
              animate={{ d: smileTransition[active] }}
              fill="white"
              stroke="#000"
              strokeWidth={1.5}
              strokeLinecap="round"
            />

            {/* Mouth base line */}
            <motion.line
              initial={{
                x1: mouthLinePoints[4].x1,
                x2: mouthLinePoints[4].x2,
                y1: mouthLinePoints[4].y1,
                y2: mouthLinePoints[4].y2
              }}
              animate={{
                x1: mouthLinePoints[active].x1,
                x2: mouthLinePoints[active].x2,
                y1: mouthLinePoints[active].y1,
                y2: mouthLinePoints[active].y2
              }}
              stroke="#000"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          </motion.g>
        </svg>
      </MotionConfig>
    </div>
  );
};

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  return (
    <button
      {...props}
      className="bg-blue-500 shadow-md text-sm active:scale-[0.97] hover:bg-blue-600 font-medium text-white px-4 py-2 rounded-md"
    >
      {children}
    </button>
  );
};

interface LeaveRatingProps {
  onSubmit?: (selected: number | false) => void;
  question?: string;
  buttonText?: string;
}

const LeaveRating = ({
  onSubmit,
  question = 'How was your experience?',
  buttonText = 'Submit'
}: LeaveRatingProps) => {
  const [hovered, setHovered] = useState<number | false>(false);
  const [selected, setSelected] = useState<number | false>(false);

  return (
    <div className="w-full max-w-xl p-10 flex flex-col items-center justify-center gap-6 bg-white rounded-3xl shadow-md border-[0.5px]">
      <SmileSvg hovered={hovered} selected={selected} />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-base text-black font-medium">{question}</p>
        <RatingController
          hovered={hovered}
          setHovered={setHovered}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <SubmitButton onClick={() => onSubmit?.(selected)}>{buttonText}</SubmitButton>
    </div>
  );
};

export default LeaveRating;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="w-full flex items-center justify-center bg-neutral-400 h-full">
  <LeaveRating
    question="How was your experience?"
    buttonText="Submit"
    onSubmit={(selected) => console.log(selected)}
  />
</div>`
      }
    ]
  }
};
