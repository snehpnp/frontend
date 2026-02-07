"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay block ho to silently fail
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      controls
      className="h-48 w-full object-cover"
    />
  );
}
