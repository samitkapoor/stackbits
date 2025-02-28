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
    <div className="w-full flex flex-col items-center justify-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
      <p className="text-white/60 text-lg sm:text-xl md:text-2xl font-semibold mt-5 sm:mt-8 md:mt-10">
        Built For The Modern Stack.
      </p>
      <div className="max-w-full sm:max-w-[90%] md:max-w-[95%] lg:max-w-[1100px] w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-5 sm:mt-8 md:mt-10 px-2 sm:px-4">
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
            className="flex items-center justify-center bg-neutral-600/30 px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-3 md:py-4 lg:py-5 rounded-xl border-2 border-neutral-600 gap-2 sm:gap-3 md:gap-4 lg:gap-5"
          >
            <Image
              src={tech.image}
              alt={tech.name}
              width={24}
              height={24}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="text-white/60 text-base sm:text-lg lg:text-xl my-3 sm:my-4 md:my-5 max-w-3xl text-center">
        StackBits is your ultimate developer toolkit—offering ready-to-use UI components and backend
        utilities that snap into your projects seamlessly. Stop rewriting the same code—just copy,
        paste, and build faster!
      </p>
    </div>
  );
};

export default TechStack;
