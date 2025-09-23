import React, { useEffect, useState } from 'react';
import { comments } from '@/data/comments';
import SocialMediaCard, { PostType } from './components/social-media-card';
import BounceInText from './texts/bounce-in-text';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Testimonials = () => {
  const [layer, setLayer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLayer((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 lg:hidden">
      <BounceInText
        className="text-white text-2xl sm:text-4xl md:text-7xl font-semibold mt-6 sm:mt-8"
        text="What They Say"
        letterClassName="tracking-tight"
      />
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {[...comments, ...comments].slice(layer * 6, layer * 6 + 6).map((comment) => {
            return (
              <motion.div
                key={`testimonial-item-${comment.id}-${comment.name}-${layer}`}
                id={`testimonial-item-${comment.id}-${layer}`}
                initial={{ opacity: 0, scale: 0.97, filter: 'blur(5px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.97, filter: 'blur(5px)' }}
                transition={{ duration: 0.5 }}
              >
                <Link href={comment.href} target="_blank">
                  <SocialMediaCard post={comment as PostType} />
                </Link>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Testimonials;
