import Image from "next/image";
import React from "react";

import { PlayIcon } from "@/assets/icons/icons";

export const VideoCard = ({ image }: any) => {
  return (
    <div
      className="w-[220px] h-[310px] flex items-center justify-center bg-gray-500 m-2" // Added margin
      style={{
        boxShadow: "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
        borderRadius: "12px",
      }}
    >
      <Image
        alt="Slider image"
        className="w-full h-full object-cover"
        height={100}
        src={image}
        width={100}
      />
      <PlayIcon />
    </div>
  );
};
