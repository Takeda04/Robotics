import { fontTektur } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import React from "react";

const Card = () => {
  return (
    <div
      className="w-[232px] h-[215px] md:w-[651px] md:h-[474px] bg-white py-[15px] px-[15px] md:py-[28px] md:px-[50px] flex flex-col items-start"
      style={{
        borderRadius: "30px",
      }}
    >
      <p
        className={`${fontTektur.variable} font-tektur text-[#000] text-[22px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold`}
      >
        JustRobotics
      </p>
      <p
        className={`${fontTektur.variable} font-tektur text-[#000] text-[16px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold`}
      >
        твой проводник в мир технологий и искусства
      </p>
      <p className={`text-[#000] text-[14px] sm:text-[22px] md:text-[32px] lg:text-[40px]`}>получите бесплатное первое занятие</p>
      <Button className="bg-black text-[#FFE001] text-[16px] sm:text-[32px] md:h-[150px]">Перейти к курсам</Button>
    </div>
  );
};

export default Card;
