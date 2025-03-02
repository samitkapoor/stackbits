import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

import { getCategory } from '@/data/main';

type CategoryPageProps = {
  docId: string;
};

const CategoryPage = ({ docId }: CategoryPageProps) => {
  const [doc] = getCategory(docId);

  if (!doc) {
    return (
      <div className="max-w-[1000px] w-full p-8 rounded-lg bg-black/20 backdrop-blur-md border border-white/5 text-center">
        <p className="text-xl text-gray-300">Unable to load category content</p>
      </div>
    );
  }

  const { title, children } = doc;

  return (
    <div className="w-full flex flex-col h-full xl:px-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="font-bold text-3xl text-white tracking-tight">{title}</p>
        <div className="h-px w-12 bg-white/20 mt-3" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {children.map((child, i) => {
          return (
            <Link href={child.href} key={child.name + i} className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i < 4 ? i * 0.1 : 0.1, duration: 0.2 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2, ease: 'easeOut' }
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="relative flex flex-col rounded-xl overflow-hidden bg-black/30 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/5 h-full"
              >
                {/* Preview image container */}
                <div className="relative h-[300px] overflow-hidden border-b border-white/5">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  >
                    {child?.preview}
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-2 flex-grow">
                  <p className="text-lg font-medium text-white/90 group-hover:text-white">
                    {child.name}
                  </p>
                </div>

                {/* Subtle indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100" />
              </motion.div>
            </Link>
          );
        })}
      </div>

      <div className="p-36 xl:block hidden"></div>
    </div>
  );
};

export default CategoryPage;
