import { motion, useAnimationControls } from 'framer-motion';
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
    cardControls.start({ transform: `rotateY(0deg) rotateX(0deg)` });
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

    cardRef.current.style.transform = `perspective(1000px) rotateY(${xd}deg) rotateX(${yd}deg)`;
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
