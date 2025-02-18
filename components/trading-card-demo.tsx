import TradingCard from './ui/trading-card';

const TradingCardDemo = () => {
  return (
    <div className="space-y-6">
      <TradingCard
        illustration={
          <div
            className="h-full w-full inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://i.pinimg.com/736x/9c/fa/15/9cfa15fab5013f15b472f91450be5f01.jpg)`
            }}
          ></div>
        }
        rank={1}
        name="Lionel Messi"
        description="Unstoppable force, unrivaled skill - Messi's legacy is built on precision, perseverance, and a relentless drive to redefine greatness on the field."
      />
    </div>
  );
};

export default TradingCardDemo;
