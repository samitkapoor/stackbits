import { cn } from '@/lib/utils';
import TradingCard from './components/trading-card';

const TradingCardDemo = ({ variant = 'default' }: { variant?: 'default' | 'minimized' }) => {
  const cards = [
    {
      imageUrl: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMdo7u44DpEAkCcBT6MsuPK2yhGzx8aIU5obVlp',
      rank: 7,
      name: 'Neymar Jr',
      description:
        "Genius on the field, Neymar's journey is a testament to talent, resilience, and the pursuit of excellence. His electrifying skills and unwavering determination make him a force to be reckoned with."
    },
    {
      imageUrl: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMdZrkXcU6sM1fhWrqco2HGsiP6knYBUV47mRvA',
      rank: 10,
      name: 'Lionel Messi',
      description:
        "Unstoppable force, unrivaled skill - Messi's legacy is built on precision, perseverance, and a relentless drive to redefine greatness on the field."
    },
    {
      imageUrl: 'https://ky008ymy6s.ufs.sh/f/NFGlOqM3XnMddKZzHaIWPBmp7t6OxSiRdMrTJ4l3g1KX0fqj',
      rank: 7,
      name: 'Cristiano Ronaldo',
      description:
        "Legendary striker, Ronaldo's career is a testament to relentless ambition, unmatched talent, and a relentless pursuit of excellence. His journey is a story of resilience, determination, and a relentless drive to redefine greatness on the field."
    }
  ];
  return (
    <div className="flex items-start justify-start lg:items-center lg:justify-center w-full gap-6">
      <div
        className={cn(
          'w-full items-center justify-center gap-6',
          variant === 'minimized' ? 'py-0 flex flex-row' : 'py-10 flex'
        )}
      >
        {cards.map((card, index) => (
          <div key={index} className="w-full lg:w-fit flex items-center justify-center">
            <TradingCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingCardDemo;
