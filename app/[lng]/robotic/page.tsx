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
import CustomCarousel from "@/components/carousel";
import HubCard from "@/components/robotics/hub";
import HeadCard from "@/components/robotics/head-card";
import { useTranslation } from "../i18n/client";
import RobotCarousel from "@/components/carousel/CarouselRobot";

//images




import { getCookie } from "cookies-next";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useState } from "react";

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
      poster: "/posters/robotics/poster1.jpg",
      video: "/videos/video1.mp4",
    },
    {
      poster: "/posters/robotics/poster3.jpg",
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
      poster: "/posters/robotics/poster2.jpg",
      video: "/videos/video5.mp4",
    },
    {
      poster: "/posters/robotics/poster2.jpg",
      video: "/videos/video6.mp4",
    },
  ];

  const images = [
    { image: "/robotics/IMG_3398.jpg" },
    { image: "/robotics/IMG_3441.jpg" },
    { image: "/robotics/IMG_3448.jpg" },
    { image: "/robotics/IMG_3406.jpg" },
    { image: "/robotics/IMG_3427.jpg" },
    { image: "/robotics/IMG_4890.jpg" },
  ];

  const CardContent = [
    {
      image: "/page/home2.png",
      text: t("home2"),
      link: `/${lang}/painting_children`,
      btn: t("home_btn"),
    },
    {
      image: "/page/home3.png",
      text: t("home3"),
      link: `/${lang}/painting_olders`,
      btn: t("home_btn"),
    },
    {
      image: "/page/home4.png",
      text: t("home4"),
      link: `/${lang}/english`,
      btn: t("home_btn"),
    },
    {
      image: "/page/home5.png",
      text: t("home5"),
      link: `/${lang}/chess`,
      btn: t("home_btn"),
    },
  ];

  const CustomIndicator = ({ isOpen }: any) => (
    <FaCircleArrowLeft
      style={{ color: isOpen ? "#FFDE00" : "#FFF", fontSize: "24px" }}
    />
  );

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

      newformData.append("name", formData.name);
      newformData.append("phone", formData.phone);
      newformData.append("age", formData.age);
      newformData.append("course", courses[formData.course as any].drop);
      var xhr = new XMLHttpRequest();

      // Step 2: Open the request with POST method and target URL
      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbwB6YAFPGK4xkq54TrLRIVON7wRwFvIB7-6bnK-w5CSRlyb2mvp4A_Lz0oFQnE5qh16Kg/exec",
        true
      );

      // Step 3: Set up a callback function to handle the response
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Successfully completed the request
          console.log(xhr.responseText, "askjdaskdskajhd");
          alert("Form successfully submitted!");
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
      console.error("Error submitting form", error);
    }
  };
  const handleSubmit2 = async () => {
    try {
      const newformData = new FormData();

      newformData.append("name", formData.name);
      newformData.append("phone", formData.phone);
      var xhr = new XMLHttpRequest();

      // Step 2: Open the request with POST method and target URL
      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbwB6YAFPGK4xkq54TrLRIVON7wRwFvIB7-6bnK-w5CSRlyb2mvp4A_Lz0oFQnE5qh16Kg/exec",
        true
      );

      // Step 3: Set up a callback function to handle the response
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2 && xhr.status === 200) {
          // Successfully completed the request
          console.log(xhr.responseText);
          alert("Form successfully submitted!");
          const newLocal = {
            name: "",
            phone: "",
          };
          setFormData(newLocal as any);
        }
      };
      xhr.send(newformData);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

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
                className="absolute text-[11px] md:text-[24px] -top-[16px] left-[170px] md:top-[50px] md:left-[300px] text-black font-bold flex items-center justify-center w-[80px] h-[20px] rounded-xl md:w-[167px] md:h-[40px] bg-[#FFE001]"
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
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                isInvalid={!!errors.name}
                errorMessage={errors.name}
                name="name"
              />
              <Input
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]"
                label={t("robot_placeholder2")}
                type="phone"
                variant="flat"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                isInvalid={!!errors.phone}
                errorMessage={errors.phone}
                name="phone"
              />
              <Button
                onClick={handleSubmit2}
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
            src='/robotics/robo-robot.png'
            width={500}
          />
        </div>
        <Image
          alt="border image"
          className="absolute bottom-0 right-0"
          height={400}
          src='/robotics/cardbottom.png'
          style={{ borderBottomRightRadius: "30px" }}
          width={400}
        />
      </div>
      <section className="container mx-auto max-w-7xl flex items-start md:items-center justify-evenly my-10 px-2 md:px-0 gap-5 md:gap-0">
        <HeadCard videoSrc={videoSrc} posterSrc={posterSrc} />
        <div className="w-[180px] h-[350px] min-w-[140px] min-h-[189px] md:w-[582px] md:h-[320px] overflow-hidden text-ellipsis break-words">
          <p
            className={`${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[12px] md:text-[23px]`}
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

        <div className="flex flex-col items-center gap-y-5 overflow-hidden">
          <Accordion variant="splitted" className="w-full sm:w-1/2">
            <AccordionItem
              key="1"
              aria-label={t("accordion1_title")}
              title={t("accordion1_title")}
              indicator={CustomIndicator}
            >
              {t("accordion1_text")}
              <br />
              <div className="mt-5">{t("accordion1_age")}</div>
              <br />
              <div className="mt-3">{t("accordion1_per")}</div>
              <br />
              <div className="mt-3">
                <span>{t("accordion_price_title")}</span> :{" "}
                {t("accordion_price_text")}
              </div>
              <br />
              <div className="mt-3">
                {t("accordion_per_title")} :{" "}
                <span>{t("accordion1_per_text")}</span>
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label={t("accordion4_title")}
              title={t("accordion4_title")}
              indicator={CustomIndicator}
            >
              {t("accordion4_text")}
              <br />
              <div className="mt-5">{t("accordion4_age")}</div>
              <br />
              <div className="mt-3">{t("accordion4_per")}</div>
              <br />
              <div className="mt-3">
                <span>{t("accordion_price_title")}</span> :{" "}
                {t("accordion_price_text")}
              </div>
              <br />
              <div className="mt-3">
                {t("accordion_per_title")} :{" "}
                <span>{t("accordion4_per_text")}</span>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label={t("accordion2_title")}
              title={t("accordion2_title")}
              indicator={CustomIndicator}
            >
              {t("accordion2_text")}
              <br />
              <div className="mt-5">{t("accordion2_age")}</div>
              <br />
              <div className="mt-3">{t("accordion2_per")}</div>
              <br />
              <div className="mt-3">
                <span>{t("accordion_price_title")}</span> :{" "}
                {t("accordion_price_text")}
              </div>
              <br />
              <div className="mt-3">
                {t("accordion_per_title")} :{" "}
                <span>{t("accordion2_per_text")}</span>
              </div>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label={t("accordion3_title")}
              title={t("accordion3_title")}
              indicator={CustomIndicator}
            >
              {t("accordion3_text")}
              <br />
              <div className="mt-5">{t("accordion3_age")}</div>
              <br />
              <div className="mt-3">{t("accordion3_per")}</div>
              <br />
              <div className="mt-3">
                <span>{t("accordion_price_title")}</span> :{" "}
                {t("accordion_price_text")}
              </div>
              <br />
              <div className="mt-3">
                {t("accordion_per_title")} :{" "}
                <span>{t("accordion3_per_text")}</span>
              </div>
            </AccordionItem>
          </Accordion>
          {/* <Button
            className={`w-full mb-4 sm:w-1/2 ${fontTektur.variable} font-tektur font-bold text-black bg-[#FFE000] h-[55px] text-[24px]`}
            style={{
              boxShadow:
                "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
            }}
          >
            {t("robot_btn")}
          </Button> */}
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
            <HubCard key={index} image={item.image} />
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
        <div className="container mx-auto max-w-7xl my-5 overflow-hidden">
          <RobotCarousel CardContent={CardContent} />
        </div>
      </section>
    </div>
  );
}
