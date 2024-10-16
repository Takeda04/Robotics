"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import {
  Accordion,
  AccordionItem,
  Button,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";

import { fontTektur } from "@/config/fonts";
import borderimg from "@/assets/icons/cardbottom.png";
import older from "@/assets/images/olders.png";
import HeadCard from "@/components/robotics/head-card";
import call from "@/assets/images/call.png";
import ChildCard from "@/components/children/child-card";
import CarouselOlders from "@/components/carousel/Carouselolders";
import { useTranslation } from "../i18n/client";
import RobotCarousel from "@/components/carousel/CarouselRobot";

import olders1 from "@/assets/olders/IMG_1971.jpg";
import olders2 from "@/assets/olders/IMG_1977.jpg";
import olders3 from "@/assets/olders/IMG_2947.jpg";
import olders4 from "@/assets/olders/IMG_2948.jpg";
import olders5 from "@/assets/olders/IMG_2949.jpg";
import olders6 from "@/assets/olders/IMG_2959.jpg";
import olders7 from "@/assets/olders/IMG_2966.jpg";
import CustomCarousel from "@/components/carousel";

import robot from "@/assets/images/modal_robot.png";

import home from "@/assets/images/home.png";
import home2 from "@/assets/images/home2.png";
import home3 from "@/assets/images/home3.png";
import home4 from "@/assets/images/home4.png";
import home5 from "@/assets/images/home5.png";
import { getCookie } from "cookies-next";
import MyModal from "@/components/modal/modal";
import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";

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

export default function PaintingOlderPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, "translation", {});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalChange = (open: boolean) => {
    setIsModalOpen(open);
  };
  const lang = getCookie("i18next");
  const videoSrc = "/videos/older1.mp4";
  const posterSrc = "";
  const CustomIndicator = ({ isOpen }: any) => (
    <FaCircleArrowLeft
      style={{ color: isOpen ? "#FFDE00" : "#FFF", fontSize: "24px" }}
    />
  );

  const courses = [
    { drop: t("drop1") },
    { drop: t("drop2") },
    { drop: t("drop3") },
    { drop: t("drop4") },
    { drop: t("drop5") },
  ];

  const edu_card = [
    { text: t("why"), subText: t("older_edu_text1") },
    { text: t("why"), subText: t("older_edu_text2") },
    { text: t("why"), subText: t("older_edu_text3") },
    { text: t("why"), subText: t("older_edu_text4") },
    { text: t("why"), subText: t("older_edu_text5") },
    { text: t("why"), subText: t("older_edu_text6") },
  ];

  const images = [
    olders1,
    olders2,
    olders3,
    olders4,
    olders5,
    olders6,
    olders7,
  ];

  const videos = [
    {
      poster: "",
      video: "/videos/older1.mp4",
    },
    {
      poster: "",
      video: "/videos/older2.mp4",
    },
    {
      poster: "",
      video: "/videos/older3.mp4",
    },
    {
      poster: "",
      video: "/videos/older4.mp4",
    },
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
      newformData.append("course", courses[(formData.course as any)].drop)
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


  return (
    <div className="realtive">
      <div className="relative z-20 w-full h-[125px] md:h-[590px] rounded-b-3xl mt-36 flex md:overflow-hidden">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between">
          <div className="w-full">
            <p
              className={`absolute -top-10 md:top-0 ${fontTektur.variable}  font-tektur text-[#FFDE00] text-[26px] md:text-[84px] font-bold w-[300px] md:w-[800px]`}
            >
              {t("older_title")}
            </p>
            <p
              className={`absolute md:relative top-10 mt-0 md:mt-[60px] ${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[14px] md:text-[24px]`}
            >
              {t("older_desc")}
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
          <div className="relative w-[303px] h-[253.5px] -mt-[56px] md:mt-0 -right-5 md:-right-[150px] md:w-[500px] md:h-[605px] rounded-br-3xl md:rounded-none "></div>
        </div>
        <Image
          alt="home robot"
          className="absolute z-40 w-[303px] h-[253.5px] -mt-[56px] md:mt-0 -right-5 md:-right-[100px] md:w-[500px] md:h-[605px] rounded-br-3xl md:rounded-none "
          height={500}
          src={older}
          width={500}
        />
        <Image
          alt="border image"
          className="absolute bottom-0 right-0"
          height={400}
          src={borderimg}
          style={{ borderBottomRightRadius: "30px" }}
          width={400}
        />
      </div>
      <section className="container mx-auto max-w-7xl flex items-center justify-evenly my-10 px-2 md:px-0 gap-5 md:gap-0">
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
            {t("older_main_text")}
          </p>
        </div>
      </section>
      <div className="flex flex-col items-center gap-y-5 overflow-hidden">
        <Accordion variant="splitted" className="w-full sm:w-1/2">
          <AccordionItem
            key="1"
            aria-label={t("paint_older")}
            title={t("paint_older")}
            indicator={CustomIndicator}
          >
            {t("paint_older_text")}

            <div className="mt-5">{t("paint_older_age")}</div>
            <br />
            <div className="mt-3">{t("accordion1_per")}</div>
            <br />
            <div className="mt-3">
              <span>{t("accordion_price_title")}</span> :{" "}
              {t("paint_older_price")}
            </div>
            <br />
            <div className="mt-3">
              {t("accordion_per_title")} : <span>{t("paint_older_time")}</span>
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
      <section className="container mx-auto max-w-7xl">
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] md:text-[96px] text-center font-bold`}
        >
          {t("why")}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-y-7 p-3 md:p-0 transition-all duration-300 ease-in-out">
          {edu_card.map(({ text, subText }, idx) => (
            <ChildCard key={idx} text={text} subText={subText} />
          ))}
        </div>
      </section>
      <section className="relative container mx-auto max-w-7xl my-20">
        <Image
          alt="call image"
          className="w-full"
          height={500}
          src={call}
          width={500}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-0 md:space-y-10">
          <p
            className={`${fontTektur.variable} w-[306px] md:w-[872px] font-tektur text-[#FFFFFF] text-[15px] md:text-[32px] text-center font-bold`}
          >
            {t("sub_main_card")}
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FFE000] text-[#000] w-[208px] h-[25px] md:w-[530px] md:h-[51px] text-[15px] md:text-[32px]"
            variant="bordered"
          >
            {t("record_btn")}
          </Button>
        </div>
        <MyModal
          isOpen={isModalOpen}
          onOpenChange={handleModalChange}
          t={t}
          robot={robot}
          courses={courses}
        />
      </section>

      <section className="container mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
          >
            {t("foto")}
          </p>

          <CarouselOlders images={images} />
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
            {t("art")}
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
