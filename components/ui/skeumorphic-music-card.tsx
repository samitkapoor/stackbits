'use client';

import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
interface SkeumorphicMusicCardProps {
  title: string;
  artist: string;
  cover: string;
  className?: string;
}

const ControlButton = ({
  isPressed,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
  onClick,
  children,
  size = 'small'
}: {
  isPressed: boolean;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  onTouchStart: () => void;
  onTouchEnd: () => void;
  onClick?: () => void;
  children: React.ReactNode;
  size?: 'small' | 'large';
}) => (
  <div
    className="rounded-full p-[3px] border-[1px] border-black/5"
    style={{
      background: 'linear-gradient(135deg, #c2d9f0 0%, #e6f0fa 100%)',
      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.6), inset -1px -1px 2px rgba(0,0,0,0.1)'
    }}
  >
    <button
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        boxShadow: isPressed
          ? 'inset 3px 3px 7px rgba(0,0,0,0.2), inset -1px -1px 3px rgba(255,255,255,0.5)'
          : '-3px -3px 7px rgba(255,255,255,0.7), 3px 3px 7px rgba(0,0,0,0.2)',
        background: isPressed
          ? 'linear-gradient(135deg, #c2d9f0 0%, #d9e6f2 100%)'
          : 'linear-gradient(135deg, #e6f0fa 0%, #c2d9f0 100%)',
        transform: isPressed ? 'scale(0.95)' : 'scale(1)'
      }}
      className={`rounded-full transition-all duration-75 text-gray-700 hover:text-gray-900 ${
        size === 'large' ? 'p-4' : 'p-2'
      }`}
    >
      {children}
    </button>
  </div>
);

const ProgressBar = () => (
  <div
    style={{
      boxShadow: 'inset 2px 2px 3px rgba(0,0,0,0.1), inset -1px -1px 3px rgba(255,255,255,0.7)',
      background: 'linear-gradient(135deg, #c2d9f0 0%, #d9e6f2 100%)'
    }}
    className="h-2 rounded-full overflow-hidden"
  >
    <div
      style={{
        width: '35%',
        background: 'linear-gradient(135deg, #6fa8dc 0%, #3d85c6 100%)',
        boxShadow: '1px 1px 2px rgba(255,255,255,0.3)'
      }}
      className="h-full rounded-full"
    />
  </div>
);

const SkeumorphicMusicCard = ({ title, artist, cover, className }: SkeumorphicMusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayButtonPressed, setIsPlayButtonPressed] = useState(false);
  const [isBackButtonPressed, setIsBackButtonPressed] = useState(false);
  const [isForwardButtonPressed, setIsForwardButtonPressed] = useState(false);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <div
      style={{
        boxShadow: 'inset -8px -8px 15px rgba(255,255,255,0.8), inset 8px 8px 15px rgba(0,0,0,0.2)',
        background: 'linear-gradient(135deg, #e6ecf0 0%, #cfd8e2 100%)'
      }}
      className={`p-5 rounded-[30px] border-[1px] border-black/5 ${className}`}
    >
      <div
        style={{
          boxShadow:
            'inset 2px 2px 5px rgba(255,255,255,0.7), inset -2px -2px 5px rgba(0,0,0,0.1), 5px 5px 15px rgba(0,0,0,0.1)',
          background: 'linear-gradient(135deg, #e6f0fa 0%, #c2d9f0 100%)'
        }}
        className="relative w-80 p-6 rounded-[20px] flex flex-col items-center border-[1px] border-black/5"
      >
        {/* Album Cover */}
        <div
          style={{
            boxShadow: '-2px -2px 5px rgba(255,255,255,0.5), 5px 5px 15px rgba(0,0,0,0.3)'
          }}
          className="w-40 h-40 rounded-xl overflow-hidden"
        >
          <Image
            src={cover}
            alt={title}
            height={1080}
            width={1080}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Song Info */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{artist}</p>
        </div>

        <div className="w-full mt-6 px-2">
          <ProgressBar />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 w-full px-2 mt-3">
          <ControlButton
            isPressed={isBackButtonPressed}
            onMouseDown={() => setIsBackButtonPressed(true)}
            onMouseUp={() => setIsBackButtonPressed(false)}
            onMouseLeave={() => setIsBackButtonPressed(false)}
            onTouchStart={() => setIsBackButtonPressed(true)}
            onTouchEnd={() => setIsBackButtonPressed(false)}
          >
            <SkipBack size={22} />
          </ControlButton>

          <ControlButton
            isPressed={isPlayButtonPressed}
            onMouseDown={() => setIsPlayButtonPressed(true)}
            onMouseUp={() => setIsPlayButtonPressed(false)}
            onMouseLeave={() => setIsPlayButtonPressed(false)}
            onTouchStart={() => setIsPlayButtonPressed(true)}
            onTouchEnd={() => setIsPlayButtonPressed(false)}
            onClick={togglePlayPause}
            size="large"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </ControlButton>

          <ControlButton
            isPressed={isForwardButtonPressed}
            onMouseDown={() => setIsForwardButtonPressed(true)}
            onMouseUp={() => setIsForwardButtonPressed(false)}
            onMouseLeave={() => setIsForwardButtonPressed(false)}
            onTouchStart={() => setIsForwardButtonPressed(true)}
            onTouchEnd={() => setIsForwardButtonPressed(false)}
          >
            <SkipForward size={22} />
          </ControlButton>
        </div>
      </div>
    </div>
  );
};

export default SkeumorphicMusicCard;
