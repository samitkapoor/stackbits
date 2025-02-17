import { motion } from 'framer-motion';
import React, { useRef } from 'react';

const SkewedText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const pRef = useRef<HTMLParagraphElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (!pRef.current) return;

    const rect = pRef.current.getBoundingClientRect();

    // ? Making sure the values of y remain between 30 and -30
    const posY: number = Math.max(e.clientX - rect.left, 0);
    let y = Math.min(posY / rect.width, 1) * 60;
    if (y < 30) y = +(30 - y);
    else if (y >= 30) y = -(y - 30);

    // ? Making sure the values of x remain between 10 and -10
    const posX: number = Math.max(e.clientY - rect.top, 0);
    let x = Math.min(posX / rect.height, 1) * 20;
    if (x < 10) x = +(10 - x);
    else if (x >= 10) x = -(x - 10);

    if (posY >= 0) {
      pRef.current.style.transform = `perspective(300px) rotateX(${x + 10}deg) rotateY(${
        y + 3
      }deg)`;
    }
  };

  return (
    <div
      onMouseMove={onMouseMove}
      style={{
        transform: `perspective(300px) rotateX(20deg) rotateY(3deg)`
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
        className={`font-bold opacity-0 text-center w-[75%] italic ${className}`}
      >
        {children}
      </motion.p>
    </div>
  );
};

export default SkewedText;
