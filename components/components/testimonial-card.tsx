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
import Image from 'next/image';

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

const TestimonialCardItem = ({ item }: { item: Comment }) => {
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

export default TestimonialCardItem;
