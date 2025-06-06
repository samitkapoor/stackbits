import React from 'react';
import GlitchText from './ui/glitch-text';
import RainbowText from './ui/rainbow-text';
import SkewedText from './ui/skewed-text';
import CountUp from './ui/count-up';
import FadeInText from './ui/fade-in-text';
import WavyText from './ui/wavy-text';
import BlurText from './ui/blur-text';
import { cn } from '@/lib/utils';
import DottedText from './ui/dotted-text';
import HiddenText from './ui/hidden-text';

const TextDisplay = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center max-h-[300px] overflow-auto justify-center gap-4',
        className
      )}
    >
      {children}
    </div>
  );
};

const TextsDemo = () => {
  return (
    <div className="min-h-[700px] w-full grid grid-cols-1 md:grid-cols-3 items-center gap-5 justify-center p-10">
      <TextDisplay>
        <GlitchText className="text-xl">Glitch Text</GlitchText>
      </TextDisplay>
      <TextDisplay>
        <RainbowText className="text-xl">Rainbow Text</RainbowText>
      </TextDisplay>
      <TextDisplay>
        <BlurText text="Blur Text" className="text-xl" />
      </TextDisplay>
      <TextDisplay>
        <DottedText text="DOTTED TEXT" size={1} spacing={1} />
      </TextDisplay>
      <TextDisplay className="justify-start items-start">
        <FadeInText text="Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll Scroll" />
      </TextDisplay>
      <TextDisplay>
        <HiddenText text="hidden text" />
      </TextDisplay>
      <TextDisplay>
        <WavyText text="Wavy Text" className="text-xl" />
      </TextDisplay>
      <TextDisplay>
        <SkewedText className="text-xl">Skewed Text</SkewedText>
      </TextDisplay>
      <TextDisplay>
        <CountUp target={777} className="text-xl font-bold"></CountUp>
      </TextDisplay>
    </div>
  );
};

export default TextsDemo;
