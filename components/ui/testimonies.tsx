import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowBigDown,
  ArrowBigUp,
  Award,
  Bookmark,
  ChartNoAxesColumn,
  Ellipsis,
  Forward,
  Heart,
  MessageCircle,
  RefreshCcw,
  Upload
} from 'lucide-react';

const TwitterCard = ({ name, pfp, comment }: { name: string; pfp: string; comment: string }) => {
  const commentsNumber = Math.floor(Math.random() * 10);
  const retweetsNumber = Math.floor(Math.random() * 5);
  const viewsNumber = Math.floor(Math.random() * 100);
  const likesNumber = Math.floor(Math.random() * 5) + 1;

  const iconData = [
    {
      icon: MessageCircle,
      count: commentsNumber,
      textColor: 'text-white/70',
      iconProps: { size: 16, strokeWidth: 1 }
    },
    {
      icon: RefreshCcw,
      count: retweetsNumber,
      textColor: 'text-white/70',
      iconProps: { size: 16, strokeWidth: 1 }
    },
    {
      icon: Heart,
      count: likesNumber,
      textColor: 'text-[#f81981]',
      iconProps: { size: 16, strokeWidth: 1, fill: '#F81981', stroke: '#F81981' }
    },
    {
      icon: ChartNoAxesColumn,
      count: viewsNumber,
      textColor: 'text-white/70',
      iconProps: { size: 16, strokeWidth: 1 }
    }
  ];

  const actionIcons = [
    { icon: Bookmark, iconProps: { size: 16, strokeWidth: 1 } },
    { icon: Upload, iconProps: { size: 16, strokeWidth: 1 } }
  ];

  return (
    <div className="flex items-start justify-start border border-[#29292a] gap-3 bg-[#000000] px-3 pt-3 pb-4 w-full rounded-lg relative">
      <Ellipsis className="absolute top-2 right-3" size={16} strokeWidth={1} />
      {pfp && (
        <Image src={pfp} alt={name || 'pfp'} width={32} height={32} className="rounded-full" />
      )}
      <div className="flex flex-col items-start gap-1 justify-start w-full">
        <p className="font-bold leading-5">{name}</p>
        <p className="text-sm text-white/90">{comment}</p>
        <div className="flex items-center justify-between w-full mt-2">
          {iconData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center gap-1">
                <IconComponent {...item.iconProps} />
                <p className={`text-xs ${item.textColor}`}>{item.count}</p>
              </div>
            );
          })}
          <div className="flex items-center gap-2">
            {actionIcons.map((item, index) => {
              const IconComponent = item.icon;
              return <IconComponent key={index} {...item.iconProps} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const PeerlistCard = ({ name, pfp, comment }: { name: string; pfp: string; comment: string }) => {
  const likesNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <div className="flex items-start justify-start border border-[#171717] gap-3 bg-[#171717] px-3 pt-3 pb-4 w-full rounded-lg relative">
      {pfp && (
        <Image
          src={pfp}
          alt={name || 'pfp'}
          width={32}
          height={32}
          className="rounded-full shrink-0"
        />
      )}
      <div className="flex flex-col items-start gap-0.5 justify-start w-full">
        <p className="font-bold leading-5">{name}</p>
        <p className="text-sm text-white/90">{comment}</p>
        <div className="flex items-center justify w-full gap-6 mt-2">
          <p className="text-green-500 text-xs">Liked • {likesNumber}</p>
          <p className="text-xs">Reply</p>
          <Ellipsis size={16} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

const RedditCard = ({ name, pfp, comment }: { name: string; pfp: string; comment: string }) => {
  const likesNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <div className="flex items-start justify-start border border-[#2c2c2c] gap-3 bg-[#0C1416] pl-3 pr-6 pt-3 pb-4 w-full rounded-lg relative">
      {pfp && (
        <Image
          src={pfp}
          alt={name || 'pfp'}
          width={32}
          height={32}
          className="rounded-full shrink-0"
        />
      )}
      <div className="flex flex-col items-start gap-2 justify-start w-full">
        <p className="font-semibold text-sm mt-1">{name}</p>
        <p className="text-sm text-white/70">{comment}</p>
        <div className="flex items-center justify w-full gap-6">
          <div className="flex items-center justify-center gap-1">
            <ArrowBigUp size={24} strokeWidth={1} fill="#D83A02" stroke="#D83A02" />
            <p className="text-xs">{likesNumber}</p>
            <ArrowBigDown size={24} strokeWidth={1} />
          </div>
          <div className="flex items-center justify-center gap-1">
            <MessageCircle size={16} strokeWidth={1.4} />
            <p className="text-xs">Reply</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Award size={16} strokeWidth={1.4} />
            <p className="text-xs">Award</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <Forward size={16} strokeWidth={1.4} />
            <p className="text-xs">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardItem = ({ item }: { item: Comment }) => {
  if (item.platform === 'x') {
    return <TwitterCard name={item.name || ''} pfp={item.pfp || ''} comment={item.comment || ''} />;
  }
  if (item.platform === 'peerlist') {
    return (
      <PeerlistCard name={item.name || ''} pfp={item.pfp || ''} comment={item.comment || ''} />
    );
  }
  if (item.platform === 'reddit') {
    return <RedditCard name={item.name || ''} pfp={item.pfp || ''} comment={item.comment || ''} />;
  }
  return null;
};

const TestimonyItem = ({
  item,
  index,
  totalItems
}: {
  item: Comment;
  index: number;
  totalItems: number;
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

  const delay = layer * fullTravelDuration + indexInLayer * (fullTravelDuration / itemsInLayer);
  const repeatDelay = (totalLayers - 1) * fullTravelDuration;

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
          opacity: [0, 1, 1, 0, 0]
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
        <CardItem item={item} />
      </motion.div>
    </motion.div>
  );
};

type Comment = {
  id: number;
  image?: string;
  href: string;
  special?: boolean;
  name?: string;
  comment?: string;
  pfp?: string;
  platform?: 'x' | 'peerlist' | 'reddit';
};

const Testimonies = ({ items }: { items: Comment[] }) => {
  return (
    <div className={`relative gap-10 p-3 h-full w-full hide-scrollbar overflow-y-auto`}>
      {items.map((item, index) => {
        return (
          <TestimonyItem
            key={`testimony-${index}`}
            item={item}
            index={index}
            totalItems={items.length}
          />
        );
      })}
    </div>
  );
};

export default Testimonies;
