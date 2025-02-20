import { motion, useAnimationControls } from 'framer-motion';
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

  // ? Measure text width on mount
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
      className={`grid grid-cols-2 items-center justify-start gap-[8px] overflow-hidden border-[1px] ${className}`}
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
