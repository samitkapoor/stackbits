import React from 'react';
import { motion } from 'framer-motion';

const SpaceTravelItem = <T,>({
  item,
  index,
  totalItems,
  renderChild
}: {
  item: T;
  index: number;
  totalItems: number;
  renderChild: (item: T) => React.ReactNode;
}) => {
  const positions = [
    {
      start: {
        top: '40%',
        left: '10%'
      },
      end: { top: '50%', left: '-2%' }
    },
    {
      start: {
        top: '30%',
        left: '70%'
      },
      end: { top: '10%', left: '95%' }
    },
    {
      start: {
        top: '50%',
        left: '70%'
      },
      end: { top: '80%', left: '105%' }
    },
    {
      start: {
        top: '10%',
        left: '10%'
      },
      end: { top: '5%', left: '-5%' }
    },
    {
      start: {
        top: '40%',
        left: '60%'
      },
      end: { top: '60%', left: '90%' }
    },
    {
      start: {
        top: '50%',
        left: '10%'
      },
      end: { top: '80%', left: '-5%' }
    }
  ];

  const itemsInLayer = 4;
  const fullTravelDuration = 12;
  const layer = Math.floor(index / itemsInLayer);
  const indexInLayer = index % itemsInLayer;
  const totalLayers = Math.floor(totalItems / itemsInLayer);

  const delay = Math.max(
    0,
    layer * fullTravelDuration + indexInLayer * (fullTravelDuration / itemsInLayer - 1) - 4
  );
  const repeatDelay = totalLayers * fullTravelDuration - 4;

  return (
    <motion.div
      style={{
        zIndex: totalItems - index
      }}
      initial={{ ...positions[index % positions.length].start, scale: 0.5 }}
      animate={{ ...positions[index % positions.length].end, scale: 1.5 }}
      transition={{
        duration: fullTravelDuration,
        ease: 'linear',
        delay,
        repeat: Infinity,
        repeatDelay: repeatDelay
      }}
      className="flex items-start justify-start w-full overflow-hidden max-w-[400px] absolute z-10"
    >
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: [0, 0.6, 0.6, 0, 0]
        }}
        transition={{
          duration: fullTravelDuration,
          times: [0, 0.1, 0.5, 0.6, 1],
          ease: 'linear',
          delay,
          repeat: Infinity,
          repeatDelay: repeatDelay
        }}
        className="w-full h-full"
      >
        {renderChild(item)}
      </motion.div>
    </motion.div>
  );
};

const SpaceTravel = <T,>({
  items,
  renderChild
}: {
  items: T[];
  renderChild: (item: T) => React.ReactNode;
}) => {
  return (
    <div className={`relative gap-10 p-3 h-full w-full hide-scrollbar overflow-y-auto`}>
      {items.map((item, index) => {
        return (
          <SpaceTravelItem
            key={`space-travel-${index}`}
            item={item}
            index={index}
            totalItems={items.length}
            renderChild={renderChild}
          />
        );
      })}
    </div>
  );
};

export default SpaceTravel;
