import ProximityLiftGrid from '@/components/ui/proximity-lift-grid';
import { Document } from '../main';
import Image from 'next/image';

export const proximityLiftGridPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-0 gap-5">
    <div className="w-full h-full flex items-center justify-center relative">
      <Image
        src="/hoverliftgrid.png"
        alt="Proximity Lift Grid"
        width={1000}
        height={1000}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);

export const proximityLiftGrid: Document = {
  sideBar: {
    group: 'Components',
    name: 'Proximity Lift Grid',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Proximity Lift Grid',
        content:
          'A modern, interactive image grid component that brings your content to life with smooth proximity-based animations. Each card features a dynamic grayscale-to-color transition and subtle scaling effects based on mouse proximity, creating an engaging user experience. Perfect for showcasing portfolios, photo galleries, or product displays with elegant motion effects.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-32">
            <ProximityLiftGrid
              items={[
                {
                  title: 'Urban Skyline',
                  image:
                    'https://images.unsplash.com/photo-1718563552473-2d97b224e801?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
                  description:
                    'A breathtaking view of a modern cityscape with towering skyscrapers illuminated at dusk.'
                },
                {
                  title: 'Mountain Retreat',
                  image:
                    'https://images.unsplash.com/photo-1735317461815-1a0ba64e9a56?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
                  description:
                    'A serene cabin nestled in the heart of towering mountains, perfect for a peaceful getaway.'
                },
                {
                  title: 'Forest Wander',
                  image:
                    'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A misty trail winding through a dense, enchanting forest filled with lush greenery.'
                },
                {
                  title: 'Serene Lake',
                  image:
                    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A tranquil lake reflecting the golden hues of the sunset, surrounded by peaceful nature.'
                },
                {
                  title: 'Golden Hour',
                  image:
                    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A mesmerizing sunset casting a warm glow over the ocean, creating a dreamlike atmosphere.'
                },
                {
                  title: 'Coastal Vibes',
                  image:
                    'https://images.unsplash.com/photo-1493558103817-58b2924bce98?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'Crystal-clear waves crashing against a sandy shore, offering a perfect beach escape.'
                },
                {
                  title: 'Night Lights',
                  image:
                    'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D',
                  description:
                    'A dazzling city skyline at night, with vibrant lights illuminating the urban landscape.'
                },
                {
                  title: 'Rustic Charm',
                  image:
                    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A cozy wooden cabin with a warm, inviting atmosphere set in a countryside setting.'
                }
              ]}
            />
          </div>
        )
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file proximity-lift-grid.tsx in your components folder and paste this code',
        code: `'use client';

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
  index: number;
};

const ProximityLiftGridItem = ({ item, index }: ProximityLiftGridItemProps) => {
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
      const maxDistance = 100;
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
        filter: useTransform(grayScale, (value) => \`grayscale(\${value})\`),
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
          className="w-full h-[200px] object-cover transition-transform duration-300"
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
      {items.map((item, index) => (
        <ProximityLiftGridItem key={item.image} item={item} index={index} />
      ))}
    </div>
  );
};

export default ProximityLiftGrid;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-32">
  <ProximityLiftGrid
    items={[
      {
        title: 'Urban Skyline',
        image:
          'https://images.unsplash.com/photo-1718563552473-2d97b224e801?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
        description:
          'A breathtaking view of a modern cityscape with towering skyscrapers illuminated at dusk.'
      },
      {
        title: 'Mountain Retreat',
        image:
          'https://images.unsplash.com/photo-1735317461815-1a0ba64e9a56?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
        description:
          'A serene cabin nestled in the heart of towering mountains, perfect for a peaceful getaway.'
      },
      {
        title: 'Forest Wander',
        image:
          'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description:
          'A misty trail winding through a dense, enchanting forest filled with lush greenery.'
      },
      {
        title: 'Serene Lake',
        image:
          'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description:
          'A tranquil lake reflecting the golden hues of the sunset, surrounded by peaceful nature.'
      },
      {
        title: 'Golden Hour',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description:
          'A mesmerizing sunset casting a warm glow over the ocean, creating a dreamlike atmosphere.'
      },
      {
        title: 'Coastal Vibes',
        image:
          'https://images.unsplash.com/photo-1493558103817-58b2924bce98?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description:
          'Crystal-clear waves crashing against a sandy shore, offering a perfect beach escape.'
      },
      {
        title: 'Night Lights',
        image:
          'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D',
        description:
          'A dazzling city skyline at night, with vibrant lights illuminating the urban landscape.'
      },
      {
        title: 'Rustic Charm',
        image:
          'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        description:
          'A cozy wooden cabin with a warm, inviting atmosphere set in a countryside setting.'
      }
    ]}
  />
</div>`
      }
    ]
  }
};
