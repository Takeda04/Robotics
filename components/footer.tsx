"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { fontTektur } from "@/config/fonts";
import { useTranslation } from "@/app/[lng]/i18n/client";
import { getCookie } from "cookies-next";
import { Tooltip } from "@nextui-org/react";
import { ClockIcon, LocationIcon, PhoneIcon } from "@/assets/icons/icons";

export const Footer = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng, "translation", {});
  const [activeLocation, setActiveLocation] = useState("BERUNIY");
  const router = useRouter();
  const lang = getCookie("i18next");

  // Initial Yandex map state with the first location
  const [mapSrc, setMapSrc] = useState(
    "https://yandex.uz/map-widget/v1/?ll=69.222182%2C41.350681&z=13&mode=search&text=justrobotics"
  );

  // Function to handle button clicks and update Yandex map to the respective place
  const handleLocationChange = (location: string, mapUrl: string) => {
    setActiveLocation(location);
    setMapSrc(mapUrl);
  };

  // Courses
  const courses = [
    { drop: t("drop1"), link: `/${lang}/robotic` },
    { drop: t("drop2"), link: `/${lang}/english` },
    { drop: t("drop3"), link: `/${lang}/painting_children` },
    { drop: t("drop4"), link: `/${lang}/painting_olders` },
    { drop: t("drop5"), link: `/${lang}/chess` },
  ];

  // Socials
  const socials = [
    { soc: t("footer_soc1"), link: `/${lang}/` },
    {
      soc: t("footer_soc2"),
      link: `https://www.instagram.com/just.robotics/?hl=ru`,
    },
    {
      soc: t("footer_soc3"),
      link: `https://www.youtube.com/@JustRobotics-vt1hu`,
    },
    { soc: t("footer_soc4"), link: `/${lang}/` },
  ];

  return (
    <section>
      <div className="container mx-auto max-w-7xl flex items-center justify-center sm:justify-start">
        <Button
          className={`${fontTektur.variable} font-tektur py-5 sm:py-[20px] h-[50px] sm:h-[78px] px-9 sm:px-[64px] text-[16px] sm:text-[30px]`}
          style={{
            background: activeLocation === "S1" ? "#F0D625" : "#ffffff",
            color: "#000000",
            boxShadow:
              activeLocation === "S1"
                ? "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625"
                : "",
          }}
          onClick={() =>
            handleLocationChange(
              "S1",
              "https://yandex.uz/map-widget/v1/?ll=69.278434%2C41.318463&z=13&mode=search&text=justrobotics"
            )
          }
        >
          {t("footer_btn1")}
        </Button>
        <Button
          className={`${fontTektur.variable} font-tektur py-5 sm:py-[20px] h-[50px] sm:h-[78px] px-9 sm:px-[64px] text-[16px] sm:text-[30px] ml-[20px] sm:ml-[60px]`}
          style={{
            background: activeLocation === "BERUNIY" ? "#F0D625" : "#ffffff",
            color: "#000000",
            boxShadow:
              activeLocation === "BERUNIY"
                ? "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625"
                : "",
          }}
          onClick={() =>
            handleLocationChange(
              "BERUNIY",
              "https://yandex.uz/map-widget/v1/?ll=69.222182%2C41.350681&z=13&mode=search&text=justrobotics"
            )
          }
        >
          {t("footer_btn2")}
        </Button>
      </div>

      <div className="container mx-auto max-w-7xl my-[50px] flex items-center justify-center sm:justify-center md:justify-center lg:justify-between xl:justify-between gap-y-5 flex-wrap">
        <Tooltip
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">{t("footer_phone")}</div>
              <div className="text-tiny">+998 33 718 44 44</div>
            </div>
          }
        >
          <div className="flex items-center gap-x-5 w-[300px]">
            <PhoneIcon />
            <p>{t("footer_phone")}</p>
          </div>
        </Tooltip>
        <Tooltip
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">{t("footer_location")}</div>
              <div className="text-tiny">
                {`${activeLocation === "BERUNIY" ? "Алмазарский район, ориентир Парк победы" : "Юнусабадский район, ориентир отель Hayat Regency"}`}
              </div>
            </div>
          }
        >
          <div className="flex items-center gap-x-5 w-[300px]">
            <LocationIcon />
            <p>{t("footer_location")}</p>
          </div>
        </Tooltip>
        <Tooltip
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">{t("footer_plan")}</div>
              <div className="text-tiny">10:00 - 19:00</div>
            </div>
          }
        >
          <div className="flex items-center gap-x-5 w-[300px]">
            <ClockIcon />
            <p>{t("footer_plan")}</p>
          </div>
        </Tooltip>
      </div>

      {/* Embed Yandex Map */}
      <iframe
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={mapSrc}
        style={{
          height: "320px",
          border: "0",
          width: "100%",
          marginBottom: "80px",
        }}
        title="Yandex Maps - Just Robotics Location"
        width="600"
      />

      <footer id="footer" className="bg-[#FFE000] py-8">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row py-6 gap-y-8 px-4 lg:px-0">
          {/* Logo and Slogan Section */}
          <div className="flex flex-col items-start sm:flex-col">
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Image
                alt="Company Logo"
                height={90}
                src="/icon/logotip.svg"
                width={90}
              />
            </div>
            <p
              className={`${fontTektur.variable} font-tektur text-black font-bold text-[14px] max-w-[248px]`}
            >
              {t("slogan")}
            </p>
            <div className="flex gap-5 mt-4">
              <Link
                aria-label="Telegram"
                href="https://t.me/+998 33-718-44-44"
                target="_blank"
              >
                <FaTelegramPlane className="text-black text-2xl" />
              </Link>
              <Link
                aria-label="YouTube"
                target="_blank"
                href="https://www.youtube.com/@JustRobotics-vt1hu"
              >
                <FaYoutube className="text-black text-2xl" />
              </Link>
              <Link
                aria-label="Instagram"
                target="_blank"
                href="https://www.instagram.com/just.robotics/?hl=ru"
              >
                <FaInstagram className="text-black text-2xl" />
              </Link>
            </div>
          </div>

          {/* Courses Section */}
          <div className="flex flex-col ml-0 lg:ml-[148px]">
            <h2
              className={`${fontTektur.variable} font-tektur text-black font-bold text-[26px]`}
            >
              {t("drop")}
            </h2>
            <ul className="mt-4 space-y-2">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link
                    className={`${fontTektur.variable} font-tektur text-black text-[20px]`}
                    href={course.link}
                  >
                    {course.drop}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Section */}
          <div className="flex flex-col ml-0 lg:ml-[148px]">
            <h2
              className={`${fontTektur.variable} font-tektur text-black font-bold text-[26px]`}
            >
              {t("contact")}
            </h2>
            <ul className="mt-4 space-y-2">
              {socials.map((contact, index) => (
                <li key={index}>
                  <Link
                    target="_blank"
                    className={`${fontTektur.variable} font-tektur text-black text-[20px]`}
                    href={contact.link}
                  >
                    {contact.soc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <div className="container mx-auto max-w-7xl">
          <div className="font-bold mt-8 text-black text-[14px] text-center sm:text-left">
            <p className={`${fontTektur.variable} font-tektur`}>
              {t("security")}
            </p>
          </div>
        </div> */}
      </footer>
    </section>
  );
};
