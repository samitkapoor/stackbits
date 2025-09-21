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
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4">
        {techStack.map((tech, index) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: 'blur(10px)'
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)'
            }}
            transition={{
              duration: 0.2,
              delay: index * 0.05
            }}
            key={tech.name}
            className="flex items-center justify-center"
          >
            <Image
              src={tech.image}
              alt={tech.name}
              width={16}
              height={16}
              style={{
                filter: 'grayscale(100%)'
              }}
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
