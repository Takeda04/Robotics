import { useTranslation } from "@/app/[lng]/i18n/client";
import { fontTektur } from "@/config/fonts";
import React from "react";

const StatCard = ({ lng, text, subText }: { lng: string, text:string, subText:string }) => {
  const { t } = useTranslation(lng, 'translation', {});
  return (
    <div
      className="w-[165px] h-[110px] md:w-[398px] md:h-[369px] bg-[#F0D625] rounded-3xl flex flex-col items-center justify-center mx-auto"
      style={{
        boxShadow: "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
      }}
    >
      <p
        className={`${fontTektur.variable} text-black font-tektur text-[24px] sm:text-[16px] md:text-[120px] text-center font-bold`}
      >
        {text}
      </p>
      <p
        className={`${fontTektur.variable} text-black font-tektur text-[16px] sm:text-[12px] md:text-[40px] text-center font-bold`}
      >
        {subText}
      </p>
    </div>
  );
};

export default StatCard;
