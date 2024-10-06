import { fontTektur } from "@/config/fonts";
import React from "react";

const ChildCard = () => {
  return (
    <div
      className="flex flex-col w-[390px] h-[160px] md:w-[410px] md:h-[230px] rounded-3xl bg-[#FFDE00] py-[25px] px-[16px] md:px-[25px]"
      style={{
        boxShadow: "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
      }}
    >
      <p
        className={`${fontTektur.variable} font-tektur text-[#000] text-[15px] md:text-[32px] text-start font-bold`}
      >
        Lorem ipsum dolor
      </p>
      <p
        className={`${fontTektur.variable} font-tektur text-[#000] text-[13px] md:text-[18px] text-start`}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
        consequuntur culpa quo dolores, inventore expedita ut deleniti sint
        animi sequi!
      </p>
    </div>
  );
};

export default ChildCard;
