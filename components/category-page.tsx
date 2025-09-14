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
    <div className="w-full max-w-[1440px] place-self-center flex flex-col h-full px-5">
      <p className="font-medium text-xl text-white mb-8 px-2">{title}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {children.map((child, i) => {
          return (
            <Link href={child.href} key={child.name + i} className="group transition-all">
              <motion.div
                key={`${child.name}-${i}-component`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i < 6 ? i * 0.1 : 0.1, duration: 0.2 }}
                className="relative flex flex-col gap-4 overflow-visible h-full w-full"
              >
                <div className="rounded-3xl p-[6px] bg-[#131313] group-hover:bg-[#1a1a1a] transition-all">
                  <div className="flex flex-col gap-4 relative overflow-hidden h-full w-full rounded-2xl border border-white/15 group-hover:border-white/40 transition-all bg-black">
                    {/* Preview image container */}
                    <div className="rounded-xl overflow-hidden w-full h-[300px]">
                      {child?.preview}
                      {/* <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" /> */}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-grow px-2 group-hover:px-4 transition-all">
                  <p className="text-base font-medium text-white/70 group-hover:text-white">
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
