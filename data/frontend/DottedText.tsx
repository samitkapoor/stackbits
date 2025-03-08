import DottedText from '@/components/ui/dotted-text';
import { Document } from '../main';

export const dottedTextPreview = (
  <div className="h-full w-full flex items-center justify-center">
    <DottedText text="LM10" />
  </div>
);

export const dottedText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Dotted Text',
    order: 12
  },
  content: {
    sections: [
      {
        heading: '⚪️ Dotted Text',
        content:
          'Create stunning dot matrix animations with this interactive React component powered by Framer Motion. Easily render letters and numbers in a retro pixel-style grid, perfect for eye-catching UI designs, loading screens, or creative typography effects. Fully customizable and optimized for smooth performance in modern web applications',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <DottedText text="Lionel" />
            <DottedText text="Messi" />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
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
        key={\`\${charIndex}\`}
        style={{
          display: 'inline-block',
          marginRight: \`\${spacing * 3}px\`,
          verticalAlign: 'top'
        }}
      >
        {matrix.map((row, rowIndex) => (
          <div key={\`\${rowIndex}\`} style={{ display: 'flex' }}>
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
        code: `<DottedText text="LM10" />`
      }
    ]
  }
};
