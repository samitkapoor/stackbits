import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MasonryGridProps {
  items: { image: string; title: string; description: string }[];
  columns?: number | undefined;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ items, columns = undefined }) => {
  if (!items || items.length === 0) {
    return <div className="text-center p-4">No items to display</div>;
  }

  return (
    <div
      style={{
        columns: columns
      }}
      className={`${
        !columns && 'columns-1 sm:columns-2 md:columns-3 lg:columns-4'
      } gap-2 overflow-y-auto p-3 w-full`}
    >
      {items.map((item, index) => {
        // Calculate row number based on screen size and index
        const getColumnCount = () => {
          if (typeof window === 'undefined') return 1;
          const width = window.innerWidth;
          if (width >= 1024) return 4; // lg
          if (width >= 768) return 3; // md
          if (width >= 640) return 2; // sm
          return 1;
        };

        const columnCount = getColumnCount();
        const rowIndex = Math.floor(index / columnCount);

        return (
          <motion.div
            key={index}
            className="break-inside-avoid mb-4 relative group rounded-xl overflow-hidden p-1 border-[1px] border-transparent hover:border-[1px] hover:border-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: rowIndex * 0.1,
                ease: 'easeOut'
              }
            }}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
          >
            <div className="relative overflow-hidden">
              <div className="relative w-full flex gap-1 flex-col items-start justify-start">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto transition-transform duration-300 rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onError={(e) => {
                    console.error(`Error loading image: ${item.image}`);
                  }}
                />
                <div className="w-full">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="mt-0 text-xs text-neutral-500 line-clamp-2 overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MasonryGrid;
