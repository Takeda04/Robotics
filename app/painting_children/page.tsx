"use client";

import { fontTektur } from "@/config/fonts";

import Image from "next/image";
import borderimg from "@/assets/icons/cardbottom.png";
import child from "@/assets/images/child.png";
import CustomCarousel from "@/components/carousel";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";
import FootCard from "@/components/robotics/foot-card";
import HeadCard from "@/components/robotics/head-card";

import bigchild from "@/assets/images/child_big.png";
import secondimage from "@/assets/images/english2.png";

import thirdimage from "@/assets/images/english3.png";
import fourthimage from "@/assets/images/english4.png";
import ChildCard from "@/components/children/child-card";
import { useEffect, useState } from "react";

export default function PaintingChildrenPage() {
  return (
    <div className="realtive">
      <div className="relative z-20 w-full h-[125px] md:h-[590px] rounded-b-3xl mt-36 flex">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between ">
          <div className="w-full">
            <p
              className={`absolute -top-10 md:top-0 ${fontTektur.variable}  font-tektur text-[#FFDE00] text-[26px] md:text-[84px] font-bold`}
            >
              Живопись для детей
            </p>
            <p
              className={`absolute md:relative top-10 mt-0 md:mt-[60px] ${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[14px] md:text-[24px]`}
            >
              практический курс пробуждающий интерес к робототехнике и физике у
              вашего ребенка
              <strong> от 5 до 18 лет</strong>
            </p>

            <div className="relative">
              <p
                className={`absolute md:relative w-[300px] md:w-[500px] md:top-20 ${fontTektur.variable} font-tektur font-bold text-[#FFE001] text-[14px] md:text-[24px]`}
              >
                Получи первый урок{" "}
                <strong className="line-through">100.000 сум</strong>
              </p>
              <div
                className="absolute text-[11px] md:text-[24px] -top-[15] left-[170px] md:top-[50px] md:left-[300px] text-black font-bold flex items-center justify-center w-[80px] h-[20px] rounded-xl md:w-[167px] md:h-[40px] bg-[#FFE001]"
                style={{
                  boxShadow:
                    "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
                  transform: "rotate(10deg)",
                }}
              >
                50.000 сум
              </div>
            </div>
            <div className="absolute flex mt-[50px] md:mt-[100px] gap-2 md:gap-10 w-[300px] md:w-full">
              <Input
                type="name"
                label="Ваше имя"
                variant="flat"
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]" // Full width on smaller screens
              />
              <Input
                type="phone"
                label="Номер телефона"
                variant="flat"
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]"
              />
              <Button
                style={{
                  boxShadow:
                    "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
                }}
                className={`${fontTektur.variable} font-tektur font-bold text-black bg-[#FFE000] h-[35px] md:h-[55px] text-[14px] md:text-[24px] w-[80px] md:w-[200px]`}
              >
                Получить
              </Button>
            </div>
          </div>
          <Image
            className="w-[303px] h-[213.5px] md:w-[800px] md:h-[605px] rounded-br-3xl md:rounded-none"
            src={child}
            width={500}
            height={500}
            alt="home robot"
          />
        </div>
        <Image
          className="absolute bottom-0 right-0"
          width={400}
          height={400}
          alt="border image"
          src={borderimg}
          style={{ borderBottomRightRadius: "30px" }}
        />
      </div>
      <section className="container mx-auto max-w-7xl flex items-center justify-between my-10 px-2 md:px-0 gap-5 md:gap-0">
        <HeadCard />
        <div
          className="w-[228px] h-[149px] min-w-[228px] min-h-[149px] md:w-[582px] md:h-[320px]"
          style={{
            boxSizing: "border-box",
          }}
        >
          <p
            className={`${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[11px] md:text-[23px]`}
          >
            Откройте для себя увлекательный мир технологий! Наш курс
            робототехники предназначен для детей и подростков, которые хотят
            узнать основы программирования и сборки роботов. Под руководством
            опытных преподавателей, учащиеся научатся создавать и
            программировать собственных роботов, развивая при этом логическое
            мышление и инженерные навыки.
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-7xl">
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] md:text-[96px] text-center font-bold`}
        >
          Обучения
        </p>
        <div className="flex flex-wrap items-center justify-between gap-y-7 p-2 md:p-0">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ChildCard key={item} />
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl my-5">
        {/* Title */}
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
        >
          ФОТОГАЛЕРЕЯ
        </p>

        <div className="flex md:flex-wrap px-5 md:px-0 flex-row items-start gap-3 overflow-x-scroll">
          {/* First large image */}
          <div className="min-w-[200px] w-[200px] h-[150px] md:w-full md:h-[602px]">
            <Image
              src={bigchild}
              alt="First image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Second smaller image */}
          <div className="block md:hidden min-w-[200px] w-[200px] h-[150px] md:w-[545px] md:h-[456px]">
            <Image
              src={secondimage}
              alt="Second image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Third smaller image */}
          <div className="block md:hidden min-w-[200px] w-[200px] h-[150px] md:w-[714px] md:h-[311px]">
            <Image
              src={thirdimage}
              alt="Third image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Fourth large image */}
          <div className="block md:hidden min-w-[200px] w-[200px] h-[150px] md:w-[545px] md:h-[456px]">
            <Image
              src={fourthimage}
              alt="Fourth image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl ">
        <div className="overflow-hidden ">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] md:text-[32px] font-bold text-center md:text-start`}
          >
            отзывы
          </p>
          <CustomCarousel />
        </div>

        <div className="container mx-auto max-w-7xl">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
          >
            Получите бесплатный первый урок
          </p>
        </div>

        <div className="container mx-auto max-w-7xl my-[50px] flex flex-wrap items-end justify-center gap-4 sm:gap-5">
          <Input
            labelPlacement="outside"
            placeholder="John Doe"
            variant="flat"
            className="w-full sm:w-[240px]"
            type="email"
            label="Ваше имя"
          />

          <Input
            labelPlacement="outside"
            type="phone"
            label="Номер телефона"
            placeholder="+9998901234567"
            variant="flat"
            className="w-full sm:w-[240px]" // Full width on smaller screens
          />
          <Select
            labelPlacement="outside"
            label="Выберете курс"
            placeholder="Robotics"
            variant="flat"
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
            labelPlacement="outside"
            type="age"
            placeholder="10"
            label="Возраст"
            variant="flat"
            className="w-full sm:w-[240px]" // Full width on smaller screens
          />
          <Button
            style={{
              boxShadow:
                "0 0 10px 0 #F0D625, 0 0 15px 0 #F0D625, 0 0 20px 0 #F0D625",
            }}
            className={`w-full sm:w-[240px] ${fontTektur.variable} font-tektur font-bold text-black bg-[#FFE000] h-[40px] text-[24px]`}
          >
            Получить
          </Button>
        </div>
        <div className="flex items-center gap-[10px] justify-between sm:justify-center md:gap-[28px] my-10 py-0 md:py-5 px-2 md:px-0 overflow-x-scroll">
          {[1, 2, 3].map((idx) => (
            <FootCard key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
