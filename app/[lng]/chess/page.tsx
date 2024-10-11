"use client";

import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button, Select, SelectItem } from "@nextui-org/react";

import { fontTektur } from "@/config/fonts";
import borderimg from "@/assets/icons/cardbottom.png";
import chess from "@/assets/images/chess.png";
import CustomCarousel from "@/components/carousel";
import FootCard from "@/components/robotics/foot-card";
import HeadCard from "@/components/robotics/head-card";
import call from "@/assets/images/chess_child.png";
import ChildCard from "@/components/children/child-card";
import CarouselChess from "@/components/carousel/CarouselChess";

export default function ChessPage() {
  return (
    <div className="realtive">
      <div className="relative z-20 w-full h-[125px] md:h-[590px] rounded-b-3xl mt-36 flex">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between ">
          <div className="w-full">
            <p
              className={`absolute -top-10 md:top-0 ${fontTektur.variable}  font-tektur text-[#FFDE00] text-[26px] md:text-[84px] font-bold w-[300px] md:w-[1100px]`}
            >
              Курсы шахмат для детей от JustRobotics
            </p>
            <p
              className={`absolute md:relative top-10 mt-0 md:mt-[60px] ${fontTektur.variable} font-tektur font-normal text-[#FFFFFF] text-[14px] md:text-[24px]`}
            >
              Практические курсы, которые пробуждают интерес к шахматам,
              развивают логическое мышление у вашего ребенка
              <strong> от 5 лет и старше</strong>
            </p>

            <div className="relative mt-16 md:mt-0">
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
                бесплатно
              </div>
            </div>
            <div className="absolute flex mt-[50px] md:mt-[100px] gap-2 md:gap-10 w-[300px] md:w-full">
              <Input
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]" // Full width on smaller screens
                label="Ваше имя"
                type="name"
                variant="flat"
              />
              <Input
                className="w-[100px] sm:w-[240px] h-[35px] md:h-[55px]"
                label="Номер телефона"
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
                Получить
              </Button>
            </div>
          </div>
          <Image
            alt="home robot"
            className="w-[170px] h-[170px] md:w-[628px] md:h-[628px] rounded-br-3xl md:rounded-none "
            height={500}
            src={chess}
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
        <div className="flex flex-wrap items-center justify-between gap-y-7 p-3 md:p-0 transition-all duration-300 ease-in-out">
          {/* Render only the visible cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <ChildCard key={item} />
          ))}
        </div>
      </section>
      <section className="relative container mx-auto max-w-7xl my-20">
        <Image
          alt="call image"
          className="mx-auto w-full" // Center the image
          height={500}
          src={call}
          width={500}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-0 md:space-y-10">
          <p
            className={`${fontTektur.variable} w-[306px] md:w-[872px] font-tektur text-[#FFFFFF] text-[15px] md:text-[32px] text-center font-bold`}
          >
            Приглашаем на первый бесплатный урок
          </p>
          <Button
            className="bg-[#FFE000] text-[#000] w-[208px] h-[25px] md:w-[530px] md:h-[51px] text-[15px] md:text-[32px]"
            variant="bordered"
          >
            Записаться
          </Button>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl">
        <div className="overflow-hidden">
          <p
            className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
          >
            ФОТОГАЛЕРЕЯ
          </p>

          <CarouselChess />
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
            className="w-full sm:w-[240px]"
            label="Ваше имя"
            labelPlacement="outside"
            placeholder="John Doe"
            type="email"
            variant="flat"
          />

          <Input
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label="Номер телефона"
            labelPlacement="outside"
            placeholder="+9998901234567"
            type="phone"
            variant="flat"
          />
          <Select
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label="Выберете курс"
            labelPlacement="outside"
            placeholder="Robotics"
            variant="flat"
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
            className="w-full sm:w-[240px]" // Full width on smaller screens
            label="Возраст"
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
