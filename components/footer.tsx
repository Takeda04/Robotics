"use client";

import Image from "next/image";
import React, { useState } from "react";
import dark_logo from "@/assets/icons/dark_logo.png";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { Link } from "@nextui-org/link";
import { fontTektur } from "@/config/fonts";
import { ClockIcon, LocationIcon, PhoneIcon } from "@/assets/icons/icons";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";

import CustomCarousel from "./carousel";

export const Footer = () => {
  const [activeLanguage, setActiveLanguage] = useState("S1");

  const handleLanguageChange = (lang: string) => {
    setActiveLanguage(lang);
  };

  return (
    <section>
      <div className="container mx-auto max-w-7xl overflow-hidden">
        <CustomCarousel/>
      </div>

      <div className="container mx-auto max-w-7xl">
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
        >
          Получите бесплатный первый урок
        </p>
      </div>

      <div className="container mx-auto max-w-7xl my-[50px] flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        <Input
          type="name"
          label="Ваше имя"
          variant="bordered"
          className="w-full sm:w-[240px]" // Full width on smaller screens
        />
        <Input
          type="phone"
          label="Номер телефона"
          variant="bordered"
          className="w-full sm:w-[240px]" // Full width on smaller screens
        />
        <Select
          label="Выберете курс"
          variant="bordered"
          className="w-full sm:w-[240px]" // Full width on smaller screens
        >
          {[
            "Robotics",
            "English",
            "Chess",
            "Painting for children",
            "Painting for olders",
          ].map((course, index) => (
            <SelectItem key={index}>{course}</SelectItem>
          ))}
        </Select>
        <Input
          type="age"
          label="Возраст"
          variant="bordered"
          className="w-full sm:w-[240px]" // Full width on smaller screens
        />
        <Button
          style={{
            boxShadow:
              "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
          }}
          className={`w-full sm:w-[240px] ${fontTektur.variable} font-tektur font-bold text-black bg-[#FFE000] h-[55px] text-[24px]`}
        >
          Получить
        </Button>
      </div>

      <div className="container mx-auto max-w-7xl flex items-center justify-center sm:justify-start">
        <Button
          onClick={() => handleLanguageChange("S1")}
          style={{
            background: activeLanguage === "S1" ? "#F0D625" : "#ffffff",
            color: "#000000",
            boxShadow:
              activeLanguage === "S1"
                ? "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625"
                : "",
          }}
          className={`${fontTektur.variable} font-tektur py-5 sm:py-[20px] h-[50px] sm:h-[78px] px-9 sm:px-[64px] text-[16px] sm:text-[30px]`}
        >
          Филиал Ц4
        </Button>
        <Button
          onClick={() => handleLanguageChange("BERUNIY")}
          style={{
            background: activeLanguage === "BERUNIY" ? "#F0D625" : "#ffffff",
            color: "#000000",
            boxShadow:
              activeLanguage === "BERUNIY"
                ? "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625"
                : "",
          }}
          className={`${fontTektur.variable} font-tektur py-5 sm:py-[20px] h-[50px] sm:h-[78px] px-9 sm:px-[64px] text-[16px] sm:text-[30px] ml-[20px] sm:ml-[60px]`}
        >
          Филиал Беруни
        </Button>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-wrap items-center justify-evenly my-[80px] gap-[20px] sm:gap-[56px]">
        <span className="flex items-center justify-start gap-x-[50px] w-[350px]">
          <PhoneIcon />
          <p
            className={`${fontTektur.variable} font-tektur text-white text-[24px]`}
          >
            Номера телефонов
          </p>
        </span>
        <span className="flex items-center justify-start gap-x-[50px] w-[350px]">
          <LocationIcon />
          <p
            className={`${fontTektur.variable} font-tektur text-white text-[24px]`}
          >
            Адрес Орьентир
          </p>
        </span>
        <span className="flex items-center justify-start gap-x-[50px] w-[350px]">
          <ClockIcon />
          <p
            className={`${fontTektur.variable} font-tektur text-white text-[24px]`}
          >
            График работы
          </p>
        </span>
      </div>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11520.30876460942!2d69.32351225000001!3d41.305524199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1727763477753!5m2!1sru!2s"
        style={{
          height: "500px", // Ensure the height is set to 500px
          border: "0",
          width: "100%",
          marginBottom: "80px",
        }}
        className="h-[500px]"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <footer className="bg-[#FFE000] py-8">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row py-6 gap-y-8 px-4 lg:px-0">
          {/* Logo and Slogan Section */}
          <div className="flex flex-col items-start sm:flex-col">
            <Image
              width={70}
              height={70}
              src={dark_logo}
              alt="Company Logo"
              className="mb-4"
            />
            <p
              className={`${fontTektur.variable} font-tektur text-black font-bold text-[14px] max-w-[248px]`}
            >
              SLOGAN Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex gap-5 mt-4">
              <Link
                href="https://t.me/olimjon_nishanaliyev"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="text-black text-2xl" />
              </Link>
              <Link
                href="https://www.youtube.com/@asmrpistol"
                aria-label="YouTube"
              >
                <FaYoutube className="text-black text-2xl" />
              </Link>
              <Link
                href="https://www.instagram.com/nishanaliyevolimjon"
                aria-label="Instagram"
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
              Курсы
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                "Работотехника",
                "Английский для взрослых",
                "Английский для детей",
                "Шахмат",
                "Живопись",
              ].map((course, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={`${fontTektur.variable} font-tektur text-black text-[20px]`}
                  >
                    {course}
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
              Контакты
            </h2>
            <ul className="mt-4 space-y-2">
              {["Телеграм", "Инстаграм", "Ютюб"].map((contact, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className={`${fontTektur.variable} font-tektur text-black text-[20px]`}
                  >
                    {contact}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container mx-auto max-w-7xl">
          <div className="font-bold mt-8 text-black text-[14px] text-center sm:text-left">
            <p className={`${fontTektur.variable} font-tektur`}>
              Ideallux.com © 2000-2024, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
