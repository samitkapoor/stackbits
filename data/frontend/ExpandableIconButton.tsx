import ExpandableIconButton from '@/components/ui/expandable-icon-button';
import { Document } from '../main';
import { Globe, InstagramIcon, Mail, TwitterIcon } from 'lucide-react';
import RainbowText from '@/components/ui/rainbow-text';

export const expandableIconButton: Document = {
  sideBar: {
    group: 'Buttons',
    name: 'Expandable Icon Button',
    order: 4
  },
  content: {
    sections: [
      {
        heading: 'Expandable Icon Button',
        content:
          'Think of this as the Clark Kent of buttons—small, subtle, and all business at first. But the moment you hover, BOOM! It expands, revealing its secret identity (a text label!).',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2">
            <RainbowText>Let's connect!</RainbowText>
            <div className="flex items-center justify-center gap-2">
              <ExpandableIconButton
                onClick={() => (window.location.href = 'https://twitter.com/samitkapoorr')}
                icon={<TwitterIcon />}
                text={'samitkapoorr'}
                className="border-[1px] hover:bg-blue-500"
              />
              <ExpandableIconButton
                onClick={() => (window.location.href = 'https://instagram.com/im_samit')}
                icon={<InstagramIcon />}
                text={'im_samit'}
                className="border-[1px] hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500"
              />
              <ExpandableIconButton
                onClick={() => (window.location.href = 'mailto:samitkapoor77@gmail.com')}
                icon={<Mail />}
                text={'samitkapoor77@gmail.com'}
                className="border-[1px] hover:bg-red-500"
              />
              <ExpandableIconButton
                onClick={() => (window.location.href = 'https://samitkapoor.com')}
                icon={<Globe />}
                text={'samitkapoor.com'}
                className="border-[1px] hover:bg-gradient-to-tr hover:from-neutral-400 hover:to-green-500"
              />
            </div>
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'Install dependencies',
        sectionType: 'component',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file expandable-icon-button.tsx in your components folder and paste this code',
        code: `import { motion, useAnimationControls } from 'framer-motion';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

type ExpandableIconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
  text: string;
  className?: string;
};

const ExpandableIconButton = ({ onClick, icon, text, className }: ExpandableIconButtonProps) => {
  const buttonControls = useAnimationControls();
  const textControls = useAnimationControls();

  const textRef = useRef<HTMLParagraphElement>(null);
  const [textWidth, setTextWidth] = useState<number>(0);
  const iconRef = useRef<HTMLDivElement>(null);
  const [iconWidth, setIconWidth] = useState<number>(0);

  useEffect(() => {
    if (iconRef.current) {
      setIconWidth(iconRef.current.offsetWidth);
    }
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [iconRef, textRef]);

  const onMouseEnter = () => {
    buttonControls.start({ width: iconWidth + textWidth + 40 });
    textControls.start('visible');
  };

  const onMouseLeave = () => {
    buttonControls.start({ width: iconWidth + 32 });
    textControls.start('hide');
  };

  return (
    <motion.button
      onClick={onClick}
      animate={buttonControls}
      transition={{ duration: 0.4, ease: 'backOut' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        gridTemplateColumns: 'auto 1fr',
        width: iconWidth + 32,
        opacity: iconWidth <= 0 ? 0 : 1
      }}
      className={\`grid grid-cols-2 items-center p-[16px] justify-start gap-[8px] rounded-full overflow-hidden \${className}\`}
    >
      <div ref={iconRef} className="p-0 flex items-center justify-center">
        {icon}
      </div>
      <motion.p
        ref={textRef}
        initial={{ opacity: 0, scale: 0 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hide: { opacity: 0, scale: 0 }
        }}
        animate={textControls}
      >
        {text}
      </motion.p>
    </motion.button>
  );
};

export default ExpandableIconButton;

`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<ExpandableIconButton
    onClick={() => (window.location.href = 'https://twitter.com/samitkapoorr')}
    icon={<TwitterIcon />}
    text={'samitkapoorr'}
    className="border-[1px] hover:bg-blue-500"
/>`
      }
    ]
  }
};
