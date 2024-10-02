import { fontTektur } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";

const HomeCard = ({ image, text, link }: any) => {
  return (
    <div
      className="flex flex-col justify-between md:w-[551px] min-w-[300px] md:h-[508px] md:bg-[#F0D625] w-[250px] h-[306px] bg-[#181818]  shadow-yellow-400 px-[15px] py-[15px]  md:px-[51px] md:py-[43px]"
      style={{
        borderRadius: "30px",
      }}
    >
      <span>
        <Image
          width={449}
          height={211}
          alt="website slider image"
          src={image}
          className="w-[300px] h-[191px] md:w-[449px] md:h-[211px]"
        />

        <p
          className={`${fontTektur.variable} font-tektur  text-white md:text-[#000] text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-start font-bold my-[21px]`}
        >
          {text}
        </p>
      </span>
      <div className="flex items-end justify-end mb-0">
        <Button className="mb-0 bg-black rounded-full text-white text-end hidden sm:block">
          {"Подробнее о кусе ->"}
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;
