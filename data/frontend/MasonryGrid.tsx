import { Document } from '../main';
import MasonryGrid from '@/components/ui/masonry-grid';

export const masonryGridPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative p-0 gap-5">
    <MasonryGrid
      columns={2}
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
    ></MasonryGrid>
  </div>
);

export const masonryGrid: Document = {
  sideBar: {
    group: 'Components',
    name: 'Masonry Grid',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Masonry Grid',
        content:
          'Masonry Grid is the perfect solution for dynamic, Pinterest-style layouts that adapt beautifully to any screen size. Built with React, Next.js, and Tailwind CSS, this grid intelligently arranges elements into an optimized, gap-free layout, making it ideal for image galleries, portfolios, and product listings. Say goodbye to rigid rows and columns—Masonry Grid ensures your content flows seamlessly, no matter the shape or size. Fully responsive, lightweight, and easy to customize, this component helps you create visually stunning layouts without the hassle. Get started with StackBits and elevate your UI with effortless grid magic! 🚀',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
            <MasonryGrid
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
                },
                {
                  title: 'Blooming Meadows',
                  image:
                    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A picturesque field covered in colorful wildflowers, creating a vibrant and lively scene.'
                },
                {
                  title: 'Mystic Mountains',
                  image:
                    'https://images.unsplash.com/photo-1561719997-c19239a3a8b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGVyJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D',
                  description:
                    'Majestic mountain peaks covered in mist, evoking a sense of wonder and adventure.'
                },
                {
                  title: 'Abstract Art',
                  image:
                    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A visually striking composition of vibrant colors and fluid shapes in an abstract painting.'
                },
                {
                  title: 'Desert Mirage',
                  image:
                    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'Endless dunes stretching across the horizon, creating an otherworldly desert landscape.'
                },
                {
                  title: 'City Buzz',
                  image:
                    'https://images.unsplash.com/photo-1740338247288-131cc995f74f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D',
                  description:
                    'A lively street filled with people, neon signs, and the energetic pulse of city life.'
                },
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
                  title: 'City Buzz',
                  image:
                    'https://images.unsplash.com/photo-1740338247288-131cc995f74f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D',
                  description:
                    'A lively street filled with people, neon signs, and the energetic pulse of city life.'
                },
                {
                  title: 'Quiet Alley',
                  image:
                    'https://images.unsplash.com/photo-1521540216272-a50305cd4421?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A narrow, peaceful alleyway lined with rustic buildings, offering a nostalgic charm.'
                },
                {
                  title: 'Vibrant Street',
                  image:
                    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A dynamic street market bursting with color, life, and cultural diversity.'
                },
                {
                  title: 'Quiet Alley',
                  image:
                    'https://images.unsplash.com/photo-1521540216272-a50305cd4421?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A narrow, peaceful alleyway lined with rustic buildings, offering a nostalgic charm.'
                },
                {
                  title: 'Vibrant Street',
                  image:
                    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A dynamic street market bursting with color, life, and cultural diversity.'
                },
                {
                  title: 'Calm Waters',
                  image:
                    'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A crystal-clear river gently flowing through a lush green valley, bringing peace and serenity.'
                },
                {
                  title: 'Snowy Peaks',
                  image:
                    'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'Towering mountains blanketed in snow, standing majestically against a clear blue sky.'
                },
                {
                  title: 'Sunset Bliss',
                  image:
                    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A breathtaking sunset painting the sky in shades of pink, orange, and purple over a calm ocean.'
                },
                {
                  title: 'Cultural Heritage',
                  image:
                    'https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'An ancient temple standing as a testament to history, rich with tradition and stories.'
                },
                {
                  title: 'Modern Minimalism',
                  image:
                    'https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A sleek and elegant modern building featuring clean lines and a sophisticated design.'
                },
                {
                  title: 'Calm Waters',
                  image:
                    'https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A crystal-clear river gently flowing through a lush green valley, bringing peace and serenity.'
                },
                {
                  title: 'Snowy Peaks',
                  image:
                    'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'Towering mountains blanketed in snow, standing majestically against a clear blue sky.'
                },
                {
                  title: 'Sunset Bliss',
                  image:
                    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A breathtaking sunset painting the sky in shades of pink, orange, and purple over a calm ocean.'
                },
                {
                  title: 'Cultural Heritage',
                  image:
                    'https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'An ancient temple standing as a testament to history, rich with tradition and stories.'
                },
                {
                  title: 'Modern Minimalism',
                  image:
                    'https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A sleek and elegant modern building featuring clean lines and a sophisticated design.'
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
                },
                {
                  title: 'Blooming Meadows',
                  image:
                    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A picturesque field covered in colorful wildflowers, creating a vibrant and lively scene.'
                },
                {
                  title: 'Mystic Mountains',
                  image:
                    'https://images.unsplash.com/photo-1561719997-c19239a3a8b2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGVyJTIwc3BvcnR8ZW58MHx8MHx8fDA%3D',
                  description:
                    'Majestic mountain peaks covered in mist, evoking a sense of wonder and adventure.'
                },
                {
                  title: 'Abstract Art',
                  image:
                    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'A visually striking composition of vibrant colors and fluid shapes in an abstract painting.'
                },
                {
                  title: 'Desert Mirage',
                  image:
                    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                  description:
                    'Endless dunes stretching across the horizon, creating an otherworldly desert landscape.'
                }
              ]}
            ></MasonryGrid>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'dependencies',
        code: `npm i framer-motion tailwindcss-animate`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file masonry-grid.tsx in your components folder and paste this code',
        code: `'use client';
        
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MasonryGridProps {
  items: { image: string; title: string; description: string }[];
  columns?: number | undefined;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ items, columns = undefined }) => {
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({});

  if (!items || items.length === 0) {
    return <div className="text-center p-4">No items to display</div>;
  }

  return (
    <div
      style={{
        columns: columns
      }}
      className={\`\${
        !columns && 'columns-1 sm:columns-2 md:columns-3 lg:columns-4'
      } gap-2 overflow-y-auto p-3 w-full\`}
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
            <div className="relative">
              <div className="relative w-full flex gap-1 flex-col items-start justify-start">
                {!imagesLoaded[item.image] && (
                  <div className="absolute inset-0 w-full h-[300px] bg-neutral-500/50 animate-pulse rounded-lg" />
                )}
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className={\`\${
                    !imagesLoaded[item.image] ? 'opacity-0' : 'opacity-100'
                  } w-full h-auto transition-transform duration-300 rounded-lg\`}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onLoad={() => {
                    setImagesLoaded((prev) => ({ ...prev, [item.image]: true }));
                  }}
                  onError={() => {
                    console.error(\`Error loading image: \${item.image}\`);
                    setImagesLoaded((prev) => ({ ...prev, [item.image]: true }));
                  }}
                />
                {imagesLoaded[item.image] && (
                  <div className="w-full">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="mt-0 text-xs text-neutral-500 line-clamp-2 overflow-hidden">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MasonryGrid;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<MasonryGrid
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
></MasonryGrid>`
      }
    ]
  }
};
