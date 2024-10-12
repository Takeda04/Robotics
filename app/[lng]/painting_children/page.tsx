"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";

import { fontTektur } from "@/config/fonts";
import borderimg from "@/assets/icons/cardbottom.png";
import child from "@/assets/images/child.png";
import CustomCarousel from "@/components/carousel";
import HeadCard from "@/components/robotics/head-card";
import ChildCard from "@/components/children/child-card";
import ImageCarousel from "@/components/carousel/CarouselImage";
import RobotCarousel from "@/components/carousel/CarouselRobot";
import { useTranslation } from "../i18n/client";

import home from "@/assets/images/home.png";
import home2 from "@/assets/images/home2.png";
import home3 from "@/assets/images/home3.png";
import home4 from "@/assets/images/home4.png";
import home5 from "@/assets/images/home5.png";
import { getCookie } from "cookies-next";

import children1 from "@/assets/children/IMG_0864.jpg";
import children2 from "@/assets/children/IMG_1542.jpg";
import children3 from "@/assets/children/IMG_1548.jpg";
import children4 from "@/assets/children/IMG_2373.jpg";
import children5 from "@/assets/children/IMG_2698.jpg";
import children6 from "@/assets/children/IMG_2699.jpg";
import children7 from "@/assets/children/IMG_2710.jpg";

export default function PaintingChildrenPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, "translation", {});
  const lang = getCookie("i18next");

  const courses = [
    { drop: t("drop1") },
    { drop: t("drop2") },
    { drop: t("drop3") },
    { drop: t("drop4") },
    { drop: t("drop5") },
  ];
  const videos = [
    {
      poster: "",
      video: "/videos/children1.mp4",
    },
    {
      poster: "",
      video: "/videos/children2.mp4",
    },
    {
      poster: "",
      video: "/videos/children3.mp4",
    },
    {
      poster: "",
      video: "/videos/children4.mp4",
    },
    {
      poster: "",
      video: "/videos/children5.mp4",
    },
    {
      poster: "",
      video: "/videos/children6.mp4",
    },
  ];

  const edu_card = [
    { text: t("why"), subText: t("child_edu_text1") },
    { text: t("why"), subText: t("child_edu_text2") },
    { text: t("why"), subText: t("child_edu_text3") },
    { text: t("why"), subText: t("child_edu_text4") },
    { text: t("why"), subText: t("child_edu_text5") },
    { text: t("why"), subText: t("child_edu_text6") },
  ];
  const CardContent = [
    {
      image: home,
      text: t("home1"),
      link: `/${lang}/robotic`,
      btn: t("home_btn"),
    },
    {
      image: home2,
      text: t("home2"),
      link: `/${lang}/painting_children`,
      btn: t("home_btn"),
    },
    {
      image: home3,
      text: t("home3"),
      link: `/${lang}/painting_olders`,
      btn: t("home_btn"),
    },
    {
      image: home4,
      text: t("home4"),
      link: `/${lang}/english`,
      btn: t("home_btn"),
    },
    {
      image: home5,
      text: t("home5"),
      link: `/${lang}/chess`,
      btn: t("home_btn"),
    },
  ];

  const images = [
    children1,
    children2,
    children3,
    children4,
    children5,
    children6,
    children7,
  ];

  const videoSrc = "/videos/children1.mp4";
  const posterSrc = "";

  return (
    <div className="realtive">
      <div className="relative z-20 w-full h-[125px] md:h-[590px] rounded-b-3xl mt-36 flex">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between ">
          <div className="w-full">
            <p
              className={`absolute -top-10 md:top-0 ${fontTektur.variable}  font-tektur text-[#FFDE00] text-[26px] md:text-[70px] font-bold`}
            >
              {t("child_title")}
            </p>
            <p
              className={`absolute md:relative top-10 mt-0 md:mt-[60px] ${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[14px] md:text-[24px]`}
            >
              {t("child_desc")}
              <strong> {t("child_bold")}</strong>
            </p>

            <div className="relative">
              <p
                className={`absolute md:relative w-[300px] md:w-[500px] md:top-20 ${fontTektur.variable} font-tektur font-bold text-[#FFE001] text-[14px] md:text-[24px]`}
              >
                {t("robot_price")}{" "}
                <strong className="line-through"> {t("robot_cost")}</strong>
              </p>
              <div
                className="absolute text-[11px] md:text-[24px] -top-[15] left-[170px] md:top-[50px] md:left-[300px] text-black font-bold flex items-center justify-center w-[80px] h-[20px] rounded-xl md:w-[167px] md:h-[40px] bg-[#FFE001]"
                style={{
                  boxShadow:
                    "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
                  transform: "rotate(10deg)",
                }}
              >
                {t("paint_50")}
              </div>
            </div>
            <div className="absolute flex mt-[50px] md:mt-[100px] gap-2 md:gap-10 w-[300px] md:w-full">
              <Input
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]" // Full width on smaller screens
                label={t("form_name")}
                type="name"
                variant="flat"
              />
              <Input
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]"
                label={t("form_phone")}
                type="phone"
                variant="flat"
              />
              <Button
                className={`${fontTektur.variable} font-tektur font-bold text-black bg-[#FFE000] h-[35px] md:h-[55px] text-[14px] md:text-[24px] w-[80px] md:w-[200px]`}
                style={{
                  boxShadow:
                    "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
                }}
              >
                {t("form_btn")}
              </Button>
            </div>
          </div>
          <Image
            alt="home robot"
            className="w-[303px] h-[213.5px] md:w-[800px] md:h-[605px] rounded-br-3xl md:rounded-none"
            height={500}
            src={child}
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
      <section className="container mx-auto max-w-7xl flex items-center justify-between my-10 px-2 md:px-0 gap-5 md:gap-0">
        <HeadCard videoSrc={videoSrc} posterSrc={posterSrc} />
        <div
          className="w-[228px] h-[149px] min-w-[228px] min-h-[149px] md:w-[582px] md:h-[320px]"
          style={{
            boxSizing: "border-box",
          }}
        >
          <p
            className={`${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[11px] md:text-[23px]`}
          >
            {t("paint_child")}
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-7xl">
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] md:text-[96px] text-center font-bold`}
        >
          {t("education")}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-y-7 p-2 md:p-0">
          {edu_card.map(({ text, subText }, idx) => (
            <ChildCard key={idx} text={text} subText={subText} />
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
          >
            {t("foto")}
          </p>

          <ImageCarousel images={images} />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl ">
        <div className="overflow-hidden ">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] md:text-[32px] font-bold text-center md:text-start`}
          >
            {t("advices")}
          </p>
          <CustomCarousel videos={videos} />
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
        <div className="container mx-auto max-w-7xl my-5 overflow-hidden">
          <RobotCarousel CardContent={CardContent} />
        </div>
      </section>
    </div>
  );
}
