// @ts-nocheck

"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";

import { useTranslation } from "./i18n/client";

import HomeCard from "@/components/home-card";
import { fontTektur } from "@/config/fonts";
import StatCard from "@/components/home/home-card";
import Card from "@/components/home/card";
import CustomCarousel from "@/components/carousel";

import { getCookie } from "cookies-next";
import { useRef, useState } from "react";
import { toastError, toastSuccess } from "../components/toast";

interface FormData {
  name: string;
  phone: string;
  age: string;
  course: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  age?: string;
  course?: string;
}

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
      image: "/page/home.png",
      text: t("home1"),
      link: `${lang}/robotic`,
      btn: t("home_btn"),
    },
    {
      image: "/page/home2.png",
      text: t("home2"),
      link: `${lang}/painting_children`,
      btn: t("home_btn"),
    },
    {
      image: "/page/home3.png",
      text: t("home3"),
      link: `${lang}/painting_olders`,
      btn: t("home_btn"),
    },
    {
      image: "/page/home4.png",
      text: t("home4"),
      link: `${lang}/english`,
      btn: t("home_btn"),
    },
    {
      image: "/page/home5.png",
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
      poster: "/posters/main/poster1.jpg",
      video: "/videos/video1.mp4",
    },
    {
      poster: "/posters/main/poster2.jpg",
      video: "/videos/video2.mp4",
    },
    {
      poster: "/posters/main/poster3.jpg",
      video: "/posters/main/3-video.mp4",
    },
    {
      poster: "",
      video: "/videos/video4.mp4",
    },
    {
      poster: "/posters/main/poster5.jpg",
      video: "/posters/main/5-video.MP4",
    },
    {
      poster: "",
      video: "/videos/video6.mp4",
    },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    age: "",
    course: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = t("modal_name") + " is required";
    if (!formData.phone) newErrors.phone = t("form_phone") + " is required";
    if (!formData.age) newErrors.age = t("form_age") + " is required";
    if (!formData.course) newErrors.course = t("form_course") + " is required";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const newformData = new FormData();

      newformData.append("page", "Asosiy sahifa");
      newformData.append("name", formData.name);
      newformData.append("phone", formData.phone);
      newformData.append("age", formData.age);
      newformData.append("course", courses[formData.course as any].drop);
      var xhr = new XMLHttpRequest();

      // Step 2: Open the request with POST method and target URL
      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbwqCmg8x--QN5gIelVgzYnJhUnwXXVX_G2sb10v-YI2cpFWn4xf1EDr4WMyPlo8czipTw/exec",
        true
      );

      // Step 3: Set up a callback function to handle the response
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          toastSuccess("Ваш запрос принят.")
          setFormData({
            name: "",
            phone: "",
            age: "",
            course: "",
          });
        }
      };
      xhr.send(newformData);
    } catch (error) {
      toastError("Ошибка отправки")
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="realtive overflow-hidden">
      <div className="relative z-20 w-full h-[125px] md:h-[390px] lg:h-[590px] rounded-b-3xl mt-36 sm:mt-64 md:mt-36 lg:mt-42 flex">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between ">
          <Card lng={lng} />
          <Image
            alt="home robot"
            className={`w-[166px] h-[201px] md:w-[250px] md:h-[250px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] object-contain`}
            height={100}
            src="/svg/home_robot.svg"
            width={100}
          />
        </div>
        <Image
          alt="border image"
          className="absolute bottom-0 right-0"
          height={400}
          src="/robotics/cardbottom.png"
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
      <section
        id="about"
        className="relative w-full h-[486px] bg-white py-[30px] px-[10px]"
      >
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
        <div className="flex md:flex-wrap items-center gap-[20px] sm:justify-center md:gap-[58px] my-10 overflow-x-auto scrollbar-hide">
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
          <CustomCarousel videos={videos} />
        </div>

        <div className="container mx-auto max-w-7xl">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
          >
            {t("sub_main_card")}
          </p>
        </div>

        <div className="container mx-auto max-w-7xl my-[50px] flex flex-wrap items-end justify-center gap-4 sm:gap-5 px-3">
          <Input
            className="w-full sm:w-[240px]"
            label={t("form_name")}
            labelPlacement="outside"
            placeholder="John Doe"
            type="email"
            variant="flat"
            size="lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            isInvalid={!!errors.name}
            errorMessage={errors.name}
            name="name"
          />

          <Input
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label={t("form_phone")}
            labelPlacement="outside"
            placeholder="+9998901234567"
            type="phone"
            variant="flat"
            size="lg"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            isInvalid={!!errors.phone}
            errorMessage={errors.phone}
            name="phone"
          />
          <Select
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label={t("form_course")}
            labelPlacement="outside"
            placeholder="Robotics"
            variant="flat"
            size="lg"
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
            isInvalid={!!errors.course}
            errorMessage={errors.course}
            name="course"
          >
            {courses.map((course, idx) => (
              <SelectItem key={idx} value={course.drop}>
                {course.drop}
              </SelectItem>
            ))}
          </Select>
          <Input
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label={t("form_age")}
            labelPlacement="outside"
            placeholder="10"
            type="age"
            variant="flat"
            size="lg"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            isInvalid={!!errors.age}
            errorMessage={errors.age}
            name="age"
          />
          <Button
            onClick={handleSubmit}
            className={`w-full sm:w-[240px] ${fontTektur.variable} font-tektur font-bold text-black bg-[#FFE000] h-[50px] text-[24px]`}
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
