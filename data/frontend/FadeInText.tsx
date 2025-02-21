import { Document } from '../main';
import FadeInText from '@/components/ui/fade-in-text';

export const fadeInTextPreview = (
  <div className="h-full w-full flex flex-col items-start justify-start overflow-y-auto relative p-10 gap-5">
    <p className="text-[25px]">
      "The Shadows Are Mine"
      <br />- A Batman Monologue
    </p>
    <FadeInText
      text="Gotham is sick. A city on the edge, teetering between order and chaos. The people who run it—politicians, businessmen, crime lords—they want you to believe they have control. But I see the truth. I see the cracks in their foundation, the corruption that eats away at everything. This city is rotting, and no one wants to admit it. No one wants to face the monsters hiding in the dark. But I am not afraid of the dark. I became it. I let it consume me. Because someone has to. They call me a vigilante. A menace. A madman in a mask. Maybe they’re right. Maybe all I am is a man clinging to a war he can never win. But I can’t stop. I won’t stop. Because I know what happens when good men do nothing. When fear is allowed to rule. I’ve seen what Gotham becomes without someone willing to fight for it. I won’t let that happen again. I tried to be vengeance. I thought fear was enough—that if I could make criminals afraid, I could stop them. But fear is a tool, not a solution. I’ve learned that the hard way. Fear might make a man hesitate before pulling the trigger, but it won’t change his heart. Fear is temporary. Justice is something more. I’ve paid for this war in blood—my own and that of the people I’ve failed to save. Every night, I hear the echoes of the past, the voices of those I couldn’t protect. My parents. The innocent lives lost in alleyways and abandoned streets. I tell myself their deaths weren’t in vain. That their loss fuels my fight. But some nights, I wonder if I’m lying to myself. If this is all just a way to justify the rage I feel inside. Because the truth is… the rage never fades. But rage isn’t justice. Vengeance isn’t enough. I have to be more. Not just a symbol of fear—but a symbol of hope. Because Gotham doesn’t need another monster lurking in the dark. It needs something stronger. Something incorruptible. A protector. A knight. I don’t do this because I want to. I do it because I have to. Because if I don’t, who will? I made a promise, long ago, in the cold of a dark alley. A promise that I would never let another child lose their parents the way I lost mine. That I would stand between Gotham and the abyss. I may not be the hero this city wants, but I am the one it needs. And as long as I draw breath, I will fight. Because I am vengeance. I am the night. I am Batman."
      className="text-base font-medium text-neutral-200"
    />
  </div>
);

export const fadeInText: Document = {
  sideBar: {
    group: 'Texts',
    name: 'Fade In Text',
    order: 5
  },
  content: {
    sections: [
      {
        heading: 'Fade In Text',
        content:
          'FadeInText is a React component that animates text by fading in each word individually as it comes into view. Built with Framer Motion, it enhances readability and engagement by smoothly revealing content. Ideal for headers, quotes, or dynamic text displays.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col gap-5 items-start justify-start overflow-y-auto relative p-10">
            <p className="text-[24px] md:text-[50px]">
              "The Shadows Are Mine"
              <br />- A Batman Monologue
            </p>
            <FadeInText
              text="Gotham is sick. A city on the edge, teetering between order and chaos. The people who run it—politicians, businessmen, crime lords—they want you to believe they have control. But I see the truth. I see the cracks in their foundation, the corruption that eats away at everything. This city is rotting, and no one wants to admit it. No one wants to face the monsters hiding in the dark. But I am not afraid of the dark. I became it. I let it consume me. Because someone has to. They call me a vigilante. A menace. A madman in a mask. Maybe they’re right. Maybe all I am is a man clinging to a war he can never win. But I can’t stop. I won’t stop. Because I know what happens when good men do nothing. When fear is allowed to rule. I’ve seen what Gotham becomes without someone willing to fight for it. I won’t let that happen again. I tried to be vengeance. I thought fear was enough—that if I could make criminals afraid, I could stop them. But fear is a tool, not a solution. I’ve learned that the hard way. Fear might make a man hesitate before pulling the trigger, but it won’t change his heart. Fear is temporary. Justice is something more. I’ve paid for this war in blood—my own and that of the people I’ve failed to save. Every night, I hear the echoes of the past, the voices of those I couldn’t protect. My parents. The innocent lives lost in alleyways and abandoned streets. I tell myself their deaths weren’t in vain. That their loss fuels my fight. But some nights, I wonder if I’m lying to myself. If this is all just a way to justify the rage I feel inside. Because the truth is… the rage never fades. But rage isn’t justice. Vengeance isn’t enough. I have to be more. Not just a symbol of fear—but a symbol of hope. Because Gotham doesn’t need another monster lurking in the dark. It needs something stronger. Something incorruptible. A protector. A knight. I don’t do this because I want to. I do it because I have to. Because if I don’t, who will? I made a promise, long ago, in the cold of a dark alley. A promise that I would never let another child lose their parents the way I lost mine. That I would stand between Gotham and the abyss. I may not be the hero this city wants, but I am the one it needs. And as long as I draw breath, I will fight. Because I am vengeance. I am the night. I am Batman."
              className="md:text-xl font-medium text-neutral-200"
            />
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
        description: 'Create a file fade-in-text.tsx in your components folder and paste this code',
        code: `'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

type FadeInTextProps = {
  text: string;
  className?: string;
};

const FadeInText: React.FC<FadeInTextProps> = ({ text, className }) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className={\`flex flex-wrap h-full w-full gap-2 \${className}\`}>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default FadeInText;

        `
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<FadeInText
    text="Gotham is sick. A city on the edge, teetering between order and chaos. The people who run it—politicians, businessmen, crime lords—they want you to believe they have control. But I see the truth. I see the cracks in their foundation, the corruption that eats away at everything. This city is rotting, and no one wants to admit it. No one wants to face the monsters hiding in the dark. But I am not afraid of the dark. I became it. I let it consume me. Because someone has to. They call me a vigilante. A menace. A madman in a mask. Maybe they’re right. Maybe all I am is a man clinging to a war he can never win. But I can’t stop. I won’t stop. Because I know what happens when good men do nothing. When fear is allowed to rule. I’ve seen what Gotham becomes without someone willing to fight for it. I won’t let that happen again. I tried to be vengeance. I thought fear was enough—that if I could make criminals afraid, I could stop them. But fear is a tool, not a solution. I’ve learned that the hard way. Fear might make a man hesitate before pulling the trigger, but it won’t change his heart. Fear is temporary. Justice is something more. I’ve paid for this war in blood—my own and that of the people I’ve failed to save. Every night, I hear the echoes of the past, the voices of those I couldn’t protect. My parents. The innocent lives lost in alleyways and abandoned streets. I tell myself their deaths weren’t in vain. That their loss fuels my fight. But some nights, I wonder if I’m lying to myself. If this is all just a way to justify the rage I feel inside. Because the truth is… the rage never fades. But rage isn’t justice. Vengeance isn’t enough. I have to be more. Not just a symbol of fear—but a symbol of hope. Because Gotham doesn’t need another monster lurking in the dark. It needs something stronger. Something incorruptible. A protector. A knight. I don’t do this because I want to. I do it because I have to. Because if I don’t, who will? I made a promise, long ago, in the cold of a dark alley. A promise that I would never let another child lose their parents the way I lost mine. That I would stand between Gotham and the abyss. I may not be the hero this city wants, but I am the one it needs. And as long as I draw breath, I will fight. Because I am vengeance. I am the night. I am Batman."
    className="text-xl font-medium text-neutral-200"
/>`
      }
    ]
  }
};
