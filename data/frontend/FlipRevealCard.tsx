import { Document } from '../main';
import FlipRevealCard from '@/components/ui/flip-reveal-card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MovingBorderCard from '@/components/ui/moving-border-card';

export const flipRevealCardPreview = (
  <div className="h-full w-full flex items-center justify-center scale-75">
    <FlipRevealCard
      frontContent={
        <MovingBorderCard wrapperClassName="rounded-xl" className="rounded-xl">
          <div className="sm:h-[200px] h-[190px] w-[275px] sm:w-[350px] rounded-xl relative bg-gradient-to-tr from-neutral-500 to-blue-500 p-5 flex flex-col items-end justify-center overflow-visible">
            <Image src="/sony-headphones.png" alt="Sony Headphones" width={300} height={200} />
            <p className="absolute bottom-0 left-0 p-2 text-xl font-extrabold">
              Crystal clear sound,
              <br />
              40-hour battery life
            </p>
            <p className="absolute top-0 right-0 p-2 text-xl font-extrabold">$115.99</p>
          </div>
        </MovingBorderCard>
      }
      backContent={
        <MovingBorderCard wrapperClassName="rounded-xl" className="rounded-xl">
          <div className="sm:h-[200px] sm:w-[350px] rounded-xl relative bg-gradient-to-tr from-neutral-500 to-blue-500 p-5 flex flex-col items-start justify-center">
            <p className="font-bold">Key Features:</p>
            <div className="grid grid-cols-1 mt-1 font-medium">
              <p>🎧 Active Noise Cancellation</p>
              <p>🔋 40-hour battery with fast charging</p>
              <p> 🌊 IPX7 Waterproof & Sweatproof </p>
              <p>📱 Bluetooth 5.3 with ultra-low latency</p>
            </div>
          </div>
        </MovingBorderCard>
      }
    />
  </div>
);

export const flipRevealCard: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Flip Reveal Card',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Flip Reveal Card',
        content:
          "Meet the FlipReveal Card, a sleek and interactive card that flips on hover, revealing hidden details with a smooth 3D effect. Whether it's product specs, fun facts, or secret messages, this card adds a touch of magic to any UI. Give your content a flip-tastic twist! 🚀🔥",
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <motion.div
              initial={{ y: -800 }}
              animate={{
                y: 0,
                transition: {
                  ease: 'backOut',
                  duration: 1
                }
              }}
            >
              <p className="text-lg mb-3 font-bold">Sony WHCH720N</p>
              <FlipRevealCard
                frontContent={
                  <MovingBorderCard wrapperClassName="rounded-xl" className="rounded-xl">
                    <div className="sm:h-[200px] h-[190px] w-[275px] sm:w-[350px] rounded-xl relative bg-gradient-to-tr from-neutral-500 to-blue-500 p-5 flex flex-col items-end justify-center overflow-visible">
                      <Image
                        src="/sony-headphones.png"
                        alt="Sony Headphones"
                        width={300}
                        height={200}
                      />
                      <p className="absolute bottom-0 left-0 p-2 text-xl font-extrabold">
                        Crystal clear sound,
                        <br />
                        40-hour battery life
                      </p>
                      <p className="absolute top-0 right-0 p-2 text-xl font-extrabold">$115.99</p>
                    </div>
                  </MovingBorderCard>
                }
                backContent={
                  <MovingBorderCard wrapperClassName="rounded-xl" className="rounded-xl">
                    <div className="sm:h-[200px] sm:w-[350px] rounded-xl relative bg-gradient-to-tr from-blue-500 to-neutral-500 p-5 flex flex-col items-start justify-center">
                      <p className="font-bold">Key Features:</p>
                      <div className="grid grid-cols-1 mt-1 font-medium">
                        <p>🎧 Active Noise Cancellation</p>
                        <p>🔋 40-hour battery with fast charging</p>
                        <p> 🌊 IPX7 Waterproof & Sweatproof </p>
                        <p>📱 Bluetooth 5.3 with ultra-low latency</p>
                      </div>
                    </div>
                  </MovingBorderCard>
                }
              />
            </motion.div>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion`
      },
      {
        heading: 'Styles',
        sectionType: 'styling',
        code: `.flip-back {
  transform: rotateY(180deg);
}`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file flip-reveal-card.tsx in your components folder and paste this code',
        code: `import React from 'react';
import { motion } from 'framer-motion';

const FlipRevealCard = ({
    frontContent,
    backContent
}: {
    // * Remove these data types for javascript
    frontContent?: string | React.ReactNode;
    backContent?: string | React.ReactNode;
    // * ----
}) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
    <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: '1000px' }}
    >
        <motion.div
        initial={{ rotateY: 0 }}
        animate={{
            rotateY: isHovered ? 180 : 0,
            scale: isHovered ? 1.1 : 1,
            transition: { duration: 0.5 }
        }}
        style={{
            transformStyle: 'preserve-3d'
        }}
        className="flex items-center justify-center"
        >
        {/* Front Side */}
        <div
            className="flex items-center justify-center"
            style={{
            backfaceVisibility: 'hidden'
            }}
        >
            {frontContent}
        </div>

        {/* Back Side*/}
        <div
            className="absolute top-0 left-0 flex items-center justify-center flip-back"
            style={{
            backfaceVisibility: 'hidden'
            }}
        >
            {backContent}
        </div>
        </motion.div>
    </div>
    );
};

export default FlipRevealCard;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FlipRevealCard
    frontContent={
        <div className="border-[1px] border-neutral-400 sm:h-[200px] h-[190px] w-[275px] sm:w-[350px] rounded-xl relative bg-gradient-to-tr from-neutral-500 to-blue-500 p-5 flex flex-col items-end justify-center">
        <Image
            src="/sony-headphones.png"
            alt="Sony Headphones"
            width={300}
            height={200}
        />
        <p className="absolute bottom-0 left-0 p-2 text-xl font-extrabold">
            Crystal clear sound,
            <br />
            40-hour battery life
        </p>
        <p className="absolute top-0 right-0 p-2 text-xl font-extrabold">$115.99</p>
        </div>
    }
    backContent={
        <div className="border-[1px] border-neutral-400 sm:h-[200px] sm:w-[350px] rounded-xl relative bg-gradient-to-tr from-neutral-500 to-blue-500 p-5 flex flex-col items-start justify-center">
        <p className="font-bold">Key Features:</p>
        <div className="grid grid-cols-1 mt-1 font-medium">
            <p>🎧 Active Noise Cancellation</p>
            <p>🔋 40-hour battery with fast charging</p>
            <p> 🌊 IPX7 Waterproof & Sweatproof </p>
            <p>📱 Bluetooth 5.3 with ultra-low latency</p>
        </div>
        </div>
    }
/>`
      }
    ]
  }
};
