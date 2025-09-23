'use client';

import { memo, useEffect, useRef, useState } from 'react';

interface VideoPreviewProps {
  videoUrl: string;
  thumbnailUrl?: string;
  className?: string;
}

const VideoPreview = memo(({ videoUrl, thumbnailUrl, className }: VideoPreviewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  useEffect(() => {
    if (!videoRef.current || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const video = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInViewport(entry.isIntersecting);

        if (entry.isIntersecting) {
          video.play().catch((err) => console.error('Video play error:', err));
        } else {
          video.pause();
          video.currentTime = 0; // Reset to beginning when out of viewport
        }
      },
      { threshold: 0 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Generate thumbnail from video first frame if no thumbnailUrl provided
  useEffect(() => {
    if (!thumbnailUrl && videoRef.current && !thumbnailLoaded) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (ctx) {
        video.addEventListener('loadeddata', () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          // Use first frame (currentTime = 0) for thumbnail
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const thumbnailDataUrl = canvas.toDataURL('image/jpeg', 0.8);
          video.style.backgroundImage = `url(${thumbnailDataUrl})`;
          video.style.backgroundSize = 'cover';
          video.style.backgroundPosition = 'center';
          setThumbnailLoaded(true);
        });
      }
    }
  }, [thumbnailUrl, thumbnailLoaded]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <video
        ref={videoRef}
        src={videoUrl}
        playsInline
        muted
        loop
        className={`w-full h-full object-cover rounded-lg ${className}`}
        preload="metadata"
        poster={thumbnailUrl}
        style={{
          backgroundImage: !isInViewport && thumbnailLoaded ? undefined : 'none'
        }}
      />
      {!isInViewport && (
        <div
          className="absolute inset-0 w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center"
          style={{
            backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {!thumbnailUrl && <div className="text-gray-500 text-sm">Loading thumbnail...</div>}
        </div>
      )}
    </div>
  );
});

VideoPreview.displayName = 'VideoPreview';

export default VideoPreview;
