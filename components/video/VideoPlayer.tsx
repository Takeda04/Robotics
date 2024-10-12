import React, { useState, useRef } from "react";
import { PlayIcon } from "@/assets/icons/icons";

const VideoPlayer = ({ videoSrc, posterSrc }: { videoSrc: string; posterSrc: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); // Reference to the video element

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play(); // Start playing the video
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current?.pause(); // Pause the video
  };

  const handleTogglePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false); // Reset playing state when the video ends
  };

  return (
    <div  className="relative w-[150px] h-[130px] min-w-[150px] min-h-[130px] md:w-[509px] md:h-[389px] rounded-3xl overflow-hidden">
      <video
        ref={videoRef} // Attach the ref
        src={videoSrc}
        poster={posterSrc}
        className="w-full h-full rounded-3xl object-cover"
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleVideoEnd} // Handle video end
        controls={false}
      >
        <track kind="captions" srcLang="en" label="English" default /> {/* Empty track for captions */}
      </video>
     
        <button
          className={`absolute inset-0 flex items-center justify-center bg-black ${!isPlaying ? "bg-opacity-50" : "bg-opacity-0" } rounded-3xl cursor-pointer`}
          onClick={handleTogglePlayPause} // Toggle play/pause on overlay click
          aria-label={isPlaying ? "Pause video" : "Play video"} // Accessibility label
        >
          {!isPlaying && ( <PlayIcon />)}
        </button>
      
    </div>
  );
};

export default VideoPlayer;
