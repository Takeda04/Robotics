import { Button } from "@nextui-org/button";


import React, { useState } from "react";

import { fontTektur } from "@/config/fonts";
import { useTranslation } from "@/app/[lng]/i18n/client";
import MyModal from "../modal/modal";

const Card = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "translation", {});
  const courses = [
    { drop: t("drop1") },
    { drop: t("drop2") },
    { drop: t("drop3") },
    { drop: t("drop4") },
    { drop: t("drop5") },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalChange = (open: boolean) => {
    setIsModalOpen(open);
  };

  return (
    <>
      <div
        className="w-[232px] h-[215px] md:w-[351px] md:h-[354px] lg:w-[651px] lg:h-[474px] bg-white py-[15px] px-[15px] md:py-[28px] lg:py-[38px] md:px-[30px] lg:px-[50px] flex flex-col items-start"
        style={{
          borderRadius: "30px",
        }}
      >
        <p
          className={`${fontTektur.variable} font-tektur text-[#000] text-[22px] md:text-[44px] lg:text-[80px] font-bold`}
        >
          JustRobotics
        </p>
        <p
          className={`${fontTektur.variable} font-tektur text-[#000] text-[16px] md:text-[28px] lg:text-[44px] font-bold`}
        >
          {t("main_card")}
        </p>
        <p
          className={`text-[#000] text-[14px] md:text-[20px] lg:text-[30px]`}
        >
          {t("sub_main_card")}
        </p>
        <Button
          className="bg-black text-[#FFE001] text-[16px] sm:text-[22px] md:text-[26px] lg:text-[30px] md:w-[200px] lg:w-[300px] p-5 mt-2 md:mt-0 lg:mt-8"
          onClick={() => setIsModalOpen(true)}
        >
          {t("card_btn")}
        </Button>
      </div>
      <MyModal
          isOpen={isModalOpen}
          onOpenChange={handleModalChange}
          t={t}
          courses={courses}
        />
    </>
  );
};

export default Card;
