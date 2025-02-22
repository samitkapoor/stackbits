import React, { CSSProperties } from 'react';

type TextureBackgroundProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  size?: number;
};

const TextureBackground = ({ children, className, style, size = 4 }: TextureBackgroundProps) => {
  return (
    <div className={`overflow-hidden relative h-full w-full`}>
      <div
        style={{
          backgroundImage: `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")`
        }}
        className="h-[100%] w-[100%] absolute z-0 top-0 left-0"
      />
      <div style={style} className={`${className} z-10`}>
        {children}
      </div>
    </div>
  );
};

export default TextureBackground;
