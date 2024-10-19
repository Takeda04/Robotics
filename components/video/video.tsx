import React, { useEffect, useRef } from "react";
import { PlayIcon } from "@/assets/icons/icons";

interface VideoCardProps {
  videoSrc: string;
  poster: string;
  isPlaying: boolean; // Add isPlaying prop to control play/pause
  onPlayPause: () => void; // Callback to notify parent when play/pause occurs
}

export const VideoCard: React.FC<VideoCardProps> = ({
  videoSrc,
  poster,
  isPlaying,
  onPlayPause,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Effect to handle play/pause based on isPlaying prop
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]); // Only re-run if isPlaying changes

  return (
    <div
      className="relative  w-[280px] h-[350px] md:w-[220px] md:h-[310px] flex items-center justify-center bg-gray-500 m-2 cursor-pointer"
      style={{
        boxShadow: "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
        borderRadius: "12px",
      }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-xl"
        poster={poster}
        src={videoSrc}
        controls={false}
      >
        <track kind="captions" srcLang="en" label="English" default />
      </video>
      <button
        onClick={onPlayPause}
        className="absolute inset-0 flex items-center justify-center bg-transparent border-none cursor-pointer"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {!isPlaying && <PlayIcon />}
      </button>
    </div>
  );
};
