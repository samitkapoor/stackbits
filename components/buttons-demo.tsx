import React from 'react';
import ExpandableIconButton from './buttons/expandable-icon-button';
import { Copy, Sun, Moon, Rocket, TwitterIcon } from 'lucide-react';
import CopyTextButton from './buttons/copy-text-button';
import AnimatedGradientButton from './buttons/animated-gradient-button';
import GlassButton from './buttons/glass-button';
import ToggleButton from './buttons/toggle-button';
import MovingBorderButton from './buttons/moving-border-button';
import NavigationButton from './buttons/navigation-button';
import ShineButton from './buttons/shine-button';

const ButtonDisplay = ({ children, name }: { children: React.ReactNode; name: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {children}
      <p className="text-sm text-white">{name}</p>
    </div>
  );
};

const ButtonsDemo = () => {
  return (
    <div className="min-h-[700px] w-full grid grid-cols-1 md:grid-cols-3 items-center gap-5 justify-center p-10">
      <ButtonDisplay name="Expandable Icon Button">
        <ExpandableIconButton icon={<TwitterIcon size={18} />} text={'samitkapoorr'} />
      </ButtonDisplay>
      <ButtonDisplay name="Copy Text Button">
        <CopyTextButton label="Copy some text" icon={<Copy className="w-4 h-4" />} />
      </ButtonDisplay>
      <ButtonDisplay name="Animated Gradient Button">
        <AnimatedGradientButton>Continue</AnimatedGradientButton>
      </ButtonDisplay>
      <ButtonDisplay name="Glass Button">
        <GlassButton>Contact me</GlassButton>
      </ButtonDisplay>
      <ButtonDisplay name="Toggle Button">
        <ToggleButton
          options={[
            {
              label: <Sun size={18} />,
              value: 'Sun'
            },
            {
              label: <Moon size={18} />,
              value: 'Moon'
            },
            {
              label: <Rocket size={18} />,
              value: 'Rocket'
            }
          ]}
          defaultValue="Sun"
        />
      </ButtonDisplay>
      <ButtonDisplay name="Moving Border Button">
        <MovingBorderButton>Moving Border</MovingBorderButton>
      </ButtonDisplay>
      <ButtonDisplay name="Navigation Button">
        <NavigationButton href="https://twitter.com/samitkapoorr" text="Open twitter" />
      </ButtonDisplay>
      <ButtonDisplay name="Shine Button">
        <ShineButton>Shine</ShineButton>
      </ButtonDisplay>
    </div>
  );
};

export default ButtonsDemo;
