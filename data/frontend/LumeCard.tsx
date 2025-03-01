import { Document } from '../main';
import LumeCard from '@/components/ui/lume-card';

export const lumeCardPreview = (
  <div className="flex items-center justify-center scale-75">
    <LumeCard
      title="Explore Beyond Borders"
      paragraph="The world is full of hidden gems waiting to be discovered. Where will your next adventure take you?"
      image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  </div>
);

export const lumeCard: Document = {
  sideBar: {
    group: 'Cards',
    name: 'Lume Card',
    order: 1
  },
  content: {
    sections: [
      {
        heading: '🏹 Lume Card',
        content:
          'Think of an Lume Card as a mystery box—compact, stylish, and packed with hidden surprises! 🎁 With a simple click, tap, or hover, it smoothly expands to reveal extra details, insights, or even a secret tip. Perfect for modern dashboards, product previews, FAQs, or storytelling elements, this card keeps your UI clean while delivering engaging, interactive content.',
        sectionType: 'paragraph'
      },
      {
        heading: 'Preview',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <LumeCard
              title="Explore Beyond Borders"
              paragraph="The world is full of hidden gems waiting to be discovered. Where will your next adventure take you?"
              image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        sectionType: 'dependencies',
        code: `npm i framer-motion`
      },
      {
        heading: 'Component',
        sectionType: 'component',
        description: 'Create a file lume-card.tsx in your components folder and paste this code',
        code: `import { useState } from 'react';
import { motion } from 'framer-motion';

type LumeCardProps = {
  title?: string;
  paragraph?: string;
  image?: string;
  className?: string;
};

const LumeCard = ({ title, paragraph, image, className }: LumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={\`w-full max-w-[250px] sm:max-w-sm md:max-w-md \${className}\`}>
      {/* Card */}
      <motion.div
        className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        initial={{ scale: 1 }}
        animate={{ scale: isExpanded ? 1.05 : 1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: \`url(\${image})\` }}
          initial={{ scale: 1 }}
          animate={{ scale: isExpanded ? 1.15 : 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>

        {/* Subtle Overlay */}
        <motion.div
          className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isExpanded ? 0 : 0.5 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </motion.div>

      <motion.h2
        className="mt-2 text-white sm:text-lg md:text-2xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h2>

      {/* Paragraph Below the Card */}
      <motion.div
        className="text-white/60 text-sm sm:text-base opacity-90"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {paragraph}
      </motion.div>
    </div>
  );
};

export default LumeCard;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<LumeCard
  title="Explore Beyond Borders"
  paragraph="The world is full of hidden gems waiting to be discovered. Where will your next adventure take you?"
  image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>`
      }
    ]
  }
};
