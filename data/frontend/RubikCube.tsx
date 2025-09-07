import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import RubikCube from '@/components/ui/rubik-cube';

export const rubikCubePreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-0 gap-5">
    <div className="w-full h-full flex items-center justify-center relative">
      <RubikCube />
    </div>
  </div>
);

export const rubikCube: Document = {
  sideBar: {
    group: 'Components',
    name: 'Rubik Cube',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Rubik Cube',
        content:
          "An interactive 3D Rubik's cube component with multiple dimensions, visual modes, and smooth drag-to-rotate animations.",
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-[700px] w-full flex flex-col md:flex-row gap-20 items-center justify-center relative px-10">
            <RubikCube dimensionMode="2x2" mode="glass" />
            <RubikCube />
            <RubikCube dimensionMode="4x4" mode="skeleton" />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file rubik-cube.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useAnimationControls } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const SIZE = 48;

const modes = ['skeleton', 'normal', 'glass'];
const dimensionModes = [
  { mode: '2x2', center: [] },
  { mode: '3x3', center: [4] },
  { mode: '4x4', center: [5, 6, 9, 10] }
];

const Piece = ({
  config,
  index,
  mode,
  isCenterPiece
}: {
  config: { color: string; position: string };
  index: number;
  mode: number;
  isCenterPiece: boolean;
}) => {
  // Enhanced glass mode colors with better combinations
  const getGlassColor = (baseColor: string, index: number) => {
    const colors = [
      'rgba(255, 255, 255, 0.15)', // White glass
      'rgba(173, 216, 230, 0.2)', // Light blue glass
      'rgba(240, 248, 255, 0.18)', // Alice blue glass
      'rgba(230, 230, 250, 0.16)', // Lavender glass
      'rgba(255, 250, 240, 0.17)', // Floral white glass
      'rgba(245, 245, 245, 0.19)', // White smoke glass
      'rgba(248, 248, 255, 0.14)', // Ghost white glass
      'rgba(250, 235, 215, 0.15)', // Antique white glass
      'rgba(255, 245, 238, 0.16)' // Seashell glass
    ];
    return colors[index % colors.length];
  };

  return (
    <motion.div
      style={{
        height: SIZE,
        width: SIZE
      }}
      animate={{
        backgroundColor:
          mode === 2
            ? getGlassColor(config.color, index)
            : mode === 0
            ? 'rgba(0, 0, 0, 0)'
            : config.color,
        filter: 'none',
        borderColor:
          mode === 0
            ? index % 2 === 0
              ? 'rgba(220, 220, 220, 1)'
              : 'rgba(200, 200, 200, 1)'
            : mode === 2
            ? 'rgba(255, 255, 235, 1)'
            : '#000000',
        backdropFilter: mode === 2 ? 'blur(4px)' : 'none'
      }}
      transition={{
        duration: 0.3,
        ease: 'linear',
        delay: index * 0.05
      }}
      className={cn('border-[1.5px] relative shrink-0', isCenterPiece && 'z-10')}
    >
      {isCenterPiece && mode !== 0 && (
        <>
          <div className="absolute top-0 left-0 -translate-x-[calc(50%+2px)] -translate-y-[calc(50%+2px)] rotate-45 w-3 h-3 bg-black z-[1000]" />
          <div className="absolute top-0 right-0 translate-x-[calc(50%+2px)] -translate-y-[calc(50%+2px)] rotate-45 w-3 h-3 bg-black z-[1000]" />
          <div className="absolute bottom-0 right-0 translate-x-[calc(50%+2px)] translate-y-[calc(50%+2px)] rotate-45 w-3 h-3 bg-black z-[1000]" />
          <div className="absolute bottom-0 left-0 -translate-x-[calc(50%+2px)] translate-y-[calc(50%+2px)] rotate-45 w-3 h-3 bg-black z-[1000]" />
        </>
      )}
    </motion.div>
  );
};

interface FaceProps {
  config: {
    color: string;
    position: string;
  };
  mode: number;
  dimensionMode: number;
}

const Face = ({ config, mode, dimensionMode }: FaceProps) => {
  const calculatedPosition = {
    rotateX: 0,
    rotateY: 0,
    translateY: 0,
    translateZ: 0,
    translateX: 0
  };
  const DISPLACEMENT_MULTIPLIER = dimensionMode === 0 ? 1 : dimensionMode === 1 ? 1.5 : 2;
  if (config.position === 'top') {
    calculatedPosition.rotateX = 90;
    calculatedPosition.translateY = -SIZE * DISPLACEMENT_MULTIPLIER;
  } else if (config.position === 'back') {
    calculatedPosition.translateZ = SIZE * DISPLACEMENT_MULTIPLIER;
  } else if (config.position === 'front') {
    calculatedPosition.translateZ = -SIZE * DISPLACEMENT_MULTIPLIER;
  } else if (config.position === 'bottom') {
    calculatedPosition.translateY = SIZE * DISPLACEMENT_MULTIPLIER;
    calculatedPosition.rotateX = -90;
  } else if (config.position === 'right') {
    calculatedPosition.rotateY = 90;
    calculatedPosition.translateX = SIZE * DISPLACEMENT_MULTIPLIER;
  } else if (config.position === 'left') {
    calculatedPosition.rotateY = -90;
    calculatedPosition.translateX = -SIZE * DISPLACEMENT_MULTIPLIER;
  }

  return (
    <motion.div
      style={{
        rotateX: calculatedPosition.rotateX,
        rotateY: calculatedPosition.rotateY,
        translateX: calculatedPosition.translateX,
        translateY: calculatedPosition.translateY,
        translateZ: calculatedPosition.translateZ,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'visible'
      }}
      className={cn(
        'grid absolute shrink-0',
        dimensionMode === 0 ? 'grid-cols-2' : dimensionMode === 1 ? 'grid-cols-3' : 'grid-cols-4'
      )}
    >
      {Array.from({ length: dimensionMode === 0 ? 4 : dimensionMode === 1 ? 9 : 16 }).map(
        (_, index) => {
          return (
            <Piece
              key={'face' + config.position + index}
              config={config}
              index={index}
              isCenterPiece={dimensionModes[dimensionMode].center.includes(index)}
              mode={mode}
            ></Piece>
          );
        }
      )}
    </motion.div>
  );
};

const RubikCube = ({
  mode = 'normal',
  dimensionMode = '3x3'
}: {
  mode?: 'skeleton' | 'normal' | 'glass';
  dimensionMode?: '2x2' | '3x3' | '4x4';
}) => {
  const controls = useAnimationControls();

  const faceColors = [
    { color: '#C41E3A', position: 'left' },
    { color: '#FF5800', position: 'right' },
    { color: '#009E60', position: 'top' },
    { color: '#0051BA', position: 'bottom' },
    { color: '#FFD500', position: 'front' },
    { color: '#ffffff', position: 'back' }
  ];

  // Motion values for interactive rotation
  const rotateX = useMotionValue(45);
  const rotateY = useMotionValue(45);

  // Transform mouse drag to rotation
  const dragRotateX = useTransform(rotateX, (value) => value);
  const dragRotateY = useTransform(rotateY, (value) => value);

  const handleDragEnd = async () => {
    // Animate back to starting position
    await Promise.all([
      animate(rotateX, 45, { duration: 0.8, ease: 'easeOut' }),
      animate(rotateY, 45, { duration: 0.8, ease: 'easeOut' })
    ]);

    controls.start({
      rotateX: [45, 405],
      rotateY: [45, -405],
      transition: {
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop'
      }
    });
  };

  useEffect(() => {
    handleDragEnd();
  }, []);

  const modeIndex = modes.indexOf(mode);
  const dimensionModeIndex = dimensionModes.findIndex((mode) => mode.mode === dimensionMode);

  return (
    <div className="flex items-center justify-center relative">
      <motion.div
        style={{
          height: SIZE * (dimensionModeIndex === 0 ? 2 : dimensionModeIndex === 1 ? 3 : 4),
          width: SIZE * (dimensionModeIndex === 0 ? 2 : dimensionModeIndex === 1 ? 3 : 4),
          perspective: '10000px',
          transformStyle: 'preserve-3d',
          rotateX: dragRotateX,
          rotateY: dragRotateY,
          cursor: 'grab'
        }}
        animate={controls}
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        drag
        dragConstraints={{ left: -0, right: 0, top: -0, bottom: 0 }}
        dragElastic={0.1}
        dragSnapToOrigin={true}
        onDrag={(event, info) => {
          // Map drag movement to rotation
          const sensitivity = 0.5;
          rotateY.set(rotateY.get() + info.delta.x * sensitivity);
          rotateX.set(rotateX.get() - info.delta.y * sensitivity);
        }}
        onDragStart={() => {
          controls.stop();
        }}
        onDragEnd={handleDragEnd}
        className="relative flex flex-wrap items-center justify-center"
      >
        {faceColors.map((config, index) => {
          // calculate when the face is in view
          return (
            <Face
              key={'face' + index}
              config={config}
              mode={modeIndex}
              dimensionMode={dimensionModeIndex}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default RubikCube;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<RubikCube dimensionMode="2x2" mode="glass" />
<RubikCube />
<RubikCube dimensionMode="4x4" mode="skeleton" />`
      }
    ]
  }
};
