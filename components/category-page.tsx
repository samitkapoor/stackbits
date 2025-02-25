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
    return <div className="max-w-[1000px] w-full">Something went wrong.</div>;
  }

  const { title, children } = doc;

  return (
    <div className="max-w-[1000px] w-full flex flex-col h-full xl:px-10">
      <p className="font-semibold text-2xl">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5">
        {children.map((child, i) => {
          return (
            <Link href={child.href} key={child.name + i}>
              <motion.div
                style={{
                  background: 'radial-gradient(circle at center, transparent 30%, #cbcbcb15)'
                }}
                whileHover={{
                  background: 'radial-gradient(circle at center, transparent 30%, #cbcbcb20)',
                  boxShadow: '12px 12px 0px -4px #FACC14A5',
                  y: -10,
                  x: -7,
                  transition: { duration: 0.3 }
                }}
                whileTap={{
                  y: 0,
                  x: 0,
                  boxShadow: 'none'
                }}
                className="flex flex-col gap-2 rounded-2xl px-2 pt-2 hover:bg-neutral-900 border-[1px] border-neutral-900"
              >
                <div className="h-[300px] border-b-[1px] border-neutral-800 rounded-xl flex items-center overflow-hidden justify-center">
                  {child?.preview}
                </div>
                <p className="py-4 px-2">{child.name}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
