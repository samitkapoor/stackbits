'use client';

import { memo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoPreviewProps {
  videoUrl: string;
}

const VideoPreview = memo(({ videoUrl }: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          video.play().catch((err) => console.error('Video play error:', err));
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src={videoUrl}
        playsInline
        muted
        loop
        className="w-full h-full object-cover rounded-lg"
        preload="metadata"
      />
    </motion.div>
  );
});

VideoPreview.displayName = 'VideoPreview';

export default VideoPreview;
