import TradingCardDemo from '@/components/trading-card-demo';
import { Document } from '../main';

export const tradingCardPreview = (
  <div className="h-full w-full flex items-center justify-center scale-50">
    <TradingCardDemo />
  </div>
);

export const tradingCard: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Trading Card',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Trading Card',
        content:
          'Interactive React Trading Card component with 3D hover animations. Built with Framer Motion and TypeScript, featuring dynamic mouse tracking, smooth transitions, and responsive design. Perfect for showcasing profiles, characters, or products with engaging visual effects.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <TradingCardDemo />
          </div>
        )
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion tailwindcss`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file trading-card.tsx in your components folder and paste this code',
        code: `import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

interface TradingCardProps {
  imageUrl: string;
  rank: number;
  name: string;
  description: string;
}

const TradingCard: React.FC<TradingCardProps> = ({ imageUrl, rank, name, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const backgroundControls = useAnimationControls();
  const contentControls = useAnimationControls();
  const cardControls = useAnimationControls();

  const onMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    contentControls.start({ x: -300 });
    backgroundControls.start({ scale: 1.05, opacity: 1 });
  };

  const onMouseLeave = () => {
    contentControls.start({ x: 0, transition: { delay: 0.5 } });
    backgroundControls.start({ scale: 0.95, opacity: 0.4 });
    cardControls.start({ transform: \`rotateY(0deg) rotateX(0deg)\` });
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;

    const xd = (mx - width / 2) / 10;
    const yd = (height / 2 - my) / 10;

    cardRef.current.style.transform = \`perspective(1000px) rotateY(\${xd}deg) rotateX(\${yd}deg)\`;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      }}
      style={{
        transformStyle: 'preserve-3d'
      }}
      animate={cardControls}
      className="flex flex-col hover:scale-105 transition-all duration-200 ease-linear items-start justify-end rounded-lg relative shadow-xl overflow-hidden h-[400px] w-[300px] cursor-pointer border-[1px] border-neutral-800"
    >
      <motion.div
        className="h-full w-full absolute z-0"
        initial={{
          opacity: 0.4,
          scale: 0.95
        }}
        animate={backgroundControls}
        transition={{ duration: 0.7, ease: 'backOut' }}
      >
        <div className="h-full w-full inset-0 bg-cover bg-center">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>
      </motion.div>
      <div className="font-semibold absolute top-5 right-5 z-10 text-white/70">#{rank}</div>
      <motion.div
        animate={contentControls}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="p-5 h-full w-full flex flex-col justify-end bg-transparent z-10 opacity-90"
      >
        <div className="font-medium">
          {name.split(' ').map((word) => {
            return (
              <div
                key={word}
                className="flex flex-col items-start justify-start text-4xl font-bold"
              >
                {word} <br />
              </div>
            );
          })}
        </div>
        <p className="text-sm text-white/90">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default TradingCard;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `import TradingCard from './ui/trading-card';

const TradingCardDemo = () => {
  const cards = [
    {
      imageUrl: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMdo7u44DpEAkCcBT6MsuPK2yhGzx8aIU5obVlp',
      rank: 7,
      name: 'Neymar Jr',
      description:
        "Genius on the field, Neymar's journey is a testament to talent, resilience, and the pursuit of excellence. His electrifying skills and unwavering determination make him a force to be reckoned with."
    },
    {
      imageUrl: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMdZrkXcU6sM1fhWrqco2HGsiP6knYBUV47mRvA',
      rank: 10,
      name: 'Lionel Messi',
      description:
        "Unstoppable force, unrivaled skill - Messi's legacy is built on precision, perseverance, and a relentless drive to redefine greatness on the field."
    },
    {
      imageUrl: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMddKZzHaIWPBmp7t6OxSiRdMrTJ4l3g1KX0fqj',
      rank: 7,
      name: 'Cristiano Ronaldo',
      description:
        "Legendary striker, Ronaldo's career is a testament to relentless ambition, unmatched talent, and a relentless pursuit of excellence. His journey is a story of resilience, determination, and a relentless drive to redefine greatness on the field."
    }
  ];
  return (
    <div className="h-[700px] flex flex-col items-start justify-start lg:items-center lg:justify-center w-full gap-6">
      <p className="md:text-2xl font-bold w-full text-center lg:mt-0 mt-10 ">
        The greatest to have ever played
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row w-full items-center justify-center gap-6">
        {cards.map((card, index) => (
          <div className="w-full lg:w-fit flex items-center justify-center">
            <TradingCard key={index} {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingCardDemo;
`
      }
    ]
  }
};
