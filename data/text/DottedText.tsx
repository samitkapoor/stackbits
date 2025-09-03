import { Document } from '../main';
import DottedText from '@/components/ui/dotted-text';

export const dottedTextPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <DottedText text="LIONEL MESSI" />
  </div>
);

export const dottedText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Dotted Text',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'Dotted Text',
        content:
          'Text made up of dots arranged in a grid pattern. Each letter is created using dots that can change colors and animate with different effects and timing.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="flex flex-col gap-5">
            <DottedText text="LIONEL" />
            <DottedText text="MESSI" />
          </div>
        )
      },
      {
        heading: 'Dotted Text',
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
  // ... other characters defined in the original file
  ' ': [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ]
};

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
    '#1A0B33', '#5D2E8C', '#F25C54', '#F7B267', '#FFD166',
    '#FFEDDF', '#F7B267', '#F25C54', '#5D2E8C', '#1A0B33'
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
    const matrix = charMatrix[upperChar] || charMatrix[' '];

    return (
      <div
        key={charIndex}
        style={{
          display: 'inline-block',
          marginRight: \`\${spacing * 3}px\`,
          verticalAlign: 'top'
        }}
      >
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
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
        code: `<DottedText text="LIONEL MESSI" />`
      }
    ]
  }
};
