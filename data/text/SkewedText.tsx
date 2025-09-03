import { Document } from '../main';
import SkewedText from '@/components/ui/skewed-text';

export const skewedTextPreview = (
  <div className="h-full w-full flex items-center justify-center p-5">
    <SkewedText className="text-4xl">Skewed Text</SkewedText>
  </div>
);

export const skewedText: Document = {
  sideBar: {
    group: 'Text',
    name: 'Skewed Text',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Skewed Text',
        content:
          'Text that moves and tilts in 3D when you hover over it with your mouse. Creates an interactive, dynamic feel.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: <SkewedText className="text-4xl">Skewed Text</SkewedText>
      },
      {
        heading: 'Skewed Text',
        sectionType: 'component',
        description: 'Create a file skewed-text.tsx in your components folder and paste this code',
        code: `import { motion } from 'framer-motion';
import React, { useRef } from 'react';

const SkewedText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const pRef = useRef<HTMLParagraphElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!pRef.current) return;

    const rect = pRef.current.getBoundingClientRect();

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;

    const xd = (mx - width / 2) / 8;
    const yd = (height / 2 - my) / 8;

    pRef.current.style.transform = \`perspective(1000px) rotateY(\${xd + 15}deg) rotateX(\${yd}deg)\`;
  };

  return (
    <div
      onMouseMove={onMouseMove}
      style={{
        transform: \`perspective(300px) rotateX(20deg) rotateY(3deg)\`
      }}
      className="w-full flex items-center justify-center p-10"
    >
      <motion.p
        ref={pRef}
        style={{
          transform: 'perspective(300px) rotateX(10deg) rotateY(3deg)',
          textShadow: '0 0 10px #00ffa39a, 0 0 30px #00ffa39a'
        }}
        initial={{
          y: 300,
          rotateX: 0,
          opacity: 0
        }}
        animate={{
          y: 0,
          rotateX: 20,
          opacity: 1,
          transition: { ease: 'backOut', duration: 1.2 }
        }}
        className={\`font-bold transition-all duration-75 opacity-0 text-center w-[75%] italic \${className}\`}
      >
        {children}
      </motion.p>
    </div>
  );
};

export default SkewedText;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<SkewedText className="text-4xl">Skewed Text</SkewedText>`
      }
    ]
  }
};
