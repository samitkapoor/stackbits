import PixelatedText from '@/components/ui/pixelated-text';
import { Document } from '../main';

export const pixelatedTextPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-10 gap-5">
    <PixelatedText
      text="BEEP BOOP HUMAN DETECTED"
      variant="solid"
      color="#00ff00"
      speed={70}
      pixelWidth={4}
      pixelHeight={4}
    />
  </div>
);

export const pixelatedText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Pixelated Text',
    order: 6
  },
  content: {
    sections: [
      {
        heading: 'Pixelated Text',
        content:
          'Create stunning retro-style text animations with the Pixelated Text component. This component transforms any text into animated pixelated characters that scroll across an LED-style grid, perfect for creating that nostalgic 80s arcade aesthetic. Choose from multiple visual effects including solid colors, disco randomness, wave gradients, and retro color cycling. Fully customizable with adjustable pixel sizes, animation speeds, and colors to match your design needs.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
            <PixelatedText
              text="NEXT STATION IS MOUNT EVEREST"
              variant="solid"
              color="#00ff00"
              speed={40}
            />
            <PixelatedText
              text="DOORS WILL OPEN ON THE LEFT"
              variant="solid"
              color="white"
              pixelWidth={4}
              pixelHeight={4}
            />
            <PixelatedText
              text="Everybody dance now"
              variant="disco"
              pixelWidth={8}
              pixelHeight={8}
              speed={100}
            />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file gooey-words.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useEffect, useState } from 'react';

const characters = {
  A: [
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 1]
  ],
  B: [
    [1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [1, 1, 1, 1, 0]
  ],
  C: [
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  D: [
    [1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 0, 0]
  ],
  E: [
    [1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
  ],
  F: [
    [1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0]
  ],

  G: [
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0]
  ],
  H: [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 1]
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1]
  ],
  J: [
    [0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0]
  ],
  K: [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 1]
  ],
  L: [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
  ],
  M: [
    [1, 1, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 0, 0, 1, 1, 1]
  ],
  N: [
    [1, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 1]
  ],
  O: [
    [0, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0]
  ],
  P: [
    [1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0]
  ],
  Q: [
    [0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1]
  ],
  R: [
    [1, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 1]
  ],
  S: [
    [0, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 0]
  ],
  T: [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0]
  ],
  U: [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0]
  ],
  V: [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0]
  ],
  W: [
    [1, 1, 1, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0]
  ],
  X: [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 0, 1, 1, 1]
  ],
  Y: [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0]
  ],
  Z: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ],
  // Numbers 0-9
  0: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  1: [
    [0, 1, 0],
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1]
  ],
  2: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ],
  3: [
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  4: [
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1]
  ],
  5: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  6: [
    [0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  7: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0]
  ],
  8: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  9: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ]
};

const PixelatedText = ({
  text,
  pixelHeight = 6,
  pixelWidth = 6,
  panelRows = 9,
  panelColumns = 70,
  variant = 'solid',
  color = 'white',
  speed = 50
}: {
  text: string;
  pixelHeight?: number;
  pixelWidth?: number;
  panelRows?: number;
  panelColumns?: number;
  variant?: 'solid' | 'disco' | 'wave' | 'retro';
  color?: string;
  speed?: number;
}) => {
  const modifiedText = text.toUpperCase();
  const [displacement, setDisplacement] = useState(0);
  const [animationTime, setAnimationTime] = useState(0);

  const grid = {
    rows: panelRows,
    columns: panelColumns
  };

  const textArray = modifiedText.split('');
  const totalTextWidth =
    textArray.reduce((width, char) => {
      return width + (characters[char as keyof typeof characters]?.[0]?.length || 0) * pixelWidth;
    }, 0) +
    (textArray.length - 1) * 20; // 20px = gap-5

  const stepSize = pixelWidth + 2;
  const maxDisplacementSteps = Math.ceil((panelColumns * pixelWidth + totalTextWidth) / stepSize);

  const getWaveColor = (time: number, cellIndex: number, totalCells: number) => {
    const wavePosition = (time * 0.1) % (totalCells + 20);
    const distance = Math.abs(cellIndex - wavePosition);
    const intensity = Math.max(0, 1 - distance / 10);
    const hue = (time * 2) % 360;
    return \`hsla(\${hue}, 100%, \${85 + intensity * 15}%, \${0.7 + intensity * 0.3})\`;
  };

  const getRetroColor = (time: number, offset: number = 0) => {
    const retroColors = ['#ff1493', '#00bfff', '#ffff00', '#ff69b4', '#32cd32'];
    const index = Math.floor((time * 0.12 + offset) % retroColors.length);
    return retroColors[index];
  };

  const getDiscoColor = (charIndex: number, time: number) => {
    const discoColors = [
      '#ff1493',
      '#00ff00',
      '#ffff00',
      '#ff4500',
      '#1e90ff',
      '#ff69b4',
      '#00ffff',
      '#ff8c00',
      '#9400d3',
      '#32cd32'
    ];

    const colorIndex = (charIndex + Math.floor(time * 0.1)) % discoColors.length;
    return discoColors[colorIndex];
  };

  const getPixelColor = (cell: number, variant: string, charIndex: number, cellIndex: number) => {
    if (!cell) return 'transparent';

    const globalCellIndex = charIndex * 100 + cellIndex;

    switch (variant) {
      case 'solid':
        return color;
      case 'disco':
        return getDiscoColor(charIndex, animationTime);
      case 'wave':
        return getWaveColor(animationTime, globalCellIndex, textArray.length * 50);
      case 'retro':
        return getRetroColor(animationTime, globalCellIndex);
      default:
        return color;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplacement((prev) => (prev + 1) % (maxDisplacementSteps + 1));
    }, speed);

    return () => clearInterval(interval);
  }, [maxDisplacementSteps]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationTime((prev) => prev + 1);
    }, 50);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="flex flex-col relative overflow-hidden">
      {/* LED panel */}
      <span className="flex flex-col items-center justify-center gap-0.5">
        {Array.from({ length: grid.rows }).map((_, index) => {
          return (
            <span key={index + 'led'} className="flex items-center gap-0.5 ">
              {Array.from({ length: grid.columns }).map((_, index) => {
                return (
                  <span
                    key={index}
                    style={{
                      width: pixelWidth,
                      height: pixelHeight
                    }}
                    className="bg-zinc-800 block"
                  ></span>
                );
              })}
            </span>
          );
        })}
      </span>
      {/* Text */}
      <span
        className="flex flex-nowrap items-center gap-5 absolute top-1/2 left-0"
        style={{
          transform: \`translateX(\${
            panelColumns * pixelWidth - displacement * stepSize
          }px) translateY(-50%)\`
        }}
      >
        {modifiedText.split('').map((char, charIndex) => {
          return (
            <span
              key={text + charIndex}
              className="flex flex-col items-center justify-center gap-0.5"
            >
              {characters[char as keyof typeof characters]?.map((row, rowIndex) => {
                return (
                  <span
                    key={text + charIndex + rowIndex}
                    className="flex items-center justify-center gap-0.5"
                  >
                    {row.map((cell, cellIndex) => {
                      return (
                        <span
                          key={text + charIndex + rowIndex + cellIndex}
                          style={{
                            width: pixelWidth,
                            height: pixelHeight,
                            backgroundColor: getPixelColor(cell, variant, charIndex, cellIndex)
                          }}
                          className="block"
                        ></span>
                      );
                    })}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default PixelatedText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<PixelatedText text="BUILT DIFFERENT" variant="solid" color="white" />
<PixelatedText text="DANCE FLOOR" variant="disco" pixelWidth={8} />
<PixelatedText text="TSUNAMI VIBES" variant="wave" />
<PixelatedText text="TOTALLY RAD" variant="retro" pixelHeight={8} />`
      }
    ]
  }
};
