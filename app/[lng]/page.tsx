"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";

import { useTranslation } from "./i18n/client";

import HomeCard from "@/components/home-card";
import { fontTektur } from "@/config/fonts";
import StatCard from "@/components/home/home-card";
import borderimg from "@/assets/icons/cardbottom.png";
import robot from "@/assets/icons/home_robot.png";
import Card from "@/components/home/card";
import CustomCarousel from "@/components/carousel";

// images

import home from "@/assets/images/home.png";
import home2 from "@/assets/images/home2.png";
import home3 from "@/assets/images/home3.png";
import home4 from "@/assets/images/home4.png";
import home5 from "@/assets/images/home5.png";

import { getCookie } from "cookies-next";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng, "translation", {});

  const lang = getCookie("i18next");

  const CardContent = [
    {
      text: "300+",
      subText: t("stat_card1"),
    },
    {
      text: "25+",
      subText: t("stat_card2"),
    },
    {
      text: "60+",
      subText: t("stat_card3"),
    },
  ];

  const images = [
    {
      image: home,
      text: t("home1"),
      link: `${lang}/robotic`,
      btn: t("home_btn"),
    },
    {
      image: home2,
      text: t("home2"),
      link: `${lang}/painting_children`,
      btn: t("home_btn"),
    },
    {
      image: home3,
      text: t("home3"),
      link: `${lang}/painting_olders`,
      btn: t("home_btn"),
    },
    {
      image: home4,
      text: t("home4"),
      link: `${lang}/english`,
      btn: t("home_btn"),
    },
    {
      image: home5,
      text: t("home5"),
      link: `${lang}/chess`,
      btn: t("home_btn"),
    },
  ];

  const courses = [
    { drop: t("drop1") },
    { drop: t("drop2") },
    { drop: t("drop3") },
    { drop: t("drop4") },
    { drop: t("drop5") },
  ];
  const videos = [
    {
      poster: "/",
      video: "/videos/video1.mp4",
    },
    {
      poster: "",
      video: "/videos/video2.mp4",
    },
    {
      poster: "",
      video: "/videos/video3.mp4",
    },
    {
      poster: "",
      video: "/videos/video4.mp4",
    },
    {
      poster: "",
      video: "/videos/video5.mp4",
    },
    {
      poster: "",
      video: "/videos/video6.mp4",
    },
    
  ];

  return (
    <div className="realtive">
      <div className="relative z-20 w-full h-[125px] md:h-[590px] rounded-b-3xl mt-36 flex">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between ">
          <Card lng={lng} />
          <Image
            alt="home robot"
            className="w-[166px] h-[201px] md:w-[600px] md:h-[600px]"
            height={500}
            src={robot}
            width={500}
          />
        </div>
        <Image
          alt="border image"
          className="absolute bottom-0 right-0"
          height={400}
          src={borderimg}
          style={{ borderBottomRightRadius: "30px" }}
          width={400}
        />
      </div>
      <section className="relative w-full h-[300px] md:h-[400px] bg-black flex items-center ">
        <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 container mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-[10px] md:gap-6">
          {CardContent.map(({ text, subText }) => (
            <StatCard key={text} lng={lng} subText={subText} text={text} />
          ))}
        </div>
      </section>
      <section className="relative w-full h-[486px] bg-white py-[30px] px-[10px]">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center ">
          <p
            className={`${fontTektur.variable} font-tektur text-[#000] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]`}
          >
            <b>{t("robo_bold")}</b>
            {t("about_text1")}
          </p>
          <p
            className={`${fontTektur.variable} font-tektur text-[#000] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]`}
          >
            <b>{t("robo_bold")}</b>
            {t("about_text2")}
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl ">
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
        >
          {t("author")}
        </p>
        <div className="flex md:flex-wrap items-center gap-[20px] sm:justify-center md:gap-[58px] my-10 overflow-x-scroll">
          {images.map(({ image, text, link, btn }) => (
            <HomeCard
              key={link}
              btn={btn}
              image={image}
              link={link}
              text={text}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-7xl overflow-hidden ">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] md:text-[32px] font-bold text-center md:text-start`}
          >
            {t("advices")}
          </p>
          <CustomCarousel videos={videos}/>
        </div>

        <div className="container mx-auto max-w-7xl">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
          >
            {t("sub_main_card")}
          </p>
        </div>

        <div className="container mx-auto max-w-7xl my-[50px] flex flex-wrap items-end justify-center gap-4 sm:gap-5">
          <Input
            className="w-full sm:w-[240px]"
            label={t("form_name")}
            labelPlacement="outside"
            placeholder="John Doe"
            type="email"
            variant="flat"
          />

          <Input
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label={t("form_phone")}
            labelPlacement="outside"
            placeholder="+9998901234567"
            type="phone"
            variant="flat"
          />
          <Select
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label={t("form_course")}
            labelPlacement="outside"
            placeholder="Robotics"
            variant="flat"
          >
            {courses.map((course, idx) => (
              <SelectItem key={idx}>{course.drop}</SelectItem>
            ))}
          </Select>
          <Input
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label={t("form_age")}
            labelPlacement="outside"
            placeholder="10"
            type="age"
            variant="flat"
          />
          <Button
            className={`w-full sm:w-[240px] ${fontTektur.variable} font-tektur font-bold text-black bg-[#FFE000] h-[40px] text-[24px]`}
            style={{
              boxShadow:
                "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
            }}
          >
            {t("form_btn")}
          </Button>
        </div>
      </section>
    </div>
  );
}
