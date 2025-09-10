import { motion } from 'framer-motion';
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

    pRef.current.style.transform = `perspective(1000px) rotateY(${xd + 15}deg) rotateX(${yd}deg)`;
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
        className={`font-bold transition-all duration-75 opacity-0 text-center w-[75%] italic ${className}`}
      >
        {children}
      </motion.p>
    </div>
  );
};

export default SkewedText;
