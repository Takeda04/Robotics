"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import {
  Accordion,
  AccordionItem,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { fontTektur } from "@/config/fonts";
import borderimg from "@/assets/icons/cardbottom.png";
import robot from "@/assets/images/robo-robot.png";
import CustomCarousel from "@/components/carousel";
import HubCard from "@/components/robotics/hub";
import HeadCard from "@/components/robotics/head-card";
import { useTranslation } from "../i18n/client";
import RobotCarousel from "@/components/carousel/CarouselRobot";

//images

import image1 from "@/assets/robotic/IMG_3422.jpg"
import image2 from "@/assets/robotic/IMG_3405.jpg"
import image3 from "@/assets/robotic/IMG_3420.jpg"
import image4 from "@/assets/robotic/IMG_3427.jpg"
import image5 from "@/assets/robotic/IMG_4904.jpg"
import image6 from "@/assets/robotic/IMG_4895.jpg"

import home from "@/assets/images/home.png";
import home2 from "@/assets/images/home2.png";
import home3 from "@/assets/images/home3.png";
import home4 from "@/assets/images/home4.png";
import home5 from "@/assets/images/home5.png";
import { getCookie } from "cookies-next";



export default function RoboticsPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, "translation", {});

  const lang = getCookie("i18next");
  const videoSrc = "/videos/video1.mp4";
  const posterSrc = "";

  const courses = [
    { drop: t("drop1") },
    { drop: t("drop2") },
    { drop: t("drop3") },
    { drop: t("drop4") },
    { drop: t("drop5") },
  ];

  const videos = [
    {
      poster: "/posters/mine.JPG",
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

  const images = [
    {image: image1},
    {image: image2},
    {image: image3},
    {image: image4},
    {image: image5},
    {image: image6},
  ]

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

  return (
    <div className="realtive">
      <div className="relative z-20 w-full h-[125px] md:h-[590px] rounded-b-3xl mt-36 flex">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between ">
          <div className="w-full">
            <p
              className={`absolute -top-10 md:top-0 ${fontTektur.variable}  font-tektur text-[#FFDE00] text-[26px] md:text-[84px] font-bold`}
            >
              {t("robot_title")}
            </p>
            <p
              className={`absolute md:relative top-10 mt-0 md:mt-[100px] ${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[14px] md:text-[24px]`}
            >
              {t("robot_desc1")} <strong>{t("robot_desc2")}</strong>
            </p>

            <div className="relative">
              <p
                className={`absolute md:relative w-[300px] md:w-[500px] md:top-20 ${fontTektur.variable} font-tektur font-bold text-[#FFE001] text-[14px] md:text-[24px]`}
              >
                {t("robot_price")}{" "}
                <strong className="line-through">{t("robot_cost")}</strong>
              </p>
              <div
                className="absolute text-[11px] md:text-[24px] -top-[15] left-[170px] md:top-[50px] md:left-[300px] text-black font-bold flex items-center justify-center w-[80px] h-[20px] rounded-xl md:w-[167px] md:h-[40px] bg-[#FFE001]"
                style={{
                  boxShadow:
                    "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
                  transform: "rotate(10deg)",
                }}
              >
                {t("robot_free")}
              </div>
            </div>
            <div className="absolute flex mt-[50px] md:mt-[100px] gap-2 md:gap-10 w-[300px] md:w-full">
              <Input
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]" // Full width on smaller screens
                label={t("robot_placeholder1")}
                type="name"
                variant="flat"
              />
              <Input
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]"
                label={t("robot_placeholder2")}
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
                {t("robot_btn")}
              </Button>
            </div>
          </div>
          <Image
            alt="home robot"
            className="w-[203px] h-[213.5px] md:w-[650px] md:h-[605px]"
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
      <section className="container mx-auto max-w-7xl flex items-center justify-between my-10 px-2 md:px-0 gap-5 md:gap-0">
        <HeadCard videoSrc={videoSrc} posterSrc={posterSrc}/>
        <div
          className="w-[228px] h-[149px] min-w-[228px] min-h-[149px] md:w-[582px] md:h-[320px]"
          style={{
            boxSizing: "border-box",
          }}
        >
          <p
            className={`${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[11px] md:text-[23px]`}
          >
            {t("robot_main_text")}
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl">
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] md:text-[96px] text-center font-bold`}
        >
          {t("robot_step")}
        </p>

        <div className="flex flex-col items-center gap-y-5">
          <Accordion variant="splitted" className="w-full sm:w-1/2">
            <AccordionItem
              key="1"
              aria-label={t("accordion1_title")}
              title={t("accordion1_title")}
            >
              {t("accordion1_text")}
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label={t("accordion2_title")}
              title={t("accordion2_title")}
            >
              {t("accordion2_text")}
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label={t("accordion3_title")}
              title={t("accordion3_title")}
            >
              {t("accordion3_text")}
            </AccordionItem>
          </Accordion>
          <Button
            className={`w-full sm:w-1/2 ${fontTektur.variable} font-tektur font-bold text-black bg-[#FFE000] h-[55px] text-[24px]`}
            style={{
              boxShadow:
                "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
            }}
          >
            {t("robot_btn")}
          </Button>
        </div>
      </section>
      <section className="container mx-auto max-w-7xl my-5">
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
        >
          {t("foto")}
        </p>
        <div className="flex md:flex-wrap items-center gap-5 md:gap-7 sm:justify-center px-2 md:px-0 my-10 overflow-x-scroll">
          {images.map((item, index) => (
            <HubCard key={index} image={item.image}/>
          ))}
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
          <RobotCarousel CardContent={CardContent}/>
        </div>
      </section>
    </div>
  );
}
