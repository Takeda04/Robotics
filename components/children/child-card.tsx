import React from "react";

import { fontTektur } from "@/config/fonts";

const ChildCard = ({ text, subText }: { text: string; subText: string }) => {
  return (
    <div
      className="flex flex-col w-[390px] h-[160px] md:w-[410px] md:h-[230px] rounded-3xl bg-[#FFDE00] py-[25px] px-[16px] md:px-[25px]"
      style={{
        boxShadow: "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
      }}
    >
      <p
        className={`${fontTektur.variable} font-tektur text-[#000] text-[15px] md:text-[26px] text-start font-bold`}
      >
        {text}
      </p>
      <p
        className={`${fontTektur.variable} font-tektur text-[#000] text-[13px] md:text-[18px] text-start`}
      >
        {subText}
      </p>
    </div>
  );
};

export default ChildCard;
