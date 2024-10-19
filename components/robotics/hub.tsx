import Image from "next/image";
import React from "react";

const HubCard = ({ image }: any) => {
  return (
    <div className="md:w-[400px] md:h-[500px] min-w-[200px] w-[200px] h-[250px] rounded-3xl overflow-hidden">
      <Image
        src={image}
        alt="hub images"
        width={400}
        height={400}
        className="w-full h-full"
        layout="responsive"
        quality={100}
      />
    </div>
  );
};

export default HubCard;
