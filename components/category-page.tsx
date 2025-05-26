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
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {children.map((child, i) => {
          return (
            <Link href={child.href} key={child.name + i} className="group transition-all">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i < 4 ? i * 0.1 : 0.1, duration: 0.2 }}
                className="relative flex flex-col gap-4 overflow-visible h-full w-full rounded-xl bg-black/30 backdrop-blur-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                {/* Preview image container */}
                <div className="relative group-hover:scale-110 transition-all duration-300 h-[300px] overflow-visible">
                  <div className="rounded-xl overflow-hidden w-full h-full">{child?.preview}</div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-grow">
                  <p className="text-lg font-medium text-white/90 group-hover:text-white">
                    {child.name}
                  </p>
                </div>
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
