import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import SocialMediaCard from '@/components/components/social-media-card';

export const socialMediaCardPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden relative scale-75">
    <SocialMediaCard
      post={{
        name: 'Samit Kapoor',
        isVerified: true,
        username: 'samitkapoorr',
        comment: 'sometimes the best background is no background at all',
        platform: 'x',
        pfp: 'https://pbs.twimg.com/profile_images/1964059042550091778/otqIGdFL_400x400.jpg'
      }}
      className="w-[420px]"
    />
  </div>
);

export const socialMediaCard: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Social Media Card',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Social Media Card',
        content:
          'A versatile card component that mimics the look and feel of popular social media platforms. Supports Twitter/X, Reddit, and Peerlist styles with authentic layouts, interaction buttons, and platform-specific design elements.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-wrap items-center justify-center gap-2 relative">
            <div className="flex flex-wrap max-w-[1020px] gap-4 items-center justify-center py-10">
              <SocialMediaCard
                post={{
                  name: 'Michael Thiessen',
                  isVerified: true,
                  username: 'MichaelThiessen',
                  comment: (
                    <>
                      The new if() selector in CSS lets you write conditional styles inline.
                      <br /> <br /> You can also switch based on custom properties:
                    </>
                  ),
                  platform: 'x',
                  pfp: 'https://pbs.twimg.com/profile_images/1919844131137794049/rgavVVUV_400x400.jpg',
                  image: 'https://pbs.twimg.com/media/G1SIJiYXEAAPmOZ?format=jpg&name=medium'
                }}
                className="w-[300px] sm:w-[400px] md:w-[500px]"
              />
              <SocialMediaCard
                post={{
                  name: 'entropykimkc',
                  comment: 'mind blowing bro - how can i use it - can i use it?',
                  platform: 'reddit',
                  pfp: 'https://styles.redditmedia.com/t5_ewxcz5/styles/profileIcon_z2mn5yqe6gcf1.jpeg?width=64&height=64&frame=1&auto=webp&crop=64%3A64%2Csmart&s=fe5ea4f4d44683db192c5b12c980b6706553ac3a',
                  image:
                    'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybTZybTVyMTk2cDI3cXRhbXEyb3Q4anVjNmJjZnBvdDJ5ZTRoaThjNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JmCFfTlNy12wFpOK8Y/200.gif'
                }}
                className="w-[300px] sm:w-[400px] md:w-[500px]"
              />
              <SocialMediaCard
                post={{
                  name: 'Samit Kapoor',
                  comment: 'Today is a good day',
                  platform: 'peerlist',
                  pfp: 'https://pbs.twimg.com/profile_images/1964059042550091778/otqIGdFL_400x400.jpg',
                  isVerified: true,
                  image:
                    'https://dqy38fnwh4fqs.cloudfront.net/scroll/UHOK7LJRGLEOKR617M8NPNLQOO97-1758269508510'
                }}
                className="w-[300px] sm:w-[400px] md:w-[500px]"
              />
            </div>
          </div>
        )
      },
      installDependenciesCode({ lucide: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file skeumorphic-music-card.tsx in your components folder and paste this code',
        code: `import { cn } from '@/lib/utils';
import {
  ArrowBigDown,
  ArrowBigUp,
  Award,
  BadgeCheck,
  Bookmark,
  ChartNoAxesColumn,
  Ellipsis,
  Forward,
  Heart,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Upload
} from 'lucide-react';
import Image from 'next/image';

type Post = {
  name?: string;
  comment?: string | React.ReactNode;
  pfp?: string;
  platform?: 'x' | 'peerlist' | 'reddit';
  isVerified?: boolean;
  username?: string;
  image?: string;
};

const TwitterCard = ({
  name,
  pfp,
  comment,
  className,
  isVerified = false,
  username,
  image
}: {
  name: string;
  pfp: string;
  comment: string | React.ReactNode;
  className?: string;
  isVerified?: boolean;
  username?: string;
  image?: string;
}) => {
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
    <div
      className={cn(
        'flex items-start justify-start border border-[#29292a] gap-2 sm:gap-3 bg-[#000000] px-2 sm:px-3 pt-2 sm:pt-3 pb-3 sm:pb-4 w-full rounded-lg relative pl-3 sm:pl-5',
        className
      )}
    >
      <Ellipsis
        className="hidden sm:block absolute top-3 right-3 sm:top-4 sm:right-5"
        size={14}
        strokeWidth={1}
      />
      {pfp && (
        <Image
          src={pfp}
          alt={name || 'pfp'}
          width={256}
          height={256}
          className="rounded-full h-[28px] w-[28px] sm:h-[32px] sm:w-[32px]"
        />
      )}
      <div className="flex flex-col items-start gap-0.5 sm:gap-1 justify-start w-full pr-1 sm:pr-2">
        <div className="flex items-center gap-0.5">
          <p className="font-bold leading-4 sm:leading-5 text-xs sm:text-base flex-1 whitespace-nowrap">
            {name}
          </p>
          {isVerified && (
            <BadgeCheck
              size={16}
              strokeWidth={1.5}
              stroke="#000"
              fill="#1D9BF0"
              className="sm:w-5 sm:h-5"
            />
          )}
          {username && (
            <p className="ml-0.5 leading-4 sm:leading-5 text-white/50 font-think text-xs sm:text-sm truncate line-clamp-1">
              {'@'}
              {username}
            </p>
          )}
        </div>
        <p className="text-xs sm:text-sm text-white">{comment}</p>
        {image && (
          <Image
            src={image}
            alt={name || 'image'}
            width={500}
            height={500}
            className="rounded-lg mt-1 sm:mt-2 w-full h-auto"
          />
        )}
        <div className="flex items-center justify-between w-full mt-1 sm:mt-2">
          {iconData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center gap-0.5 sm:gap-1">
                <IconComponent {...item.iconProps} className={item.textColor} size={16} />
                <p className={\`text-[10px] sm:text-xs \${item.textColor}\`}>{item.count}</p>
              </div>
            );
          })}
          <div className="flex items-center gap-1 sm:gap-2">
            {actionIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <IconComponent
                  key={index}
                  {...item.iconProps}
                  className="text-white/70"
                  size={16}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const PeerlistCard = ({
  name,
  pfp,
  comment,
  className,
  isVerified = false,
  image
}: {
  name: string;
  pfp: string;
  comment: string | React.ReactNode;
  className?: string;
  isVerified?: boolean;
  image?: string;
}) => {
  const likesNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <div
      className={cn(
        'flex items-start h-fit justify-start border border-[#2a2a2a] gap-2 sm:gap-3 bg-[#171717] pt-2 sm:pt-3 pb-3 sm:pb-4 w-full rounded-lg relative px-3 sm:px-5',
        className
      )}
    >
      <div className="h-[28px] w-[28px] sm:h-[32px] sm:w-[32px] rounded-full relative">
        {pfp && (
          <Image
            src={pfp}
            alt={name || 'pfp'}
            width={256}
            height={256}
            className="rounded-full shrink-0"
          />
        )}
        {isVerified && (
          <ShieldCheck
            size={14}
            strokeWidth={1}
            stroke="#fff"
            fill="#23C45F"
            className="absolute bottom-0 right-0 translate-x-0.5 translate-y-0.5"
          />
        )}
      </div>
      <div className="flex flex-col items-start gap-0.5 justify-start w-full">
        <p className="font-bold leading-4 sm:leading-5 text-sm sm:text-base">{name}</p>
        <p className="text-xs sm:text-sm text-white/90">{comment}</p>
        {image && (
          <Image
            src={image}
            alt={name || 'image'}
            width={500}
            height={500}
            className="rounded-lg mt-1 sm:mt-2 w-full h-auto"
          />
        )}
        <div className="flex items-center justify w-full gap-4 sm:gap-6 mt-1 sm:mt-2">
          <p className="text-green-500 text-[9px] sm:text-[10px]">Liked • {likesNumber}</p>
          <p className="text-[9px] sm:text-[10px] text-white/70">Reply</p>
          <Ellipsis size={14} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

const RedditCard = ({
  name,
  pfp,
  comment,
  className,
  image
}: {
  name: string;
  pfp: string;
  comment: string | React.ReactNode;
  className?: string;
  image?: string;
}) => {
  const likesNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <div
      className={cn(
        'flex items-start h-fit justify-start border border-[#2c2c2c] gap-2 sm:gap-3 bg-[#0C1416] pl-2 sm:pl-3 pr-4 sm:pr-6 pt-2 sm:pt-3 pb-3 sm:pb-4 w-full rounded-lg relative',
        className
      )}
    >
      {pfp && (
        <Image
          src={pfp}
          alt={name || 'pfp'}
          width={256}
          height={256}
          className="rounded-full shrink-0 h-[28px] w-[28px] sm:h-[32px] sm:w-[32px]"
        />
      )}
      <div className="flex flex-col items-start gap-1 sm:gap-2 justify-start w-full">
        <p className="font-semibold text-xs sm:text-sm mt-1">{name}</p>
        {image && (
          <Image
            src={image}
            alt={name || 'image'}
            width={500}
            height={500}
            className="rounded-lg mt-1 sm:mt-2 w-full max-w-[60%] h-auto"
          />
        )}
        <p className="text-xs sm:text-sm text-white/70">{comment}</p>
        <div className="flex items-center text-white/60 font-medium justify w-full gap-3 sm:gap-6">
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
            <ArrowBigUp
              size={20}
              strokeWidth={1}
              fill="#D83A02"
              stroke="#D83A02"
              className="sm:w-6 sm:h-6"
            />
            <p className="text-[10px] sm:text-xs">{likesNumber}</p>
            <ArrowBigDown size={20} strokeWidth={1} className="sm:w-6 sm:h-6" />
          </div>
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
            <MessageCircle size={14} strokeWidth={1.4} />
            <p className="text-[10px] sm:text-xs">Reply</p>
          </div>
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
            <Award size={14} strokeWidth={1.4} />
            <p className="text-[10px] sm:text-xs">Award</p>
          </div>
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
            <Forward size={14} strokeWidth={1.4} />
            <p className="text-[10px] sm:text-xs">Share</p>
          </div>
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
            <Ellipsis size={14} strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialMediaCard = ({ post, className }: { post: Post; className?: string }) => {
  if (!post) return null;

  if (post.platform === 'x') {
    return (
      <TwitterCard
        name={post.name || ''}
        pfp={post.pfp || ''}
        comment={post.comment || ''}
        className={className}
        isVerified={post.isVerified}
        username={post.username || ''}
        image={post.image || ''}
      />
    );
  }
  if (post.platform === 'peerlist') {
    return (
      <PeerlistCard
        name={post.name || ''}
        pfp={post.pfp || ''}
        comment={post.comment || ''}
        className={className}
        isVerified={post.isVerified}
        image={post.image || ''}
      />
    );
  }
  if (post.platform === 'reddit') {
    return (
      <RedditCard
        name={post.name || ''}
        pfp={post.pfp || ''}
        comment={post.comment || ''}
        className={className}
        image={post.image || ''}
      />
    );
  }
  return null;
};

export default SocialMediaCard;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<div className="h-full w-full flex flex-wrap items-center justify-center gap-2 relative">
  <div className="flex flex-wrap max-w-[1020px] gap-4 items-center justify-center py-10">
    <SocialMediaCard
      post={{
        name: 'Michael Thiessen',
        isVerified: true,
        username: 'MichaelThiessen',
        comment: (
          <>
            The new if() selector in CSS lets you write conditional styles inline.
            <br /> <br /> You can also switch based on custom properties:
          </>
        ),
        platform: 'x',
        pfp: 'https://pbs.twimg.com/profile_images/1919844131137794049/rgavVVUV_400x400.jpg',
        image: 'https://pbs.twimg.com/media/G1SIJiYXEAAPmOZ?format=jpg&name=medium'
      }}
      className="w-[300px] sm:w-[400px] md:w-[500px]"
    />
    <SocialMediaCard
      post={{
        name: 'entropykimkc',
        comment: 'mind blowing bro - how can i use it - can i use it?',
        platform: 'reddit',
        pfp: 'https://styles.redditmedia.com/t5_ewxcz5/styles/profileIcon_z2mn5yqe6gcf1.jpeg?width=64&height=64&frame=1&auto=webp&crop=64%3A64%2Csmart&s=fe5ea4f4d44683db192c5b12c980b6706553ac3a',
        image:
          'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybTZybTVyMTk2cDI3cXRhbXEyb3Q4anVjNmJjZnBvdDJ5ZTRoaThjNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JmCFfTlNy12wFpOK8Y/200.gif'
      }}
      className="w-[300px] sm:w-[400px] md:w-[500px]"
    />
    <SocialMediaCard
      post={{
        name: 'Samit Kapoor',
        comment: 'Today is a good day',
        platform: 'peerlist',
        pfp: 'https://pbs.twimg.com/profile_images/1964059042550091778/otqIGdFL_400x400.jpg',
        isVerified: true,
        image:
          'https://dqy38fnwh4fqs.cloudfront.net/scroll/UHOK7LJRGLEOKR617M8NPNLQOO97-1758269508510'
      }}
      className="w-[300px] sm:w-[400px] md:w-[500px]"
    />
  </div>
</div>`
      }
    ]
  }
};
