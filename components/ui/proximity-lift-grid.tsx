'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';

type ProximityLiftGridItem = {
  image: string;
  title: string;
  description: string;
};

type ProximityLiftGridItemProps = {
  item: ProximityLiftGridItem;
};

const ProximityLiftGridItem = ({ item }: ProximityLiftGridItemProps) => {
  const distance = useMotionValue(0);
  const grayScale = useTransform(distance, [0, 100], [0, 1]);
  const scale = useTransform(distance, [0, 100], [1.1, 1]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, right, bottom } = ref.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };

      const distanceFromLeft = left - clientX;
      const distanceFromRight = clientX - right;
      const distanceFromTop = top - clientY;
      const distanceFromBottom = clientY - bottom;

      let dist = 0;
      const positiveDistances = [];
      if (distanceFromLeft > 0) positiveDistances.push(distanceFromLeft);
      if (distanceFromRight > 0) positiveDistances.push(distanceFromRight);
      if (distanceFromTop > 0) positiveDistances.push(distanceFromTop);
      if (distanceFromBottom > 0) positiveDistances.push(distanceFromBottom);

      dist = positiveDistances.length > 0 ? Math.max(...positiveDistances) : 0;
      const maxDistance = 50;
      const clampedDistance = Math.min(Math.max(dist, 0), maxDistance);

      distance.set(clampedDistance);
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);

  return (
    <motion.div
      style={{
        filter: useTransform(grayScale, (value) => `grayscale(${value})`),
        scale
      }}
      ref={ref}
      className="flex relative gap-1 flex-col items-start justify-start w-[200px]"
    >
      <div className="w-full h-[200px] rounded-lg overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={300}
          className={`w-full h-[200px] object-cover transition-transform duration-300`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium">{item.title}</h3>
        <p className="mt-0 text-xs text-neutral-500 line-clamp-2 overflow-hidden">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

type ProximityLiftGridProps = {
  items?: ProximityLiftGridItem[];
};

const ProximityLiftGrid = ({ items = [] }: ProximityLiftGridProps) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-8 mx-12">
      {items.map((item) => (
        <ProximityLiftGridItem key={item.image} item={item} />
      ))}
    </div>
  );
};

export default ProximityLiftGrid;
