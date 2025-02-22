import { Document } from '../main';
import TextureBackground from '@/components/ui/texture-background';

export const textureBackgroundPreview = (
  <div className="h-full w-full relative flex items-center justify-center">
    <TextureBackground
      size={6}
      className="bg-sky-500 rounded-xl flex items-center justify-center h-full w-full text-black font-extrabold text-xl"
    >
      Texture Background
    </TextureBackground>
  </div>
);

export const textureBackground: Document = {
  sideBar: {
    group: 'Backgrounds',
    name: 'Texture Background',
    order: 5
  },
  content: {
    sections: [
      {
        heading: '🕹️ Texture Background',
        content:
          'TextureBackground adds a stylish, pixel-perfect texture overlay to your UI, giving it a unique and modern aesthetic. 🎨✨ With customizable pattern sizes, this lightweight React component seamlessly enhances backgrounds without sacrificing performance. Perfect for sleek, minimal, or retro-inspired designs—because plain backgrounds are just too boring! 🚀🎭',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <TextureBackground
              size={6}
              className="bg-sky-500 text-5xl font-extrabold text-black  rounded-xl flex items-center justify-center h-full w-full"
            >
              Texture Background
            </TextureBackground>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file texture-background.tsx in your components folder and paste this code',
        code: `import React, { CSSProperties } from 'react';
        
type TextureBackgroundProps = {
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    size?: number;
};

const TextureBackground = ({ children, className, style, size = 4 }: TextureBackgroundProps) => {
    return (
    <div className={\`overflow-hidden relative h-full w-full\`}>
        <div
        style={{
            backgroundImage: \`url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='\${size}' height='\${size}' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")\`
        }}
        className="h-[100%] w-[100%] absolute z-0 top-0 left-0"
        />
        <div style={style} className={\`\${className} z-10\`}>
        {children}
        </div>
    </div>
    );
};

export default TextureBackground;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<TextureBackground
    size={6}
    className="bg-sky-500 text-5xl font-extrabold text-black  rounded-xl flex items-center justify-center h-full w-full"
>
    Texture Background
</TextureBackground>`
      }
    ]
  }
};
