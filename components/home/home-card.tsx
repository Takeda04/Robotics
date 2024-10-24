import React from "react";

import { useTranslation } from "@/app/[lng]/i18n/client";
import { fontTektur } from "@/config/fonts";

const StatCard = ({
  lng,
  text,
  subText,
}: {
  lng: string;
  text: string;
  subText: string;
}) => {
  const { t } = useTranslation(lng, "translation", {});

  return (
    <div
      className="w-[145px] h-[90px] sm:w-[185px] sm:h-[165px] md:w-[240px] md:h-[220px] lg:w-[280px] lg:h-[260px] xl:w-[340px] xl:h-[320px] bg-[#F0D625] rounded-3xl flex flex-col items-center justify-center mx-auto"
      style={{
        boxShadow: "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
      }}
    >
      <p
        className={`${fontTektur.variable} text-black font-tektur text-[24px] sm:text-[26px] md:text-[80px] lg:text-[100px] xl:text-[120px] text-center font-bold`}
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
