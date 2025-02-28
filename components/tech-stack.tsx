'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const techStack = [
    {
      image: '/javascript.svg',
      name: 'Javascript'
    },
    {
      image: '/typescript.svg',
      name: 'Typescript'
    },
    {
      image: '/react.svg',
      name: 'React'
    },
    {
      image: '/nextjs.svg',
      name: 'NextJS'
    },
    {
      image: '/nodejs.svg',
      name: 'NodeJS'
    },
    {
      image: '/express.svg',
      name: 'Express'
    },
    {
      image: '/css.svg',
      name: 'CSS'
    },
    {
      image: '/tailwindcss.svg',
      name: 'TailwindCSS'
    },
    {
      image: '/framermotion.png',
      name: 'Framer Motion'
    },
    {
      image: '/threejs.svg',
      name: 'ThreeJS'
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center mt-20">
      <p className="text-white/60 text-2xl font-semibold mt-10">Built For The Modern Stack.</p>
      <div className="max-w-[1100px] w-full flex flex-wrap items-center justify-center gap-5 mt-10">
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            whileHover={{
              rotateZ: 2,
              transition: {
                duration: 0.1,
                delay: 0
              }
            }}
            viewport={{
              once: true
            }}
            className="flex items-center justify-center bg-neutral-600/30 px-5 py-5 rounded-xl border-2 border-neutral-600 gap-5"
          >
            <Image src={tech.image} alt={tech.name} width={48} height={48} />
            <p className="text-white text-2xl">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
