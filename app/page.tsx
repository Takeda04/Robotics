import HomeCard from "@/components/home-card";

import { fontTektur } from "@/config/fonts";

import StatCard from "@/components/home/home-card";
import { CardContent, images } from "@/config/data";
import Image from "next/image";
import borderimg from "@/assets/icons/cardbottom.png";
import robot from "@/assets/icons/home_robot.png";
import Card from "@/components/home/card";

export default function Home() {
  return (
    <div className="realtive">
      <div className="relative z-20 w-full h-[125px] md:h-[590px] rounded-b-3xl mt-36 flex">
        <div className="absolute md:relative mt-0 md:mt-36 -top-[93px] md:-top-20 z-50 p-1 container mx-auto max-w-7xl flex items-center justify-between ">
          <Card />
          <Image
            className="w-[166px] h-[201px] md:w-[600px] md:h-[600px]"
            src={robot}
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
      <section className="relative w-full h-[300px] md:h-[400px] bg-black flex items-center ">
        <div className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 container mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-[10px] md:gap-6">
          {CardContent.map(({ text, subText }) => (
            <StatCard text={text} subText={subText} key={text} />
          ))}
        </div>
      </section>
      <section className="relative w-full h-[486px] bg-white py-[30px] px-[10px]">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center ">
          <p
            className={`${fontTektur.variable} font-tektur text-[#000] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]`}
          >
            <b>JustRobotics</b> - это современный учебный центр,
            специализирующийся на технологиях, искусстве и образовании. Мы
            предоставляем комфортную и поддерживающую среду для развития
            талантов и навыков наших учеников. Команда высококвалифицированных
            преподавателей использует передовые методики и технологии, делая
            занятия интерактивными и увлекательными. Мы уделяем большое внимание
            индивидуальному подходу, помогая каждому ученику раскрыть свои
            способности и достичь успеха.
          </p>
          <p
            className={`${fontTektur.variable} font-tektur text-[#000] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px]`}
          >
            <b>JustRobotics</b> - это сообщество увлеченных и целеустремленных
            людей, предлагающее не только учебные курсы, но и мероприятия,
            мастер-классы и конкурсы. Удобное расположение учебного центра
            обеспечивает легкий доступ для всех желающих.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl ">
        <p
          className={`${fontTektur.variable} font-tektur text-[#F0D625] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] text-center font-bold`}
        >
          Авторские кусы от JustRobotics
        </p>
        <div className="flex md:flex-wrap items-center gap-[20px] sm:justify-center md:gap-[58px] my-10 overflow-y-scroll">
          {images.map(({ image, text, link }) => (
            <HomeCard image={image} text={text} link={link} key={link} />
          ))}
        </div>
      </section>
    </div>
  );
}
