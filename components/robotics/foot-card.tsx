import { fontTektur } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const FootCard = () => {
  return (
    <div
      className="flex flex-col justify-between  bg-[#FFDE00]  w-[200px] h-[250px] md:w-[400px] md:h-[508px] rounded-3xl p-[20px] md:p-[40px]"
      style={{
        // boxShadow: "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
      }}
    >
      <span>
        <div className="w-[160px] h-[110px] md:w-[333px] md:h-[211px] rounded-3xl bg-white"></div>
        <p
          className={`${fontTektur.variable} font-tektur text-[#000] text-[13px] sm:text-[16px] md:text-[40px] font-bold`}
        >
          Живопись для детей
        </p>
      </span>
      <div className="flex items-end justify-end mb-0">
        <Button
          endContent={<GrFormNextLink className="" />}
          className="w-full bg-black rounded-full text-white text-[16px] md:text-2xl"
        >
          {"Подробнее о кусе"}
        </Button>
      </div>
    </div>
  );
};

export default FootCard;
