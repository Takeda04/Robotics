"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";

import { fontTektur } from "@/config/fonts";
import CustomCarousel from "@/components/carousel";
import HeadCard from "@/components/robotics/head-card";
import ChildCard from "@/components/children/child-card";
import RobotCarousel from "@/components/carousel/CarouselRobot";
import { useTranslation } from "../i18n/client";

import { getCookie } from "cookies-next";
import { useState } from "react";
import MyModal from "@/components/modal/modal";
import { toastError, toastSuccess } from "@/app/components/toast";

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

export default function ChessPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = useTranslation(lng, "translation", {});
  const lang = getCookie("i18next");

  const videoSrc = "/videos/chess1.mp4";
  const posterSrc = "";

  const courses = [
    { drop: t("drop1") },
    { drop: t("drop2") },
    { drop: t("drop3") },
    { drop: t("drop4") },
    { drop: t("drop5") },
  ];
  const CardContent = [
    {
      image: "/page/home.png",
      text: t("home1"),
      link: `/${lang}/robotic`,
      btn: t("home_btn"),
    },
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
  ];
  const edu_card = [
    { text: t("why"), subText: t("child_edu_text1") },
    { text: t("why"), subText: t("child_edu_text2") },
    { text: t("why"), subText: t("child_edu_text3") },
    { text: t("why"), subText: t("child_edu_text4") },
    { text: t("why"), subText: t("child_edu_text5") },
    { text: t("why"), subText: t("child_edu_text6") },
  ];
  const videos = [
    {
      poster: "/posters/chess/poster1.jpg",
      video: "/videos/chess1.mp4",
    },
    {
      poster: "/posters/chess/poster2.jpg",
      video: "/videos/chess2.mp4",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalChange = (open: boolean) => {
    setIsModalOpen(open);
  };

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

      newformData.append("page", "Shaxmat sahifa");
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
          toastSuccess("Ваш запрос принят.");

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
      toastError("Ошибка отправки");

      console.error("Error submitting form", error);
    }
  };
  const handleSubmit2 = async () => {
    try {
      const newformData = new FormData();
      newformData.append("page", "Shaxmat sahifa");
      newformData.append("name", formData.name);
      newformData.append("phone", formData.phone);
      var xhr = new XMLHttpRequest();

      // Step 2: Open the request with POST method and target URL
      xhr.open(
        "POST",
        "https://script.google.com/macros/s/AKfycbwqCmg8x--QN5gIelVgzYnJhUnwXXVX_G2sb10v-YI2cpFWn4xf1EDr4WMyPlo8czipTw/exec",
        true
      );

      // Step 3: Set up a callback function to handle the response
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2 && xhr.status === 200) {
          toastSuccess("Ваш запрос принят.");
          const newLocal = {
            name: "",
            phone: "",
          };
          setFormData(newLocal as any);
        }
      };
      xhr.send(newformData);
    } catch (error) {
      toastError("Ошибка отправки");

      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="realtive overflow-hidden">
      <div className="relative z-20 w-full h-[125px] md:h-[590px] rounded-b-3xl mt-36 sm:mt-[300px] md:mt-36 lg:mt-42 flex">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between ">
          <div className="w-full">
            <p
              className={`absolute -top-10 md:top-0 ${fontTektur.variable}  font-tektur text-[#FFDE00] text-[20px] md:text-[30px] lg:text-[52px] xl:text-[70px] font-bold w-[300px] md:w-[1100px]`}
            >
              {t("chess_title")}
            </p>
            <p
              className={`absolute md:relative top-10 mt-0 md:mt-[60px] ${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[14px] md:text-[24px]`}
            >
              {t("chess_desc")}
              <strong> {t("chess_bold")}</strong>
            </p>

            <div className="relative mt-16 md:mt-0">
              <p
                className={`absolute md:relative w-[300px] md:w-[500px] md:top-20 ${fontTektur.variable} font-tektur font-bold text-[#FFE001] text-[14px] md:text-[24px]`}
              >
                {t("robot_price")}{" "}
                <strong className="line-through">{t("robot_cost")}</strong>
              </p>
              <div
                className="absolute text-[11px] md:text-[24px] -top-[12px]  left-[170px] md:top-[50px] md:left-[300px] text-black font-bold flex items-center justify-center w-[80px] h-[20px] rounded-xl md:w-[167px] md:h-[40px] bg-[#FFE001]"
                style={{
                  boxShadow:
                    "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
                  transform: "rotate(10deg)",
                }}
              >
                {t("english_free")}
              </div>
            </div>
            <div className="absolute flex mt-[50px] md:mt-[100px] gap-2 md:gap-10 w-[300px] md:w-full">
              <Input
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]" // Full width on smaller screens
                label={t("form_name")}
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
                label={t("form_phone")}
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
                {t("form_btn")}
              </Button>
            </div>
          </div>
          <Image
            alt="home robot"
            className="w-[303px] h-[213.5px] sm:w-[330px] sm:h-[240px] md:w-[400px] md:h-[305px] lg:w-[500px] lg:h-[405px] xl:w-[700px] xl:h-[505px] rounded-br-3xl md:rounded-none "
            height={500}
            src="/chess/chess.png"
            width={500}
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
      <section className="container mx-auto max-w-7xl flex items-start md:items-center justify-evenly my-10 px-2 md:px-0 gap-5 md:gap-0">
        <HeadCard videoSrc={videoSrc} posterSrc={posterSrc} />
        <div className="w-[180px] h-[250px] min-w-[148px] min-h-[149px] md:w-[582px] md:h-[320px] overflow-hidden text-ellipsis break-words">
          <p
            className={`${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[11px] md:text-[23px]`}
          >
            {t("chess_main_text")}
          </p>
        </div>
      </section>
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
          className="mx-auto w-full"
          height={500}
          src="/chess/chess_child.png"
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

          {/* <CarouselChess /> */}
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
        <div className="container mx-auto max-w-7xl my-5 overflow-hidden">
          <RobotCarousel CardContent={CardContent} />
        </div>
      </section>
    </div>
  );
}
