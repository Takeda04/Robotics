import HomeCard from "@/components/home-card";

import { fontTektur } from "@/config/fonts";
import home from "@/assets/images/home.png";
import home2 from "@/assets/images/home2.png";
import home3 from "@/assets/images/home3.png";
import home4 from "@/assets/images/home4.png";
import home5 from "@/assets/images/home5.png";

export default function Home() {
  const images = [
    {
      image: home,
      text: "Робототехника",
      link: "/robotics",
    },
    {
      image: home2,
      text: "Живопись для детей",
      link: "/paiting_for_children",
    },
    {
      image: home3,
      text: "Живопись для взрослых",
      link: "/paiting_for_olders",
    },
    {
      image: home4,
      text: "Английский язык для детей",
      link: "/english",
    },
    {
      image: home5,
      text: "Шахмат",
      link: "/chess",
    },
  ];

  return (
    <div className="realtive">

      <div className="container mx-auto max-w-7xl">

      </div>
      <section className="relative w-full h-[486px] bg-white mt-40 py-[30px] px-[10px]">
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
        <div className="flex md:flex-wrap items-center gap-[20px] md:gap-[58px] my-10 overflow-y-scroll">
          {images.map(({ image, text, link }) => (
            <HomeCard image={image} text={text} link={link} key={link} />
          ))}
        </div>
      </section>
    </div>
  );
}
